//--------------------------------EXPORT INFO-----------------------------------------

state=Calc.getState()

substate = []
let Start = 47;
let End = 49;
for (let i = Start-1; i <=End-1; i++) { 

    substate.push( state.expressions.list[i])
}
JSON.stringify(substate)

//----------------------------IMPORT INFO---------------------------------------------------

state=Calc.getState()
substate = []

let addinfo = [...]

let insertindex = 52;
for (let i = 0; i <=insertindex-1; i++) { 

    substate.push( state.expressions.list[i])
}
for (let j = 0; j <=addinfo.length-1; j++) {
    if (state.expressions.list[insertindex-1].type != "folder") { substate.push(addinfo[j]) }
    else if ( addinfo[j].type != "folder" ) {

    addinfo[j].folderId=state.expressions.list[insertindex-1].id;
    substate.push(addinfo[j])

    }
}
for (let k = insertindex; k <=(state.expressions.list).length-1; k++) { 

    substate.push( state.expressions.list[k])
}
state.expressions.list = substate
Calc.setState(state, {allowUndo: true}); 
