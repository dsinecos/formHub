module.exports = function (req, res) {
    res.send("The get route is working");
    console.log(req.body);
}