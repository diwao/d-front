'use strict';

import axios from 'axios';
// Libs
import { gsap, Bounce } from 'gsap';
// Services
import { fetchUsers, fetchUser } from './services/userService';

// ページ読み込み後に発火
window.addEventListener('load', () => {
  console.log('ページ読み込み完了');

  // Tweenのサンプルコード
  gsap.to('#box', {
    duration: 1,
    x: 100,
    ease: Bounce.easeOut,
  });

  // axiosのサンプルコード
  document
    .getElementById('users')
    ?.addEventListener('click', async function () {
      try {
        const users = await fetchUsers();
        console.log(users.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Oops, Something is wrong', error.response);
        }
      }
    });

  document.getElementById('user')?.addEventListener('click', async function () {
    const id = 2;
    try {
      const user = await fetchUser({ id });
      console.log(user.data.name);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Oops, Something is wrong', error.response);
      }
    }
  });
});
