/**
 * 处理用户点击的内容，使用"-"分隔符
 *
 */
const extractParts = (question) => {
  const match = question.match(/^(.+?)\s*-\s*(.+)$/);
  return match
    ? { beforeDash: match[1], afterDash: match[2] }
    : { beforeDash: question, afterDash: '' };
};

export default extractParts;
