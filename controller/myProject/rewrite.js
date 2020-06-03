function controller(app, API) {
	const getListApi = API.preUrl + '/gateway/list';
	app.get(getListApi, function (req, res) {
		var sufUrl = '.json';
        var result = {};
        var { page } = req.query;
        if (page) sufUrl = page + sufUrl;

        try {
        	result = require('../../mapper' + getListApi + sufUrl);
        } catch (e) {
        	result = require('../../mapper' + getListApi + '.json');
        }

        res.end(JSON.stringify(result));
    });
}

module.exports = controller;
