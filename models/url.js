const mongoose = require("mongoose");

const urlschema = new mongoose.Schema(
    {
        ShortId: {
            type: String,
            require: true,
            unique: true
        },
        RedirectUrl: {
            type: String,
            require: true,
        },
        VisiteHistory: [{ timestampe: { type: Number } }],
    },
    { timestamps: true }
);

const URL = mongoose.model("url", urlschema);

module.exports = {
    URL
};