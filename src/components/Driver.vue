<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);

function slider(flag, num) {
    let nextIndex;
    if (!flag) {
        nextIndex = currentIndex.value === slide.length - 1 ? 0 : currentIndex.value + 1;
    } else if (flag === 'dot') {
        nextIndex = num;
    } else {
        nextIndex = currentIndex.value === 0 ? slide.length - 1 : currentIndex.value - 1;
    }

    currentIndex.value = nextIndex;
}

function prevSlide() {
    clearInterval(setSlider);
    slider(true);
    setSlider = setInterval(() => slider(false), 5000);
}

function nextSlide() {
    clearInterval(setSlider);
    slider(false);
    setSlider = setInterval(() => slider(false), 5000);
}

onMounted(() => {
    setSlider = setInterval(() => slider(false), 5000);
});

let setSlider;

const slide = [
    {
        // image: "/src/assets/slider/slider-1.webp",
        image: "/assets/slider-1.webp",
    },
    {
        // image: "/src/assets/slider/slider-1.webp",
        image: "/assets/slider-1.webp",
    },
    {
        // image: "/src/assets/slider/slider-1.webp",
        image: "/assets/slider-1.webp",
    },
    {
        // image: "/src/assets/slider/slider-1.webp",
        image: "/assets/slider-1.webp",
    },
    {
        // image: "/src/assets/slider/slider-1.webp",
        image: "/assets/slider-1.webp",
    },
];

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
            <ul class="relative w-full lg:h-[550px] h-[500px] overflow-hidden">
                <li v-for="( slides, index) in slide" :key="index" class="item"
                    :class="{ current: index === currentIndex }">
                    <!-- Large screen image -->
                    <img :src="slides.image" alt="slide image" class="bg-cover">
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

                <!-- Printer Section -->
                <div class="bg-white pb-10 rounded-xl">
                    <div class="py-4 px-10 border-b">
                        <h2 class="font-medium text-xl">POS Printer Driver</h2>
                    </div>
                    <div class="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <RouterLink to="/driver-details" v-for="(printer, index) in printers" :key="index"
                            class="w-11/12 mx-auto pt-4 cursor-pointer hover:shadow-lg">
                            <div class="py-2 border border-b-0 rounded-t-lg">
                                <h2 class="font-medium text-lg mx-2">{{ printer.name }}</h2>
                            </div>
                            <div class="w-full h-ful border">
                                <img :src="printer.image" :alt="printer.name">
                            </div>
                            <div class="py-2 border border-t-0 rounded-b-lg">
                                <h5 class="text-base mx-4 font-medium">{{ printer.model }}</h5>
                                <p class="mx-4 text-[#f57224]">Price</p>
                                <div class="flex items-center justify-start gap-2">
                                    <h2 class="font-normal text-base ml-4">{{ printer.price }}৳</h2>
                                    <strike class="font-normal text-sm text-[#6b6b6b]">{{ printer.originalPrice
                                        }}৳</strike>
                                </div>

                                <div class="py-2 mx-4 flex gap-2">
                                    <button class="dm-sans text-xs font-medium py-1 px-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white">
                                        Install Now
                                    </button>
                                    <button class="dm-sans text-xs font-medium py-1 px-3 border border-[#000] rounded-full hover:hover:bg-[#000] hover:text-white">
                                        Oder Now
                                    </button>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
                <!-- Printer Section -->

                <!-- Rongta Section -->
                <div class="bg-white pb-10 mt-10 rounded-xl">
                    <div class="py-4 px-10 border-b">
                        <h2 class="font-medium text-xl">Barcode Printer Driver:</h2>
                    </div>
                    <div class="grid lg:grid-cols-5 grid-cols-1 gap-5">
                        <RouterLink to="/driver-details" v-for="(printer, index) in printers" :key="index"
                            class="w-11/12 mx-auto pt-4 cursor-pointer hover:shadow-lg">
                            <div class="py-2 border border-b-0 rounded-t-lg">
                                <h2 class="font-medium text-lg mx-2">{{ printer.name }}</h2>
                            </div>
                            <div class="w-full h-ful border">
                                <img :src="printer.image" :alt="printer.name">
                            </div>
                            <div class="py-2 border border-t-0 rounded-b-lg">
                                <h5 class="text-base mx-4 font-medium">{{ printer.model }}</h5>
                                <p class="mx-4 text-[#f57224]">Price</p>
                                <div class="flex items-center justify-start gap-2">
                                    <h2 class="font-normal text-base ml-4">{{ printer.price }}৳</h2>
                                    <strike class="font-normal text-sm text-[#6b6b6b]">{{ printer.originalPrice
                                        }}৳</strike>
                                </div>
                                <div class="py-2 mx-4 flex gap-2">
                                    <button class="dm-sans text-xs font-medium py-1 px-3 border border-red-600 rounded-full hover:bg-red-600 hover:text-white">
                                        Install Now
                                    </button>
                                    <button class="dm-sans text-xs font-medium py-1 px-3 border border-[#000] rounded-full hover:hover:bg-[#000] hover:text-white">
                                        Oder Now
                                    </button>
                                </div>
                            </div>
                        </RouterLink>
                    </div>
                </div>
                <!-- Rongta Section -->
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