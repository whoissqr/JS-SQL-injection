const express = require("express");
const app = express();
const sql = require("mssql");

function removeInDataBase(data){
        
        var query = ' DELETE FROM cdn_upload_status ' + 
                       ' WHERE id="'+data.id+'" AND'+
                       ' qq="'+data.qq+'";';
					   
		new sql.Request().query(query).then(
			function (recordSet) {
				//...
		});
}

app.get("/",
        function run(req, res, next) { // Defect
            const d = req.query.id;
			removeInDataBase(d);           
            res.send("Done");
        });
		
app.listen(1337, function() {
    console.log("Express listening...");
});