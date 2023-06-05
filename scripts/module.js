export function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(5)(2));



export function formatDate() {
  let oldDate = '2020-11-26';
  let reg = /(\d+)\S(\d+)\S(\d+)/;
  const newDate = oldDate.replace(reg, '$3.$2.$1');
  return newDate;
}

console.log(formatDate());


