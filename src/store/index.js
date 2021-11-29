import Vue from 'vue'
import Vuex from 'vuex'

import {toyService} from '../services/toy.service.js'
import {reviewStore} from './review.store'
import {userStore} from './user-store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    toys:[],
    filterBy: {
      name: "",
      stock: "",
      labels: '',
      sortBy: {
        type:'name',
        descending: false
      },
      page:{
        index:0,
        size: 5,
        total:10
      }
    },
    PAGE_SIZE:5
  },
  getters: {
    getPage(state) {
      return state.filterBy.page
    },
    toysToShow(state) {
      return state.toys
    },
    totalToys(state) {
      return state.toys.length
    },
    totalInStock(state) {
      return state.toys.map((toy => toy.inStock))
    },
    totalOutStock(state) {
      return state.toys.map((toy => !toy.inStock))
    },
    allToys(state) {
      return state.toys
    }
  },
  mutations: {
    setToys(state,{filtered}) {
      state.toys = filtered.toys
      state.filterBy.page = filtered.page
      state.filterBy.page.total = filtered.total
      state.filterBy.page.index = filtered.index
      console.log(state.filterBy);
    },
    addToy(state,{saveToy}) {
      state.toys.push(saveToy)
    },
    updateToy(state,{toy}) {
      const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
      state.toys.splice(idx,1,toy)
    },
    removeToy(state,{toyId}) {
      const idx = state.toys.findIndex(currToy => currToy._id === toyId)
      state.toys.splice(idx,1)
    },
    setFilterBy(state,{filterBy}) {
      console.log(filterBy);
      state.filterBy = filterBy 
    },
    setPageIdx(state,{pageIdx}) {
      state.filterBy.page.index = pageIdx - 1
      
    }
  },
  actions: {
    loadToys({commit,state}) {
      return toyService.query(state.filterBy)
        .then((filtered)=> {
          console.log(filtered);
          commit({type:'setToys',filtered})
        })
    },
    addToy({commit},{toy}) {
      return toyService.save(toy)
        .then((saveToy)=> {
          commit({type:'addToy',saveToy})
        })
    },
    updateToy({commit},{toy}) {
      return toyService.save(toy)
        .then(()=> {
          commit({type:'updateToy',toy})
        })
        .catch(()=> {
          console.log('didnt update product');
        })
      },
      removeToy({commit},{toyId}) {
        return toyService.remove(toyId)
        .then(()=> {
          commit({type:'removeToy',toyId})
          
        })
    },
  },
  modules: {
    userStore,
    reviewStore
  }
})
