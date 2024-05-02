import { TicketHistory } from "../models/ticketHistoryModel.mjs";
const getTicketHistory = async (req, res) => {
    try {
        const data = await TicketHistory.find({ ticket: req.params.id });
        console.log("Ticket history retrieved!");
        res.status(200).json(data);
    }
    catch (e) {
        res.status(404).json({ error: e });
        console.log("Error occured retrieving ticket details:", e);
    }
};
const addTicketHistory = async (req, res) => {
    try {
        const data = await TicketHistory.create(req.body);
        res.status(200).json(data);
        console.log("New ticket history has been added to database!");
    }
    catch (e) {
        res.status(404).json({ error: e });
    }
};
export { getTicketHistory, addTicketHistory };
//# sourceMappingURL=ticketHistoryController.mjs.map