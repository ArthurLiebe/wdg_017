import {User} from '../models/models.js';

export async function checkIfUserExists(req, res, next) {
    try {
        const {
            params: {id},
        } = req;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({error: 'User not found'});
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}
