export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品数据手册',
      subQuestion: {
        desc: '产品数据手册,测试文本,官网上不能下载',
      },
    },
  };
});
