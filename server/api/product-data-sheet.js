export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: 'Flash产品系列数据手册',
      subQuestion: [
        {
          key: '211',
          question: 'SPI NOR Flash',
          subQuestion: [
            { key: '2111', question: 'GD55LX02GE' },
            { key: '2112', question: 'GD55LT02GE' },
            { key: '1113', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '212',
          question: 'SPI NAND Flash',
          subQuestion: [
            { key: '2121', question: 'GD5F2GQ5UE' },
            { key: '2122', question: 'GD55LT02GE' },
            { key: '2123', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '213',
          question: 'Parallel NAND Flash',
          subQuestion: [
            { key: '2131', question: 'GD9FS2GxF2A' },
            { key: '2132', question: 'GD55LT02GE' },
            { key: '2133', question: 'GD55LB02GE' },
          ],
        },
      ],
    },
  };
});
