const number = parseInt(prompt('Nhập số: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Dãy Fibonacci:');
console.log(n1);
console.log(n2);

nextTerm = n1 + n2;

while (nextTerm <= number) {

    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}