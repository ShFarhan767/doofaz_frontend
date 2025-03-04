<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from "vue-router";
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

const softwareMenu = ref([]);  // Initialize as an empty array to avoid the error
const route = useRoute();
const softwareDetails = ref(null);
const itemsPerColumn = 10; // Adjust the number of items per column here

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}softwareMenuInfo`);
    
    // Check if the response has the expected structure and if it contains the 'data' property
    if (response.data && Array.isArray(response.data.data)) {
      softwareMenu.value = response.data.data;

      // Find software details by slug
      softwareDetails.value = softwareMenu.value.find(item => item.slug === route.params.slug);

      // Dynamically update the title if the software details exist
      if (softwareDetails.value) {
        document.title = softwareDetails.value.metaTitle || "Default Title";
      }
    } else {
      console.error('Response data is not in the expected format:', response.data);
    }

    console.log('Data fetched successfully:', softwareMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Watch for route changes and update the title accordingly
watch(() => route.params.slug, (newSlug) => {
  const currentSoftware = softwareMenu.value.find(item => item.slug === newSlug);
  if (currentSoftware) {
    document.title = currentSoftware.metaTitle || "Default Title";
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
  if (softwareMenu.value && softwareMenu.value.length > 0) {
    return splitIntoColumns(softwareMenu.value, itemsPerColumn);
  }
  return [];
});

// For Website Menu
const websiteMenu = ref([]);  // Initialize as an empty array
const websiteDetails = ref(null);
const itemsPerColumns = 10; // Adjust the number of items per column here

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}websiteMenuItemInfo`);

    if (response.data && Array.isArray(response.data.data)) {
      websiteMenu.value = response.data.data;

      // Find website details by slug
      websiteDetails.value = websiteMenu.value.find(item => item.slug === route.params.slug);

      // Dynamically update the title if the website details exist
      if (websiteDetails.value) {
        document.title = websiteDetails.value.metaTitle || "Default Title";
      }
    } else {
      console.error('Response data is not in the expected format:', response.data);
    }

    console.log('Data fetched successfully:', websiteMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

// Watch for route changes and update the title accordingly
watch(() => route.params.slug, (newSlug) => {
  const currentWebsite = websiteMenu.value.find(item => item.slug === newSlug);
  if (currentWebsite) {
    document.title = currentWebsite.metaTitle || "Default Title";
  }
});

// Function to split data into columns
const webSplitIntoColumns = (data, itemsPerColumns) => {
  const webColumns = [];
  for (let i = 0; i < data.length; i += itemsPerColumns) {
    webColumns.push(data.slice(i, i + itemsPerColumns));
  }
  return webColumns;
};

// Computed property to dynamically split data into columns
const webColumns = computed(() => {
  if (websiteMenu.value && websiteMenu.value.length > 0) {
    return webSplitIntoColumns(websiteMenu.value, itemsPerColumns);
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

    // Hide dropdown when mouse leaves the container
    dropdownContainer.addEventListener('mouseleave', function () {
      hideTimeout = setTimeout(function () {
        dropdownMenu.classList.remove('block');
        dropdownMenu.classList.add('hidden');
      }, 100);  // Short delay before hiding
    });

    // Toggle dropdown on button click
    dropdownButton.addEventListener('click', function (event) {
      event.stopPropagation();  // Prevent the click from propagating to document
      const isHidden = dropdownMenu.classList.contains('hidden');
      closeAllDropdowns();  // Close all dropdowns before toggling the current one

      if (isHidden) {
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.classList.add('block');  // Open dropdown if it's hidden
      } else {
        dropdownMenu.classList.remove('block');
        dropdownMenu.classList.add('hidden');  // Close dropdown if it's visible
      }
    });

    // Hide dropdown when clicking on any dropdown item
    dropdownMenu.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', function () {
        dropdownMenu.classList.remove('block');
        dropdownMenu.classList.add('hidden');  // Close dropdown when clicking on menu item
      });
    });
  });

  // Close all dropdowns when clicking outside
  document.addEventListener('click', function () {
    closeAllDropdowns();
  });

  // Function to close all dropdowns
  function closeAllDropdowns() {
    dropdownContainers.forEach(({ dropdownId }) => {
      const dropdownMenu = document.getElementById(dropdownId);
      dropdownMenu.classList.remove('block');
      dropdownMenu.classList.add('hidden');
    });
  }
});

// active========================
document.addEventListener('DOMContentLoaded', function () {
  // Software dropdown button and menu
  const dropdownBtnSoftware = document.getElementById('mega-menu-dropdown-buttontb');
  const dropdownMenuSoftware = document.getElementById('mega-menu-dropdowntb');

  // Website dropdown button and menu
  const dropdownBtnWebsite = document.getElementById('mega-menu-dropdown-buttontb1');
  const dropdownMenuWebsite = document.getElementById('mega-menu-dropdowntb1');

  // Toggle dropdown and active state for Software menu
  dropdownBtnSoftware.addEventListener('click', function () {
    dropdownMenuSoftware.classList.toggle('hidden');
    dropdownBtnSoftware.classList.toggle('active');
  });

  // Toggle dropdown and active state for Website menu
  dropdownBtnWebsite.addEventListener('click', function () {
    dropdownMenuWebsite.classList.toggle('hidden');
    dropdownBtnWebsite.classList.toggle('active');
  });

  // Close dropdown when clicked outside
  document.addEventListener('click', function (event) {
    if (!dropdownBtnSoftware.contains(event.target) && !dropdownMenuSoftware.contains(event.target)) {
      dropdownMenuSoftware.classList.add('hidden');
      dropdownBtnSoftware.classList.remove('active');
    }
    if (!dropdownBtnWebsite.contains(event.target) && !dropdownMenuWebsite.contains(event.target)) {
      dropdownMenuWebsite.classList.add('hidden');
      dropdownBtnWebsite.classList.remove('active');
    }
  });
});

const socialMedia = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}socialMediaInfo`);
        socialMedia.value = response.data;
        console.log('Footer Location Data fetched successfully:', socialMedia.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const numbers = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeHelplineNumbersInfo`);
        // Filter data based on homepageShowStatus
        numbers.value = {
            ...response.data,
            data: response.data.data.filter(item => item.homepageShowStatus === 'enable')
        };
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
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
              class="router ease-in-out transition-all text-[black] hover:text-[#48a1da] text-[22px] font-[600] text-center inline-flex items-center"
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
                  <RouterLink to="/DoofazITLimited-founder-message">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 hover:text-[#48a1da] text-base">{{
                      navbars.founder }}</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/DoofazITLimited-Profile">
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
                  <RouterLink to="/Doofaz-Group">
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
              class="router ease-in-out transition-all flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 lg:font-semibold lg:text-[22px]">
              Software
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div id="mega-menu-dropdowntb"
              class="absolute hidden z-10 lg:w-auto lg:-ml-40 text-sm bg-[#fff] rounded-lg shadow-lg pr-5"
              style="width: auto">

              <!-- Dropdown content -->
              <div class="pb-0 mx-5 text-[#000]">
                <div class="md:flex py-4">
                  <div v-for="(column, colIndex) in columns" :key="colIndex"
                    class="lg:text-base w-full space-y space-y-4 text-sm font-medium text-[#000] md:me-4 mb-4 md:mb-0">
                    <ul id="default-tab" data-tabs-toggle="#default-tab-content" class="lg:w-[260px] grid grid-cols-1">
                      <!-- 10 columns with 20px gap -->

                      <!-- Dynamic menu items with fit-content width adjustments -->
                      <li v-for="(menu, index) in column" :key="index" role="presentation">
                        <RouterLink :to="`/${menu.slug}`"
                          class="ECommerceVue inline-block leading-6 py-[5px] text-gray-700 hover:text-[#48a1da] font-[600]"
                          id="Business-tab1" data-tabs-target="#Business1" type="button" role="tab"
                          aria-controls="Business" aria-selected="false"
                          style="width: fit-content; min-width: 100px; max-width: 300px; overflow: hidden;">
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
              class="router ease-in-out flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 lg:font-semibold lg:text-[22px]">
              Website
              <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 4 4 4-4" />
              </svg>
            </button>
            <div id="mega-menu-dropdowntb1"
              class="absolute hidden z-10 lg:w-auto lg:-ml-40 text-sm bg-[#fff] rounded-lg shadow-lg duration-100 pr-5"
              style="width: auto">
              <!-- Dropdown content -->
              <div class="pb-0 mx-5 text-[#000]">
                <div class="md:flex">
                  <div v-for="(columns, colIndex) in webColumns" :key="colIndex"
                    class="lg:w-full lg:text-base flex-column space-y space-y-4 text-sm py-4 font-medium text-[#000] md:me-4 mb-4 md:mb-0">
                    <ul id="default-tab" data-tabs-toggle="#default-tab-content"
                      class="lg:w-[100%] w-auto grid grid-cols-1 gap-x-20">
                      <li v-for="(menu, index) in columns" :key="index" class="" role="presentation">
                        <RouterLink :to="`/website-details/${menu.slug}`"
                          class="ECommerceVue inline-block leading-6 py-[5px] text-gray-700 hover:text-[#48a1da] font-[600] w-full text-justify"
                          id="Business-tab1" data-tabs-target="#Business1" type="button" role="tab"
                          aria-controls="Business" aria-selected="false"
                          style="width: fit-content; min-width: 100px; max-width: 300px; white-space: nowrap; overflow: hidden;">
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
              class="router block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 font-semibold lg:text-[22px]">
              Landing Page
            </RouterLink>
          </li>
          <!-- <li>
            <RouterLink to="/payment"
              class="router block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 font-semibold lg:text-[22px]">
              Payment
            </RouterLink>
          </li> -->
          <li>
            <RouterLink to="/Info-Tech-Blog"
              class="router block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-[#48a1da] md:p-0 font-semibold lg:text-[22px]">
              Blog
            </RouterLink>
          </li>
        </ul>
      </div>

      <div v-if="numbers && numbers.data" class="hot-line flex-wrap justify-center items-center">
        <div
        class="block text-white bg-[#48a1da] font-medium rounded-lg text-sm px-4 py-2 text-center object-none w-28 h-9 ml-5">
        <ul>
          <li>
            <RouterLink to="/contact"
              class="router block py-4 px-5 -mt-1 text-[#fff] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 font-semibold lg:text-lg">
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
        <h2 v-for="(number , index) in numbers.data" :key="index" class="text-[20px] ml-[20px] font-[600]">{{ number.number }}</h2>
      </div>

    </div>

  </nav>



  <!-- ==================media======================= -->


  <div v-if="socialMedia && socialMedia.data" data-dial-init class="fixed end-2 bottom-10 group z-30 lg:ml-0" id="speed-dial-container">
    <div v-for="(social , index) in socialMedia.data" :key="index" id="speed-dial-menu-vertical" class="flex flex-col items-center mb-4 space-y-2">
      <!-- ============whatsapp============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a :href="social.whatsappLink" target="_blank"><i
            class="fa-brands fa-whatsapp lg:text-[35px] text-[28px] text-[#4caf50]"></i></a>
      </button>

      <!-- ============whatsapp End============================ -->
      <!-- ============twitter============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a :href="social.twitterLink" target="_blank"><i
            class="fa-brands fa-twitter lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>

      <!-- ============twitter End============================ -->
      <!-- ===================linkedin==================== -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a :href="social.linkedinLink" target="_blank"><i
            class="fa-brands fa-linkedin-in lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>
      <!-- ============linkedin End============================ -->
      <!-- ============facebook============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a :href="social.facebookLink" target="_blank"><i
            class="fa-brands fa-facebook lg:text-[35px] text-[28px] text-[#48a1da]"></i></a>
      </button>

      <!-- ============facebook End============================ -->
      <!-- ============youtube============================ -->
      <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left"
        class="flex justify-center items-center lg:w-[52px] lg:h-[52px] w-[40px] h-[40px] text-gray-500 hover:text-gray-900 bg-[#fff] rounded-full border">
        <a :href="social.youtubeLink" target="_blank"><i
            class="fa-brands fa-youtube lg:text-[35px] text-[28px] text-[red]"></i></a>
      </button>

      <!-- ============youtube End============================ -->
    </div>

  </div>


  <img src="../assets/Logo/logo.png" class="hidden" alt="">

  <!-- ==================//media======================= -->



</template>
<style scoped>
button.active {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.active {
  color: #48a1da;
}

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
  width: auto;
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