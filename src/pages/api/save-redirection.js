const dbServices = require('../../lib/query/index');
// const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createRedirectionUrl = async (req, res) => {
	try {
		const { httpUrl } = req.query;
		if (httpUrl) {
			

			const redirectionData = await createRedirection({ toUrl, fromUrl });

			return res.status(200).json({ status: 'SUCCESS', data: redirectionData });
		}
		return res.status(400).json({ status: 'FAILED', message: 'BAD REQUEST', error: 'URL is not provided' });
	} catch (err) {
		console.log("Error finding redirection data", err);
		return res.status(500).json({ status: 'FAILED', message: 'SERVER ERROR', error: err.message });
	}
}

const createRedirection = async ({ toUrl, fromUrl }) => {
	try {
		console.log("=====fromUrl", toUrl, fromUrl);
		const response = await dbServices.redirections.createRedirections({ toUrl, fromUrl });
		return response;
	} catch (err) {
		throw new Error(err);
	}
}

export default createRedirectionUrl;
