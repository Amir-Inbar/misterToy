/* eslint-disable no-unused-vars */
import {storageService} from './async-storage.service.js'
import {utilService} from './util.service.js'

// const axios = require('axios')
// import Axios from 'axios'; 
import { httpService } from './http.service.js';
// var axios = Axios.create({ withCredentials: true});

const KEY = 'toyDB';
// const TOY_URL = 'http://localhost:3030/api/toy/'

createDemoToys()

export const toyService = {
query,
getById,
remove,
save,
getEmptyToy
}


function query(filterBy) { 
    console.log(filterBy);
    // return axios.get(TOY_URL, {params: filterBy}).then(res => res.data)
    return httpService.get('toy', filterBy)
}

function getById(id) {
    // return axios.get(TOY_URL + id).then(res => res.data)
    return httpService.get(`toy/${id}`)
}
function remove(toyId) {
    // return axios.delete(TOY_URL + toyId, { withCredentials: true }).then(res => res.data)
    return httpService.delete(`toy/${toyId}`)
}

function save(toy) {
    if (toy._id) {
        // return axios.put(TOY_URL, toy).then(res => res.data)
        return httpService.put('toy', toy)
    } else {
        return httpService.post('toy', toy)
        // return axios.post(TOY_URL, toy).then(res => res.data)
    }
}

const labels = ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"]

function createDemoToys() {
    var toys = storageService.load(KEY)
    if (!toys || !toys.length) {
        toys = [ _createToy('amir',100,['On wheels','Art','Doll','Puzzle'],true, '1'),
        _createToy('Wooden Train Whistle (2 Pack)',100,['Box game','Doll','Puzzle'],true, '2'),
        _createToy('Qrooper Outdoor Games Toss',100,['Box game','Doll','Puzzle'],false, '3'),
        _createToy('Ayeboovi Toss and Catch Ball',100,['On wheels','Art','Doll'],true, '1'),
        _createToy('livingcoral Fidget Toy',100,['Box game','Doll','Puzzle'],false, '2'),
        _createToy('Dinosaur Toys for 3 Year Old',100,['On wheels','Art','Doll'],true, '3'),
        _createToy('L.O.L. Surprise Under Wraps',100,['Puzzle','Doll'],true, '1')]
        storageService.postMany(KEY,toys)
    }
    return toys;
}

function _createToy(name,price,labels=[], inStock,url) {
    return {
    _id: utilService.makeId(),
     name,
     price,
     labels,
     createdAt:Date.now(),
     inStock,
     url, 
     reviews:[],
     rate:''
    }
}

function getEmptyToy(url = 3 ) {
    return {
        name:'',
        price:0,
        labels:'',
        createdAt:Date.now(),
        inStock:'',
        url, 
        reviews:[],
        rate:''
    }
}