<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeLocationInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const locationDetails = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeDetailsInfo`);
        locationDetails.value = response.data;
        console.log('Data fetched successfully:', locationDetails.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div class="container mx-auto">
            <div class="text-center">
                <h2
                    class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[200px] mt-[200px] lg:px-0 px-3 text-black leading-tight">
                    Contact Us</h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>

    <section v-if="data && data.data" class="bg-[#d8dfe0]">
        <!-- ====================informetion-area==================== -->
        <div  class="lg:px-20 grid gap-x-8 gap-y-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:pb-12">

            <!-- =================company-info============= -->
            <div class="cumpany-info lg:w-[80%] lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 pt-5">
                <div class="pt-4">
                    <h2 class="text-center text-2xl font-semibold"><span class="text-[#48a1da]">{{ data.data[0].location
                            }}</span></h2>

                    <span v-if="locationDetails && locationDetails.data">
                        <span v-for="(details , index) in locationDetails.data" :key="index">
                            <p class="text-sm mt-4 font-medium"><i class="fa-solid fa-location-pin text-[#ef4444]"></i>
                                <span class="text-lg"> House#20 (Floor-4,D1),Main Road, Rampura Bansree Dhaka-1219</span>
                            </p>
                            <p class="text-md mt-3 font-medium" v-html="details.details"></p>
                        </span>
                    </span>
                    <!-- <p class="text-md mt-3 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i>
                        01969912221 <span class="font-[600] text-[#48a1da]">( What'sapp )</span>
                    </p>
                    <p class="text-md mt-3 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i>
                        01969912221 <span class="font-[600] text-[#48a1da]">( Telegram )</span>
                    </p>
                    <a href="#" target="_blank" class="top-2 text-lg relative font-medium ">
                        <i class="fa-brands fa-facebook-f text-[#ef4444]"></i>
                        <span class="font-[500] text-[#000] ml-2">facebook Group</span>
                    </a>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i>
                        <span>doofazinfo@gmail.com</span></p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i>
                        <span>info@doofazit.com</span></p> -->

                </div>
                <div class="pt-4">
                    <h2 class="text-center text-2xl font-semibold text-[#48a1da] mt-5">Doofaz IT Helpline</h2>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i> 01969912221
                        <span class="font-[500] text-[#48a1da]">( HOT LINE )</span>
                    </p>
                    <p class="text-md mt-3 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i> 01812454358
                        <span class="font-[600] text-[20px] text-[#48a1da]">(Sales)</span>
                    </p>
                    <p class="text-md mt-3 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i> 01894958731
                        <span class="font-[500] text-[20px] text-[#48a1da]">(Sales)</span>
                    </p>
                    <p class="text-md mt-3 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i> 01894958735
                        <span class="font-[500] text-[20px] text-[#48a1da]">(Sales)</span>
                    </p>
                </div>
            </div>
            <!-- =================company-info End============= -->

            <!-- =================form-info============= -->
            <div class="form-area lg:w-[150%] lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 pt-5 lg:-ml-20">
                <form class="max-w-md mx-auto">
                    <div class="mb-5">
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900">Your
                            Name</label>
                        <input type="text" id="Name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="name" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your
                            email</label>
                        <input type="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5"
                            placeholder="name@flowbite.com" required />
                    </div>

                    <div class="mb-5">
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 ">
                            Contact No</label>
                        <input type="number" id="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Contact number" required />
                    </div>

                    <div class="mb-5">
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900">
                            Address</label>
                        <input type="location" id="location"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Addresss" required />
                    </div>

                    <div class="mb-5">
                        <form class="max-w-sm mx-auto">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your
                                message</label>
                            <textarea id="message" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                placeholder="Leave a comment..."></textarea>
                        </form>
                    </div>

                    <button type="submit"
                        class="lg:ml-[30%] ml-[33%] text-[black] hover:text-[#fff] text-[16px] bg-[#48a1da] font-semibold rounded-lg sm:w-auto lg:px-20 px-10 py-2.5 text-center">Submit</button>
                </form>

            </div>
            <!-- =================form-info End============= -->

            <!-- =================company-info============= -->
            <div class="cumpany-info lg:w-[80%] lg:ml-28 lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 lg:px-8 pt-5">
                <div class="pt-4">
                    <h2 class="text-center text-2xl font-semibold"><span class="text-[#48a1da]">{{ data.data[1].location }}</span></h2>
                    <p class="text-sm mt-4 font-medium"><i class="fa-solid fa-location-pin text-[#ef4444]"></i> ADDRESS:
                        <span class="text-lg">Bin Zafar Building, Shop No-03, Eyal Nasser, Deira, Naif, Dubai, United
                            Arab Emirates.</span>
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i>
                        +990 85440 12453
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i> Email:
                        <span>doofazinfo@gmail.com</span>
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i> Emai:
                        <span>info@doofazit.com</span>
                    </p>
                </div>
                <div class="pt-4">
                    <h2 class="text-center text-2xl font-semibold"><span class="text-[#48a1da]">{{ data.data[2].location }}</span>
                    </h2>
                    <p class="text-sm mt-4 font-medium"><i class="fa-solid fa-location-pin text-[#ef4444]"></i> ADDRESS:
                        <span class="text-lg">21/34, Moo-5, Nangprue Banglamung, Chonburi-20150, Thailand.</span>
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-phone text-[#ef4444]"></i>
                        +990 85440 12453
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i> Emai:
                        <span>doofazinfo@gmail.com</span>
                    </p>
                    <p class="text-md mt-4 font-medium"><i class="fa-solid fa-envelope text-[#ef4444]"></i> Emai:
                        <span>info@doofazit.com</span>
                    </p>
                </div>
            </div>
            <!-- =================company-info End============= -->

        </div>
        <!-- ====================informetion-area End==================== -->
    </section>

</template>

<style scoped>
.Background {
    width: 100%;
    height: 500px;
    background: url(../assets/contact/rote-hotline-und-service-kontakt-icons-als-panorama_157125-14816.jpg) no-repeat;
    background-size: cover;
    margin-top: -100px;
    padding-bottom: 50px;
}

.form-area {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.cumpany-info {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media all and (min-width:320px) and (max-width:780px) {
    .Background {
        width: 100%;
        height: 400px;
        background: url(../assets/contact/rote-hotline-und-service-kontakt-icons-als-panorama_157125-14816.jpg) no-repeat;
        background-size: cover;
        padding-bottom: 50px;
    }
}
</style>