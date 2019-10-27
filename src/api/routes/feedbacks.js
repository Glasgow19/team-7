const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { head } = require('lodash');

const router = new Router();
const { ok } = require('../responses');
const { error } = require('../responses');

const baseUrl = `/api/feedbacks`;

router.get(baseUrl, async ctx => {
    const query = ctx.app.queries.feedback;
    const feedbacks = await query.get();
    ok(ctx, { feedbacks });
});

router.post(baseUrl, async ctx => {
    const query = ctx.app.queries.feedback;
    const { feedback } = ctx.request.body;
    const queryResult = await query.create(feedback);
    const createdFeedback = queryResult && queryResult[0];

    if (createdFeedback) ok(ctx, { assistanceRequest: createdFeedback });
    return error({ message: `Failed when storing ${feedback} into db.` });
});

module.exports = router;
