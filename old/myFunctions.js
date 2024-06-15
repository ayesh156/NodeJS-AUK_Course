const math = (number1, number2, number3, number4) => {
  let a = number1 + number2 * 2;

  if (number3) {
    a += number3 - 5;
  }

  if (number4) {
    a *= number4;
  }

  return a;
};

const abc = () => {};
const aaa = () => {};
const bbb = () => {};
const ccc = () => {};

const main = {
  abc,
  aaa,
  bbb,
  ccc,
};

export default main;

export { abc, aaa, bbb, ccc, math };
