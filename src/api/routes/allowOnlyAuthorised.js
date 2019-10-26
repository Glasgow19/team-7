const jwt = require('jsonwebtoken');
const jwtSettings = require('../jwtSettings');
const { unauthorised } = require('../responses');

const allowOnlyAuthorised = async (ctx, next) => {
    const authorizationHeader = ctx.request.headers.authorization;

    if (!authorizationHeader) {
        unauthorised(ctx, { message: 'authorization header not present!' });
        return;
    }

    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        unauthorised(ctx, { message: 'authorization token not present!' });
        return;
    }

    try {
        const decodedPayload = await jwt.verify(token, jwtSettings.keys.public);
        ctx.app.auth = { user: decodedPayload };
        await next();
    } catch (error) {
        unauthorised(ctx, {
            message: 'the provided token is not valid or it has expired!',
            exception: error,
        });
    }
};
module.exports = allowOnlyAuthorised;
