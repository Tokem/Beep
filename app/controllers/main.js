
var win = Alloy.createController('navMenu').getView();
$.main.add(win);

Alloy.Globals.setContent($.content);
Alloy.Globals.openContent({name: "main/index"});

