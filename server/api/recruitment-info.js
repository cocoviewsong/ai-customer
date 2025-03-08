export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      subQuestion: {
        desc: '招聘信息',
      },
      recruitmentInfo: [
        {
          key: '1',
          socialRecruitment: `车规嵌入式软件工程师`,
          socialRecruitmentHref: '#',
          schoolRecruitment: `市场专员`,
          schoolRecruitmentHref: '#',
        },
        {
          key: '2',
          socialRecruitment: `战略与发展资深经理`,
          socialRecruitmentHref: '#',
          schoolRecruitment: `数字后端工程师`,
          schoolRecruitmentHref: '#',
        },
      ],
      // 前端采用哪个组件渲染数据
      useComponent: 'SendOffer',
    },
  };
});
