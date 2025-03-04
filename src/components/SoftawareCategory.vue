<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const category = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareCategoryName`);
        category.value = response.data;
        console.log('Data fetched successfully:', category.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

</script>
<template>

    <section class="overflow-hidden w-full lg:h-auto pb-5 bg-[#fff7ef]">
        <div class="container mx-auto pt-5 lg:pb-5">

            <div class="py-5 mb-5 flex justify-center">
                <h2 class="lg:text-3xl text-xl font-medium bg-[#48A1DA] lg:w-72 text-center py-2 rounded text-white" >Software Category</h2>
            </div>

            <div v-if="category && category.data" class="grid lg:grid-cols-4 gap-4">
                <div v-for="(categorys, index) in category.data" :key="index">
                    <div
                        class="text-white w-full bangla-font bg-[#48A1DA] 2xl:text-[30px] lg:text-[18px] font-semibold rounded-lg text-sm px-3 2xl:py-4 py-3 text-center hover:bg-transparent hover:border hover:border-[#48A1DA] hover:text-[#48A1DA] transition-all">
                        <RouterLink :to="categorys.link">
                            <span v-html="categorys.icon" class="inline-flex"></span> 
                            {{ categorys.name }}
                        </RouterLink>
                        <i :class="categorys.iconClassName" class="text-right inline-flex"></i>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');

.bangla-font {
    font-family: "Hind Siliguri", sans-serif;
}

.hover-card {
    position: relative;
    transition: background-color 0.3s ease;
}

.hover-card-title {
    transition: color 0.3s ease;
}

.hover-card:hover .hover-card-title {
    color: #00ADE7;
    /* Change text color on hover */
}

.hover-btn {
    position: relative;
    transition: color 0.3s ease;
}

.hover-btn .arrow {
    display: inline-block;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.hover-card:hover .arrow {
    transform: translateX(10px);
    /* Move the arrow to the right */
    opacity: 0;
    /* Fade out the arrow */
}

.Background {
    width: 100%;
    height: 650px;
    background: url(../assets/ERP/1n.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}

.content-box {
    background: black;
    box-shadow: 5px 3px 5px 0px #c5c5c5;
}

.content-box1 {
    box-shadow: 5px 0px 5px 5px #c5c5c5;
}

@media all and (min-width:320px) and (max-width:780px) {
    .content-box {
        background: black;
        box-shadow: 5px 0px 5px 5px #c5c5c5;
    }
}
</style>