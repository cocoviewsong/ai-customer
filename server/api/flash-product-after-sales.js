export default defineEventHandler(async (event) => {
  return {
    code: 200,
    content: {
      title: 'Flash产品系列售后',
      subQuestion: [
        {
          key: '311',
          question: 'SPI NOR Flash',
          subQuestion: [
            { key: '3111', question: 'GD55LX02GE' },
            { key: '3112', question: 'GD55LT02GE' },
            { key: '3113', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '312',
          question: 'SPI NAND Flash',
          subQuestion: [
            { key: '3121', question: 'GD5F2GQ5UE' },
            { key: '3122', question: 'GD55LT02GE' },
            { key: '3123', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '313',
          question: 'Parallel NAND Flash',
          subQuestion: [
            { key: '3131', question: 'GD9FS2GxF2A' },
            { key: '3132', question: 'GD55LT02GE' },
            { key: '3133', question: 'GD55LB02GE' },
          ],
        },
      ],
    },
  };
});
