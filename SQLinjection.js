const express = require("express");
const app = express();

function getConnectionConfig() {
    //...
}

app.get("/",
        function run(req, res, next) { // Defect
            const id = req.query.id;
            const query = `select * from User where userid=${id}`;
            const sql = require("mssql");
            
            sql.connect(getConnectionConfig()).then(
                function() {
                    new sql.Request().query(query).then(
                        function (recordSet) {
                            //...
                        });
                });
            
            res.send("Done");
        });
app.listen(1337, function() {
    console.log("Express listening...");
});
// example exploit: http://127.0.0.1:1337/?id=1+or+2>1