const number = parseInt(prompt('Nhập số dương: '));
let n1 = 1, n2 = 1, Term;

document.write('Dãy số Fibonacci là:  ');
document.write(n1 + ' ');
document.write(n2 + ' ');

Term = n1 + n2;

while (Term <= number) {

    document.write(Term + " ");

    n1 = n2;
    n2 = Term;
    Term = n1 + n2;
}

