const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { head } = require('lodash');

const router = new Router();
// const jwtSettings = require('../jwtSettings');
const { ok } = require('../responses');
const { error } = require('../responses');
// const allowOnlyAuthorised = require('./allowOnlyAuthorised');

const baseUrl = `/api/assistance-requests`;

router.get(baseUrl, async ctx => {
    const query = ctx.app.queries.assistanceRequest;
    const assistanceRequests = await query.get();
    ok(ctx, { assistanceRequests });
});

module.exports = router;
