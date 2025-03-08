export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '招聘信息',
      subQuestion: {
        desc: '招聘信息',
      },
      isProductDesc: true,
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
      useComponent: 'SendOffer',
    },
  };
});
