# receipt-string-maker

商品データから、明細と合計金額を含むレシート文字列を生成する小さなTypeScriptアプリです。

## 必要環境

- [Bun](https://bun.sh/)

## セットアップ

```sh
bun install
```

## ブラウザで表示

```sh
bun run lh
```

ターミナルに表示された`Local`のURLをブラウザで開いてください。

## コンソールで実行

```sh
bun src/main.ts
```

## コードの確認

```sh
bun run typecheck
bun run lint
```

サンプルの商品データは`src/sample_1.json`、空の商品データは`src/sample_2.json`にあります。
