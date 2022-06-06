//To get the state of a graph
Calc.getState()
//Undo
Calc.undo()
//Redo
Calc.redo()
//Clear History
Calc.clearHistory()
//Set the current state as the default state of the graph. You'll see a "Reset" button under the "Edit List" menu instead of a "Delete All" button.
Calc.setDefaultState(Calc.getState())
//Screenshot in the form of a data URI
Calc.screenshot();
//You can also set the dimensions of the screenshot
Calc.screenshot({width:200, height:200})
//List of expressions
Calc.getExpressions()
//To delete expressions
Calc.removeExpressions(List of expression objects you want to delete)
//See hidden expressions or folders. Also useful to quickly hide entire folders through the GUI
Calc.updateSettings({administerSecretFolders: true});
//Get render time
console.time('rendertime');
Calc.asyncScreenshot(null, () => console.timeEnd('rendertime'))
