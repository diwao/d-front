# d-front

フロントエンド開発用のテンプレートです。

- pug
- scss
- TypeScript

が使えます。

## 使い方

```
$ npm install
$ npm run build
$ npm run start
```

ここまでやるとローカルにサーバが起動します。
src 内のファイルをいじってサイトを作っていきましょう。

```
$ npm run release
```

でリリース用のファイルを生成します。

### static

`src`直下の`static`ディレクトリに配置したファイルはそのまま dist に出力されます。

### バリデーション

```
$ npm run validate
```

で TypeScript と dist 内の HTML をチェックできます。

## テスト

jest が使えます。テストファイルはの置き場所は root 直下の`test`ディレクトリです。

## 推奨環境

|         | version  |
| ------- | -------- |
| node.js | v14.17.0 |
| npm     | v6.14.13 |
