import { OrganisationUser } from "../models/organisationUserModel.mjs";
const getOrganisationUsers = async (req, res) => {
    try {
        const data = await OrganisationUser.find({});
        console.log("Organisation users retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(404).json({ error: e });
        console.log("Error occured retrieving organisation users:", e);
    }
};
const addOrganisationUser = async (req, res) => {
    try {
        const data = await OrganisationUser.create(req.body);
        res.status(200).json(data);
        console.log("New organisation user has been added to database!");
    }
    catch (e) {
        console.log("Error trying to add organisation user:", e);
    }
};
const getOrganisationUser = async (req, res) => {
    try {
        const data = await OrganisationUser.find({ email_id: req.params.email });
        console.log("Organisation user retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        console.log("Error occured retrieving organisation user:", e);
    }
};
const editOrganisationUser = async (req, res) => {
    const { id } = req.params;
    const { email_id, first_name, last_name, dob, organisation, joining_date } = req.body;
    try {
        const updatedUser = await OrganisationUser.findByIdAndUpdate(id, { email_id, first_name, last_name, dob, organisation, joining_date }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
        console.log('User updated:', updatedUser);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const deleteOrganisationUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await OrganisationUser.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
        console.log('User deleted:', deletedUser);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export { getOrganisationUser, getOrganisationUsers, addOrganisationUser, editOrganisationUser, deleteOrganisationUser };
//# sourceMappingURL=organisationUserController.mjs.map