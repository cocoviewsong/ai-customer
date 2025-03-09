export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      // 表格信息
      dataList: [
        {
          key: '1',
          hotProduct: 'GD25UF',
          desc: '突破性的1.2V超低功耗SPI NOR Flash产品系列',
          href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
        },
        {
          key: '2',
          hotProduct: 'GD5F1GM7',
          desc: '1Gb SPI NAND Flash，开启国产SLC NAND Flash 24nm时代',
          href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
        },
        {
          key: '3',
          hotProduct: 'GD32G5',
          desc: '出色的处理性能、丰富多样的数字模拟接口资源以及强化的安全性能',
          href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
        },
        {
          key: '4',
          hotProduct: 'GD32H75E',
          desc: '超高性能工业互联MCU，控制性能与高效通信兼具',
          href: 'https://www.gigadevice.com.cn/product/flash/product-series/spi-nor-flash/gd25uf64e',
        },
      ],
      // 表头信息
      columns: [
        {
          title: '热门商品',
          dataIndex: 'hotProduct',
          key: 'hotProduct',
          width: 100,
          // // 超过width是否省略(可选参数)
          // ellipsis: true,
        },
        {
          title: '特点',
          dataIndex: 'desc',
          key: 'desc',
        },
      ],
      // 前端采用哪个组件渲染数据(可选参数)
      useComponent: 'HotProduct',
    },
  };
});
