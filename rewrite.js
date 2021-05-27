function rewrite(app, params) {
    const {
        url, query, timeout = 0, callback,
    } = params;

	app.get(url, function (req, res) {
		var sufUrl = '.json';
        var result = {};
        var urlQuery = req.query[query];
        if (urlQuery) sufUrl = urlQuery + sufUrl;

        if (typeof callback === 'function') {
            if (callback(urlQuery)) {
                sufUrl = callback(urlQuery);
            }
        }

        try {
        	result = require('./mapper' + url + sufUrl);
        } catch (e) {
        	result = require('./mapper' + url + '.json');
        }

        setTimeout(() => {
            res.end(JSON.stringify(result));
        }, timeout);
    });
}

module.exports = rewrite;