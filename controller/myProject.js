module.exports = [
	{
		url: '/gateway/read',
		rewrite: false,
	},
	{
		url: '/gateway/list',
		rewrite: true, // 是否重写自定义逻辑
		query: 'page', // 参数
		timeout: 0, // 时延
		// 当rewrite为true时，返回文件名，可使该接口返回指定后缀的文件内容，若无返回，则等同rewrite为false
		callback: (query) => {},
	},
	{
		url: '/gateway/getName',
		rewrite: true, // 是否重写自定义逻辑
		query: 'name', // 参数
		timeout: 0, // 时延
		callback: (query) => { // 返回指定参数后缀的文件内容
			if (query === 'Bob') {
				return `${query}.json`; // 返回getNameBob.json文件
			}
		},
	}
];
