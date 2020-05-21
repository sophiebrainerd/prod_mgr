const mongoose = require('mongoose');

module.exports = (name) => {
    mongoose.connect(`mongodb://localhost/${name}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Successfully connected to ${name}.`))
    .catch(err => console.log(err));
}

