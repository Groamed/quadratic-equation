module.exports = function solveEquation(equation) {
  // your implementation
  var a = parseInt(equation.slice(0, equation.indexOf(' ')));
  var b = parseInt((equation.slice(equation.indexOf('^2') + 2, equation.indexOf('x ') - 3)).replace(/\s/g, ''));
  var c = parseInt((equation.slice(equation.indexOf('x ') + 2, equation.length)).replace(/\s/g, ''));
  var sdiscr = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  return [Math.round((-b-sdiscr)/(2*a)), Math.round((-b+sdiscr)/(2*a))].sort((a, b) => a - b)
}
