import okr from './okr/okrApi/index';
import kr from './okr/krApi/index';
import user from './administration';
import notifications from "./notifications";
import dashboard from './dashboard/index'

const api = {
    okr,
    kr,
    user,
    notifications,
    dashboard
}

export default api
