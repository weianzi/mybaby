function index(req, res) {   //request要求, response响应

    res.render("index", {
        title: "mybaby首页",
        items: [
            {
                _id: 1,
                username: "ancool",
                title: "我的小HEHEH",
                img: "images/142174136543.jpg",
                createdAt: "2015/06/19 21:00"
            },
            {
                _id: 2,
                username: "weianzi",
                title: "天文望远镜",
                img: "images/142172644254.jpg",
                createdAt: "2015/06/19 12:09"
            },
            {
                _id: 3,
                username: "ancool",
                title: "没有什么是不行的！",
                img: "images/1420788431778.jpg",
                createdAt: "2015/06/16 11:00"
            }]
    })

}

module.exports = {
    index: index
};
