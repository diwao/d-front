import zeroPadding from '../app/src/ts/modules/util/zeroPadding';

describe('ゼロパディング', () => {
  it('4を0埋めすると"04"です', () => {
    expect(zeroPadding(4)).toBe('04');
  });

  it('0を0埋めすると"00"です', () => {
    expect(zeroPadding(0)).toBe('00');
  });

  it('10以上の数字はそのまま文字列に変換して返却します。例えば14を0埋めすると"14"です', () => {
    expect(zeroPadding(14)).toBe('14');
  });

  it('100以上の数字はそのまま文字列に変換して返却します。例えば101を0埋めすると"101"です', () => {
    expect(zeroPadding(101)).toBe('101');
  });
});
