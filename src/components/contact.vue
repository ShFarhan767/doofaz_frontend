<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const data = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeLocationInfo`);
        data.value = response.data;
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const locationDetails = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeDetailsInfo`);
        locationDetails.value = response.data;
        console.log('Data fetched successfully:', locationDetails.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const selectedCategory = ref('');
const selectedCategoryFromDropdown = ref(null);
const categoryOptions = ref([]);
const softwareMenu = ref([]);
const softwareCategory = ref([]);
const websiteMenu = ref([]);
const othersMenu = ref([]);
const selectedSoftwareCategory = ref(null);  // Add a reactive reference for the software category

// Fetch Software Menu
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareMenuInfo`);
        softwareMenu.value = response.data.data;
        console.log('Software Menu Data:', softwareMenu.value);
    } catch (error) {
        console.error('Error fetching software menu:', error);
    }
});

// Fetch Software Category
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}softwareCategoryName`);
        softwareCategory.value = response.data.data;
        console.log('Software Category Data:', softwareCategory.value);
    } catch (error) {
        console.error('Error fetching software categories:', error);
    }
});

// Fetch Website Menu
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}websiteMenuItemInfo`);
        websiteMenu.value = response.data.data;
        console.log('Website Menu Data:', websiteMenu.value);
    } catch (error) {
        console.error('Error fetching website menu:', error);
    }
});

const updateCategoryOptionsFromRadio = () => {
    if (selectedCategory.value === 'software') {
        categoryOptions.value = softwareMenu.value;
    } else if (selectedCategory.value === 'website') {
        categoryOptions.value = websiteMenu.value;
    } else if (selectedCategory.value === 'others') {
        categoryOptions.value = othersMenu.value;
    } else {
        categoryOptions.value = [];
    }
};

// const updateCategoryOptionsFromDropdown = () => {
//     if (selectedCategoryFromDropdown.value) {
//         selectedCategory.value = null; // Reset radio buttons when dropdown is selected
//     }
// };

// Computed property to filter items with position "1"
const filteredLocationDetails = computed(() => {
    return locationDetails.value?.data?.filter(item => item.position === "1") || [];
});

// Computed property to filter items with position "2"
const filteredLocationDetailsPosition2 = computed(() => {
    return locationDetails.value?.data?.filter(item => item.position === "2") || [];
});

// Computed property to filter items with position "3"
const filteredLocationDetailsPosition3 = computed(() => {
    return locationDetails.value?.data?.filter(item => item.position === "3") || [];
});

const numbers = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}officeHelplineNumbersInfo`);
        // Filter data based on homepageShowStatus
        numbers.value = {
            ...response.data,
            data: response.data.data.filter(item => item.numberShowStatus === 'enable')
        };
        console.log('Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const formData = ref({
    name: '',
    email: '',
    number: '',
    location: '',
    message: '',
    otherCategory: ''
});

const submitForm = async () => {
    try {
        const response = await axios.post(`${BASE_URL}formData`, {
            ...formData.value,
            selectedCategory: selectedCategory.value,
            selectedCategoryFromDropdown: String(selectedCategoryFromDropdown.value),  // Convert to string
            selectedSoftwareCategory: String(selectedSoftwareCategory.value),  // Convert to string
            otherCategory: formData.value.otherCategory,
            number: String(formData.value.number)  // Convert to string
        });

        // Handle success response (e.g., show a message to the user)
        console.log(response);

        
        // Reset all form fields after successful submission
        formData.value = {
            name: '',
            email: '',
            number: '',
            location: '',
            message: '',
            otherCategory: ''
        };
        
        // Reset the other selected fields
        selectedCategory.value = ''; // Reset selectedCategory
        selectedCategoryFromDropdown.value = ''; // Reset selectedCategoryFromDropdown
        selectedSoftwareCategory.value = ''; // Reset selectedSoftwareCategory
        
        showToast();
    } catch (error) {
        // Handle error response (e.g., show an error message)
        alert('An error occurred while submitting the form');
        console.error(error);
    }
};

function showToast() {
    const toastHTML = `
        <div class="flex items-center w-full max-w-[500px] h-20 p-4 space-x-4 rtl:space-x-reverse text-black bg-white font-semibold text-xl divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-lg dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800" role="alert">
            <i class="fa-regular fa-circle-check text-[#38c976] text-5xl w-20 h-20 flex items-center justify-center"></i>
            <div class="ps-4 text-3xl font-semibold text-green-800">Thank you for your order</div>
        </div>
    `;

    const toastContainer = document.getElementById('toast-container');
    const toastElement = document.createElement('div');
    toastElement.innerHTML = toastHTML;
    toastContainer.appendChild(toastElement);

    // Remove the toast after 3 seconds
    setTimeout(() => {
        toastElement.remove();
    }, 10000);
}
</script>

<template>
    <section class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div class="container mx-auto">
            <div class="text-center">
                <h2
                    class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[200px] mt-[200px] lg:px-0 px-3 text-black leading-tight">
                    Contact Us</h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>

    <section v-if="data && data.data" class="bg-[#d8dfe0]">
        <!-- ====================informetion-area==================== -->
        <div class="lg:px-20 grid gap-x-8 gap-y-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:pb-12">

            <!-- =================company-info============= -->
            <div class="cumpany-info lg:w-[80%] lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 pt-5">

                <!-- Position 1 -->
                <div v-if="locationDetails && locationDetails.data">
                    <div v-for="(details, index) in filteredLocationDetails" :key="index" class="pt-4">
                        <h2 class="text-center text-2xl font-semibold">
                            <span class="text-[#48a1da]">{{ details.locationId }}</span>
                        </h2>

                        <span>
                            <span>
                                <p class="text-sm mt-4 font-medium flex justify-start items-baseline gap-2">
                                    <i class="fa-solid fa-location-pin text-[#ef4444]"></i>
                                    <span class="text-lg">{{ details.address }}</span>
                                </p>
                                <p class="text-md mt-3 font-medium" v-html="details.details"></p>
                            </span>
                        </span>
                    </div>
                </div>
                <!-- Position 1 -->

                <div v-if="numbers && numbers.data" class="pt-4">
                    <h2 class="text-center text-2xl font-semibold text-[#48a1da] mt-5">Doofaz IT Helpline</h2>
                    <p v-for="(number, index) in numbers.data" :key="index" class="text-md mt-4 font-medium">
                        <span v-html="number.icon" class="text-red-500"></span> {{ number.number }}
                        <span class="font-[500] text-[#48a1da]">{{ number.numberTitle }}</span>
                    </p>
                </div>
            </div>
            <!-- =================company-info End============= -->

            <!-- =================form-info============= -->
            <div class="form-area lg:w-[150%] lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 pt-5 lg:-ml-20">
                <form @submit.prevent="submitForm" class="max-w-md mx-auto">
                    <!-- Radio Buttons -->
                    <div class="flex">
                        <div class="flex items-center me-4 w-2/4 border p-3 rounded-lg">
                            <input id="software-radio" type="radio" value="software" v-model="selectedCategory"
                                @change="updateCategoryOptionsFromRadio" name="category-group"
                                class="w-4 h-4 text-blue-600" />
                            <label for="software-radio"
                                class="ms-2 text-base font-medium text-gray-900">Software</label>
                        </div>
                        <div class="flex items-center me-4 w-2/4 border p-3 rounded-lg">
                            <input id="website-radio" type="radio" value="website" v-model="selectedCategory"
                                @change="updateCategoryOptionsFromRadio" name="category-group"
                                class="w-4 h-4 text-blue-600" />
                            <label for="website-radio" class="ms-2 text-base font-medium text-gray-900">Website</label>
                        </div>
                        <div class="flex items-center me-4 w-2/4 border p-3 rounded-lg">
                            <input id="others-radio" type="radio" value="others" v-model="selectedCategory"
                                @change="updateCategoryOptionsFromRadio" name="category-group"
                                class="w-4 h-4 text-blue-600" />
                            <label for="others-radio" class="ms-2 text-base font-medium text-gray-900">Others</label>
                        </div>
                    </div>

                    <!-- Select Dropdown -->
                    <div v-if="selectedCategory !== 'others'" class="my-5">
                        <label for="category-select" class="block mb-2 text-sm font-medium text-gray-900">Select
                            Category</label>
                        <select id="category-select"
                            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg"
                            v-model="selectedCategoryFromDropdown" @change="updateCategoryOptionsFromDropdown">
                            <option selected disabled>Choose a category</option>
                            <option v-for="option in categoryOptions" :key="option.id" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Software Category (Visible after selecting 'Software' radio button) -->
                    <div v-if="selectedCategory === 'software'" class="my-5">
                        <label for="software-category" class="block mb-2 text-sm font-medium text-gray-900">Software
                            For</label>
                        <select id="software-category"
                            class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg"
                            v-model="selectedSoftwareCategory">
                            <option selected disabled>Choose a category</option>
                            <option v-for="option in softwareCategory" :key="option.id" :value="option.id">
                                {{ option.name }}
                            </option>
                        </select>
                    </div>

                    <!-- Other's Category Input -->
                    <div v-if="selectedCategory === 'others'" class="mb-5 mt-5">
                        <label for="otherCategory" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                        <input type="text" id="otherCategory"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Submit Your Category"
                            v-model="formData.otherCategory" />  <!-- Bind to formData.otherCategory -->
                    </div>

                    <div class="mb-5 mt-5">
                        <label for="Name" class="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
                        <input type="text" id="Name" v-model="formData.name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="name" required />
                    </div>
                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" id="email" v-model="formData.email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5"
                            placeholder="name@flowbite.com" required />
                    </div>

                    <div class="mb-5">
                        <label for="number" class="block mb-2 text-sm font-medium text-gray-900 ">Contact No</label>
                        <input type="text" id="number" v-model="formData.number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Contact number" required />
                    </div>

                    <div class="mb-5">
                        <label for="location" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                        <input type="location" id="location" v-model="formData.location"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5"
                            placeholder="Addresss" required />
                    </div>

                    <div class="mb-5">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                        <textarea id="message" v-model="formData.message" rows="4"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Leave a comment..."></textarea>
                    </div>

                    <button type="submit"
                        class="lg:ml-[30%] ml-[33%] text-[black] hover:text-[#fff] text-[16px] bg-[#48a1da] font-semibold rounded-lg sm:w-auto lg:px-20 px-10 py-2.5 text-center">Submit</button>
                </form>

            </div>
            <!-- =================form-info End============= -->

            <!-- =================company-info============= -->
            <div class="cumpany-info lg:w-[80%] lg:ml-28 lg:h-auto lg:mt-10 lg:pb-5 lg:pt-5 pb-5 px-5 lg:px-8 pt-5">
                <!-- Position 2 -->
                <div v-if="locationDetails && locationDetails.data">
                    <div v-for="(details, index) in filteredLocationDetailsPosition2" :key="index" class="pt-4">
                        <h2 class="text-center text-2xl font-semibold">
                            <span class="text-[#48a1da]">{{ details.locationId }}</span>
                        </h2>

                        <span>
                            <span>
                                <p class="text-sm mt-4 font-medium flex justify-start items-baseline gap-2">
                                    <i class="fa-solid fa-location-pin text-[#ef4444]"></i>
                                    <span class="text-lg">{{ details.address }}</span>
                                </p>
                                <p class="text-md mt-3 font-medium" v-html="details.details"></p>
                            </span>
                        </span>
                    </div>
                </div>
                <!-- Position 2 -->

                <!-- Position 3 -->
                <div v-if="locationDetails && locationDetails.data">
                    <div v-for="(details, index) in filteredLocationDetailsPosition3" :key="index" class="pt-4">
                        <h2 class="text-center text-2xl font-semibold">
                            <span class="text-[#48a1da]">{{ details.locationId }}</span>
                        </h2>

                        <span>
                            <span>
                                <p class="text-sm mt-4 font-medium flex justify-start items-baseline gap-2">
                                    <i class="fa-solid fa-location-pin text-[#ef4444]"></i>
                                    <span class="text-lg">{{ details.address }}</span>
                                </p>
                                <p class="text-md mt-3 font-medium" v-html="details.details"></p>
                            </span>
                        </span>
                    </div>
                </div>
                <!-- Position 3 -->
            </div>
            <!-- =================company-info End============= -->

        </div>
        <!-- ====================informetion-area End==================== -->
    </section>

    <div id="toast-container" class="fixed top-2/4 left-[40%]"></div>

</template>

<style scoped>
.Background {
    width: 100%;
    height: 500px;
    background: url(../assets/contact/rote-hotline-und-service-kontakt-icons-als-panorama_157125-14816.jpg) no-repeat;
    background-size: cover;
    margin-top: -100px;
    padding-bottom: 50px;
}

.form-area {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.cumpany-info {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media all and (min-width:320px) and (max-width:780px) {
    .Background {
        width: 100%;
        height: 400px;
        background: url(../assets/contact/rote-hotline-und-service-kontakt-icons-als-panorama_157125-14816.jpg) no-repeat;
        background-size: cover;
        padding-bottom: 50px;
    }
}
</style>