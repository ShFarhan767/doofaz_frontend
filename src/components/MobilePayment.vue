<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}mobileBankingInfo`);
        data.value = response.data.data; // Make sure to access the data array
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section class="bg-[#F6F7F9]">
        <div class="container mx-auto lg:pb-14">
            <div class="text-center">
                <h2 class="text-4xl font-semibold text-[#48a1da] lg:pb-0 md:pb-0 pb-2">Mobile Banking</h2>
            </div>
            <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
                <div v-for="(payment, index) in data" :key="index" class="p-5 bg-white rounded-lg md:mt-8 mt-8 shadow-2xl hover:bg-slate-50">
                    <div class="lg:w-[110px] lg:h-[80px] w-[200px] h-[100px] 2xl:w-[140px] lg:ml-0 ml-[7%] lg:float-left lg:mt-[70px] border">
                        <img :src="IMG + payment.bankImage" class="h-full" :alt="payment.bankImageAltTag">
                    </div>
                    <div class="flex justify-center lg:w-[260px] lg:h-[250px] 2xl:w-[280px] 2xl:h-[280px] pb-1 h-[300px] w-[400px] md:w-[250px] md:h-[200px] float-left px-8 lg:ml-0 md:-ml-5 -ml-8 lg:mt-0 mt-5">
                        <img :src="IMG + payment.qrCodeImage" class="w-62 h-full border" :alt="payment.qrImageAltTag">
                    </div>
                    <div class="Info md:mt-4 mt-5 text-center">
                        <h4 class="text-xl font-medium py-2 md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Account Type :</span>
                            {{ payment.PaymentType }}
                        </h4>
                        <h4 class="text-xl font-medium md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Account Number :</span>
                            {{ payment.accountNo }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.linear {
    background: linear-gradient(to right, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
</style>