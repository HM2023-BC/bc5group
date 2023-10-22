const routes = require('next-routes')();

routes.add('/', '/index');
routes.add('/login', '/login');
routes.add('/signUp', '/signUp');
routes.add('/yourConstitution', '/yourConstitution');
routes.add('/yourConstitution_Demo', '/yourConstitution_Demo');
routes.add('/constitutions/new', '/constitutions/new');
routes.add('/constitutions/:address', '/constitutions/show');

module.exports = routes;
