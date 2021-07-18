const dbServices = require('../../lib/query/index');
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getRedirection = async (req, res) => {
  try {
    const redirectionData = await getRedirectionByToUrl({ slug: req.query.slug });
    return res.status(200).json({ status: 'SUCCESS', data: redirectionData });
  } catch (err) {
    console.log("Error finding redirection data", err);
    return res.status(500).json({status: 'FAILED', message: 'SERVER ERROR', error: err.message });
  }
}

const getRedirectionByToUrl = async ({ slug }) => {
  try {
    const fromUrl = `${API_URL}/${slug}`;
    console.log("=====fromUrl", fromUrl);
    const response = await dbServices.redirections.getRedirectionsUrl({ fromUrl });
    if (response) {
      await dbServices.redirections.updateHit({ fromUrl });
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export default getRedirection;
