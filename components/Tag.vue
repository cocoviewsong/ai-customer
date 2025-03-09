<template>
  <div id="tag">
    <a-space wrap>
      <a-tag :bordered="false">
        <a href="#"> 咨询产品参数 </a>
      </a-tag>
      <a-tag :bordered="false">
        <a href="#"> 咨询产品使用手册 </a>
      </a-tag>
      <a-tag :bordered="false">
        <a href="#"> 咨询产品售后 </a>
      </a-tag>
      <a-button size="small">换一批</a-button>
    </a-space>
  </div>
</template>

<script setup></script>

<style scoped>
#tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0;
}
</style>
