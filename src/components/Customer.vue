<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);
const carouselRef = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}customerReviewsInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);

        nextTick(() => {
            $(carouselRef.value).owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000, // 3 seconds
                autoplayHoverPause: true,
                smartSpeed: 1000, // 1 second for smooth transitions
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                },
                animateOut: 'fadeOut', // Optional: fade out animation
                animateIn: 'fadeIn'    // Optional: fade in animation
            });
        });
    } catch (error) {
        console.error('Error fetching data:', error);
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

        <div v-if="data && data.data" ref="carouselRef" class="owl-carousel custom-carouselC">
            <div class="item" v-for="testimonial in data.data" :key="testimonial.id">
                <article class="bg-white shadow-custom rounded-lg p-5 group lg:max-h-[650px] lg:min-h-[650px] min-h-[500px] max-h-[500px]" data-aos="fade-up"
                    data-aos-duration="2000">
                    <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center dooted-image">
                        <div class="lg:w-10 w-10 lg:h-10">
                            <img :src="IMG + testimonial.quoteImage" :title="testimonial.quoteImageAltTag"
                                class="lg:w-10 w-10 lg:h-10 md:h-10 transform scale-1 group-hover:scale-105 duration-500"
                                alt="Quote">
                        </div>
                    </a>
                    <div class="md:px-6 px-2 lg:min-h-[430px]">
                        <p class="text-center md:leading-9 text-[#333333] md:text-lg text-base custom-font">
                            {{ testimonial.quote }}
                        </p>
                    </div>
                    <div class="Image flex justify-center relative mt-10">
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
@import url('https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Pacifico&family=Plus+Jakarta+Sans:ital,wght@0,553;1,553&family=Poppins:wght@300;400&family=Protest+Guerrilla&family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

/* Apply the fonts to specific elements or classes */
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
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-name: watermark-animate;
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
    padding-bottom: 80px !important;
    height: 760px;
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