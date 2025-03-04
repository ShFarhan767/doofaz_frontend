<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref([]);
const blogDetails = ref(null); 
const route = useRoute();

onMounted(() => {
  fetchData(route.params.slug);
});

const fetchData = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}blogCardInfo/${slug}`);
    console.log(response);  // Log the response to inspect the data structure
    if (response.data && Array.isArray(response.data.data)) {
      data.value = response.data.data;
      console.log("BlogCardInfo data fetched successfully:", data.value);

      // Find blog details by slug
      blogDetails.value = data.value.find(item => item.slug === slug);

      if (blogDetails.value) {
        document.title = blogDetails.value.metaTitle || "Default Blog Title";
      }
    } else {
      console.warn("No valid blog data found.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Watch for route changes and update the title
watch(() => route.params.slug, (newSlug) => {
  fetchData(newSlug);
});

const softwareMenu = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareMenuInfo`);
        softwareMenu.value = response.data;
        console.log('Data fetched successfully:', softwareMenu.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const websiteMenu = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteMenuItemInfo`);
        websiteMenu.value = response.data;
        console.log('Data fetched successfully:', websiteMenu.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const socialMedia = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}socialMediaInfo`);
        socialMedia.value = response.data;
        console.log('Footer Location Data fetched successfully:', socialMedia.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}
</script>

<template>
    <section class="py-20">
        <!-- Heading Section -->
        <div
            class="bg-[url(https://t3.ftcdn.net/jpg/02/21/79/40/360_F_221794075_LsuBECheGGj3zaCwC8o5OmRHbwVSaLBm.jpg)] bg-no-repeat bg-cover lg:h-[250px] h-[150px] flex items-center">
            <h2 class="font-semibold text-[#48a1da] text-5xl tracking-wider dm-sans px-10">Blog Details</h2>
        </div>

        <div class="container mx-auto lg:px-10 px-5">
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">

                <!-- First Section (Blog List) -->
                <div v-if="data && data.length > 0" class="w-full col-span-2">
                    <div v-for="blog in data" :key="blog.id" class="shadow-lg mb-10">
                        <div class="px-5 my-10">
                            <h2 class="text-4xl font-semibold py-3 leading-10 dm-sans tracking-wide">{{ blog.title }}
                            </h2>
                            <p class="text-[#3b3b3b] text-base font-medium pb-2">
                                {{ formatDate(blog.created_at) }}
                            </p>
                            <div class="my-10 overflow-hidden">
                                <img :src="IMG + blog.Image" :title="blog.imageAltTag"
                                    class="hover:scale-105 transition-all cursor-pointer" alt="blog image">
                            </div>
                            <p class="text-[#222222] dm-sans text-[17px]" v-html="blog.description"></p>

                            <div class="flex gap-3 py-5">
                                <button v-for="tag in blog.tags" :key="tag"
                                    class="text-sm dm-sans py-1 px-4 border border-[#000] rounded-full hover:bg-black hover:text-white">
                                    {{ tag }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second Section (Categories, Read Next, Tags) -->
                <div class="w-full">
                    <div class="py-10 lg:px-5">
                        <!-- Software Services -->
                        <div class="mb-5">
                            <h4 class="bg-[#48a1da] text-white py-2 px-2 rounded-lg text-2xl font-medium dm-sans">Our
                                Software Service</h4>
                            <div class="flex justify-start w-full shadow mt-4">
                                <div v-if="softwareMenu && softwareMenu.data"
                                    class="pt-4 w-auto px-2 grid grid-cols-1 gap-5">
                                    <RouterLink v-for="software in softwareMenu.data" :key="software"
                                        :to="`/${software.slug}`"
                                        class="dm-sans w-auto text-lg font-medium border px-5 py-1 rounded-full hover:bg-black hover:text-white">
                                        <i class="fa-solid fa-code text-[#48a1da]"></i> {{ software.name }}
                                    </RouterLink>
                                    <br>
                                </div>
                            </div>
                        </div>

                        <!-- Website Services -->
                        <div class="mb-5">
                            <h4 class="bg-[#48a1da] text-white py-2 px-2 rounded-lg text-2xl font-medium dm-sans">
                                Website & Development</h4>
                            <div class="flex justify-start w-full shadow mt-4">
                                <div v-if="websiteMenu && websiteMenu.data"
                                    class="pt-4 w-auto px-2 grid grid-cols-1 gap-5">
                                    <RouterLink v-for="website in websiteMenu.data" :key="website" :to="`/website-details/${website.slug}`"
                                        class="dm-sans w-auto text-lg font-medium border px-5 py-1 rounded-full hover:bg-black hover:text-white">
                                        <i class="fa-solid fa-list text-[#48a1da]"></i> {{ website.name }}
                                    </RouterLink>
                                    <br>
                                </div>
                            </div>
                        </div>

                        <!-- Follow Us -->
                        <div v-if="socialMedia && socialMedia.data">
                            <h4 class="text-2xl font-medium dm-sans">Follow us:</h4>
                            <div v-for="(social , index) in socialMedia.data" :key="index" class="py-5 w-full flex flex-wrap gap-x-6 gap-y-3">
                                <a :href="social.facebookLink" target="_blank" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a :href="social.youtubeLink" target="_blank" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]">
                                    <i class="fa-brands fa-square-youtube"></i>
                                </a>
                                <a :href="social.twitterLink" target="_blank" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]">
                                    <i class="fa-brands fa-square-twitter"></i>
                                </a>
                                <a :href="social.linkedinLink" target="_blank" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                                <a :href="social.whatsappLink" target="_blank" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]">
                                    <i class="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div v-if="categoryById && categoryById.length > 0" class="container mx-auto">
                <h4 class="text-[22px] font-medium dm-sans">Related Articles:</h4>
                <div class="grid lg:grid-cols-4 grid-cols-2 gap-5">

                    <div 
                        v-for="item in categoryById.filter(item => !data.some(blog => blog.id === item.id)).slice(0, 8)" 
                        :key="item.id" 
                        class="cursor-pointer py-5 hover:shadow-lg shadow">
                        <RouterLink :to="{ name: 'Latest-Blog', params: { slug: item.slug } }">
                            <div class="w-full h-44">
                                <img :src="IMG + item.Image" class="w-full h-44" alt="read next image">
                            </div>
                            <div class="px-4 col-span-2 py-4">
                                <p class="text-sm text-[#3a3a3a] dm-sans pb-4">{{ formatDate(item.created_at) }}</p>
                                <h4 class="font-medium text-lg dm-sans text-[#3b3b3b]">{{ item.title }}</h4>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.dm-sans {
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}
</style>