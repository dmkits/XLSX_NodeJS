
var fs = require('fs');
var express = require('express');
var app = express();
var path=require ('path');
var XLSX=require('xlsx');

var port=8183;
app.use('/',express.static('public'));

var ConfigurationError, DBConnectError;


app.get('/', function (req, res) {

    var data =JSON.parse(fs.readFileSync("/home/ianagez/IdeaProjects/chat/testInfoTable.json"));
    var fname = path.join(__dirname, '/out.xlsx');

    fs.open(fname, 'w', function (err) {
        if (err){
            console.log("err=", err);
            res.end(); /////
            return;
        }
        var wb = XLSX.readFile(fname);
        wb.SheetNames=[];
        var ws;
        for (var i in data) {
            var jsonObj = data[i];
            ws = XLSX.utils.json_to_sheet(jsonObj.data, jsonObj.headers);
            wb.SheetNames.push(jsonObj.id);
            wb.Sheets[jsonObj.id] = ws;
        }
        XLSX.writeFile(wb, fname);
        var options = {
            headers: {
                'Content-Disposition': 'attachment; filename =out.xlsx'
            }
        };
        res.sendFile(fname, options, function(err){
            if(err){
                console.log("err=",err);
                res.end(); /////
                return;
            }
            fs.unlinkSync(fname); console.log("fname unlinkSync=", fname);
        });
    });
});


app.listen(port, function (err) {
    console.log("app run on port ", port);
});
