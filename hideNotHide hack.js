//Example: https://www.desmos.com/calculator/dmzneyhpjy... look inside the folders ;)
state=Calc.getState()
for(i=0; i<(state.expressions.list).length; i++){

if(state.expressions.list[i].latex != undefined) {state.expressions.list[i].latex += "\\M"; }
if(state.expressions.list[i].opacity != undefined) {state.expressions.list[i].opacity += "\\M"; }
if(state.expressions.list[i].height != undefined) {state.expressions.list[i].height += "\\M"; }
if(state.expressions.list[i].width != undefined) {state.expressions.list[i].width += "\\M"; }
if(state.expressions.list[i].angle != undefined) {state.expressions.list[i].angle += "\\M"; }
if(state.expressions.list[i].center != undefined) {state.expressions.list[i].center += "\\M"; }
if (state.expressions.list[i].columns != undefined){
for(j=0; j<state.expressions.list[i].columns.length; j++){
for(k=0; k<state.expressions.list[i].columns[j].values.length; k++){
state.expressions.list[i].columns[j].values[k]+="\\M"
}}}
if(state.expressions.list[i].clickableInfo != undefined)
    {
        for(ii=0; ii<state.expressions.list[i].clickableInfo.rules.length; ii++)
        {
            state.expressions.list[i].clickableInfo.rules[ii].expression += "\\M"; 
        }
    }
if(state.expressions.list[i].domain != undefined)
    {state.expressions.list[i].domain.min += "\\M";
    state.expressions.list[i].domain.max += "\\M";
    state.expressions.list[i].parametricDomain.min = state.expressions.list[i].domain.min;
    state.expressions.list[i].parametricDomain.max = state.expressions.list[i].domain.max;}
}
Calc.setState(state)
