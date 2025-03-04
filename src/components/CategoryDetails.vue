<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);
const route = useRoute();

const categoryName = ref(null);
const category = ref(null); // Ref for category products

// Fetch all categories on mount
onMounted(async () => {
    await fetchCategories();
    fetchData(route.params.slug); // Initial fetch for category details
    productByCategory(route.params.slug); // Fetch products for initial category
});

// Fetch categories
const fetchCategories = async () => {
    try {
        const response = await axios.get(`${BASE_URL}driverCategoryInfo`);
        categoryName.value = response.data;
        console.log('Data fetched successfully:', categoryName.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Fetch category details based on Slug
const fetchData = async (slug) => {
    try {
        const response = await axios.get(`${BASE_URL}driverCategoryInfo/${slug}`);
        data.value = response.data;
        console.log('Category data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Fetch products by category Slug
const productByCategory = async (slug) => {
    try {
        category.value = null; // Reset the category to null before fetching new data
        const response = await axios.get(`${BASE_URL}driverCategoryProductInfo/${slug}`);
        category.value = response.data; // Update with fetched data
        console.log('Products fetched successfully:', category.value);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

// Watch for changes in route params to fetch new category data
watch(
    () => route.params.slug,
    (newSlug) => {
        if (newSlug) {
            fetchData(newSlug);
            productByCategory(newSlug);
        }
    }
);
</script>

<template>
    <section class="py-12 bg-[#f5f5f5]">
        <div class="grid grid-cols-4 px-5 mt-10">

            <!-- First Section -->
            <div class="py-12">
                <h3 class="bg-[#48A1DA] py-2 px-2 text-white font-semibold text-xl">Category</h3>
                <div class="bg-[#fff] pt-2" id="multi-dropdown">
                    <div class="relative font-inter antialiased">
                        <main class="relative h-auto pb-5 justify-center bg-slate-50">
                            <div class="w-full max-w-6xl mx-auto px-2">
                                <!-- Menu -->
                                <nav>
                                    <ul v-if="categoryName && categoryName.data" class="flex flex-col space-y-2 z-50">
                                        <li v-for="(item, index) in categoryName.data" :key="index"
                                            class="relative border-b border-gray-300 hover:bg-[#48A1DA] hover:text-white">
                                            <RouterLink
                                                class="p-2 text-[#333e48] font-medium hover:text-white flex items-center justify-between"
                                                :to="{ name: 'category-details', params: { slug: item.slug } }">
                                                {{ item.categoryName }}
                                            </RouterLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

            <!-- Second Section -->
            <div class="container mx-auto py-10 col-span-3">
                <div v-if="data && data.data">
                    <div class="flex w-full">
                        <div class="lg:mt-2 drop-shadow-2xl overflow-hidden cursor-pointer relative border group"
                            v-for="(category, index) in data.data" :key="index">
                            <div class="w-full">
                                <div v-if="category.contentType === 'image'">
                                    <img :src="IMG + category.categoryImage" alt="Category Image">
                                </div>
                                <div v-else-if="category.contentType === 'video'" class="lg:min-w-[1020px] border-8">
                                    <iframe width="100%" height="450" :src="category.categoryVideoUrl"
                                        style="width: 100%;" title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="mx-10">
            <div v-if="category && category.data && category.data.length > 0"
                class="grid gap-x-8 gap-y-4 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                <RouterLink v-for="(box, index) in category.data" :key="index"
                    :to="{ name: 'driver-details', params: { slug: box.slug } }">
                    <div class="lg:py-5 bg-white py-5 text-center relative rounded-lg group cursor-pointer">
                        <div class="flex justify-center overflow-hidden">
                            <img class="lg:w-56 lg:h-56 w-14 h-14 rounded-lg group-hover:scale-105 transition-all"
                                :src="IMG + box.image" :title="box.imageAltTag" alt="">
                        </div>
                        <div class="text-[#001329] lg:text-[20px] text-lg font-[600] bottom-0 relative my-2">
                            {{ box.productName }}
                        </div>
                        <p class="text-[#001329] lg:text-[16px] text-bse font-[400] bottom-0 relative my-2 mx-6 text-start"
                            v-html="box.productShortDescription">
                        </p>
                    </div>
                </RouterLink>
            </div>
            <div v-else>
                <p>No products available for this category.</p>
            </div>
        </div>

    </section>
</template>

<style scoped>
.gradient {
    background: #0695FF;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>