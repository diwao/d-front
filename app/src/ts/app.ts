'use strict';

// Libs
import { gsap, Bounce } from 'gsap';

// ページ読み込み後に発火
window.addEventListener('load', () => {
  console.log('ページ読み込み完了');

  // TweenMaxのサンプルコード
  gsap.to('#box', {
    duration: 1,
    x: 100,
    ease: Bounce.easeOut,
  });
});
