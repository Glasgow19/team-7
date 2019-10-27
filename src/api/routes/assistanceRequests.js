const Router = require('koa-router');
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

router.post(baseUrl + '/assist', async ctx => {
    const query = ctx.app.queries.assistanceRequest;
    const { submittedByConnectionId, staffMember, assistanceRequest } = ctx.request.body;
    console.log(submittedByConnectionId);
    console.log(staffMember);

    if (staffMember) {
        const { profilePhoto, fullName } = staffMember;

        await query
            .set()
            .where({ id: assistanceRequest.id })
            .update({ status: `Allocated to ${fullName}.` });

        global.socketIo.to(submittedByConnectionId).emit('visitor:helpIsComing', {
            assistanceRequest,
            staffMember: { profilePhoto, fullName },
        });

        global.socketIo.emit('staff:updateAssistanceStatus');
    }

    ok(ctx, { assistanceRequest: ctx.request.body });
});

module.exports = router;
