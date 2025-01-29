const jwt = require("jsonwebtoken");

const JWT_SECRET = "your_secret_key"; // ใส่ค่า SECRET ตรงนี้เลย

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
        expiresIn: "1h",
    });
};

module.exports = { generateToken };
