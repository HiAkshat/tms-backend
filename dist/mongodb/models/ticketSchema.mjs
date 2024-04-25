import mongoose from "mongoose";
const TicketType = ['Story', 'Task', 'Bug'];
const TicketStatus = ['TOBEPICKED', 'INPROGRESS', 'INTESTING', 'COMPLETED'];
const ticketSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: TicketType,
        require: true
    },
    key: {
        type: String,
        unique: true,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the model for organisation users
        required: true
    },
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming 'User' is the model for organisation users
        required: true
    },
    status: {
        type: String,
        enum: TicketStatus,
        required: true,
        default: 'TOBEPICKED'
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    files: [{
            type: String,
            validate: {
                validator: function (value) {
                    // Validate file format
                    return /\.(png|jpg|jpeg|pdf|mp4)$/.test(value);
                },
                message: 'File must be in png, jpg, jpeg, pdf, or mp4 format'
            }
        }]
});
const Ticket = mongoose.model("Ticket", ticketSchema);
export { Ticket };
//# sourceMappingURL=ticketSchema.mjs.map