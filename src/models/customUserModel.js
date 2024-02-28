// models/customUserModel.js

import mongoose from 'mongoose';

const customUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const CustomUser = mongoose.models.CustomUser || mongoose.model('CustomUser', customUserSchema);

export default CustomUser;
