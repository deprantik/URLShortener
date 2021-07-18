const dbServices = require('../../lib/query/index');
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const createRedirectionUrl = async (req, res) => {
	try {
		const { httpUrl } = req.query;
		if (httpUrl) {
			const uniqueUrl = await createUniqueUrl();
			const redirectionData = await createRedirection({ toUrl: httpUrl, fromUrl: uniqueUrl });
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

const createUniqueUrl = () => {
	try {
		const slug = createAlphaNumericString(6);
		const fromUrl = `${API_URL}/${slug}`;
		const data = getRedirectionsUrl({ fromUrl })
		if (data) {
			return createUniqueSlug();
		}
		return fromUrl;
	} catch (err) {
		throw new Error(err);
	}
}

const createAlphaNumericString = (size = 6) => {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < size; i += 1) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

export default createRedirectionUrl;
