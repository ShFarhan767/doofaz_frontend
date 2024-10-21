<script setup>
import 'flowbite';
import { ref } from 'vue';
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
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
      
      <a href="http://localhost:5173/" class="logo-container animate-left-to-right md:ml-96 float-right">
        <img src="../assets/logo/logo.png" alt="Doofazit-Logo" />
      </a>
      <button class="float-right text-sm text-[#fff] font-medium py-1 px-2 bg-[#43aedf] rounded-lg">
        Oder Now
      </button>

        
      <!-- =================================modal========================== -->
      <div v-show="isMobileMenuOpen" tabindex="-1"
        class="animate-left-to-right fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto max-h-full">
        <div class="relative max-w-2xl sm:max-w-full max-h-full">
          <!-- Modal content -->
          <div class="content relative bg-white rounded-lg shadow">
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
            <ul
              class="animate-left-to-right flex flex-col font-medium h-auto p-4 sm:p-0 md:p-0 mt-4 md:space-x-8 sm:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-300">
              <!-- ===================================Company================================ -->
              <button type="button"
                class="flex items-center w-full sm:w-32 p-2  text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                aria-controls="dropdownNavbar" data-collapse-toggle="dropdownNavbar">
                <span
                  class="flex-1 ms-3 text-left hover:text-[#48a1da] rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">Company</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul @click.away="closeMobileMenu" id="dropdownNavbar" class="hidden py-2">
                <li>
                  <RouterLink to="/Message">
                    <a href="#" class="block px-4 py-0 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Message From Founder</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/Company">
                    <a href="#" class="block px-4 py-0 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Company Profile</a>
                  </Routerlink>
                </li>
                <li>
                  <a href="#" class="block px-4 py-0 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Technical Area </a>
                </li>
                <li>
                  <RouterLink to="/Client">
                    <a href="#" class="block px-4 py-0 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Our Happy Client</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/Management">
                    <a href="#" class="block px-4 py-0 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Management</a>
                  </RouterLink>
                </li>
                <!-- <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Technical Team</a>
                </li> -->
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Doofaz Training Institute (DTI)</a>
                </li>
              </ul>
              <!-- ===================================Company End================================ -->

              <!-- ===================================softower================================ -->
              <button type="button"
                class="flex items-center w-full sm:w-32 p-2 sm:p-0 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
                aria-controls="dropdownNavbar-sf" data-collapse-toggle="dropdownNavbar-sf">
                <span
                  class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">Software</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul @click.away ="closeMobileMenu" id="dropdownNavbar-sf" class="hidden py-2 space-y-2">
                <li>
                  <RouterLink to="/POS">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Online POS (সব ধরনের ব্যাবসার জন্য) </a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/ECommerceVue">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Business ERP(Completed Solutions) </a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/ERPSolution"> <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Trasnport ERP </a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/Accounting"> <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Accounting/Inventory </a>
                  </RouterLink>
                </li>

                <li>
                  <RouterLink to="/Education"> <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> School Management</a>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/POS">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> সকল দোকান দারদের জন্য(POS) </a>
                  </RouterLink>
                </li>

                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> MLM Software </a>
                </li>
                <li>
                  <RouterLink to="/Tourism"> <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                        class="fa-solid fa-paper-plane text-red-500"></i> Tours & Travels </a>
                  </RouterLink>
                </li>
              </ul>
              <!-- ===================================softower End================================ -->

              <!-- ===================================Website End================================ -->

              <button type="button"
                class="flex items-center w-full sm:w-32 p-2 sm:p-0 text-base text-gray-900 transition duration-75 rounded-lg group  "
                aria-controls="dropdownNavbarwe" data-collapse-toggle="dropdownNavbarwe">
                <span
                  class="flex-1 ms-3 text-left hover:text-[#48a1da] rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">Website</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <ul @click.away="closeMobileMenu" id="dropdownNavbarwe" class="hidden py-2 space-y-2">
                <li>
                  <RouterLink to="/ECommerceVue">
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 "><i
                        class="fa-solid fa-paper-plane text-red-500"></i> E-Commerce Service</a>
                  </RouterLink>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Online News Portal</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Personal Branding Website</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"><i
                      class="fa-solid fa-paper-plane text-red-500"></i> Requirement Based Website </a>
                </li>
              </ul>

              <!-- ===================================Website End================================ -->

              <button type="button" @click.away="closeMobileMenu"
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
                <ul>
                  <li class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap text-lg sm:text-sm font-bold">
                    <RouterLink to="/payment"
                      class="block text-gray-900 hover:text-[#48a1da] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 font-bold text-xl">
                      Payment
                    </RouterLink>
                  </li>
                </ul>
              </button>

              <button type="button" @click.away="closeMobileMenu"
                class="flex items-center w-full sm:w-32 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100">
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