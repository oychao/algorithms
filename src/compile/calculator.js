export default function(exp) {
  const regNumber = /\d/;
  const regOperator = /\+|-|\*|\//;
  const regBracket = /\(|\)/;
  const numberStack = [];
  const operatorStack = [];
  let currentUnit = '';
  /*
   * 1. 数字栈和运算符栈
   * 2. 维护一个运算符对比优先级的表
   * 3. 对比运算符栈顶元素和当前运算符的优先级，小于当前则压栈，
   *    大于则弹出两个数字，根据当前运算符进行计算，并将结果压出数字栈
   *    等于则表示括号抵消
   * 4. #作为表达式开始和结束符
   */
  for(let i = 0, length = exp.length; i < length; i++) {
    const c = exp.chatAt(i);
  }
};

