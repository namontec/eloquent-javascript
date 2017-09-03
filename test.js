const testFolder = './';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
})

function User() { }
User.prototype = { admin: false };

var user = new User();

User.prototype = { admin: true };

console.log(user.admin);