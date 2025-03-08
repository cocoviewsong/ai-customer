<template>
  <client-only>
    <div id="question">
      <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
          <span v-typing="title"></span>
          <DownOutlined />
        </a>

        <template #overlay>
          <a-menu>
            <template v-for="item in faqList" :key="item.key">
              <!-- 多级下拉菜单 -->
              <a-sub-menu
                v-if="item.subQuestion"
                :key="item.key"
                :title="item.question"
              >
                <a-menu-item
                  v-for="childrenQuestion in item.subQuestion"
                  :key="childrenQuestion.key"
                  @click="
                    onClick(
                      item.question + '-' + childrenQuestion.question,
                      childrenQuestion.key
                    )
                  "
                >
                  {{ childrenQuestion.question }}
                </a-menu-item>
              </a-sub-menu>

              <!-- 一级下拉菜单 -->
              <template v-else>
                <a-menu-item
                  :key="item.key"
                  @click="onClick(item.question, item.key)"
                >
                  {{ item.question }}
                </a-menu-item>
              </template>
            </template>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </client-only>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  title: {
    type: String,
  },
  faqList: {
    type: Array,
  },
});

// 注入父组件提供的事件处理函数
const select = inject('select');

const onClick = async (keyWord, key) => {
  console.log('keyWord6666666666666', keyWord, 'key', key);
  select(keyWord, key);
};
</script>
