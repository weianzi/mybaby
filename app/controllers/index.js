function index(req, res) {
    res.render("index", {
        title: "mybaby首页"
    })
}

exports.index = index;