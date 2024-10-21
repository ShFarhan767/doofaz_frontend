<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';


const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/projectPageInformation`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});


// const ProjectOne = [
//     {
//     Title:"Our Project"
//     }
// ]
// const project = [
//     {
//         cashbookImage: "/assets/1677782775.1674061676.1673874025.logo-CuuJ35B2.png",
//         cashbookText: "cashbook.com.bd",
//         cashbookPragrap: "Cashbook.com.bd is an accounting and inventory software solution tailored to meet the needs of businesses, especially in Bangladesh.It offers tools for managing financial transactions, tracking expenses, generating invoices, and handling inventory management efficiently. The platform is designed to streamline accounting processes and provide businesses with insights into their financial health.With its user- friendly interface and customizable features, Cashbook.com.bd aims to help small to medium - sized enterprises(SMEs) in Bangladesh manage their finances effectively.",
//         doofazimage: "/assets/index-nj_LffKU.jpg",
//         doofazText: "Doofaz Training Institute",
//         doofazPragrap: "Welcome to Doofaz Training, where we specialize in empowering individuals and organizations through high- quality professional development programs.As a division of Doofaz IT Limited, we offer a diverse range of training solutions tailored to meet the evolving needs of today's industries. Our experienced trainers and interactive sessions ensure that participants gain both the knowledge and practical skills needed to excel in their fields.Join us and unlock your potential for success with Doofaz Training.",
//     }
// ]

</script>
<template>
    <section v-if="data && data" class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div v-for="(heading,index) in data" :key="index" class="container mx-auto">
            <div class="text-center">
                <h2
                    class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[200px] mt-[100px] lg:px-0 px-3 text-[#f47621] leading-tight">
                    {{ heading.bannerTitle }}</h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>


    <section class="px-10 pt-5 pb-5">
        <div v-for="(projectarea,index) in data" :key="index"
            class="grid gap-4 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
            <div class="border shadow lg:w-[400px] lg:ml-[200px]">
                <div class="">
                    <a href="https://cashbook.com.bd/" target="_blank">
                        <img class="h-[100px] px-5 mt-[20px]" :src="IMG + projectarea.Logo" alt="">
                    </a>
                </div>

                <h2 class="text-center font-[600] text-[20px] text-[#48a1da] pt-10">{{ projectarea.Title }}</h2>
                <p class="px-6 pt-5 pb-5">{{ projectarea.Description }}</p>
            </div>
            <div class="border shadow lg:w-[400px]">
                <div class="">
                    <a href="https://doofaztraining.com/" target="_blank">
                        <img class="h-[140px] px-28 mt-[20px]" :src="IMG +projectarea.doofazimage" alt="">
                    </a>
                </div>

                <h2 class="text-center font-[600] text-[20px] text-[#48a1da]">{{ projectarea.doofazText }}</h2>
                <p class="px-6 pt-5 pb-5">{{ projectarea.doofazPragrap }}</p>
            </div>
        </div>
        <img src="../assets/management/1677782775.1674061676.1673874025.logo.png" class="hidden" alt="">
        <img src="../assets/management/index.jpg" class="hidden" alt="">
    </section>


</template>
<style scoped>
.Background {
    width: 100%;
    background: url(../assets/company/Top-10-Software-Company-in-Bangladesh.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}
</style>