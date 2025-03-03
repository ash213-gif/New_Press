const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    UserImg:{type: String, required: false, trim: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },

}, { timestamps: true })

module.exports = mongoose.model(' newdataPRESS ', UserSchema)