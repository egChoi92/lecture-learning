module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: ["eslint:recommended", "eslint-config-prettier"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
  },
  /* 2-3. 규칙(Rules) & 2-4. 자동으로 수정할 수 있는 규칙
  rules: {
    "no-unexpected-multiline": "error",  // 혼동되는 여러 줄 표현 금지
    "no-extra-semi": "error",            // 불필요한 세미콜론 허용 금지
  }
  */
  /* 2-5. Extensible Config
  extends: [
    "eslint:recommended", // 미리 설정된 규칙 세트을 사용한다
  ],
  */
};
