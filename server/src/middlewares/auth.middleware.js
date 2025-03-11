import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if(!token) return res.status(401).json({message: 'Access denied'});

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: 'Internal Server error'});
    }
}