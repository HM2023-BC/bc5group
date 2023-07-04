const routes = require('next-routes')();

routes.add('/', '/index');
routes.add('/login', '/login');
routes.add('/signUp', '/signUp');
routes.add('/yourConstitution', '/yourConstitution');
// routes.add('/constitutions/new', '/newConstitution');
// routes.add('/constitutions/:address', '/constitutions/show'); // Routeneintrag für die Anzeige einer einzelnen Konstitution

module.exports = routes;
