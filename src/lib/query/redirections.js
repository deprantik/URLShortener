const db = require('../database');

const createRedirections = ({ fromUrl, toUrl, status = true,  }) => db.one(
  'INSERT INTO redirections("fromUrl", "toUrl", "isActive", "createdAt", "updatedAt") VALUES(${fromUrl}, ${toUrl}, ${status}, now(), now()) RETURNING *', {
    fromUrl,
    toUrl,
    status
  });

const getRedirectionUrl = ({ fromUrl }) => db.one('SELECT * FROM redirections WHERE "fromUrl" = $1', fromUrl);

const updateRedirectionStatus = ({ status = false, fromUrl }) => db.none('UPDATE redirections SET "isActive" = $1 AND "updatedAt" = now() WHERE "fromUrl" = $2', [status, fromUrl]);

const updateHit = ({ fromUrl }) => db.none('UPDATE redirections SET hit = hit + 1 WHERE "fromUrl" = $1', [fromUrl]);

const getRedirections = ({ limit = 8, offset = 0 }) => db.any('SELECT * FROM redirections WHERE "isActive" = $1 ORDER BY "updatedAt" LIMIT $2 OFFSET $3', [true, limit, offset])

module.exports = {
  createRedirections,
  getRedirectionUrl,
  updateRedirectionStatus,
  updateHit,
  getRedirections,
}