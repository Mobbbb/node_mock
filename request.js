var fs                  = require('fs');
var rewrite             = require('./rewrite');
const CONTROLLER_PATH   = './controller';
const API_FILE_PATH     = fs.readdirSync(CONTROLLER_PATH);

function request(app) {
    var API = [];
    API_FILE_PATH.forEach(function(path){
        const fileName = path.substring(path.lastIndexOf("\\") + 1, path.indexOf("."));
        projectApi = require(`${CONTROLLER_PATH}/${path}`);
        projectApi.forEach(item => {
            item.url = `/${fileName + item.url}`;
        });
        API = API.concat(projectApi);
    });

    // 遍历接口，返回对应路径的json文件
    API.forEach(item => {
        if (!item.rewrite) {
            app.get(item.url, function (req, res) {
                var result = {};
                result = require('./mapper' + item.url + '.json');
                res.end(JSON.stringify(result));
            });
        } else {
            // 自定义接口返回逻辑
            rewrite(app, item);
        }
    });
}

module.exports = request;
