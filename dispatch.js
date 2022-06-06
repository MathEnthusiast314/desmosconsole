//observe dispatch events to analyze and learn
Calc.controller.dispatcher.register(console.log)

//Implement/run an event
Calc.controller.dispatcher.dispatch(evt)

//EXAMPLES
//To duplicate an expression
evt={type: 'duplicate-expression', id: 'id name'}
//To make an expression "dashed"
evt={type: 'set-item-linestyle', id: 'id name', lineStyle: 'DASHED'}
//To trigger an action
evt={type: "action-single-step",id: 'id name'}
