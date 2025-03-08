<template>
  <client-only>
    <div class="hot-product">
      <a-table :pagination="false" :columns="columns" :data-source="data">
        <template #bodyCell="{ column, record, text }">
          <template v-if="column.dataIndex === 'hotProduct'">
            <a target="_blank" :href="record.href" v-typing="text"></a>
          </template>
          <template v-else-if="column.dataIndex === 'desc'">
            <span v-typing="record.desc"></span>
          </template>
        </template>
      </a-table>
    </div>
  </client-only>
</template>

<script setup>
defineProps(['columns', 'data']);

// const columns = [
//   {
//     title: '热门商品',
//     dataIndex: 'hotProduct',
//     key: 'hotProduct',
//     width: 100,
//     // ellipsis: true,
//   },
//   {
//     title: '描述',
//     dataIndex: 'desc',
//     key: 'desc',
//   },
// ];

// const data = [
//   {
//     key: '1',
//     hotProduct: 'GD25UF',
//     desc: '突破性的1.2V超低功耗SPI NOR Flash产品系列',
//     href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
//   },
//   {
//     key: '2',
//     hotProduct: 'GD5F1GM7',
//     desc: '1Gb SPI NAND Flash，开启国产SLC NAND Flash 24nm时代',
//     href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
//   },
//   {
//     key: '3',
//     hotProduct: 'GD32G5',
//     desc: '出色的处理性能、丰富多样的数字模拟接口资源以及强化的安全性能',
//     href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
//   },
//   {
//     key: '4',
//     hotProduct: 'GD32H75E',
//     desc: '超高性能工业互联MCU，控制性能与高效通信兼具',
//     href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
//   },
// ];
</script>
