const bcrypt = require("bcryptjs");

const password = "admin123"; // 👈 your password here

bcrypt.hash(password, 10, (err, hash) => {
  if (err) throw err;
  console.log("Hashed password:", hash);
});
