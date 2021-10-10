import getParam from '../app/src/ts/modules/util/getParam';

const baseUrl = 'https://diwao.com';
const parameterKey = 'key';
const parameterValue = '1';
const hash = 'hash';

const addingParamUrl = `${baseUrl}/?${parameterKey}=${parameterValue}`;
const addingParamUrlTrailingSlash = `${baseUrl}?${parameterKey}=${parameterValue}`;
const addingHashAndPramUrl = `${baseUrl}/#${hash}?${parameterKey}=${parameterValue}`;

describe(`url: ${addingParamUrl}`, () => {
  it(`パラメータ「?${parameterKey}=${parameterValue}」に対して「${parameterKey}」を取得した結果は'${parameterValue}'となる。`, () => {
    expect(getParam({ url: addingParamUrl, key: parameterKey })).toBe(
      parameterValue
    );
  });

  it(`パラメータ「?{parameterKey}=${parameterValue}」に対して存在しないキー「wrongKey」を取得した結果は''となる。`, () => {
    expect(getParam({ url: addingParamUrl, key: 'wrondKey' })).toBe('');
  });
});

describe(`url: ${addingParamUrlTrailingSlash}`, () => {
  it(`パラメータ「?{parameterKey}=${parameterValue}」に対して「${parameterKey}」を取得した結果は'1'となる。`, () => {
    expect(
      getParam({ url: addingParamUrlTrailingSlash, key: parameterKey })
    ).toBe(parameterValue);
  });

  it(`パラメータ「?{parameterKey}=${parameterValue}」に対して存在しないキー「wrongKey」を取得した結果は''となる。`, () => {
    expect(
      getParam({ url: addingParamUrlTrailingSlash, key: 'wrongKey' })
    ).toBe('');
  });
});

describe(`url: ${addingHashAndPramUrl}`, () => {
  it(`パラメータ「?{parameterKey}=${parameterValue}」に対して「${parameterKey}」を取得した結果は'${parameterValue}'となる。`, () => {
    expect(getParam({ url: addingHashAndPramUrl, key: parameterKey })).toBe(
      parameterValue
    );
  });

  it(`パラメータ「?{parameterKey}=${parameterValue}」に対して存在しないキー「wrongKey」を取得した結果は''となる。`, () => {
    expect(getParam({ url: addingHashAndPramUrl, key: 'wrongKey' })).toBe('');
  });
});
