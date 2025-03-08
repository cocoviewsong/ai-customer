import DOMPurify from 'dompurify';

/**
 * 安全过滤配置
 *
 */
const sanitizeOptions = {
  ALLOWED_TAGS: [], // 禁止所有HTML标签
  ALLOWED_ATTR: [], // 禁止所有属性
};

/**
 * 安全处理函数
 *
 */
const sanitizeInput = (input) => {
  return DOMPurify.sanitize(input, sanitizeOptions).trim();
};

export default sanitizeInput;
