function simplify(num1, num2, ops){
  let result;
  switch(ops){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
      if (num2 === 0){
        result = num1 + " can't divide  0";
        break;
      }
      else {
        result = num1 / num2;
        break;
      }
    case "%":
      result = num1 % num2;
      break;
  }
  return result;
}


console.log(simplify(12,4,"+"));
console.log(simplify(12,4,"-"));
console.log(simplify(12,4,"*"));
console.log(simplify(12,4,"/"));
console.log(simplify(13,4, "%"));
console.log(simplify(4, 0, "/"));