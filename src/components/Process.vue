<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}processInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const content = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}processContentInfo`);
        content.value = response.data;
        console.log('Content Data fetched successfully:', content.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Dynamic content for the working process section
const process = ref([
    {
        title: "Our Working Process",
        leftboxTitle: "WORKING PROCESS",
        leftboxheading: "Our Working Process - How We Work For Our Customers",
        contactButton: "Contact Us",
        steps: [
            {
                number: "1.",
                title: "Discovery",
                description:
                    "Exploration is the essence of discovery. Embrace the journey, for in discovery lies the magic of possibility."
            },
            {
                number: "2.",
                title: "Execute",
                description:
                    "Execution is the heartbeat of achievement. With determination and precision, we transform plans into remarkable outcomes."
            },
            {
                number: "3.",
                title: "Planning",
                description:
                    "Planning is the compass that guides us through the unknown, turning dreams into achievable realities."
            },
            {
                number: "4.",
                title: "Deliver",
                description:
                    "Delivery is the promise fulfilled, the culmination of effort and dedication, ensuring excellence meets expectation."
            }
        ]
    }
]);
</script>

<template>
    <section v-if="data && data.data">
        <div v-for="(item, index) in data.data" :key="index" class="container mx-auto px-10">
            <h2
                class="text-center text-[28px] pt-10 text-[#48a1da] lg:text-[36px] font-[700] font-['Livvic', sans-serif]">
                {{ item.title }}
            </h2>

            <div class="grid gap-x-8 gap-y-2 py-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <!-- Left card box -->
                <div class="fast-card lg:col-span-1 md:col-span-2" :title="item.imageAltTag" :style="{ backgroundImage: `url(${IMG + item.boxBackgroundImg})` }">
                    <h2 class="text-[#ffffff] text-[15px] ml-[50px] mt-20 tracking-[1px] font-[500]">
                        {{ item.imageShortTitle }}
                    </h2>
                    <h1
                        class="text-[#ffffff] font-[700] lg:text-[36px] text-[36px] lg:ml-[50px] ml-[50px] lg:leading-[46px] py-[20px]">
                        {{ item.imageTitle }}
                    </h1>
                    <RouterLink :to="item.ButtonUrl">
                        <button type="button"
                            class="ml-[50px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-lg text-sm px-5 py-2.5 text-center text-[18px] font-[600] mt-8">
                            {{ item.buttonName }}
                        </button>
                    </RouterLink>
                </div>

                <!-- Right content section with steps, split into 2 columns for steps -->
                <div v-if="content && content.data">
                    <div class="text mt-5" v-for="step in content.data.slice(0, 2)" :key="step.id">
                        <h2 class="text-[50px] text-[#03228f] font-[700] font-['Livvic', sans-serif]">
                            {{ step.number }}
                        </h2>
                        <h2 class="text-[24px] font-[600] text-[#48a1da] leading-[34px]">{{ step.title }}</h2>
                        <p class="text-[18px] mt-[20px] text-[#454545]">{{ step.description }}</p>
                    </div>
                </div>

                <!-- Second column (3rd and 4th steps) -->
                <div v-if="content && content.data">
                    <div class="text mt-5" v-for="step in content.data.slice(2, 4)" :key="step.id">
                        <h2 class="text-[50px] text-[#03228f] font-[700] font-['Livvic', sans-serif]">
                            {{ step.number }}
                        </h2>
                        <h2 class="text-[24px] font-[600] text-[#48a1da] leading-[34px]">{{ step.title }}</h2>
                        <p class="text-[18px] mt-[20px] text-[#454545]">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fast-card {
    background-image: url('../assets/process/process-bg.jpg');
    background-repeat: no-repeat;
    width: 100%;
    height: 500px;
    border-radius: 20px;
    border-bottom-left-radius: 20px !important;
}
</style>