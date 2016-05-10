# mybaby
node.js + mongodb开发的移动小站。评论，上传，登录注册，删除，权限等。练习。 — Edit

###开启mongodb

安装mongodb后，进入mongodb安装目录下的bin，终端输入
```
./mongod
```

另一个终端输入
```
./mongo
```
mongodb几个常用命令
```
mongo
show dbs
use habit
show collections
db.habits.find({})
```

###启动
```
npm start
前台：http://localhost:8080/
```


###使用后台

注册一个号，开通权限后可用。
如注册了用户名是"a", 在mongo命令行中设置
```
db.users.update({"name":"a"}, {$set:{"role":51}})
```
