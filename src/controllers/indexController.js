let getIndex = (req, res) => {
    return res.render(req="index.ejs");
};

module.exports = {
    getIndex: getIndex
};