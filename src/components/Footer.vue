<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}footerDetailsInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const menu = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}footerMenuInfo`);
        menu.value = response.data;
        console.log('Footer Menu Data fetched successfully:', menu.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const bottomMenu = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}footerBottomMenuInfo`);
        bottomMenu.value = response.data;
        console.log('Footer Bottom Menu Data fetched successfully:', bottomMenu.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const location = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeDetailsInfo`);
        location.value = {
            ...response.data,
            data: response.data.data.filter(item => item.homepageShowStatus === 'enable')
        };
        console.log('Footer Location Data fetched successfully:', location.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const mapLink = ref({
    pageUrl: '/googleMap-visual',
    iframeUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.615522670994!2d90.36256027484606!3d23.761086188366942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf582f84cc11%3A0x2d79e31cd70a190a!2sDoofaz%20ITLimited!5e0!3m2!1sen!2sbd!4v1728388071513!5m2!1sen!2sbd'
})

const copyright = [
    {
        copyText: "© 2024 All Rights Reserved. Developed By Doofaz IT LTD",
        home: "Home",
        about: "About",
        blog: "Blog",
    }
]

</script>

<template>
    <section id="footer" class="overflow-hidden">
        <div v-if="data && data.data" class="container mx-auto px-8">
            <div v-for="(details, index) in data.data" :key="index"
                class="grid md:gap-x-8 gap-y-4 md:grid-cols-2 lg:grid-cols-4">
                <!-- ====================== Logo Area ==============================  -->
                <div class="logo-Area mt-10">
                    <img class="w-60" :src="IMG + details.logo" alt="Company Logo">
                    <h5 class="text-start tracking-tighter lg:mt-10 mt-3 text-gray-600 text-lg leading-8 sm:text-base">
                        {{ details.footerDescription }}
                    </h5>
                </div>
                <!-- ====================== Logo End ==============================  -->

                <!-- ====================== Services Area ==============================  -->
                <div class="service lg:mt-14 sm:mt-8 md:mt-16">
                    <h5 class="lg:px-10 text-3xl 2xl:text-xl font-bold sm:text-2xl sm:font-bold text-[#48a1da]">
                        {{ details.titleOne }}
                    </h5>
                    <ul v-if="menu && menu.data" class="lg:px-10 lg:mt-10 sm:leading-8 leading-10 lg:text-lg text-gray-600">
                        <li v-for="(menus , index) in menu.data" :key="index" class="hover:text-blue-600 lg:mt-2">
                            <a :href="menus.menuLink">{{ menus.menuName }}</a>
                        </li>
                        <!-- <li class="lg:mt-2 hover:text-blue-600"><a href="#">Web Development</a></li>
                        <li class="lg:mt-2 hover:text-blue-600"><a href="#">Analytic Solutions</a></li>
                        <li class="lg:mt-2 hover:text-blue-600"><a href="#">Cloud and DevOps</a></li>
                        <li class="lg:mt-2 hover:text-blue-600"><a href="#">Product Design</a></li> -->
                    </ul>
                </div>
                <!-- ====================== Services End ==============================  -->

                <!-- ====================== Contact Info ==============================  -->
                <div v-if="location && location.data" class="service lg:mt-14 sm:mt-8">
                    <h5 class="lg:px-2 text-3xl font-bold sm:text-2xl sm:font-bold text-[#48a1da]">
                        {{ details.titleTwo }}
                    </h5>
                    <ul v-for="(locations , index) in location.data" :key="index" class="lg:mt-10 leading-10 sm:leading-4 lg:text-lg text-gray-600">
                        <div class="location mt-2 sm:mt-1 sm:text-sm flex justify-start">
                            <i class="fa-solid fa-mountain-city text-red-500 float-left p-2 -ml-2 lg:ml-1"></i>
                            <h5 class="lg:text-start sm:text-base sm:text-justify text-base">
                                {{ locations.address }}
                            </h5>
                        </div>
                        <li class="lg:mt-2 lg:px-3 sm:mt-2 sm:text-base">
                            <a href="#" class="flex justify-start gap-2 leading-8">
                                <i class="fa-solid fa-phone-volume text-red-500 mt-2"></i> 
                                <p v-html="locations.details"></p>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- ====================== Contact Info End ==============================  -->

                <!-- ====================== Map Area ==============================  -->
                <div class="news-letter lg:mt-14 sm:mt-8 lg:pb-0 md:pb-4 pb-5">
                    <h5 class="lg:px-2 text-3xl font-bold sm:text-2xl sm:font-bold text-[#48a1da]">
                        {{ details.titleThree }}
                    </h5>
                    <div class="map mt-5 w-[310px]">
                        <RouterLink :to="{ path: mapLink.pageUrl, query: { iframe: details.mapURL } }">
                            <img :src="IMG + details.locationImg" class="w-full h-full pr-5" alt="Google Map">
                        </RouterLink>
                    </div>
                </div>
                <!-- ====================== Map End ==============================  -->
            </div>
        </div>

        <!-- Copyright Section -->
        <div v-for="(copyrightarea, index) in copyright" :key="index"
            class="copy-rights-area lg:h-16 bg-gradient-to-r from-[#48a1da] to-transparent lg:mt-4">
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div>
                    <h4
                        class="lg:mt-2 lg:text-sm md:mt-1 text-sm md:text-sm lg:px-10 px-4 lg:py-4 py-4 lg:text-justify text-[#333] float-left sm:-mt-3">
                        {{ copyrightarea.copyText }}
                    </h4>
                </div>
                <div class="md:hidden lg:block"></div>
                <div class="pb-4">
                    <ul v-if="bottomMenu && bottomMenu.data" class="-py-2 lg:py-3 md:mt-3 md:ml-16 lg:ml-28 px-5 lg:px-1 ml-10 -mt-3">
                        <li v-for="menu in bottomMenu.data" :key="menu.id" class="float-left px-1">
                            <RouterLink :to="menu.menuLink">
                                <span v-html="menu.icon" class="text-red-500"></span>
                                {{ menu.menuName }}
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#footer {
    width: 100%;
    background-image: url(../assets/footer/footer-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: auto !important;
}

@media all and (min-width:320px) and (max-width:780px) {
    #footer {
        width: 100%;
        background-image: url(../assets/footer/footer-bg.png);
        background-size: cover;
        background-repeat: no-repeat;
        height: auto !important;
    }

}
</style>