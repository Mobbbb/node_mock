var PROJECT_PATH = '/myProject';

module.exports = {
	preUrl: PROJECT_PATH,
	api: [
		{
			url: PROJECT_PATH  + '/gateway/read',
			rewrite: false,
		},
		{
			url: PROJECT_PATH  + '/gateway/list',
			rewrite: true, // 是否重写自定义逻辑
		}
	]
};
