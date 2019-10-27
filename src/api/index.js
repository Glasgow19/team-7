const Koa = require('koa');
const cors = require('koa2-cors');
const bodyparser = require('koa-bodyparser');

const combinedRoutes = require('./routes/index');
const userRoutes = require('./routes/user');
const assistanceRequestRoutes = require('./routes/assistanceRequests');
const feedbackRoutes = require('./routes/feedbacks');

const db = require('./db/connection');
const queries = require('./db/queries');

const app = new Koa();
const port = process.env.port || 5678;

app.use(cors());
app.use(async (ctx, next) => {
    ctx.app.db = db;
    ctx.app.queries = queries(db);
    await next();
});

app.use(bodyparser());
app.use(userRoutes.routes());
app.use(assistanceRequestRoutes.routes());
app.use(feedbackRoutes.routes());
app.use(combinedRoutes.routes());

const server = app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

const io = require('socket.io')(server);
global.socketIo = io;

io.on('connection', clientSocket => {
    clientSocket.emit('connected', { hello: 'hello boi' });
    console.log('connected: it works.');

    clientSocket.on('newAssistanceRequest', payload => {
        console.log(payload);
        clientSocket.emit('helpReceived', { message: 'received help' });
        clientSocket.broadcast.emit('staff:newAssistanceRequest', payload);
    });
});

module.exports = server;
