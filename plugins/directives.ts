import { defineNuxtPlugin } from '#app';
import typingDirective from '@/directives/typing';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('typing', typingDirective);
});
