import okr from '../middleware/okr/okr'
import kr from '../middleware/okr/KrMiddleware'

const middleware = [

    ...kr,
    ...okr,

]

export default middleware;