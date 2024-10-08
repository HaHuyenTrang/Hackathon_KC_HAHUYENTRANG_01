import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/form",
      alias: ["/form"],
      component: import(
        /*webpackChunkName: "form"*/ "@/components/Form.vue"
      ),
      name: "form",
    },
    {
      path: "/dashboard",
      alias: ["/admin"],
      component: import(
        /*webpackChunkName: "dashboard"*/ "@/components/Dashboard.vue"
      ),
      name: "dashboard",
      children: [
        {
          path: "manager-product",
          component: import(
            /*webpackChunkName: "managerProduct"*/ "@/components/ManagerProduct.vue"
          ),
          name: "managerProduct",
        },
        {
            path: "manager-category",
            component: import(
              /*webpackChunkName: "managerCategory"*/ "@/components/ManagerCategory.vue"
            ),
            name: "managerCategory",
          },

      ],
    },
  ],
});
export default router;
