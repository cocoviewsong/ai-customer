export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品详细参数',
      subQuestion: {
        desc: '状态：MP<br />电压：1.8V<br />容量：2GB<br />频率：166(x1 x8) 200(x8 DTR)',
      },
    },
  };
});
