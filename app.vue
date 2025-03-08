<template>
  <client-only>
    <div class="app">
      <LayoutControl
        v-model:containerLayoutHeight="containerLayoutHeight"
        v-model:containerLayoutWidth="containerLayoutWidth"
      ></LayoutControl>

      <div
        class="chat-sidebar"
        :style="{
          '--chat-height': containerLayoutHeight + 'vh',
          '--chat-width': containerLayoutWidth + 'px',
        }"
      >
        <div class="chat-content">
          <div class="chat-top">
            <a-image
              :width="94"
              :preview="false"
              src="https://www.gigadevice.com.cn/Public/Uploads/uploadfile/images/20221012/00000000001-201.png"
            />
            <!-- <span> 兆易创新客服 </span> -->
          </div>
          <div class="chat-messages" id="chatMessages" ref="messagesContainer">
            <Question :chatMessageList="chatMessageList" :demo="5"></Question>
            <a-skeleton
              avatar
              active
              :paragraph="{ rows: 3 }"
              v-if="isLoadingQuestion"
            />
          </div>

          <div class="chat-input">
            <a-textarea
              class="input-textarea"
              v-model:value="userInputText"
              placeholder="输入问题..."
              :rows="2"
              :disabled="isLoading"
              @keydown="handlePressEnter"
            />
            <a-tooltip title="发送">
              <a-button
                class="input-btn"
                type="primary"
                shape="circle"
                :icon="h(ArrowUpOutlined)"
                @click="handleSendMessage"
                :loading="isLoading"
                :disabled="!userInputText.trim()"
              >
              </a-button>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
import { ref, nextTick, computed, markRaw, h, onMounted, provide } from 'vue';
import { ArrowUpOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue';
import Question from './components/Question.vue';
import faqOptions from './utils/faqOptions';
import extractParts from './utils/extractParts';
import sanitizeInput from './utils/sanitizeInput';
import Test from './components/Test.vue';
import HotProduct from './components/HotProduct.vue';
import DescList from './components/DescList.vue';
import SendOffer from './components/SendOffer.vue';
import LayoutControl from './components/LayoutControl.vue';

import fetchAI from './utils/fetchAI.js';
import { getFAQData } from './utils/fetchFAQData.js';

const BOT_AVATAR = 'https://www.gigadevice.com.cn/favicon.png';
const containerLayoutHeight = ref(80);
const containerLayoutWidth = ref(420);

const componentMap = {
  Test,
  HotProduct,
  DescList,
  SendOffer,
};

// 用户输入的文本内容
const userInputText = ref('');
// 是否正在加载搜索式回答
const isLoading = ref(false);
// 是否正在加载菜单式问答请求
const isLoadingQuestion = ref(false);
// DOM
const messagesContainer = ref(null);
// 聊天消息列表
const chatMessageList = ref([
  {
    sender: 'bot',
    actions: ['复制'],
    avatar: BOT_AVATAR,
    content: markRaw(Test),
    menuTitle: '常见问题',
    faqList: [],
  },
]);

/**
 * 处理菜单式问题---常见问题
 */
const handleFAQSelect = async (selectedQuestion, key) => {
  try {
    // 显示加载状态
    isLoadingQuestion.value = true;

    // 获取搜索文本
    const { afterDash, beforeDash } = extractParts(selectedQuestion);

    console.log('afterDash:', afterDash, 'beforeDash', beforeDash);

    // 记录用户问题
    addUserMessage(selectedQuestion);

    // 查找处理策略
    const processor = faqOptions[beforeDash];
    // console.log('processor', processor);

    if (!processor) {
      addBotMessage({ content: '该常见问题未配置处理策略' });
      return;
    }

    const result = afterDash
      ? await processor(afterDash, key)
      : await processor(beforeDash, key);
    console.log(`菜单式问答${selectedQuestion},处理结果:`, result);

    // 判断配置类型
    switch (result.type) {
      case 'menu':
        addBotMenu(result.data);
        break;
      case 'desc':
        addBotMessage(result.data);
      default:
        break;
    }
  } catch (error) {
    handleError(error);
  } finally {
    isLoadingQuestion.value = false;
    await nextTick();
    scrollToBottom();
  }
};
provide('select', handleFAQSelect);

/**
 *  添加用户消息
 */
const addUserMessage = (content) => {
  chatMessageList.value.push({
    sender: 'user',
    content,
  });
};

/**
 * 添加机器人菜单消息
 */
const addBotMenu = ({ menuTitle, faqList, useComponent = undefined }) => {
  let content;
  useComponent
    ? (content = markRaw(componentMap[useComponent]))
    : (content = markRaw(Test));
  chatMessageList.value.push({
    sender: 'bot',
    avatar: BOT_AVATAR,
    actions: ['复制'],
    menuTitle,
    content,
    faqList,
  });
};

/**
 * 添加机器人消息
 */
const addBotMessage = async ({
  content,
  dataList = undefined,
  columns = undefined,
  useComponent = undefined,
  info = undefined,
  recruitmentInfo = undefined,
}) => {
  console.log(
    useComponent,
    'useComponent77777777777777777777777添加机器人消息'
  );

  if (!useComponent) {
    return chatMessageList.value.push({
      sender: 'bot',
      content,
      actions: ['复制'],
      avatar: BOT_AVATAR,
    });
  }

  content = markRaw(componentMap[useComponent]);

  chatMessageList.value.push({
    sender: 'bot',
    content,
    actions: ['复制'],
    avatar: BOT_AVATAR,
    dataList,
    columns,
    useComponent,
    info,

    recruitmentInfo,
  });
};

const handleError = (error) => {
  console.error(error);
  chatMessageList.value.push({
    sender: 'bot',
    content: '问题处理失败，请稍后再试',
    avatar: BOT_AVATAR,
  });
};

/**
 * 验证用户是否进行了输入以及输入的文本长度是否小于10000
 */
const isValidMessage = computed(() => {
  const userInputTextLength = userInputText.value.trim();
  return userInputTextLength.length > 0 && userInputTextLength.length <= 10000;
});

/**
 * 处理要发送的用户文本
 */
const handleSendMessage = async () => {
  try {
    // 如果用户输入不合格或者正在加载消息则不允许再发送消息
    if (!isValidMessage.value || isLoading.value) return;

    // 添加用户消息
    const userMessage = sanitizeInput(userInputText.value);
    addUserMessage(userMessage);

    // 显示加载状态
    isLoading.value = true;
    isLoadingQuestion.value = true;

    // 自动滚动到底部
    await nextTick();
    scrollToBottom();

    // 发起AI机器人请求
    const botResponse = await getBotResponse(userMessage);
    // 打印AI响应结果
    console.log('打印AI响应结果:', botResponse);

    // 添加AI回复
    addBotMessage({ content: botResponse });
  } catch (error) {
    message.error('请求失败，请稍后再试');
  } finally {
    isLoading.value = false;
    isLoadingQuestion.value = false;
    userInputText.value = '';
    await nextTick();
    scrollToBottom();
  }
};

/**
 * 获取AI接口响应结果
 */
const getBotResponse = async (userInputText) => {
  const { choices } = await $fetch('/api/message-ai', {
    method: 'POST',
    body: {
      messages: [{ role: 'user', content: userInputText }],
    },
  });
  return choices[0].message.content;
};

/**
 * 处理文本框事件
 *
 * Ctrl+Enter 换行
 *
 * Enter 发送
 */
const handlePressEnter = (e) => {
  if (e.key === 'Enter') {
    if (e.ctrlKey) {
      userInputText.value += '\n';
    } else {
      e.preventDefault();
      handleSendMessage();
    }
  }
};

/**
 * 滚动到对话框底部
 */
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

onMounted(async () => {
  const { code, content } = await getFAQData();
  if (code) {
    chatMessageList.value[0].faqList = content;
    console.log('请求常见问题API拿到的数据格式', content);
  } else {
    console.error('加载 FAQ 失败:', message);
    chatMessageList.value[0].faqList = [];
  }
});
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #333;
  font-family: custom-font, -apple-system, BlinkMacSystemFont, 'PingFang SC',
    'Microsoft YaHei', 'Lantinghei SC', 'Helvetica Neue', Arial, 'Open Sans',
    'Hiragino Sans GB', sans-serif;

  /* 侧边栏容器 */
  .chat-sidebar {
    position: fixed;
    /* right: -400px; */
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    width: var(--chat-width, 420px);
    height: var(--chat-height, 80vh);
    background: #f7f7f7;
    border-radius: 15px 0 0 15px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    z-index: 1000;
  }

  /* 悬停时展开 */
  .chat-sidebar:hover {
    right: 0;
  }

  .chat-top {
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 10px 0; */
    margin: 5px 0;
    border-bottom: 1px solid #ddd;
  }

  /* 聊天内容区域 */
  .chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    height: 300px;
    /* opacity: 0; */
    transition: opacity 0.2s 0.1s;
  }

  .chat-sidebar:hover .chat-content {
    opacity: 1;
  }

  /* 消息区域 */
  .chat-messages {
    flex: 1;
    padding: 10px;
    background: #f7f7f7;
    border-radius: 10px;
    margin-bottom: 15px;
    overflow-y: auto; /* 超出部分出现垂直滚动条 */
  }

  /* 消息样式 */
  .message {
    border-radius: 15px;
    max-width: 100%;
    width: max-content;
    position: relative;
    word-wrap: break-word;
    white-space: pre-wrap;
    margin-bottom: 18px;
  }

  /* 调整时间显示样式 */
  .message-time {
    font-size: 0.65rem;
    color: rgba(0, 0, 0, 0.45);
    margin-top: 8px;
    display: block;
    text-align: right;
  }

  /* 优化滚动条样式 */
  .chat-messages {
    &::-webkit-scrollbar {
      width: 6px;
      background: rgba(0, 0, 0, 0.01);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  }

  /* 输入区域 */
  .chat-input {
    position: relative;
    height: 64px;
    margin-bottom: 10px;

    :deep(.ant-input) {
      resize: none;
    }

    .input-textarea {
      height: 100%;
      resize: none;
    }

    .input-btn {
      display: inline-block;
      position: absolute;
      bottom: 5px;
      right: 5px;
      z-index: 10;
    }
  }
}
</style>
