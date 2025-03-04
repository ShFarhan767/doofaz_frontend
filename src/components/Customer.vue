<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);

// Fetch API data on mount
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}customerReviewsInfo`);
        data.value = response.data; // Store API response
        console.log('Data Fetched Successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Watch for data changes and initialize the carousel
watch(data, (newValue) => {
    if (newValue && newValue.data) {
        setTimeout(() => {
            // Destroy previous carousel instance if needed
            $(".custom-carousel").trigger('destroy.owl.carousel').removeClass('owl-loaded owl-drag');

            // Check if there are enough items for sliding
            if (newValue.data.length > 2) {
                $(".custom-carousel").owlCarousel({
                    loop: false, // Disable loop to prevent duplication
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 1000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }
                });
            }
        }, 100);
    }
});
</script>

<template>
    <section class="blog-area lg:h-auto bg-gray-50 pb-10">
        <div class="Title py-5">
            <h2 class="text-center font-bold md:text-4xl text-2xl text-[#48a1da] py-4">
                What Saying Our Customers
            </h2>
            <div class="w-full flex justify-center">
                <span class="Heading_Line relative w-28 h-1 bg-[#48a1da]"></span>
            </div>
        </div>

        <div v-if="data && data.data" :class="{ 'owl-carousel custom-carousel': data.data.length > 1 }">
            <div v-for="testimonial in data.data" :key="testimonial.id" class="item">
                <article class="bg-white shadow-custom rounded-lg p-5 group lg:max-w-[450px] lg:max-h-[570px] lg:min-h-[570px] min-h-[500px] max-h-[500px]" data-aos="fade-up"
                    data-aos-duration="2000">
                    <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center dooted-image">
                        <div class="lg:w-10 w-10 lg:h-10">
                            <img :src="IMG + testimonial.quoteImage" :title="testimonial.quoteImageAltTag"
                                class="lg:w-10 w-10 lg:h-10 md:h-10 transform scale-1 group-hover:scale-105 duration-500"
                                alt="Quote">
                        </div>
                    </a>
                    <div class="md:px-6 px-2 lg:min-h-[250px]">
                        <p class="text-center md:leading-8 text-[#333333] md:text-lg text-base custom-font">
                            {{ testimonial.quote }}
                        </p>
                    </div>
                    <div class="Image flex justify-center relative mt-5">
                        <div class="inline-block  lg:ml-0 ml-5">
                            <img :src="IMG + testimonial.authorImage" :title="testimonial.authorImageAltTag" class="w-28 rounded-full" alt="Author">
                            <div class="Title text-center mt-4">
                                <a href="#" class="text-[#0A0A0A] text-2xl font-semibold custom-font">
                                    {{ testimonial.authorName }}
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Livvic:wght@300;400;500;600;700&display=swap');

.Title h2,
.custom-font {
    font-family: "Livvic", sans-serif;
}

.Heading_Line::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.7px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1940AA;
    animation: watermark-animate 3s linear infinite alternate-reverse;
}

.doooted-image img {
    width: 40px;
    display: block;
}

.Image img {
    width: 150px;
    display: block;
}

.item {
    padding-bottom: 50px !important;
    height: 780px;
}

@media (max-width: 768px) {
    .item {
        box-shadow: 0 10px 30px rgba(71, 71, 71, 0.09);
        padding-bottom: 80px !important;
        height: 620px;
    }
}

@keyframes watermark-animate {
    0% {
        left: 0;
    }
    100% {
        left: 95%;
    }
}
</style>