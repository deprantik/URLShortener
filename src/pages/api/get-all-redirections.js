const dbServices = require('../../lib/query/index');
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getRedirectionDatas = async (req, res) => {
  try {
    const redirectionData = await getRedirections({ limit: req.query.limit, offset: req.query.offset });
    return res.status(200).json({ status: 'SUCCESS', data: redirectionData });
  } catch (err) {
    console.log("Error finding redirection data", err);
    return res.status(500).json({status: 'FAILED', message: 'SERVER ERROR', error: err.message });
  }
}

const getRedirections = async ({ limit, offset }) => {
  try {
    const response = await dbServices.redirections.getRedirections({ limit, offset });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

export default getRedirectionDatas;
