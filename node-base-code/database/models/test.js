import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    field1: {
        type: String,
        required: true
    },
    field2: {
        type: String,
    }
}, {
    timestamps: true
});

const TEST = mongoose.model("Test", TestSchema);
module.exports = TEST;