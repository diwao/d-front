'use strict';
import { gsap } from 'gsap';

export default (to: number, callback?: () => void): void => {
  function stopScroll(e: Event) {
    e.preventDefault();
  }
  // ユーザーのスクロール操作禁止
  document.addEventListener('touchmove mousewheel', stopScroll);

  gsap.to('html,body', {
    duration: 0.5,
    scrollTop: to,
    onComplete() {
      // ユーザーのスクロール操作許可
      document.removeEventListener('touchmove mousewheel', stopScroll);
      if (typeof callback === 'function') {
        callback();
      }
    },
  });
};
