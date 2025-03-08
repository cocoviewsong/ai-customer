import { getQuery } from 'h3';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  console.log('Query Params:', query);
  return {
    code: 200,
    content: {
      title: 'Flash产品系列',
      subQuestion: [
        {
          key: '111',
          question: 'SPI NOR Flash',
          subQuestion: [
            { key: '1111', question: 'GD55LX02GE' },
            { key: '1112', question: 'GD55LT02GE' },
            { key: '1113', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '112',
          question: 'SPI NAND Flash',
          subQuestion: [
            { key: '1121', question: 'GD5F2GQ5UE' },
            { key: '1122', question: 'GD55LT02GE' },
            { key: '1123', question: 'GD55LB02GE' },
          ],
        },
        {
          key: '113',
          question: 'Parallel NAND Flash',
          subQuestion: [
            { key: '1131', question: 'GD9FS2GxF2A' },
            { key: '1132', question: 'GD55LT02GE' },
            { key: '1133', question: 'GD55LB02GE' },
          ],
        },
      ],
    },
  };
});
