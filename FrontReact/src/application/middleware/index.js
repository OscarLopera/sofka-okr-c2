import okr from './okr/okr';
import kr from './okr/KrMiddleware';
import user from './administration/user';
import middlewareNotify from "./notifications/notificacionsMiddleware";

const middleware = [

    ...kr,
    ...okr,
    ...user,
    ...middlewareNotify,

]

export default middleware;
