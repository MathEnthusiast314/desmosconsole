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
