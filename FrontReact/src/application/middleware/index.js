import calendar from './calendar/calendarMiddleware';
import user from './administration/user';
const middleware =[
    ...calendar,
    ...user
]
export default middleware