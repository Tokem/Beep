var args = arguments[0] || {};
// Label title
var titleLabel = Titanium.UI.createLabel({
    color:'#696969',
    text:'Detalhe',
    textAlign:'center',
    font:{fontWeight: "bold", fontSize: "16dp"}
});

$.detalhe.setTitleControl(titleLabel);