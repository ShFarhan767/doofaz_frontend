import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/payment",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogContentview.vue"),
    },
    {
      path: "/blog-details",
      name: "blog-details",
      component: () => import("../views/BlogDetailsView.vue"),
    },
    {
      path: "/driver",
      name: "driver",
      component: () => import("../views/DriverView.vue"),
    },
    {
      path: "/driver-details",
      name: "driver-details",
      component: () => import("../views/DriverDetailsView.vue"),
    },
    {
      path: "/software-details/:id",
      name: "software-details",
      component: () => import("../views/SoftwareTypeDetailsView.vue"),
    },
    {
      path: "/website-details/:id",
      name: "website-details",
      component: () => import("../views/WebsiteTypeDetailsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactPage.vue"),
    },
    {
      path: "/Message",
      name: "Message",
      component: () => import("../views/MessageFounderPage.vue"),
    },
    {
      path: "/Client",
      name: "Client",
      component: () => import("../views/Clientpages.vue"),
    },
    {
      path: "/Company",
      name: "Company",
      component: () => import("../views/CompanyPage.vue"),
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectPage.vue"),
    },
    {
      path: "/ERPSolution",
      name: "ERPSolution",
      component: () => import("../views/ERP-SolutionPage.vue"),
    },
    {
      path: "/ERPSolutionWeb",
      name: "ERPSolutionWeb",
      component: () => import("../views/WebERPPage.vue"),
    },
    {
      path: "/ECommerceVue",
      name: "ECommerceVue",
      component: () => import("../views/E-commercePage.vue"),
    },
    {
      path: "/RealEstate",
      name: "RealEstate",
      component: () => import("../views/Real-estatePage.vue"),
    },
    {
      path: "/Tourism",
      name: "Tourism",
      component: () => import("../views/TourismPahe.vue"),
    },
    {
      path: "/Traditional",
      name: "Traditional",
      component: () => import("../views/TraditionalPage.vue"),
    },
    {
      path: "/Education",
      name: "Education",
      component: () => import("../views/EducationPage.vue"),
    },
    {
      path: "/Customize",
      name: "Customize",
      component: () => import("../views/CustomizePage.vue"),
    },
    {
      path: "/Inventory",
      name: "Inventory",
      component: () => import("../views/InventoryPage.vue"),
    },
    {
      path: "/Accounting",
      name: "Accounting",
      component: () => import("../views/AccountingPage.vue"),
    },
    {
      path: "/POS",
      name: "Point Of sales",
      component: () => import("../views/PosPage.vue"),
    },
    {
      path: "/CRM",
      name: "CRM Software",
      component: () => import("../views/CrmPage.vue"),
    },
    {
      path: "/website-visual",
      name: "Website-Visual",
      component: () => import("../views/WebsiteVisualView.vue"),
    },
    {
      path: "/googleMap-visual",
      name: "GoogleMap-Visual",
      component: () => import("../views/GoogleMapVisualView.vue"),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router
