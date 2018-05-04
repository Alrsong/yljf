// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'arrow-parens':0,
    'generator-star-spacing':0,
    'no0debugger':process.env.NODE_ENV==='production'?2:0,
    // 'semi':['error','always'],
    "semi": [0],
    'indent':0,
    "no-tabs":"off",
    'space-before-function-paren':0,
    "no-mixed-spaces-and-tabs": [0],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-spacing':0,
    'no-unused-vars':0
    
  }
}
