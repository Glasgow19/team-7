const Router = require('koa-router');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { head } = require('lodash');

const router = new Router();
const jwtSettings = require('../jwtSettings');
const { ok } = require('../responses');
const { error } = require('../responses');
const allowOnlyAuthorised = require('./allowOnlyAuthorised');

const baseUrl = `/api/users`;

router.post(baseUrl, async ctx => {
    const query = ctx.app.queries.user;
    const { email, password } = ctx.request.body;
    const maybeExistingUser = (await query.get({ email }))[0];

    if (maybeExistingUser && maybeExistingUser.email) {
        error(ctx, { message: `User with email ${email} exists!` });
        return;
    }

    const userToCreate = {
        email,
        password: await bcrypt.hash(password, jwtSettings.saltRounds),
    };

    await query.create(userToCreate);

    const token = jwt.sign({ email }, jwtSettings.keys.private, jwtSettings.options);

    ok(ctx, { token });
});

router.post(`${baseUrl}/login`, async ctx => {
    const query = ctx.app.queries.user;
    const { email, password } = ctx.request.body;

    const existingUserQuery = await query.get({ email });

    if (!(existingUserQuery && existingUserQuery.length)) {
        error(ctx, { message: `the user with email ${email} does not exist!` });
        return;
    }

    const existingUser = head(existingUserQuery);
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if (!isPasswordCorrect) {
        error(ctx, { message: `the provided password is not correct!` });
        return;
    }

    const token = jwt.sign(
        { fullName: existingUser.fullName, profilePhoto: existingUser.profilePhoto, email },
        jwtSettings.keys.private,
        jwtSettings.options,
    );

    ok(ctx, { token });
});

router.use(allowOnlyAuthorised);
router.get(baseUrl, async ctx => {
    const users = await ctx.app.queries.user.get();
    ok(ctx, users);
});

module.exports = router;
