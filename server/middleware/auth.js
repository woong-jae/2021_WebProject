import jwt, { decode } from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        const decodedData = jwt.verify(token, 'test');
        req.userId = decodedData?.indexOf;

        next();
    } catch (error) {
        console.error(error);
    }
}