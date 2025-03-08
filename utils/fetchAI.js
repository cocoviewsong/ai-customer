// // const options = {
// //   method: 'POST',
// //   headers: {
// //     Authorization: 'Bearer sk-ycqihikdvyrriwsbekvtbnsdrqipxqeauarfytadtknbkozb',
// //     'Content-Type': 'application/json',
// //   },
// //   body: '{"model":"deepseek-ai/DeepSeek-R1-Distill-Qwen-7B","stream":false,"max_tokens":512,"temperature":0.7,"top_p":0.7,"top_k":50,"frequency_penalty":0.5,"n":1,"messages":[{"content":"你是谁","role":"user"}]}',
// // };

// // const data = fetch('https://api.siliconflow.cn/v1/chat/completions', options)
// //   .then((response) => response.json())
// //   .then((response) => console.log(response))
// //   .catch((err) => console.error(err));

// export default fetchAI;

const fetchAI = async (userInput) => {
  try {
    const data = await $fetch(
      'https://api.siliconflow.cn/v1/chat/completions',
      {
        method: 'POST',
        body: {
          model: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
          stream: false,
          max_tokens: 512,
          temperature: 0.7,
          top_p: 0.7,
          top_k: 50,
          frequency_penalty: 0.5,
          n: 1,
          messages: [{ role: 'user', content: userInput }],
        },
        headers: {
          Authorization:
            'Bearer sk-ycqihikdvyrriwsbekvtbnsdrqipxqeauarfytadtknbkozb',
          'Content-Type': 'application/json',
        },
      }
    );
    return data;
  } catch (err) {
    console.error('请求AI失败:', err);
    return null;
  }
};

export default fetchAI;
