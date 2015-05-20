function adminList(req, res) {   //request要求, response响应

    res.render("admin-list", {
        title: "后台列表",
        items: [
            {
                _id: 1,
                username: "ancool",
                title: "我的小HEHEH",
                img: "images/142174136543.jpg",
                createdAt: "2015/06/19 21:00",
                summary:"尊者居后原则。把地位低者介绍给地位高者。把年轻者介绍给长者。把主人介绍给客人。把男士介绍给女士。把迟到者介绍给早到者。介绍时动作：手心向上，介绍时一般应站立，特殊情况下年长者和女士可除外，在宴会或会谈桌上可以不起立，微笑点头示意即可。"
            },
            {
                _id: 2,
                username: "weianzi",
                title: "天文望远镜",
                img: "images/142172644254.jpg",
                createdAt: "2015/06/19 12:09",
                summary:"《新唐书·张行成传》：“古今用人未尝不因介绍。” 宋 罗大经《鹤林玉露》卷五：“ 南轩 为之介绍，数月乃得见。” 清袁枚《随园诗话补遗》卷六：“余与 和希斋 大司空，全无介绍，而蒙其矜宠特隆。”艾青《在浪尖上》诗：“我把你介绍给别人；‘这是一个英雄’。”亦指居间沟通使相互发生关系的人。 宋 梅尧臣《永叔内翰见过》诗：“我壶无醪醴，不能犒介绍。”"
            },
            {
                _id: 3,
                username: "ancool",
                title: "没有什么是不行的！",
                img: "images/1420788431778.jpg",
                createdAt: "2015/06/16 11:00",
                summary:"老舍《骆驼祥子》一：“我们所要介绍的是 祥子 ，不是骆驼，因为‘骆驼’只是个外号。” 周而复《上海的早晨》第一部十一：“ 冯永祥一听她给自己介绍姓名，就懂得她不满意刚才的称呼。”如：介绍情况、介绍经验等。"
            }]
    })

}

module.exports = {
    adminList: adminList
};
