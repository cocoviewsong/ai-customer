export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品库存',
      subQuestion: {
        desc: '剩余一件',
      },
      isProductDesc: true,
    },
  };
});
