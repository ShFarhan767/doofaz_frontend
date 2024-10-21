<script setup>
import { ref, onMounted } from 'vue';

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

const countBox = ref([
    {
        // image: '/src/assets/Accessories/Accessories-1.png',
        image: '/assets/Accessories-1.png',
        // image: '/assets/project.png',
        title : 'Barcode Label Printer'
    },
    {
        // image: '/src/assets/Accessories/Accessories-2.png',
        image: '/assets/Accessories-2.png',
        // image: '/assets/product.png',
        title : 'Thermal POS Printer'
    },
    {
        // image: '/src/assets/Accessories/Accessories-3.png',
        image: '/assets/Accessories-3.png',
        // image: '/assets/client-b.png',
        title : 'Barcode Scanner'
    },
    {
        // image: '/src/assets/Accessories/Accessories-4.png',
        image: '/assets/Accessories-4.png',
        // image: '/assets/quality.png',
        title : 'Point Of Sale (POS)'
    },
    {
        // image: '/src/assets/Accessories/Accessories-5.png',
        image: '/assets/Accessories-5.png',
        // image: '/assets/user.png',
        title : 'Barcode Accessories'
    },
])
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
            <div class="grid gap-x-8 gap-y-4 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                <div v-for="(box , index) in countBox" :key="index" class="lg:py-5 bg-white py-5 text-center relative rounded-lg group cursor-pointer">
                    <div class="flex justify-center overflow-hidden">
                        <img class="lg:w-40 lg:h-40 w-14 h-14 rounded-lg group-hover:scale-105 transition-all" :src="box.image" alt="">
                    </div>
                    <!-- <div class="text-[#000] lg:text-4xl text-3xl font-semibold text-center font-[Poppins, sans-serif !important]">
                        <div :class="countNumber[index].name"></div>
                    </div> -->
                    <div class="text-[#001329] lg:text-[20px] text-lg font-[600] bottom-0 relative my-2">{{ box.title }}</div>
                </div>
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
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
}
</style>