import { Ticket } from "../models/ticketModel.mjs";
const getTickets = async (req, res) => {
    try {
        const data = await Ticket.find({}).populate('assignee').populate('reporter');
        // const data = await Ticket.find({ reporter: { $in: OrganisationUser.findById(req.params.id).select('_id') } })
        console.log("Ticket details retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(404).json({ error: e });
        console.log("Error occured retrieving ticket details:", e);
    }
};
const getOrgTickets = async (req, res) => {
    try {
        console.log("Hey");
        let data = await Ticket.find({}).populate('assignee');
        // const filteredData = data.filter(ticket => ticket.assignee.organisation === req.params.id);
        console.log("Ticket details retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(404).json({ error: e });
        console.log("Error occured retrieving ticket details:", e);
    }
};
const editTicket = async (req, res) => {
    try {
        const ticketId = req.params.id;
        const updatedTicket = req.body;
        const updated = await Ticket.findByIdAndUpdate(ticketId, updatedTicket, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.json(updated);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
const deleteTicket = async (req, res) => {
    try {
        const ticketId = req.params.id;
        const deleted = await Ticket.findByIdAndDelete(ticketId);
        if (!deleted) {
            return res.status(404).json({ message: 'Ticket not found' });
        }
        res.json({ message: 'Ticket deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export { getTickets, getOrgTickets };
//# sourceMappingURL=ticketController.mjs.map