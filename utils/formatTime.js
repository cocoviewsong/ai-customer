/**
 * 时间格式化
 *
 */
const formatTime = (date) => {
  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export default formatTime;
