const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
<<<<<<< HEAD
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET')
=======
        const decodedToken = jwt.verify(token, process.env.JWT_PW)
>>>>>>> Phuong
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request')
        });
    }
<<<<<<< HEAD
};

=======
};
>>>>>>> Phuong
