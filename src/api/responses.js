module.exports = {
    ok: (ctx, body) => {
        ctx.body = body;
    },
    error: (ctx, body) => {
        ctx.status = 400;
        ctx.body = body;
    },
    unauthorised: (ctx, body) => {
        ctx.status = 401;
        ctx.body = body;
    },
};
