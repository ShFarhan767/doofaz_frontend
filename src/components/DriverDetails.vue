<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref([]); // Array of product data
const category = ref(null); // Store categories data
const route = useRoute();

// Fetch product data using the slug parameter
const fetchData = async (slug) => {
  try {
    const response = await axios.get(`${BASE_URL}driverProductInfo/${slug}`); 
    data.value = response.data.data;  // Assuming `response.data` contains the array of products
    console.log('DriverProductInfo data fetched successfully:', data.value);

    // Dynamically update the title if the metaTitle exists
    if (data.value && data.value.length > 0) {
      const metaTitle = data.value[0].metaTitle || "Default Product Title";
      document.title = metaTitle;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Fetch data when the component is mounted
onMounted(() => {
  fetchData(route.params.slug); // Use slug instead of id
});

// Watch for route changes and refetch data
watch(() => route.params.slug, (newSlug) => {
  fetchData(newSlug);  // Refetch using the new slug
});

// Fetch category data
onMounted(async () => {
  try {
    const response = await axios.get(`${BASE_URL}driverCategoryInfo`);
    category.value = response.data.data;
    console.log('Category data fetched successfully:', category.value);
  } catch (error) {
    console.error('Error fetching category data:', error);
  }
});

const scale = ref(2.4);
const transform = ref('scale(1)');
const transformOrigin = ref('50% 50%');
const isZoomed = ref(false); // Track zoom state

function handleMouseOver() {
  if (!isZoomed.value) {
    transform.value = `scale(${scale.value})`;
  }
}

function handleMouseOut() {
  if (!isZoomed.value) {
    transform.value = 'scale(1)';
  }
}

function handleMouseMove(event) {
  if (!isZoomed.value) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = ((event.pageX - left) / width) * 100;
    const y = ((event.pageY - top) / height) * 100;
    transformOrigin.value = `${x}% ${y}%`;
  }
}

function handleClick() {
  isZoomed.value = !isZoomed.value;
  if (isZoomed.value) {
    transform.value = `scale(${scale.value + 0.5}) translateY(-20%)`;
  } else {
    transform.value = 'scale(1)';
  }
}

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
                                <nav>
                                    <ul v-if="category && category.length > 0" class="flex flex-col space-y-2 z-50">
                                        <li v-for="(item, index) in category" :key="index"
                                            class="relative border-b border-gray-300 hover:bg-[#48A1DA] hover:text-white">
                                            <RouterLink
                                                class="p-2 text-[#333e48] font-medium hover:text-white flex items-center justify-between"
                                                :to="{ name: 'category-details', params: { id: item.id } }">
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
            <div v-if="data && data.length > 0" class="container mx-auto py-10 col-span-3">
                <div v-for="(product, index) in data" :key="index" class="grid lg:grid-cols-5">
                    <div class="col-span-3">
                        <div class="flex w-full">
                            <div class="product-card lg:mt-2 lg:max-w-full max-w-[320px] drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                                <div class="w-full">
                                    <div class="tile" :style="{ '--scale': scale }" @mouseover="handleMouseOver"
                                        @mouseout="handleMouseOut" @mousemove="handleMouseMove" @click="handleClick">
                                        <div class="photo"
                                            :style="{ backgroundImage: `url(${IMG + product.image})`, transform: transform, transformOrigin: transformOrigin }" style="width: 500px; height: 450px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-start col-span-2">
                        <div class="pt-4 pl-5">
                            <div class="border-b w-full py-5">
                                <h3 class="lg:text-[28px] text-xl font-semibold text-[#000]">{{ product.productTitle }}</h3>
                            </div>

                            <div class="font-normal lg:text-lg text-base pt-3">
                                <span class="font-medium text-3xl text-[#2c306b]">Key Features:</span>
                                <p class="py-5 list-disc mx-10" v-html="product.productKeyFeatures"></p>
                            </div>

                            <p class="font-normal lg:text-lg text-base pt-3">
                                <span class="font-medium text-lg text-[#000]">Warranty: {{ product.productWarranty }}</span>
                            </p>
                            <p class="font-normal lg:text-lg text-base pt-3">
                                <span class="font-medium text-lg text-[#2c306b]">Price : </span>
                                <span class="text-red-600 text-xl">{{ product.productDiscountPrice }} ৳
                                    <strike class="text-[#797979] text-lg px-2">{{ product.productPrice }} ৳ </strike>
                                </span>
                            </p>

                            <div class="flex gap-5">
                                <div class="w-40 mt-6">
                                    <a class="px-5 py-[8px] bg-red-500 text-white text-lg rounded-2xl tracking-wider"
                                        href="#" target="__blank">
                                        Order Now
                                    </a>
                                </div>
                                <div class="w-auto mt-6">
                                    <a class="px-5 py-[8px] bg-red-500 text-white text-lg rounded-2xl tracking-wider"
                                        :href="product.driverLink" target="__blank">
                                        Download Now
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="data && data.length > 0" class="px-10">
            <h1 class="font-medium text-3xl pb-8 text-center">Product Video</h1>

            <div v-for="(product, index) in data" :key="index" class="lg:h-[500px] flex justify-center">
                <div class="border-8 rounded-lg w-4/5">
                    <iframe width="100%" height="100%" style="height: 100%;" :src="product.productVideoLink"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="mx-10 rounded-lg">
            <div class="py-10">
                <div class="text-center">
                    <h3 class="font-medium text-3xl pb-8">Description</h3>
                </div>

                <div v-if="data && data.length > 0" class="border rounded-xl pb-10">

                    <div class="mx-5">
                        <h4 class="font-semibold text-[#000] text-2xl py-5 px-5">Descriptions:</h4>
                        <p class="list-disc mx-5 leading-8 text-base font-medium text-[#000]"
                            v-html="data[0].productLongDescription"></p>
                    </div>

                </div>

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

.tile {
    position: relative;
    float: left;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.photo {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: transform 0.5s ease-out;
}

.txt {
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 10%;
    left: 0;
    font-family: 'Roboto Slab', serif;
    font-size: 9px;
    line-height: 12px;
    text-align: center;
    cursor: default;
}

.x {
    font-size: 32px;
    line-height: 32px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}
</style>