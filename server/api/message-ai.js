// server/api/message-ai.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  return $fetch('https://api.siliconflow.cn/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiKey}`, // 从服务端环境变量获取
      'Content-Type': 'application/json',
    },
    body: {
      model: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
      messages: body.messages,
    },
    timeout: 60000,
  });
});
