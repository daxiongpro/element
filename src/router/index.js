import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Button from "../components/Button";
import ButtonDetail from "../components/ButtonDetail";
import Link from "../components/Link";
import Layout from "../components/Layout";
import Container from "../components/Container";
import Container_demo from "../components/Container_demo";
import test from "../components/test";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/button', component: Button },
    { path: '/buttondetail', component: ButtonDetail },
    { path: '/link', component: Link },
    { path: '/layout', component: Layout },
    { path: '/container', component: Container },
    { path: '/container_demo', component: Container_demo },
    { path: '/test', component: test }
  ]
})
