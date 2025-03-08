<template>
  <client-only>
    <div id="components-table-demo-size">
      <h4>
        距离您最近的供货商地址是：
        <a
          target="_blank"
          class="desclist-address"
          :href="supplierInformation[0].href"
          v-typing="supplierInformation[0].address"
        ></a>
      </h4>
      <a-table
        :pagination="false"
        :columns="columns"
        :data-source="supplierInformation"
        size="small"
      >
        <template #bodyCell="{ column, text }">
          <span v-typing="text"></span>
        </template>
      </a-table>
    </div>
  </client-only>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps(['supplierInformation']);

const columns = [
  { title: '联系方式', dataIndex: 'tel' },
  { title: '邮政编码', dataIndex: 'postalCode' },
];
const data = [
  {
    key: '1',
    address: '北京市海淀区丰豪东路9号中关村集成电路设计园8号楼',
    tel: '86 - 10 - 82881666',
    postalCode: '100094',
    // 可以接到百度地图上
    href: '#',
  },
];

onMounted(() => {
  console.log('props.supplierInformation', props.supplierInformation);
});
</script>

<style scoped>
.desclist-address {
  text-decoration-line: underline;
}
</style>
