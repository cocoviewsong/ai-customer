export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: [
      {
        key: '1',
        question: '咨询产品参数',
        subQuestion: [
          { key: '11', question: 'Flash' },
          { key: '12', question: '利基型DRAM' },
          { key: '13', question: 'MCU' },
          { key: '14', question: '传感器' },
          { key: '15', question: '模拟产品' },
        ],
      },
      {
        key: '2',
        question: '咨询产品售后',
        subQuestion: [
          { key: '21', question: 'Flash' },
          { key: '22', question: '利基型DRAM' },
          { key: '23', question: 'MCU' },
          { key: '24', question: '传感器' },
          { key: '25', question: '模拟产品' },
        ],
      },
      {
        key: '3',
        question: '咨询产品使用手册',
        subQuestion: [
          { key: '31', question: 'Flash' },
          { key: '32', question: '利基型DRAM' },
          { key: '33', question: 'MCU' },
          { key: '34', question: '传感器' },
          { key: '35', question: '模拟产品' },
        ],
      },
      { key: '4', question: '咨询离我最近的供应商' },
      {
        key: '5',
        question: '查询产品库存',
        subQuestion: [
          { key: '51', question: 'Flash' },
          { key: '52', question: '利基型DRAM' },
          { key: '53', question: 'MCU' },
          { key: '54', question: '传感器' },
          { key: '55', question: '模拟产品' },
        ],
      },
      { key: '6', question: '获得技术人员支持' },
      { key: '7', question: '热销商品推荐' },
      { key: '9', question: '投资者联络' },
      { key: '10', question: '招贤纳士' },
      { key: '11', question: '改进与建议' },
      { key: '12', question: '定制产品' },
    ],
  };
});
