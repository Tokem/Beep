var db = Ti.Database.open('beep');
db.execute('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, name TEXT, token TEXT, email TEXT, beeps INTEGER);');
db.close();

exports.findUser = function(){
 
};
