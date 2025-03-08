export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品详细参数',
      subQuestion: {
        desc: 'flash产品系列售后说明...',
      },
    },
  };
});
