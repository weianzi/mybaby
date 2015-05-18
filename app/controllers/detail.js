function detail(req, res) {

    var id = req.params.id;

    res.render("detail", {
        title: "详情页"
    });
}

module.exports = {
    detail: detail
};