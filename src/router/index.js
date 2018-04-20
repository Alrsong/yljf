import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import chanpin from '@/components/chanpin'
import home from '@/components/home'
import faxian from '@/components/faxian'
import core from '@/components/core'
import add from '@/components/add'
import tjdz from '@/components/tjdz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },{
      path: '/chanpin',
      name: 'chanpin',
      component: chanpin
    },{
      path: '/home',
      name: 'home',
      component: home
    },{
      path: '/faxian',
      name: 'faxian',
      component: faxian
    },{
      path: '/core',
      name: 'core',
      component: core
    },{
      path: '/add',
      name: 'add',
      component: add
    },{
      path: '/tjdz',
      name: 'tjdz',
      component: tjdz
    }
  ]
})
