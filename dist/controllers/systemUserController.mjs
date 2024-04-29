import { SystemUser } from "../models/systemUserModel.mjs";
const getSystemUsers = async (req, res) => {
    try {
        const data = await SystemUser.find({});
        res.status(200).json(data);
        console.log("System users retrieved!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
const addSystemUser = async (req, res) => {
    try {
        const data = await SystemUser.create(req.body);
        res.status(200).json(data);
        console.log("New system user has been added to database!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
const getSystemUser = async (req, res) => {
    try {
        const data = await SystemUser.findById(req.params.id);
        console.log("System user retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
export { getSystemUsers, addSystemUser, getSystemUser };
//# sourceMappingURL=systemUserController.mjs.map