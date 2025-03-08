export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: '产品库存-Flash产品系列',
      subQuestion: [
        {
          key: '511',
          question: 'SPI NOR Flash',
          subQuestion: [
            { key: '5111', question: 'GD55LX02GE' },
            { key: '5112', question: 'GD55LT02GE' },
            { key: '5113', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '512',
          question: 'SPI NAND Flash',
          subQuestion: [
            { key: '5121', question: 'GD5F2GQ5UE' },
            { key: '5122', question: 'GD55LT02GE' },
            { key: '5123', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '513',
          question: 'Parallel NAND Flash',
          subQuestion: [
            { key: '5131', question: 'GD9FS2GxF2A' },
            { key: '5132', question: 'GD55LT02GE' },
            { key: '5133', question: 'GD55LB02GE' },
          ],
        },
      ],
    },
  };
});
