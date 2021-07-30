import Vuex from 'vuex'

import { configRouter } from '../router/router'

const store = Vuex.createStore({
    state: {
        sideBarRoutes: configRouter
    }
})

export default store