var path = require('path');

module.exports = function (req, res) {
    res.sendFile('theFormHub.html', { root: path.resolve(__dirname, '../views')});
}