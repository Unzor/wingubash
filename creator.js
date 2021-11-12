var str="";
var int = 0;
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = __dirname;
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        int = int + 1;
        // Do whatever you want to do with the file
        if (`"${file.split(".").shift()}": "${file}",\n` !== `"creator": "creator.js",\n` && `"${file.split(".").shift()}": "${file}",\n` !== `"[": "[.exe",\n`){
        str = str + `"${file.split(".").shift()}": "${file}",\n`; 
        }

        if (files.length == int){
str = "\"bin\": {\n" + str + "}";
fs.writeFileSync('test.txt', str);
        }
    });
});