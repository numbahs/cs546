const bcrypt = require('bcryptjs');
const users = require('./users');

let exportedObjects = {
    findUserByName : (username) => {
        return users.find(x => x.username === username);
    },
    findUserById : (id) => {
        return users.find(x => x._id === id);
    },
    comparePassword : async (candidatePassword, hashedPassword) => {
        try {
            return await bcrypt.compare(candidatePassword, hashedPassword);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = exportedObjects;