var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "health"
})

con.connect(function (err) {
    if (err) throw err;
    console.log("connected");
    var sql = "INSERT INTO reports (name, age,weight,email) VALUES ?";
    var values = [
        ['pavi', 21, 50, 'pavi@gmail.com'],
        ['pravena', 22, 40, 'praveee2000@gmail.com'],
        ['dharshini', 20, 35, 'dharshini20@gmail.com']
    ]
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("records inserted:" + result.affectedRows)
    })



})