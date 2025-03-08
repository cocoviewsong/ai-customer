<template>
  <client-only>
    <a-list
      class="comment-list"
      item-layout="horizontal"
      :data-source="chatMessageList"
    >
      <template #renderItem="{ item, index }">
        <a-list-item v-if="item.sender === 'bot'" class="chat-bot">
          <a-comment>
            <template #avatar>
              <a-avatar :src="item.avatar" :alt="item.sender + '头像'">
                {{ item.avatar ?? item.sender.slice(0, 1) }}
              </a-avatar>
            </template>
            <template #author>
              <a>{{ item.sender }}</a>
            </template>
            <template #content>
              <div>
                <!-- Test组件 -->
                <component
                  v-if="isComponent(item.content)"
                  :is="item.content"
                  :faqList="item.faqList"
                  :title="item.menuTitle"
                  :data="item.dataList"
                  :columns="item.columns"
                  :supplierInformation="item.info"
                  :recruitmentInfo="item.recruitmentInfo"
                />
                <div v-else v-typing="item.content"></div>
              </div>
            </template>

            <span key="comment-basic-like">
              <a-tooltip title="喜欢">
                <template v-if="getReaction(index).action === 'liked'">
                  <LikeFilled @click="like(index)" />
                </template>
                <template v-else>
                  <LikeOutlined @click="like(index)" />
                </template>
              </a-tooltip>
            </span>

            <span key="comment-basic-dislike">
              <a-tooltip title="不喜欢">
                <template v-if="getReaction(index).action === 'disliked'">
                  <DislikeFilled @click="dislike(index)" />
                </template>
                <template v-else>
                  <DislikeOutlined @click="dislike(index)" />
                </template>
              </a-tooltip>
            </span>
          </a-comment>
        </a-list-item>

        <a-list-item v-else-if="item.sender === 'user'" class="chat-user">
          <a-comment>
            <template #avatar>
              <a-avatar
                :src="item.avatar"
                :alt="item.sender + '头像'"
                style="background-color: #228be6"
              >
                {{ item.avatar ?? item.sender.slice(0, 1) }}
              </a-avatar>
            </template>
            <template #author>
              <a>{{ item.sender }}</a>
            </template>
            <template #content>
              <div style="text-align: justify; white-space: normal">
                {{ item.content }}
              </div>
            </template>
          </a-comment>
        </a-list-item>
      </template>
    </a-list>
  </client-only>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import {
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from '@ant-design/icons-vue';

const props = defineProps(['chatMessageList', 'demo']);
onMounted(() => {
  console.log('dddddddddddddddddd', props);
});

const reactions = reactive(new Map());

const getReaction = (id) => {
  if (!reactions.has(id)) {
    reactions.set(id, { likes: 0, dislikes: 0, action: '' });
  }
  return reactions.get(id);
};

const like = (id) => {
  const reaction = getReaction(id);
  const isLiked = reaction.action === 'liked';
  reaction.likes = isLiked ? 0 : 1;
  reaction.dislikes = 0;
  reaction.action = isLiked ? '' : 'liked';
};

const dislike = (id) => {
  const reaction = getReaction(id);
  const isDisliked = reaction.action === 'disliked';
  reaction.dislikes = isDisliked ? 0 : 1;
  reaction.likes = 0;
  reaction.action = isDisliked ? '' : 'disliked';
};

const isComponent = (content) => {
  return (
    typeof content === 'object' &&
    content !== null &&
    typeof content.render === 'function'
  );
};
</script>

<style scoped>
.ant-list-item {
  padding-left: 0;
  padding-right: 0;
}
.ant-list-item:first-child {
  padding-top: 0;
}
.chat-bot {
  .ant-comment-nested span {
    color: #999;
    margin-right: 5px;
  }
}
</style>
