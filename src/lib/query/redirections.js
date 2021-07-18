const db = require('../database');

const createRedirections = ({ fromUrl, toUrl, active = false,  }) => db.one(
  'INSERT INTO redirections(fromUrl, toUrl, active) VALUES(${fromUrl}, ${toUrl}, ${active}) RETURNING *', {
    fromUrl,
    toUrl,
    active
  });

const getRedirectionsUrl = ({ fromUrl }) => db.one('SELECT * FROM redirections WHERE "fromUrl" = $1', fromUrl);

const updateRedirectionStatus = ({ status = false, fromUrl }) => db.none('UPDATE redirections SET isActive = $1 WHERE fromUrl = $2', [status, fromUrl]);

const updateHit = ({ fromUrl }) => db.none('UPDATE redirections SET hit = hit + 1 WHERE fromUrl = $2', [fromUrl]);

const getRedirections = ({ limit = 8, offset = 0 }) => db.any('SELECT * FROM redirections WHERE "isActive" = ${1} ORDER BY "updatedAt" LIMIT ${2} OFFSET ${3}', [true, limit, offset])

module.exports = {
  createRedirections,
  getRedirectionsUrl,
  updateRedirectionStatus,
  updateHit,
  getRedirections,
}