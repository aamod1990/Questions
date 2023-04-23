import testRoute from './test.route';

const initializeRoutes = (app) => {
    app.use('/api/test', testRoute);
};

export default {
    initializeRoutes
};