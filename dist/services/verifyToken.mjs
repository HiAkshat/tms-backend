import jwt from "jsonwebtoken";
export default async function verifyToken(req, res) {
    try {
        const { authorization } = req.headers;
        if (authorization) {
            const decoded = jwt.verify(authorization?.split(" ")[1], "thisisthekey");
            res.status(200).json({
                valid: true,
                decoded
            });
        }
    }
    catch (error) {
        res.status(404).json({ valid: false, error });
    }
}
//# sourceMappingURL=verifyToken.mjs.map