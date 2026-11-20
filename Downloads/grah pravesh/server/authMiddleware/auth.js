const jwt = require("jsonwebtoken");

const authMiddle = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "Token missing"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, "king");

        req.user = decoded;

        console.log(req.user.UserId);
        console.log(req.user.role);

        next();

    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
};

module.exports = authMiddle;