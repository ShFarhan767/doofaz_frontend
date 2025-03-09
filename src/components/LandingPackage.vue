<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { useRouter } from 'vue-router';

const selectedCategory = ref(null); // Add this line to define the selectedCategory ref
const data = ref(null);
const packageFeature = ref(null);
const packages = ref([]);  // To store combined package data

onMounted(async () => {
    try {
        const packageResponse = await axios.get(`${BASE_URL}landingPackageInfo`);
        data.value = packageResponse.data;
        console.log('Data fetched successfully:', data.value);

        const featureResponse = await axios.get(`${BASE_URL}packageFeatureInfo`);
        packageFeature.value = featureResponse.data;
        console.log('Package Feature Data fetched successfully:', packageFeature.value);

        // Combine package data with feature data
        packages.value = data.value.data.map(pkg => {
            // Get features by matching packageType and sort them by position
            const features = packageFeature.value.data
                .filter(feature => feature.packageType === pkg.packageTitle)  // Corrected filter condition
                .sort((a, b) => a.position - b.position) // Sort features by position
                .map(feature => feature.packageBenefits);

            return {
                ...pkg,
                features: features,
                packageTitle: pkg.packageTitle,  // Use the correct title from API
                usdPrice: pkg.usdPrice,  // Use usdPrice from API
                bdtPrice: pkg.bdtPrice,  // Use bdtPrice from API
                callButtonLink: pkg.callButtonLink || "/contact",  // Default fallback
                buttonLink: pkg.buttonLink || "#",  // Default fallback
                buttonName: pkg.buttonName || "Order Now"  // Default fallback
            };
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const router = useRouter();

watch(() => selectedCategory.value, (newValue) => {
    if (newValue !== "package") {
        localStorage.removeItem("selectedPackage"); // Remove package name when category changes
    }
});

const goToContact = (packageName) => {
    localStorage.setItem("selectedPackage", packageName); // Store packageName
    localStorage.setItem("selectedCategory", "package"); // Store category as 'package'
    router.push("/contact"); // Navigate to contact page
};
</script>

<template>
    <section class="py-10 lg:mt-24">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-6">
                <div v-for="pkg in packages" :key="pkg.id"
                    class="bg-white shadow-lg rounded-lg overflow-hidden lg:px-0 px-2">
                    <div class="border-2 border-dashed border-[#48a1da] relative overflow-hidden flex-grow">
                        <div class="bg-[#363333] text-white text-center relative py-10">
                            <h2 class="text-2xl font-semibold z-20 relative">{{ pkg.packageTitle }}</h2>
                            <div
                                class="bg-[#363333] h-[80px] absolute left-[-68px] top-[48%] rotate-[-4deg] w-[900px] z-10">
                            </div>
                        </div>
                        <div class="bg-[#48a1da] text-white text-center py-10 mt-5">
                            <p class="text-xl font-semibold flex justify-end pr-8">{{ pkg.usdPrice }}</p>
                            <p class="text-6xl font-semibold">
                                <span class="font-semibold text-xl">BDT</span>
                                {{ pkg.bdtPrice }}
                            </p>
                        </div>
                    </div>
                    <div class="p-6 flex-grow">
                        <ul class="text-gray-700 space-y-2">
                            <li v-for="(feature, index) in pkg.features" :key="index"
                                class="flex items-start border-b border-[#48a2da3a] py-1">
                                <span class="mr-2 text-[#48a1da]"><i class="fa-solid fa-chart-pie"></i></span>{{ feature
                                }}
                            </li>
                        </ul>
                        <div
                            class="mt-5 text-white text-center py-4 font-bold cursor-pointer flex justify-between relative bottom-0">
                            <a :href="pkg.callButtonLink" target="_blank"
                                class="bg-[#48a1da] lg:py-3 py-2 lg:px-6 px-4 rounded-full lg:text-lg text-base hover:text-[#48a1da] hover:bg-white hover:border hover:border-[#48a1da] relative bottom-0">
                                {{ pkg.callButton }}
                            </a>
                            <button @click="goToContact(pkg.packageTitle)"
                                class="bg-[#FF0000] lg:py-3 py-2 lg:px-6 px-4 rounded-full lg:text-lg text-base hover:text-[#FF0000] hover:bg-white hover:border hover:border-[#FF0000]">
                                {{ pkg.buttonName }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Afacad+Flux:wght@100..1000&family=Amaranth:ital,wght@0,400;0,700;1,400;1,700&family=Caveat:wght@400..700&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Hind+Siliguri:wght@300;400;500;600;700&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Patrick+Hand&display=swap');

section{
    font-family: "Hind Siliguri", sans-serif;
}

.flex-grow {
    flex-grow: 1;
}
</style>