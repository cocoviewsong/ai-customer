const typingDirective = {
  mounted(el, binding) {
    if (typeof binding.value !== 'string') {
      console.warn(
        '[typingDirective] binding.value 不是字符串，跳过动画:',
        binding.value
      );
      return;
    }

    // 预处理：去掉 HTML 标签之间的空格和换行
    const rawHtml =
      typeof binding.value === 'string'
        ? binding.value.replace(/>\s+</g, '><').trim()
        : '';

    console.log('binding.value:', binding.value, typeof binding.value);

    let index = 0;
    let isTag = false;
    let tempBuffer = '';
    let finalBuffer = '';

    const speed = 22; // 基础速度
    const variance = 15; // 随机波动范围

    const typeNext = () => {
      if (index >= rawHtml.length) {
        el.classList.remove('typing-active');

        setTimeout(() => {
          const cursor = el.querySelector('.typing-cursor');
          if (cursor) cursor.remove();
        }, 100);
        return;
      }

      const char = rawHtml.charAt(index);
      index++;

      if (char === '<') isTag = true;
      if (char === '>') isTag = false;

      if (isTag) {
        tempBuffer += char;
        if (char === '>') {
          finalBuffer += tempBuffer;
          tempBuffer = '';
          updateDisplay();
        }
        typeNext(); // 递归直接处理标签
      } else {
        finalBuffer += tempBuffer + char;
        tempBuffer = '';
        updateDisplay();
        setTimeout(typeNext, speed + Math.random() * variance);
      }
    };

    const updateDisplay = () => {
      el.innerHTML =
        finalBuffer +
        (tempBuffer || '') +
        '<span class="typing-cursor"></span>';

      const chatContainer = document.getElementById('chatMessages');
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    };

    el.classList.add('typing-active');
    typeNext();
  },
  beforeUnmount(el) {
    el.innerHTML = el.textContent;
  },
};

export default typingDirective;
