<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';
import { RouterLink } from 'vue-router';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';
import 'flowbite';

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const softwareMenu = ref(null);
const softwareDetails = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}softwareMenuInfo`);
    softwareMenu.value = response.data;

    softwareDetails.value = softwareList.find(item => item.slug === route.params.slug);

    console.log('Data fetched successfully:', softwareMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const websiteMenu = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}websiteMenuItemInfo`);
    websiteMenu.value = response.data;
    console.log('Data fetched successfully:', websiteMenu.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const navbarContent = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}mobileNavbarContentInfo`);
    navbarContent.value = response.data;
    console.log('Navbar Content fetched successfully:', navbarContent.value);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const socialMedia = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}socialMediaInfo`);
        socialMedia.value = response.data.data[0]; // Access the first object inside the data array
        console.log('Footer Location Data fetched successfully:', socialMedia.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const router = useRouter();
const activeDropdown = ref(null);

const toggleDropdown = (dropdownId) => {
  activeDropdown.value = activeDropdown.value === dropdownId ? null : dropdownId;
};

const closeDropdown = () => {
  activeDropdown.value = null;
};

// Close dropdown when navigating to a new route
router.afterEach(() => {
  closeDropdown();
});
</script>

<template>
  <nav class="md:flex lg:hidden sm:block bg-white z-50 fixed w-full p-2 top-0 h-auto">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto py-2">


      <div class="block space-y-4 md:flex md:space-y-0 md:space-x-4 md:rtl:space-x-reverse">
        <button @click="toggleMobileMenu"
          class="block w-full md:w-auto  text-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center sm:text-justify"
          type="button">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
      
      <RouterLink to="/" class="logo-container animate-left-to-right md:ml-96 float-right">
        <img src="../assets/logo/logo.png" alt="Doofazit-Logo" />
      </RouterLink>
      <RouterLink to="/contact" class="float-right text-sm text-[#fff] font-medium py-1 px-2 bg-[#43aedf] rounded-lg">
        Contact
      </RouterLink>

        
      <!-- =================================modal========================== -->
      <div v-show="isMobileMenuOpen" tabindex="-1"
        class="animate-left-to-right fixed top-0 left-0 right-0 z-50 w-[300px] overflow-x-hidden overflow-scroll max-h-full h-full">
        <div class="relative max-w-2xl sm:max-w-[300px] max-h-full h-full">
          <!-- Modal content -->
          <div class="content relative bg-white shadow h-full">
            <!-- Modal header -->
            <div class="bg-gray-50 flex items-center justify-between p-4 sm:p-0 md:p-5 border-b rounded-t">
              <a href="#" class="logo-container animate-right-to-left">
                <img src="../assets/logo/logo.png" class="w-auto" alt="Doofazit-Logo" />
              </a>
              <button type="button" @click.away="closeMobileMenu"
                class="text-gray-400 hover:bg-gray-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="top-left-modal" style="border: 2px solid #48a1da;">
                <svg class="w-3 h-3 text-red-600 font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>

            <!-- Modal footer -->
            <ul class="animate-left-to-right flex flex-col font-medium h-auto p-4 sm:p-0 md:p-0 mt-4 md:space-x-8 sm:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-300">
              <!-- ===================================Company================================ -->
              <button
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                @click="toggleDropdown('company')"
              >
                <span class="flex-1 ms-3 text-left hover:text-[#48a1da] rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">
                  Company
                </span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <ul v-if="activeDropdown === 'company'" @click.away ="closeMobileMenu" class="py-2">
                <li @click="closeDropdown">
                  <RouterLink to="/DoofazITLimited-founder-message" class="block px-4 py-2 hover:bg-gray-100">
                    <i class="fa-solid fa-paper-plane text-red-500"></i> Message From Founder
                  </RouterLink>
                </li>
                <li @click="closeDropdown">
                  <RouterLink to="/DoofazITLimited-Profile" class="block px-4 py-2 hover:bg-gray-100">
                    <i class="fa-solid fa-paper-plane text-red-500"></i> Company Profile
                  </RouterLink>
                </li>
                <li @click="closeDropdown">
                  <RouterLink to="/Client" class="block px-4 py-2 hover:bg-gray-100">
                    <i class="fa-solid fa-paper-plane text-red-500"></i> Our Happy Client
                  </RouterLink>
                </li>
                <li @click="closeDropdown">
                  <RouterLink to="/Doofaz-Group" class="block px-4 py-2 hover:bg-gray-100">
                    <i class="fa-solid fa-paper-plane text-red-500"></i> Project
                  </RouterLink>
                </li>
              </ul>
              <!-- ===================================Company End================================ -->

              <!-- Software Dropdown -->
              <button @click="toggleDropdown('software')" class="flex items-center w-full sm:w-32 p-2 sm:p-0 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">Software</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <ul v-if="activeDropdown === 'software'" @click.self="closeDropdown" @click.away ="closeMobileMenu" class="py-2 space-y-2">
                <span v-if="softwareMenu && softwareMenu.data">
                  <li v-for="menu in softwareMenu.data" :key="menu.id" class="w-full">


                    
                    <RouterLink :to="`/software-details/${menu.slug}`" class="w-full" @click="closeDropdown">
                      <i class="fa-solid fa-paper-plane text-red-500"></i>
                      {{ menu.name }}
                    </RouterLink>
                  </li>
                </span>
              </ul>

        
              <!-- Website Dropdown -->
              <button 
                type="button"
                @click="toggleDropdown('website')" 
                class="flex items-center w-full sm:w-32 p-2 sm:p-0 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              >
                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">Website</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>

              <ul 
                v-if="activeDropdown === 'website'" 
                @click.self="closeDropdown" 
                @click.away ="closeMobileMenu"
                id="dropdownNavbarwe" 
                class="py-2 space-y-2"
              >
                <span v-if="websiteMenu && websiteMenu.data">
                  <li v-for="menu in websiteMenu.data" :key="menu.id" class="w-full py-1">
                    <RouterLink :to="`/website-details/${menu.slug}`" class="w-full" @click="closeDropdown">
                      <i class="fa-solid fa-paper-plane text-red-500"></i>
                      {{ menu.name }}
                    </RouterLink>
                  </li>
                </span>
              </ul>

              <!-- ===================================Website End================================ -->

              <!-- <button type="button" @click.away="closeMobileMenu"
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
                <ul>
                  <li class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">
                    <RouterLink to="/payment"
                      class="block text-gray-900 hover:text-[#48a1da] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-bold text-xl">
                      Payment
                    </RouterLink>
                  </li>
                </ul>
              </button> -->

              <button type="button" @click.away="closeMobileMenu"
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 group hover:bg-gray-100">
                <ul>
                  <li class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">
                    <RouterLink to="/Info-Tech-Blog"
                      class="block -mt-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 font-bold lg:text-lg">
                      Blog
                    </RouterLink>
                  </li>
                </ul>
              </button>


              <button type="button" @click.away="closeMobileMenu"
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 group hover:bg-gray-100 border-b-2 border-dotted border-black">
                <ul>
                  <li class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">
                    <RouterLink to="/contact"
                      class="block -mt-1 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 font-bold lg:text-lg">
                      Contact
                    </RouterLink>
                  </li>
                </ul>
              </button>
            </ul>

            <div class="mx-3 pb-3">
              <template v-if="navbarContent && navbarContent.data.length">
                <template v-for="item in navbarContent.data" :key="item.id">
                  <img
                    v-if="item.type === 'image' && item.image"
                    :src="IMG + item.image"
                    class="rounded"
                    alt="Navbar Content Image"
                  />
                  <iframe
                    v-else-if="item.type === 'video' && item.videoLink"
                    :src="item.videoLink"
                    class="rounded"
                    frameborder="0"
                    width="270"
                    allowfullscreen
                  ></iframe>
                </template>
              </template>
            </div>

            <div class="mx-5 py-5">
              <ul class="inline-flex gap-4">
                  <li v-if="socialMedia && socialMedia.whatsappLink">
                      <a :href="socialMedia.whatsappLink" target="_blank">
                          <i class="fa-brands fa-whatsapp lg:text-[35px] text-[24px] text-black"></i>
                      </a>
                  </li>
                  <li v-if="socialMedia && socialMedia.twitterLink">
                      <a :href="socialMedia.twitterLink" target="_blank">
                          <i class="fa-brands fa-twitter lg:text-[35px] text-[24px] text-black"></i>
                      </a>
                  </li>
                  <li v-if="socialMedia && socialMedia.linkedinLink">
                      <a :href="socialMedia.linkedinLink" target="_blank">
                          <i class="fa-brands fa-linkedin-in lg:text-[35px] text-[24px] text-black"></i>
                      </a>
                  </li>
                  <li v-if="socialMedia && socialMedia.facebookLink">
                      <a :href="socialMedia.facebookLink" target="_blank">
                          <i class="fa-brands fa-facebook lg:text-[35px] text-[24px] text-black"></i>
                      </a>
                  </li>
                  <li v-if="socialMedia && socialMedia.youtubeLink">
                      <a :href="socialMedia.youtubeLink" target="_blank">
                          <i class="fa-brands fa-youtube lg:text-[30px] text-[24px] text-black"></i>
                      </a>
                  </li>
              </ul>
          </div>
          </div>
        </div>
      </div>
      <!-- ========================Modal End=======================-->
    </div>
  </nav>

</template>

<style scoped>
.content{
  border: 5px solid black;
  background: #48a1da;
}

@keyframes slideFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
#default-tabone li a {
  background-image: linear-gradient(to right, #ffffff 0%, #b3f5d6 100%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
}
#default-tabone li a:hover {
  background-position: -100% 0;
}

#default-tab li a {
  background-image: linear-gradient(to right, #ffffff 0%, #b3f5d6 100%);
  background-size: 200% 100%;
  transition: background-position 0.5s ease;
}
#default-tab{
  border-radius: 10px;
  border: 1px solid rgb(3, 154, 201);
}
#default-tab li a:hover {
  background-position: -100% 0;
}
.animate-left-to-right {
    animation: slideFromLeft 1s ease;
}

.animate-right-to-left { 
    animation: rightToLeftAnimation 1s ease-in-out;
}

@keyframes rightToLeftAnimation {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

  .hot-line span i{
    color: red;
  }
  .hot-line span i:hover{
    zoom: 1.2;
  }
  .text-green-500 {
    margin-left: 25px 
  }
  #mega-menu-dropdown{
    border-top: 4px solid #2eb71e;
  }
@media all and (min-width:320px) and (max-width:780px){
  .hot-line{
    display:none;
  }
  .text-white {
    display: none;
  }
  #mega-menu-dropdown{
  width: 95%;
    border-top: 4px solid #2eb71e;
  }
}
</style>