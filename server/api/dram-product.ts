export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '利基型DRAM产品系列数据手册',
      subQuestion: [
        {
          key: '211',
          question: '利基型DDR3L',
          subQuestion: [
            {
              key: '2111',
              question: 'GDP0BFLM-CB',
            },
            {
              key: '2112',
              question: 'GDP1BFLA-CB',
            },
            {
              key: '2113',
              question: 'GDP1BFLA-CA',
            },
          ],
        },
        {
          key: '212',
          question: '利基型DDR4',
          subQuestion: [
            {
              key: '2121',
              question: 'GDP0BFLM-CB',
            },
            {
              key: '2122',
              question: 'GDP1BFLA-CB',
            },
            {
              key: '2123',
              question: 'GDP1BFLA-CA',
            },
          ],
        },
      ],
    },
  };
});
