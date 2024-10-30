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
                <div class="w-full h-[750px] bg-no-repeat bg-cover relative"
                    :title="sliderContent.backgroundImageAltTag"
                    :style="{ backgroundImage: `url(${IMG + sliderContent.backgroundImage})` }">

                    <div id="particles-js" class="overlay absolute inset-0"></div>

                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5 h-full">

                        <!-- Text Block -->
                        <div
                            class="relative h-full inset-0 flex justify-center items-center z-10 text-white lg:px-10 lg:pt-20 pt-10 px-5 order-2 lg:order-1">
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
                                    <!-- modal=========== -->
                                    <div>
                                        <!-- Trigger Button -->
                                        <button @click="openModal = true"
                                            class="lg:py-3 lg:px-6 px-2 py-2 rounded-3xl bg-[#1869b9] hover:bg-transparent hover:border hover:border-white">
                                            Open Modal
                                        </button>

                                        <!-- Modal -->
                                        <div v-if="openModal" class="mt-[60px] fixed z-50 inset-0 overflow-y-auto"
                                            @click.self="openModal = false">
                                            <!-- Background Overlay -->
                                            <div class="fixed inset-0 transition-opacity bg-gray-500 opacity-75"
                                                aria-hidden="true"></div>

                                            <!-- Centered Modal Content -->
                                            <div class="ml-[-500px] min-h-screen px-4 text-center sm:block sm:p-0">
                                                <!-- Trick to center the modal contents -->
                                                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
                                                    aria-hidden="true">&#8203;</span>

                                                <div
                                                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                    <form @submit.prevent="handleSubmit" class="bg-white p-6 relative">
                                                        <!-- Close Button (Top-right corner) -->
                                                        <button @click="openModal = false"
                                                            class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                        <h2 class="text-center text-black font-bold text-xl font-serif">
                                                            Our Service</h2>

                                                        <!-- Form Fields -->
                                                        <!-- 1st Select Dropdown -->
                                                        <label for="countries"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                            Select an option
                                                        </label>
                                                        <select id="countries"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            @change="showSubOption">
                                                            <option value="">Please Select...</option>
                                                            <option value="software">Software</option>
                                                            <option value="website">Website</option>
                                                            <option value="custom">Custom</option>
                                                        </select>

                                                        <div v-if="option2">
                                                            <label for="countries2"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                id="countries2Label">
                                                                Select a Project
                                                            </label>
                                                            <select id="countries2"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                                <option>Bulk SMS Software</option>
                                                                <option>Freight Software</option>
                                                                <option>Payroll Software</option>
                                                                <option>WhatsApp Marketing Software</option>
                                                            </select>
                                                        </div>
                                                        <!-- Additional Fields -->
                                                        <div>
                                                            <label for="name"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                            <input type="text" id="name"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Your Name" required />
                                                        </div>
                                                        <div>
                                                            <label for="phone"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                                                number</label>
                                                            <input type="tel" id="phone"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="+880" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                                required />
                                                        </div>
                                                        <div>
                                                            <label for="email"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                                                address</label>
                                                            <input type="email" id="email"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="@Gmail.com" required />
                                                        </div>
                                                        <div>
                                                            <label for="message"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                                message</label>
                                                            <textarea id="message" rows="4"
                                                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Write your thoughts here..."></textarea>
                                                        </div>
                                                    </form>

                                                    <!-- Bottom Buttons -->
                                                    <div
                                                        class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                        <button type="submit"
                                                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">
                                                            Submit
                                                        </button>
                                                        <button @click="openModal = false" type="button"
                                                            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- modal=========== -->
                                    <!-- <a :href="sliderContent.secondButtonLink"
                                        class="lg:py-3 lg:px-6 px-2 py-2 rounded-3xl border border-white hover:border-none hover:bg-[#1869b9]">
                                        {{ sliderContent.secondButtonName }}
                                    </a> -->

                                    <!-- Book Meeting================== -->
                                    <div class="">
                                        <button @click="openModalOne = true"
                                            class="lg:py-3 lg:px-6 px-2 py-2 rounded-3xl bg-[#1869b9] hover:bg-transparent hover:border hover:border-white">
                                            Book Meeting
                                        </button>

                                        <!-- Modal One -->
                                        <div v-if="openModalOne" id="serviceModalOne"
                                            class="fixed z-50 mt-[100px] inset-0 overflow-y-auto justify-center px-4">
                                            <div class="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                                                <!-- Close Button (Top-right corner) -->
                                                <button @click="openModalOne = false"
                                                    class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                            stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                                <h2 class="text-center text-black font-bold text-xl font-serif">Book
                                                    Meeting</h2>
                                                <form>
                                                    <div class="grid gap-3 md:grid-cols-2">
                                                        <!-- name=============== -->
                                                        <div>
                                                            <label for="Name"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                                            <input type="text" id="Name"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="Name" required />
                                                        </div>
                                                        <!-- name=============== -->

                                                        <!-- Company=============== -->
                                                        <div>
                                                            <label for="Company"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                                                                or Organization name</label>
                                                            <input type="text" id="Company"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                required />
                                                        </div>
                                                        <!-- Company=============== -->

                                                        <!-- number============ -->
                                                        <div>
                                                            <label for="phone"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone
                                                                number</label>
                                                            <input type="tel" id="phone"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="+880" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                                required />
                                                        </div>
                                                        <!-- number============ -->

                                                        <!-- email============= -->
                                                        <div>
                                                            <label for="email"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email
                                                                address</label>
                                                            <input type="email" id="email"
                                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                placeholder="@Gmail.com" required />
                                                        </div>
                                                        <!-- email============= -->
                                                    </div>
                                                    <!-- select=================== -->
                                                    <div class="mt-3">
                                                        <label for="countries"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consultation
                                                            Interest</label>
                                                        <select id="countries"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1869b9] focus:border-[#1869b9] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1869b9] dark:focus:border-[#1869b9]">
                                                            <option selected>Please Select</option>
                                                            <option value="S">Support</option>
                                                            <option value="WD">Web Design</option>
                                                            <option value="HS">Hosting Solutions</option>
                                                            <option value="BD">Business Development</option>
                                                            <option value="TE">Telephony</option>
                                                            <option value="erp">ERP Software</option>
                                                            <option value="NS">Network Solutions</option>
                                                            <option value="Wms">Marketing Software</option>
                                                            <option value="online">Online/Offline Software</option>
                                                            <option value="">Other</option>
                                                        </select>
                                                    </div>
                                                    <!-- select=================== -->

                                                    <!-- Date================== -->
                                                    <div class="m-3">
                                                            <label for="date"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date:</label>
                                                            <input
                                                                class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                type="date" id="date" name="date">
                                                    </div>
                                                    <!-- Date================== -->

                                                    <!-- message===================== -->
                                                    <div>
                                                        <label for="message"
                                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                            message</label>
                                                        <textarea id="message" rows="4"
                                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Write your thoughts here..."></textarea>
                                                    </div>
                                                    <!-- message===================== -->
                                                </form>
                                                <!-- close Button============= -->
                                                <div class="pt-5">
                                                    <button @click="openModalOne = false" type="button"
                                                            class="mt-3 w-full inline-flex justify-center rounded-md border border-black shadow-sm px-4 py-2 bg-[#1869b9] text-base font-medium hover:text-black hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                                                            Close
                                                    </button>
                                                </div>
                                                <!-- close Button============= -->
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Book Meeting================== -->

                                </div>
                            </div>
                        </div>

                        <!-- Media Block -->
                        <div
                            class="relative h-full inset-0 flex justify-center items-center z-10 text-white px-10 order-1 lg:order-2 lg:mt-0 mt-14">
                            <!-- Conditionally render image or video based on typeName -->
                            <template v-if="sliderContent.typeName === 'video'">
                                <!-- Using iframe to embed the video -->
                                <iframe :src="sliderContent.embedSrc" width="100%" height="350" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen class="max-w-full mt-10"></iframe>
                            </template>

                            <template v-else-if="sliderContent.typeName === 'image'">
                                <img :src="IMG + sliderContent.fontImage" :title="sliderContent.FrontImageAltTag"
                                    :alt="sliderContent.FrontImageAltTag" class="max-w-full h-auto" />
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
<script>
export default {
    data() {
        return {
            option2: false,
            openModal: false, // controls the modal visibility
            sliderContent: {
                firstButtonLink: '#',  // Replace with your actual link
                firstButtonName: 'Click Me'  // Replace with your button text
            }
        }
    },
    methods: {
        showSubOption(event) {
            const selectedValue = event.target.value;
            this.option2 = (selectedValue === "software" || selectedValue === "website");
        }
    }
}
 
</script>