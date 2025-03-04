<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}driverProductEntryInfo`);
        // Filter data based on homepageShowStatus
        data.value = {
            ...response.data,
            data: response.data.data.filter(item => item.homepageShowStatus === 'enable')
        };
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const services = ref([
    'Driver',
]);

const currentServiceIndex = ref(0);

// Function to rotate through the service names
onMounted(() => {
    setInterval(() => {
        currentServiceIndex.value = (currentServiceIndex.value + 1) % services.value.length;
    }, 2000); // Change every 2 seconds
});

</script>
<template>
    <section class="bg-[#e8ecf7] py-10">
        <div class="container mx-auto">
            <div class="text-center flex justify-center gap-3">
                <h3 class="font-semibold text-4xl text-[#48a1da] pb-10 ">Accessories</h3>
                <RouterLink to="/driver" class="service-name font-semibold text-4xl text-[#000] pb-10 ">
                    <span class="text-3xl"><i class="fa-solid fa-hard-drive"></i></span>
                    {{ services[currentServiceIndex] }}
                </RouterLink>
            </div>
            <div v-if="data && data.data" class="grid gap-x-8 gap-y-4 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                <RouterLink v-for="(box, index) in data.data" :key="index" :to="{ name: 'driver-details', params: { slug: box.slug } }">
                    <div class="lg:py-5 bg-white py-5 text-center relative rounded-lg group cursor-pointer">
                        <div class="flex justify-center overflow-hidden">
                            <img class="lg:w-40 lg:h-40 w-14 h-14 rounded-lg group-hover:scale-105 transition-all"
                                :src="IMG + box.image" :title="box.imageAltTag" alt="">
                        </div>
                        <div class="text-[#001329] lg:text-[20px] text-lg font-[600] bottom-0 relative my-2">
                            {{ box.productName }}
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
<style>
.service-name {
    display: inline-block;
    opacity: 1;
    animation: fadeInOut 3s ease-in-out infinite;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>