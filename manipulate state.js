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
//To hide an expression in 'state'
state.expressions.list[index].secret = true;
//To set the exact speed of a slider
state["expressions"]["list"][index].slider.animationPeriod = milliseconds to reach min bound→max bound
//To set the color of an expression
state["expressions"]["list"][index].color = "purple"
