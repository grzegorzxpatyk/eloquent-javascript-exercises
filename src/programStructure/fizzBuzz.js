export function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let print = !(i % 3 === 0 || i % 5 === 0) ? i : '';
    if (i % 3 === 0) print += 'Fizz';
    if (i % 5 === 0) print += 'Buzz';
    return print;
  }
}
