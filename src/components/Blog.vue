<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}blogCardInfo`);
        // Filter data based on homepageShowStatus
        data.value = {
            ...response.data,
            data: response.data.data.filter(item => item.homepageShowStatus === 'enable')
        };
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Watch the data and initialize Owl Carousel when it becomes available
watch(data, (newValue) => {
    if (newValue && newValue.data.length) {
        nextTick(() => {
            let $carousel = $(".custom-carousel");

            // Destroy previous instance
            $carousel.trigger('destroy.owl.carousel');
            $carousel.removeClass('owl-loaded owl-drag').find('.owl-stage-outer').children().unwrap();

            // Reinitialize only if there is data
            if (newValue.data.length > 0) {
                $carousel.owlCarousel({
                    loop: false, // No extra cloned items
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
        });
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
    <section class="blog-area lg:h-auto bg:hover:gray-500 pb-10">
        <div class="Title py-5 md:mt-8">
            <h2 class="text-center font-bold md:text-4xl text-2xl text-[#48a1da] py-4">
                Read Our Latest Tips & Tricks
            </h2>
            <div class="w-full flex justify-center">
                <span class="Heading_Line relative w-28 h-1 bg-[#48a1da]"></span>
            </div>
        </div>

        <div v-if="data && data.data.length" class="owl-carousel custom-carousel">
            <div v-for="(blog, index) in data.data" :key="index" class="item border rounded-lg min-h-[750px] max-h-[750px] mx-4">
                <RouterLink :to="{ name: 'blog', params: { slug: blog.slug } }">
                    <article class="bg-white shadow-custom rounded-lg p-2 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG + blog.Image" :title="blog.imageAltTag"
                                class="w-full lg:h-full lg:min-h-[300px] lg:max-h-[300px] md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ formatDate(blog.created_at) }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.title }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.shortDescription }}
                            </p>
                            <a :href="blog.buttonUrl"
                                class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                Read More
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </RouterLink>
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

.item {
    width: 420px !important;
    margin-right: 30px;
    height: auto;
    padding-bottom: 80px;
}

@media all and (min-width:320px) and (max-width:780px) {
    .item {
        width: 355px !important;
        margin-right: 30px;
        height: auto;
        padding-bottom: 70px;
    }
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

.touch {
    transition: all 500ms ease;
    box-shadow: 0 6px 25px rgba(12, 89, 219, 0.09);
    cursor: pointer;
    transition: all 500ms ease;
}

.linear {
    background: -webkit-linear-gradient(left, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
}

.touch:hover .linear {
    background: linear-gradient(to left, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
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