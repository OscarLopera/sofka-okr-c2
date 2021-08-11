import okr from './okr/okr';
import kr from './okr/KrMiddleware';
import user from './administration/user';
import middlewareNotify from "./notifications/notificacionsMiddleware";
import dashboardmiddleware from './dashboard/dashboardmiddleware';

const middleware = [

    ...kr,
    ...okr,
    ...user,
    ...middlewareNotify,
    ...dashboardmiddleware,
]

export default middleware;
