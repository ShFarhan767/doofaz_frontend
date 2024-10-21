<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);
const sliderContent = ref({
    backgroundImage: '',
    backgroundImageAltTag: '',
    fontImage: '',
    FrontImageAltTag: '',
    embedSrc: '',
    ourServices: '',
    title: '',
    description: '',
    firstButtonName: 'Submit Your Need',
    firstButtonLink: '/submit-need',
    secondButtonName: 'Book Meeting',
    secondButtonLink: '/book-meeting',
    services: [],
    typeName: '',  // Added to handle the media type
});

// Fetch the API data on mount
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}slider`);
        data.value = response.data.data[0]; // Access the first item in the data array

        // Populate sliderContent with the API data
        sliderContent.value.backgroundImage = data.value.backgroundImage;
        sliderContent.value.backgroundImageAltTag = data.value.backgroundImageAltTag;
        sliderContent.value.typeName = data.value.typeName;  // Assign the media type (image/video)
        sliderContent.value.fontImage = data.value.frontImage;
        sliderContent.value.FrontImageAltTag = data.value.FrontImageAltTag;
        sliderContent.value.embedSrc = data.value.embedSrc;
        sliderContent.value.ourServices = data.value.ourServices;
        sliderContent.value.title = data.value.title;
        sliderContent.value.description = data.value.description;
        sliderContent.value.services = data.value.services.split(' , ');
        
        console.log('Slider data populated:', sliderContent.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Index to track the current service name being displayed
const currentServiceIndex = ref(0);

// Function to rotate through the service names
onMounted(() => {
    setInterval(() => {
        currentServiceIndex.value = (currentServiceIndex.value + 1) % sliderContent.value.services.length;
    }, 2000); // Change every 2 seconds
});

// Function to initialize particles.js
const initParticles = () => {
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
            opacity: { value: 0.5 },
            size: { value: 5, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6 }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" } },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } } }
        },
        retina_detect: true
    });
};

// Initialize particles.js on component mount
onMounted(() => {
    initParticles();
});
</script>

<template>
    <section>
        <div class="w-full">
            <!-- Dynamic Background Image -->
            <div>
                <div class="w-full h-[750px] bg-no-repeat bg-cover relative" :title="sliderContent.backgroundImageAltTag"
                    :style="{ backgroundImage: `url(${IMG + sliderContent.backgroundImage})` }">

                    <div id="particles-js" class="overlay absolute inset-0"></div>

                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 h-full">

                        <!-- Text Block -->
                        <div class="relative h-full inset-0 flex justify-center items-center z-10 text-white lg:px-10 lg:pt-20 pt-10 px-5 order-2 lg:order-1">
                            <div>
                                <h4 class="font-semibold lg:text-3xl text-xl">
                                    {{ sliderContent.ourServices }}
                                    <span class="service-name relative inline-block text-[#ffc107]">
                                        {{ sliderContent.services[currentServiceIndex] }}
                                    </span>
                                </h4>
                                <h2 class="lg:text-5xl text-2xl font-bold py-2">
                                    {{ sliderContent.title }}
                                </h2>
                                <p class="lg:text-lg text-sm mt-4">
                                    {{ sliderContent.description }}
                                </p>
                                <div class="lg:mt-10 mt-8 flex justify-start gap-5">
                                    <!-- Dynamic Buttons -->
                                    <a :href="sliderContent.firstButtonLink"
                                        class="lg:py-3 lg:px-6 px-2 py-2 rounded-3xl bg-[#1869b9] hover:bg-transparent hover:border hover:border-white">
                                        {{ sliderContent.firstButtonName }}
                                    </a>
                                    <a :href="sliderContent.secondButtonLink"
                                        class="lg:py-3 lg:px-6 px-2 py-2 rounded-3xl border border-white hover:border-none hover:bg-[#1869b9]">
                                        {{ sliderContent.secondButtonName }}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Media Block -->
                        <div class="relative h-full inset-0 flex justify-center items-center z-10 text-white px-10 order-1 lg:order-2 lg:mt-0 mt-14">
                            <!-- Conditionally render image or video based on typeName -->
                            <template v-if="sliderContent.typeName === 'video'">
                                <!-- Using iframe to embed the video -->
                                <iframe :src="sliderContent.embedSrc" 
                                        width="100%"
                                        height="350"
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowfullscreen 
                                        class="max-w-full mt-10"></iframe>
                            </template>

                            <template v-else-if="sliderContent.typeName === 'image'">
                                <img :src="IMG + sliderContent.fontImage" :title="sliderContent.FrontImageAltTag" :alt="sliderContent.FrontImageAltTag" class="max-w-full h-auto" />
                            </template>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Overlay styles */
.overlay {
    background-image: linear-gradient(180deg, #1869b9 0%, #4794c4 100%);
    opacity: .9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

#particles-js {
    width: 100%;
    height: 100%;
    z-index: 2;
}

.service-name {
    display: inline-block;
    opacity: 1;
    animation: fadeInOut 3s ease-in-out infinite;
}

@keyframes fadeInOut {
    0% {
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

/* Media query for mobile screen layout */
@media (max-width: 768px) {
    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
}
</style>