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
      meta: { title: "Make Your Payment Hassle Free" }, // Title for Home page
    },
    {
      path: "/Info-Tech-Blog",
      name: "blog",
      component: () => import("../views/BlogContentview.vue"),
      meta: { title: "Info Tech Blog | Latest Insights and Updates" },
    },
    {
      path: "/Latest-Blog/:slug",
      name: "blog-details",
      component: () => import("../views/BlogDetailsView.vue"),
    },
    {
      path: "/driver",
      name: "driver",
      component: () => import("../views/DriverView.vue"),
    },
    {
      path: "/Digital-Device/:slug",
      name: "driver-details",
      component: () => import("../views/DriverDetailsView.vue"),
    },
    {
      path: "/category-details/:slug",
      name: "category-details",
      component: () => import("../views/CategoryDetailsView.vue"),
    },
    {
      path: "/:slug",
      name: "software-details",
      component: () => import("../views/SoftwareTypeDetailsView.vue"),
    },
    {
      path: "/Software-Development/:slug",
      name: "software-category",
      component: () => import("../views/SoftwareCategoryView.vue"),
    },
    {
      path: "/website-details/:slug",
      name: "website-details",
      component: () => import("../views/WebsiteTypeDetailsView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactPage.vue"),
      meta: { title: "Contact Us | Get in Touch With Us" },
    },
    {
      path: "/DoofazITLimited-founder-message",
      name: "Message",
      component: () => import("../views/MessageFounderPage.vue"),
      meta: { title: "Founder's Message | Doofaz IT Limited" },
    },
    {
      path: "/Client",
      name: "Client",
      component: () => import("../views/Clientpages.vue"),
      meta: { title: "Our Trusted Clients & Partners | Doofaz IT Limited" },
    },
    {
      path: "/DoofazITLimited-Profile",
      name: "Company",
      component: () => import("../views/CompanyPage.vue"),
      meta: { title: "Doofaz IT Limited | Company Profile Overview" },
    },
    {
      path: "/Doofaz-Group",
      name: "project",
      component: () => import("../views/ProjectPage.vue"),
      meta: { title: "Our Projects | Doofaz Group for a Better Tomorrow" },
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
      path: "/website-development",
      name: "Website-Visual",
      component: () => import("../views/WebsiteVisualView.vue"),
    },
    {
      path: "/googleMap-visual",
      name: "GoogleMap-Visual",
      component: () => import("../views/GoogleMapVisualView.vue"),
    },
    {
      path: "/Landing-Page",
      name: "Landing-Page",
      component: () => import("../views/LandingPageView.vue"),
      meta: { title: "Best Web Design & Development Company" },
    },
  ],
});

// Use a navigation guard to update the document title when the route changes
router.afterEach((to) => {
  // Check if the route has a meta title defined
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router
