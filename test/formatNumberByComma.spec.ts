import formatNumberByComma from '../app/src/ts/modules/util/formatNumberByComma';

describe('数値を渡した場合', () => {
  it('4桁未満の数値、10を与えた時は文字列"10"を返す', () => {
    expect(formatNumberByComma(10)).toBe('10');
  });

  it('4桁以上の数値、1000を与えた時は文字列"1,000"を返す', () => {
    expect(formatNumberByComma(1000)).toBe('1,000');
  });

  it('より多くの桁数の数値、12345678を与えた時は末尾から3桁ごとにカンマを挿入し、文字列"12,345,678"を返す', () => {
    expect(formatNumberByComma(12345678)).toBe('12,345,678');
  });

  it('小数点を含む数値、1234.56を与えられた時は整数部分だけを変換した文字列"1,234.56"を返す', () => {
    expect(formatNumberByComma(1234.56)).toBe('1,234.56');
  });
});
