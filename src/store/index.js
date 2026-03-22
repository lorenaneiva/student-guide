import { createStore } from 'vuex'

export default createStore({
  state: {
      users: [
        {
          id: 1,
          first_name: 'Lorena',
          last_name: 'Neiva'
        },
        {
          id: 2,
          first_name: 'Eduarda',
          last_name: 'Ribeiro'
        },
        {
          id: 3,
          first_name: 'Pedro',
          last_name: 'Damasceno'
        },
        {
          id: 4,
          first_name: 'Camila',
          last_name: 'Costa'
        },
        {
          id: 5,
          first_name: 'Leticia',
          last_name: 'Rocha'
        },
      ],
      user: null
    },
  getters: {
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
