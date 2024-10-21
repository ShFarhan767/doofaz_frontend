<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import mobileNavbar from './mobileNavbar.vue';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';
import 'flowbite';


const data = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}SEOPlugin`);
    data.value = response.data;
    console.log('Data fetched successfully:', data.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});


const softwareMenu = ref(null);
const itemsPerColumn = 6; // Adjust the number of items per column here

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}softwareMenuInfo`);
    softwareMenu.value = response.data;
    console.log('Data fetched successfully:', softwareMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Function to split data into columns
const splitIntoColumns = (data, itemsPerColumn) => {
  const columns = [];
  for (let i = 0; i < data.length; i += itemsPerColumn) {
    columns.push(data.slice(i, i + itemsPerColumn));
  }
  return columns;
};

// Computed property to dynamically split data into columns
const columns = computed(() => {
  if (softwareMenu.value && softwareMenu.value.data) {
    return splitIntoColumns(softwareMenu.value.data, itemsPerColumn);
  }
  return [];
});

const websiteMenu = ref(null);
const itemsPerColumns = 6; // Adjust the number of items per column here

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}websiteMenuItemInfo`);
    websiteMenu.value = response.data;
    console.log('Data fetched successfully:', websiteMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const webSplitIntoColumns = (data, itemsPerColumns) => {
  const webColumns = [];
  for (let i = 0; i < data.length; i += itemsPerColumns) {
    webColumns.push(data.slice(i, i + itemsPerColumns));
  }
  return webColumns;
};

// Computed property to dynamically split data into columns
const webColumns = computed(() => {
  if (websiteMenu.value && websiteMenu.value.data) {
    return webSplitIntoColumns(websiteMenu.value.data, itemsPerColumns);
  }
  return [];
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownContainers = [
    {
      buttonId: 'mega-menu-dropdown-buttontb',
      dropdownId: 'mega-menu-dropdowntb',
      containerId: 'dropdown-container-software'
    },
    {
      buttonId: 'mega-menu-dropdown-buttontb1',
      dropdownId: 'mega-menu-dropdowntb1',
      containerId: 'dropdown-container-website'
    }
  ];

  dropdownContainers.forEach(({ buttonId, dropdownId, containerId }) => {
    const dropdownButton = document.getElementById(buttonId);
    const dropdownMenu = document.getElementById(dropdownId);
    const dropdownContainer = document.getElementById(containerId);
    let hideTimeout;

    // Show dropdown on hover
    dropdownContainer.addEventListener('mouseenter', function () {
      clearTimeout(hideTimeout);  // Cancel any hide timeouts if hovering again
      dropdownMenu.classList.remove('hidden');
      dropdownMenu.classList.add('block');  // Show dropdown
    });

    // Hide dropdown 2 seconds after leaving the button or dropdown
    dropdownContainer.addEventListener('mouseleave', function () {
      hideTimeout = setTimeout(function () {
        dropdownMenu.classList.remove('block');
        dropdownMenu.classList.add('hidden');
      }, 500);  // 2 second delay before hiding
    });
  });
});


const Navbar = [
  {
    // Image: "/assets/logo-DeIE9hVQ.png",
    founder: "Message From Founder",
    Company: "Company Profile",
    Happy: "Our Happy Client",
    Project: "Our Project",
    Erp: "ERP-Solution's",
    Inventory: "Inventory Software",
    Accounting: "Accounting Software",
    Point: "Point Of sales (POS)",
    Crm: "CRM Software",
    customize: "customize Software",
    number: "01969912221",
    helpline: "Need any help ?",
    hrtitle: "HR Manager",
    hrtext: "Human Resource Management",
    erptext: "Business ERP Solution / Company Management",
    mstore: "M-Store",
    mstoretext: "Multi-Store Inventory Management",
    Wholesale: "Wholesale",
    Management: "Inventory Management System",
    Survey: "Survey System Develop",
    Business: "Business Data Monitoring"
  }
]

// ===============dropdown menu close End==================
</script>

<template>
  <mobileNavbar></mobileNavbar>

  <nav id="myNavbar" class="hidden lg:block bg-white z-40 lg:fixed w-full p-2 top-0 h-auto">
    <div v-for="(navbars, index) in Navbar" :key="index"
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto lg:p-2">
      <RouterLink v-if="data && data.data" to="/">
        <span v-for="(nav, index) in data.data" :key="index" :title="nav.logoAltTag"
          class="flex items-center space-x-3 rtl:space-x-reverse ml-12">
          <img :src="IMG + nav.logoUrl" class="logo lg:w-[250px]" :alt="nav.logoAltTag" />
        </span>
      </RouterLink>
      <button data-collapse-toggle="navbar-dropdown" type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 md:hidden"
        aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdownd">
        <ul
          class="flex flex-col lg:font-semibold lg:text-lg p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>

            <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover"
              class="text-[black] hover:text-[#48a1da] text-[22px] font-[600] text-center inline-flex items-center"
              type="button">Company <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <!-- Dropdown menu -->
            <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
              <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
                <li>
                  <RouterLink to="/Message">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:text-[#48a1da] text-base">{{
                      navbars.founder }}</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/Company">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:text-[#48a1da] text-base">{{
                      navbars.Company }}</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/Client">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:text-[#48a1da] text-base">{{
                      navbars.Happy }}</a>
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/project">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:text-[#48a1da] text-base">{{
                      navbars.Project }}</a>
                  </RouterLink>
                </li>
              </ul>
            </div>

          </li>
          <!-- Software Dropdown -->
          <li class="relative group" id="dropdown-container-software">
            <button id="mega-menu-dropdown-buttontb"
              class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 lg:font-semibold lg:text-[22px]">
              Software
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div id="mega-menu-dropdowntb"
               class="absolute z-10 grid hidden lg:w-auto lg:-ml-40 text-sm bg-black rounded-lg shadow-md transition-opacity duration-1000">
              <!-- Dropdown content -->
              <div class="pb-0 mx-5 text-[#000] grid grid-flow-col">
                <div class="md:flex">
                  <div v-for="(column, colIndex) in columns" :key="colIndex"
                    class="lg:w-60 lg:text-base flex-column space-y space-y-4 text-sm font-medium text-[#000] md:me-4 mb-4 md:mb-0">
                    <ul id="default-tab" data-tabs-toggle="#default-tab-content">
                      <li v-for="(menu, index) in column" :key="index" role="presentation">
                        <RouterLink :to="menu.link"
                          class="ECommerceVue inline-block p-2 text-[#fff] hover:text-[#48a1da] font-medium w-full text-justify"
                          id="Business-tab1" data-tabs-target="#Business1" type="button" role="tab"
                          aria-controls="Business" aria-selected="false">
                          {{ menu.name }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <!-- Website Dropdown -->
          <li class="relative group" id="dropdown-container-website">
            <button id="mega-menu-dropdown-buttontb1"
              class="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 lg:font-semibold lg:text-[22px]">
              Website
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div id="mega-menu-dropdowntb1"
              class="absolute z-10 grid hidden lg:w-auto lg:ml-0 text-sm bg-black rounded-lg shadow-md transition-opacity duration-1000">
              <!-- Dropdown content -->
              <div class="p-5 pb-0 text-[#000] md:pb-5">
                <div class="md:flex">
                  <div v-for="(columns, colIndex) in webColumns" :key="colIndex"
                    class="lg:w-60 lg:text-base flex-column space-y space-y-4 text-sm font-medium text-[#000] md:me-4 mb-4 md:mb-0">
                    <ul id="default-tab" data-tabs-toggle="#default-tab-content">
                      <li v-for="(menu, index) in columns" :key="index" class="py-2" role="presentation">
                        <RouterLink :to="menu.link"
                          class="ECommerceVue inline-block p-2 border-2 text-[#fff] font-medium w-full text-justify"
                          id="Business-tab1" data-tabs-target="#Business1" type="button" role="tab"
                          aria-controls="Business" aria-selected="false">
                          {{ menu.name }}
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- =================================Website End========================== -->
          <li>
            <RouterLink to="/payment"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 font-semibold lg:text-[22px]">
              Payment
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/blog"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 font-semibold lg:text-[22px]">
              Blog
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="hot-line">
        <a href="#" class="text-xl text-[#48a1da]"><span><i class="fa-solid fa-phone-volume text-[#48a1da]"></i></span>
          {{ navbars.helpline }}</a>
        <h2 class="text-[20px] ml-[20px] font-[600]">{{ navbars.number }}</h2>
      </div>

      <div
        class="block text-white bg-[#48a1da] font-medium rounded-lg text-sm px-4 py-2 text-center object-none w-28 h-9">
        <ul>
          <li>
            <RouterLink to="/contact"
              class="block py-4 px-5 -mt-1 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 font-semibold lg:text-lg">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>

    </div>

  </nav>



  <!-- ==================media======================= -->


  <div data-dial-init class="fixed end-2 bottom-10 group z-30 lg:ml-0" id="speed-dial-container">
    <div id="speed-dial-menu-vertical" class="flex flex-col items-center mb-4 space-y-2">
      <!-- ============whatsapp============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a href="https://web.whatsapp.com/" target="_blank"><i
            class="fa-brands fa-whatsapp lg:text-[35px] text-[28px] text-[#4caf50]"></i></a>
      </button>

      <!-- ============whatsapp End============================ -->
      <!-- ============twitter============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fdoofazit" target="_blank"><i
            class="fa-brands fa-twitter lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>

      <!-- ============twitter End============================ -->
      <!-- ===================linkedin==================== -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a href="https://bd.linkedin.com/" target="_blank"><i
            class="fa-brands fa-linkedin-in lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>
      <!-- ============linkedin End============================ -->
      <!-- ============facebook============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a href="https://www.facebook.com/Doofazit/" target="_blank"><i
            class="fa-brands fa-facebook lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>

      <!-- ============facebook End============================ -->
      <!-- ============youtube============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a href="https://www.youtube.com/@doofazit1478" target="_blank"><i
            class="fa-brands fa-youtube lg:text-[35px] text-[28px] text-[red]"></i></a>
      </button>

      <!-- ============youtube End============================ -->
    </div>

  </div>


  <img src="../assets/Logo/logo.png" class="hidden" alt="">

  <!-- ==================//media======================= -->



</template>
<style scoped>
#default-tab li .ERPSolution {
  background-image: linear-gradient(to right, #ffffff 0%, #48a1da 100%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
  color: black;
}

#default-tab li .ERPSolution:hover {
  background-position: -100% 0;
}

.bg-white {
  background-color: white !important;
}

.logo {
  margin-left: -40px;
}

.hot-line span i:hover {
  zoom: 1.2;
}

.text-green-500 {
  margin-left: 25px
}

#mega-menu-dropdowntb {
  margin-top: 20px !important;
}

#mega-menu-dropdowntb1 {
  margin-top: 20px !important;
}

#dropdownHover {
  width: 220px;
  margin-top: 20px !important;
}

#dropdownNavbarme {
  margin-top: 20px !important;
  margin-left: 5% !important;
}

@keyframes colorTransition {
  0% {
    background-position: 0 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}

.text-animation {
  background-image: linear-gradient(to right, #48a1da, black);
  /* Define gradient colors */
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: colorTransition 1.5s ease infinite;
  /* Set animation */
}
</style>