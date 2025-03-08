export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品详细参数',
      subQuestion: {
        desc: '状态:MP,电压1.8V,容量2GB,频率166(x1 x8) 200(x8 DTR)',
      },
      isProductDesc: true,
    },
  };
});
