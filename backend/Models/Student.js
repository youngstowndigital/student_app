const mongoose = require('mongoose');
const Schame = mongoose.Schema;

const StudentSchema = new Schame({
    name: String,
    email: String,
    rollno: Number
}, {
    collection: 'students'
});

module.exports = mongoose.model('Student', StudentSchema);
