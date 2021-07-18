const db = require('../../lib/database');

const test = (req, res) => {
  db.connect()
    .then(obj => {
      // Can check the server version here (pg-promise v10.1.0+):
      const serverVersion = obj.client.serverVersion;
      obj.done(); // success, release the connection;
      return res.status(200).send('SUCCESS');
    })
    .catch(error => {
      console.log("Error in db connection", error);
      return res.status(500).send('FAILURE');
    });
}

export default test;
