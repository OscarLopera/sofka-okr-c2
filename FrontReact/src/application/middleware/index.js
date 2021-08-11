import calendar from './calendar/calendarMiddleware';
import user from './administration/user';
<<<<<<< HEAD
import middlewareNotify from "./notifications/notificacionsMiddleware";

export default [
    ...user,
    ...middlewareNotify,
=======
const middleware =[
    ...calendar,
    ...user
>>>>>>> a7953e8192c5fa4f908e761a9464a8c4bfc2ae97
]
export default middleware