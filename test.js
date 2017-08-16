function User() { }
User.prototype = { admin: false };

var user = new User();

User.prototype = { admin: true };

console.log(user.admin);