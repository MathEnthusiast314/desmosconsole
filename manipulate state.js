//Append expression
state=Calc.getState();
state.expressions.list.push({
    "type": "expression",
    "latex": "..."
})
Calc.setState(state);
//Append expression (method 2) or edit an expression.
Calc.setExpression({ id: ..., ... });
//For multiple expressions:
Calc.setExpressions(array of objects);
//Analysis/Values of expressions
Calc.expressionAnalysis
//Print the value of a variable when it's edited
m=Calc.HelperExpression({ latex: 'm' });
m.observe('numericValue', function() {
  console.log(m.numericValue);
});
