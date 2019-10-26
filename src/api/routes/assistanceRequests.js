const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { head } = require('lodash');

const router = new Router();
const { ok } = require('../responses');
const { error } = require('../responses');

const baseUrl = `/api/assistance-requests`;

router.get(baseUrl, async ctx => {
    const query = ctx.app.queries.assistanceRequest;
    const assistanceRequests = await query.get();
    ok(ctx, { assistanceRequests });
});

router.post(baseUrl, async ctx => {
    const query = ctx.app.queries.assistanceRequest;
    const { payload, connectionId } = ctx.request.body;
    console.log({ payload, connectionId });

    const queryResult = await query.create({ payload, connectionId });
    const actualCreatedRequest = queryResult && queryResult[0];
    if (actualCreatedRequest) ok(ctx, { assistanceRequest: actualCreatedRequest });
    return error({ message: `Failed when storing ${(payload, connectionId)} into db.` });
});

module.exports = router;
