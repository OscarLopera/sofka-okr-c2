import user from './administration/user';
import middlewareNotify from "./notifications/notificacionsMiddleware";

export default [
    ...user,
    ...middlewareNotify,
]
