const mongoose = require('mongoose');

// KPQ6xyC5G7g1Kn0M
const url = 'mongodb+srv://nekhlesh:KPQ6xyC5G7g1Kn0M@cluster0.dbm3rzr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    console.log("Successfully connected to database!! ");
})
    .catch((err) => {
        if (err) {
            console.log("Error occured while connecting to database!");
        }
    })

module.exports = mongoose;