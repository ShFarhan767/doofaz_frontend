<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}corporateBankingInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>

<template>
    <section class="bg-[#F6F7F9]">
        <div class="container mx-auto py-14">
            <div class="text-center">
                <h2 class="text-4xl font-semibold text-[#48a1da] lg:pb-0 md:pb-0 pb-10">
                    Corporate Banking
                </h2>
            </div>

            <div v-if="data && data.data" class="grid md:grid-cols-3 grid-cols-1 gap-3 md:px-0 px-2">
                <div v-for="(bank, index) in data.data" :key="index"
                    class="p-5 bg-white rounded-lg md:mt-8 shadow-2xl hover:bg-slate-50">
                    <!-- Bank Image -->
                    <div class="w-full md:h-12">
                        <img :src="`${IMG}${bank.bankImage}`" :title="bank.imageAltTag" class="h-full" alt="bank image">
                    </div>

                    <!-- Bank Details -->
                    <div class="Info md:mt-4 mt-4">
                        <h4 class="text-xl font-medium md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Account Name:</span>
                            {{ bank.accountName }}
                        </h4>
                        <h4 class="text-xl font-medium md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Account No:</span>
                            {{ bank.accountNo }}
                        </h4>
                        <h4 class="text-xl font-medium md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Bank Name:</span>
                            {{ bank.bankName }}
                        </h4>
                        <h4 class="text-xl font-medium md:pl-2">
                            <span class="font-semibold text-[#48a1da]">Branch:</span>
                            {{ bank.branchName }}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Add custom styles if necessary */
</style>