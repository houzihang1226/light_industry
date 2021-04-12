import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home/home.vue"),
    children: [
      {
        path: "/",
        component: () => import("../views/home.vue"),
      },
      // 代理商管理
      {
        path: "/agent",
        name: "agent",
        component: () => import("../views/agent/agent.vue"),
        meta: { title: "代理商" },
      },
      {
        path: "/class",
        name: "class",
        component: () => import("../views/agent/class.vue"),
        meta: { title: "推广课程" },
      },
      {
        path: "/record",
        name: "record",
        component: () => import("../views/agent/record.vue"),
        meta: { title: "推广记录" },
      },
      {
        path: "/drawal",
        name: "drawal",
        component: () => import("../views/agent/drawal.vue"),
        meta: { title: "提现记录" },
      },
      {
        path: "/sign",
        name: "sign",
        component: () => import("../views/agent/sign.vue"),
        meta: { title: "报名管理" },
      },
      // 系统管理
      {
        path: "/organ",
        name: "organ",
        component: () => import("../views/system/organ.vue"),
        meta: { title: "组织管理" },
      },
      {
        path: "/role",
        name: "role",
        component: () => import("../views/system/role.vue"),
        meta: { title: "角色管理" },
      },
      {
        path: "/user",
        name: "user",
        component: () => import("../views/system/user.vue"),
        meta: { title: "用户管理" },
      },
      {
        path: "/setsys",
        name: "setsys",
        component: () => import("../views/system/setsys.vue"),
        meta: { title: "系统管理" },
      },
      {
        path: "/syslog",
        name: "syslog",
        component: () => import("../views/system/syslog.vue"),
        meta: { title: "系统日志" },
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
