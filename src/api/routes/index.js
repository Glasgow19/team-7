const Router = require('koa-router');
const router = new Router();

router.get('/', async ctx => {
    ctx.body = {
        status: 'success',
        message: 'los pollos api',
        queries: ctx.app.queries,
    };
});

module.exports = router;
