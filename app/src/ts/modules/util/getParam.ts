'use strict';

export default ({ url, key }: { url: string; key: string }): string => {
  let params = [];
  const param = [];
  const str = url.replace(/[?&]/g, '<>');
  params = str.split('<>');
  for (let i = 0; i < params.length; i++) {
    param.push(params[i].split('='));
  }
  for (let i = 0; i < param.length; i++) {
    if (param[i][0] === key) {
      //調べたパラメータがあればその値を返す
      return param[i][1];
    }
  }
  return '';
};
