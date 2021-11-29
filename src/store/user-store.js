import Vue from 'vue'
import Vuex from 'vuex'

import {userService} from '../services/user.service'
import {authService} from '../services/auth.service'

Vue.use(Vuex)

export const userStore = {
  strict:true,
  state: {
    loggedinUser: userService.getLoggedinUser(),
    users:[],
    user: {
      nickname:'',
      username:'',
      password:''
    }
  },
  getters: {
    getCurrUser(state) {
      return state.user
    },
    getUsers(state) {
      return state.users
    },
    loggedinUser({ loggedinUser }) { return loggedinUser },

  },
  mutations: {
    // async loadUsers(state) {
    // const users =  await userService.getUsers()
    // state.users.push(users)
      
    // },
    setUser(state,{logUser}) {
      state.user = logUser
    },
    setSignIn(state,{savedUser}) {
      state.user = savedUser
    },
    removeUser(state,{user}) {
      const idx = state.users.findIndex(currUser => currUser._id === user._id)
      state.users.splice(idx,1)
    },
    updateUser(state,{user}) {
      const idx = state.users.findIndex(currUser => currUser._id === user._id)
      state.users.splice(idx,1)
    },
    loadUsers(state,{users}) {
      state.users = users
    }
  },
  actions: {
    setLogin({commit},{user}) {
      console.log(user);
    return authService.login(user)
      .then((logUser)=> {
        commit({type:'setUser',logUser})
        return logUser
      })
    },
    setSignIn({commit},{user}) {
      return authService.signup(user)
      .then((savedUser)=> {
          commit({type:'setSignIn',savedUser})
          return savedUser
        })
      },
      setLogOut({commit}) {
        return authService.logout()
        .then((msg)=> {
          const user = userService.getEmptyUser()
          commit({type:'setUser',user})
          return msg
        })
      },
      removeUser({commit},{userId}) {
        console.log('userId',userId);
        return userService.deleteUser(userId)
        .then((user)=> {
          console.log(user);
            commit({type:'removeUser',user})
            return user
          })
      },
      updateUser({commit},{user}) {
        return userService.updateUser(user)
          .then((user)=> {
            commit({type: 'updateUser',user})
          })
        },
        loadUsers({commit}) {
          return userService.getUsers()
          .then((users)=> {
            commit({type: 'loadUsers',users})
            return users
          })
      }
  },
  modules: {
  }
}
