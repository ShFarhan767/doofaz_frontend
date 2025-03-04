<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const currentIndex = ref(0);

function slider(flag, num) {
    if (slide.value.length === 0) return; // Ensure slide array is not empty

    let nextIndex;
    if (!flag) {
        // Go to the next slide or loop back to the first slide
        nextIndex = (currentIndex.value + 1) % slide.value.length;
    } else if (flag === 'dot') {
        nextIndex = num;
    } else {
        // Go to the previous slide or loop back to the last slide
        nextIndex = (currentIndex.value - 1 + slide.value.length) % slide.value.length;
    }

    currentIndex.value = nextIndex;
}

function prevSlide() {
    clearInterval(setSlider);
    slider(true);
    startAutoSlide();
}

function nextSlide() {
    clearInterval(setSlider);
    slider(false);
    startAutoSlide();
}

function startAutoSlide() {
    setSlider = setInterval(() => slider(false), 5000);
}

onMounted(() => {
    startAutoSlide(); // Start automatic sliding
});

let setSlider;

const slide = ref([]); // Initialize as an empty array

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}driverSlider`);
        if (response.data && response.data.data) {
            slide.value = response.data.data.slice(0, 4); // Limit to 4 images
        }
        console.log('Data fetched successfully:', slide.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const category = ref(null);
const products = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}driverCategoryInfo`);
        category.value = response.data;
        console.log('Categories fetched:', category.value);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
});

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}driverProductEntryInfo`);
        products.value = response.data.data
        console.log('Products fetched:', products.value);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
});

// Filter products based on category
const filteredProducts = (categoryId) => {
    return products.value.filter(product => product.categoryType == categoryId);
};

const printers = [
    {
        name: "Gprinter",
        model: "Gprinter GP-80250IVN POS Printer",
        // image: '/src/assets/Driver/Gprinter.png',
        image: '/assets/Gprinter.png',
        price: 7500.00,
        originalPrice: 8500.00
    },
    {
        name: "Zebra ZD Series",
        model: "Zebra GT-800 300dpi Label Barcode Printer",
        // image: '/src/assets/Driver/Zebra.jpg',
        image: '/assets/Zebra.jpg',
        price: 9200.00,
        originalPrice: 10200.00
    },
    {
        name: "Epson",
        model: "Epson TM-T20II POS Printer",
        // image: '/src/assets/Driver/Gprinter.png',
        image: '/assets/Gprinter.png',
        price: 9200.00,
        originalPrice: 10200.00
    },
    {
        name: "Epson",
        model: "Epson TM-T20II POS Printer",
        // image: '/src/assets/Driver/Gprinter.png',
        image: '/assets/Gprinter.png',
        price: 9200.00,
        originalPrice: 10200.00
    },
    {
        name: "Epson",
        model: "Epson TM-T20II POS Printer",
        // image: '/src/assets/Driver/Gprinter.png',
        image: '/assets/Gprinter.png',
        price: 9200.00,
        originalPrice: 10200.00
    },
    // Add more printers as needed
];
</script>

<template>

    <section class="lg:mt-[100px] mt-[100px] pb-20 bg-[#f5f5f5]">
        <!-- Slider Section -->
        <div class="slider w-full lg:h-[500px] h-[300px] relative ">
            <ul v-if="slide.length" class="relative w-full lg:h-[550px] h-[500px] overflow-hidden">
                <li v-for="(slides, index) in slide" :key="index" class="item"
                    :class="{ current: index === currentIndex }">
                    <!-- Large screen image -->
                    <img :src="IMG + (slides.backgroundImage)" :alt="slides.backgroundImageAltTag" class="bg-cover">
                </li>
            </ul>

            <button @click="prevSlide"
                class="absolute lg:top-1/2 top-[40%] left-4 z-30 flex items-center justify-center lg:h-12 lg:w-12 w-8 h-8 bg-gray-700 rounded-full text-white focus:outline-none">
                <span class="flex justify-center items-center">
                    <i class="fa-solid fa-chevron-left lg:text-xl text-sm"></i>
                </span>
                <span class="sr-only">Previous</span>
            </button>
            <button @click="nextSlide"
                class="absolute lg:top-1/2 top-[40%] right-4 z-30 flex items-center justify-center lg:h-12 lg:w-12 w-8 h-8 bg-gray-700 rounded-full text-white focus:outline-none">
                <span class="flex justify-center items-center">
                    <i class="fa-solid fa-chevron-right lg:text-xl text-sm"></i>
                </span>
                <span class="sr-only">Next</span>
            </button>

        </div>
        <!-- Slider Section -->

        <!-- Product Section -->
        <div class="container mx-auto">
            <div class="py-5 mt-10">
                <div v-for="(cat, index) in category?.data" :key="index" class="bg-white pb-10 mt-10 rounded-xl h-auto">
                    <div class="py-4 px-10 border-b">
                        <h2 class="font-medium text-xl">{{ cat.categoryName }}</h2>
                    </div>

                    <div class="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <RouterLink 
                            v-for="(product, pIndex) in filteredProducts(cat.id)" 
                            :key="pIndex" 
                            :to="{ name: 'driver-details', params: { slug: box.slug } }"
                            class="w-11/12 mx-auto pt-4 cursor-pointer hover:shadow-lg"
                        >
                            <div class="py-2 border border-b-0 rounded-t-lg">
                                <h2 class="font-medium text-lg mx-2">{{ product.productName }}</h2>
                            </div>
                            <div class="w-full h-[220px] border">
                                <img :src="IMG + product.image" :alt="product.imageAltTag">
                            </div>
                            <div class="py-2 border border-t-0 rounded-b-lg">
                                <h5 class="text-base mx-4 font-medium">{{ product.productTitle }}</h5>
                                <p class="mx-4 text-[#f57224]">Price</p>
                                <div class="flex items-center justify-start gap-2">
                                    <h2 class="font-normal text-base ml-4">{{ product.productDiscountPrice }}৳</h2>
                                    <strike class="font-normal text-sm text-[#6b6b6b]">{{ product.productPrice }}৳</strike>
                                </div>
                                <div class="py-2 mx-4 flex gap-2">
                                    <a :href="product.driverLink" class="dm-sans text-xs font-medium py-1 px-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white">
                                        Install Now
                                    </a>
                                    <button class="dm-sans text-xs font-medium py-1 px-3 border border-[#000] rounded-full hover:bg-[#000] hover:text-white">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product Section -->

    </section>

</template>

<style scoped>
.slider {
    position: relative;
}

button {
    transition: background-color 0.3s;
}

button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.7);
}

button span {
    font-size: 1.5rem;
}

.items {
    padding-bottom: 56.25%;
}

.item {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity .6s ease-in-out;
}

.item.current {
    opacity: 1;
}

.item img {
    width: 100%;
    height: 520px;
    object-fit: cover;
}

@media (max-width: 768px) {
    .item img {
        width: 500px !important;
        height: 420px;
        background-size: cover;
        object-fit: fill;
        overflow: hidden;
    }
}

@media (max-width: 576px) {
    .item img {
        width: 500px;
        height: 280px;
        background-size: cover;
        object-fit: fill;
        overflow: hidden;
    }
}
</style>