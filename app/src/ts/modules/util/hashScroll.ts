import scroll from './scroll';

export default (selector: string, margin = 0, callback?: () => void): void => {
  const elements = document.querySelectorAll(selector);

  elements.forEach((element): void => {
    element.addEventListener(
      'click',
      function (this: HTMLElement, e: Event): void {
        e.preventDefault();
        const hash: string | null = this.getAttribute('href');
        let target = 'html';
        if (hash !== null && hash.match(/^#.+/)) {
          target = hash;
        }

        const targetElement = document.querySelector(target);
        const targetY = targetElement?.getBoundingClientRect().y;
        if (targetY === undefined) {
          doScroll(0, callback);
          return;
        }
        const to = targetY - margin;
        doScroll(to, callback);
      }
    );
  });
};

function doScroll(to: number, callback?: () => void): void {
  // コールバック
  if (typeof callback === 'function') {
    scroll(to, callback);
    return;
  }
  scroll(to);
}
