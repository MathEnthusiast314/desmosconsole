//😋
function computeContext() {
  // Emulate what happens in the web worker
  const Context = require("core/math/context").Context;
  const context = new Context();
  const changeSet = {
    isCompleteState: true,
    statements: {},
  };
  for (let stmt of Calc.controller.getAllItemModels()) {
    if (stmt.type !== "expression" && stmt.type !== "table") continue;
    changeSet.statements[stmt.id] = stmt;
  }
  const ticker = Calc.controller.listModel.ticker.cachedParsableState;
  if (ticker.handlerLatex) {
    changeSet.statements[ticker] = ticker;
  }
  context.processChangeSet(changeSet);
  context.updateAnalysis();
  return context;
}
