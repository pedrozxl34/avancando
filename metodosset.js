let vendas = [100, 200, 100, 300, 200];
let unicas = [...new Set(vendas)];
let acimaDe150 = unicas.filter(valor => valor > 150);
let total = acimaDe150.reduce((acc, val) => acc + val, 0);
console.log(unicas);
console.log(acimaDe150);
console.log(total);