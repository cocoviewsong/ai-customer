<template>
  <client-only>
    <div id="components-table-demo-size">
      <h4>
        目前仍在招聘的岗位
        <a
          target="_blank"
          class="desclist-address"
          href="https://www.gigadevice.com.cn/about/career"
          >详细信息点这里</a
        >
      </h4>
      <a-table
        :pagination="false"
        :columns="columns"
        :data-source="recruitmentInfo"
        size="small"
      >
        <template #bodyCell="{ text }">
          <span class="wrap-text" v-typing="text"> </span>
        </template>
      </a-table>
    </div>
  </client-only>
</template>

<script setup>
const props = defineProps(['recruitmentInfo']);
const columns = [
  { title: '社会招聘', dataIndex: 'socialRecruitment' },
  { title: '校园招聘', dataIndex: 'schoolRecruitment' },
];

// const data = [
//   {
//     key: '1',
//     socialRecruitment: `车规嵌入式软件工程师`,
//     socialRecruitmentHref: '#',
//     schoolRecruitment: `市场专员`,
//     schoolRecruitmentHref: '#',
//   },
//   {
//     key: '2',
//     socialRecruitment: `战略与发展资深经理`,
//     socialRecruitmentHref: '#',
//     schoolRecruitment: `数字后端工程师`,
//     schoolRecruitmentHref: '#',
//   },
// ];
</script>

<style scoped>
.wrap-text {
  white-space: pre-line;
}
.desclist-address {
  text-decoration-line: underline;
}
</style>
