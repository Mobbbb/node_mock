# 基于node的mock服务

## Project setup
```
npm install
```

### Run project
```
node app.js
```

### Test api
```
http://127.0.0.1:3000/myProject/gateway/read
```

```
http://127.0.0.1:3000/myProject/gateway/list
```

```
http://127.0.0.1:3000/myProject/gateway/list?page=0
```

```
http://127.0.0.1:3000/myProject/gateway/list?page=1
```

```
http://127.0.0.1:3000/myProject/gateway/getName
```

```
http://127.0.0.1:3000/myProject/gateway/getName?name=Bob
```

```
http://127.0.0.1:3000/testProject/gateway
```

### Add a new api

* 在/controller目录下，对应的工程文件(myProject.js)中，新增一段接口配置
* 在/mapper目录 -> 工程目录(/myProject) -> 接口目录下，添加一份与接口路径相同磁盘路径的json文件

### Add a new project

* 在/controller目录下，创建一个新的工程js，并添加接口配置信息
* 在mapper目录下创建对应的工程目录，并添加一份与接口路径相同磁盘路径的json文件
