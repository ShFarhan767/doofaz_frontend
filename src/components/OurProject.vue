<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

// State to hold tab names and content
const title = ref([]);
const tabs = ref([]);
const content = ref([]);
const selectedTabId = ref(null);

onMounted(async () => {
    // Fetch tab titles
    try {
        const response = await axios.get(`${BASE_URL}tabTitleInfo`);
        title.value = response.data;
        console.log('Data fetched successfully:', title.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    // Fetch tab names
    try {
        const response = await axios.get(`${BASE_URL}tabNameInfo`);
        tabs.value = [{ id: 'all', tabName: 'All' }, ...response.data.data]; // Add 'All' tab
        if (tabs.value.length) {
            selectedTabId.value = 'all'; // Select the 'All' tab by default
            await fetchContent(selectedTabId.value); // Fetch content for all tabs
        }
    } catch (error) {
        console.error('Error fetching tab names:', error);
    }
});

// Fetch content for each tab
const fetchContent = async (tabId) => {
    try {
        const response = await axios.get(`${BASE_URL}tabPortfolioContentInfo`);
        const allContent = response.data.data;

        if (tabId === 'all') {
            // Create a map to hold a maximum of 2 entries per tab
            const tabEntriesMap = {};
            allContent.forEach(item => {
                if (!tabEntriesMap[item.tabName]) {
                    tabEntriesMap[item.tabName] = [];
                }
                // Limit to maximum of 2 entries per tab
                if (tabEntriesMap[item.tabName].length < 2) {
                    tabEntriesMap[item.tabName].push(item);
                }
            });
            // Flatten the entries for display
            content.value = Object.values(tabEntriesMap).flat();
        } else {
            // Filter content for the selected tab
            content.value = allContent.filter(item => item.tabName === tabId.toString());
        }
    } catch (error) {
        console.error('Error fetching content:', error);
    }
};

// Handle tab change
const handleTabChange = (tabId) => {
    selectedTabId.value = tabId;
    fetchContent(tabId);
};
</script>

<template>
    <section class="py-10">
        <div class="container mx-auto">
            <!-- Title -->
            <div v-if="title && title.data" class="flex justify-center items-center text-center py-5">
                <div v-for="(title, index) in title.data" :key="index">
                    <h2 class="text-4xl font-semibold py-2 text-[#00ade7]">{{ title.title }}</h2>
                </div>
            </div>

            <!-- Tabs -->
            <div class="mx-6 mt-6">
                <ul class="flex justify-center flex-wrap">
                    <li v-for="tab in tabs" :key="tab.id"
                        :class="{'bg-[#48a1da] text-white': selectedTabId === tab.id, 'bg-gray-200 text-black': selectedTabId !== tab.id}"
                        class="mr-2 rounded-lg border border-[#48a1da] shadow-xl my-2">
                        <a href="#" @click.prevent="handleTabChange(tab.id)"
                            class="inline-block hover:bg-[#48a1da] rounded-lg py-4 px-4 lg:text-lg font-medium text-center">
                            {{ tab.tabName }}
                        </a>
                    </li>
                </ul>

                <!-- Tab Content -->
                <div v-if="content.length" class="pt-10">
                    <div class="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-8">
                        <div v-for="(item, index) in content" :key="index" class="text-center">
                            <!-- Conditionally show shortTitle if it's not the "All" tab -->
                            <div class="flex justify-center overflow-hidden">
                                <RouterLink :to="{ path: '/website-visual', query: { iframe: item.projectUrl } }"
                                    class="project-container w-11/12 min-h-[500px] bg-no-repeat bg-cover relative"
                                    :style="{ backgroundImage: `url(${IMG + item.projectImage})` }">
                                    <div
                                        class="hover-div bg-[#48a1da] mr-5 px-3 py-8 relative top-1/3 opacity-0 transition-opacity duration-500 ease-in-out">
                                        <p class="text-lg text-white text-center">{{ item.projectName }}</p>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.project-container {
    position: relative;
    overflow: hidden;
    /* To ensure any extra elements don't overflow */
    transition: background-color 0.5s ease-in-out;
}

.project-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    /* No overlay by default */
    transition: background-color 0.5s ease-in-out;
    /* Smooth transition */
    z-index: 1;
    /* Ensure the overlay is below the hover div but above the background image */
}

/* Add black overlay on hover */
.project-container:hover::before {
    background-color: rgba(0, 0, 0, 0.6);
}

/* Adding zoom-out effect to the background image */
.project-container {
    background-size: cover;
    transition: transform 0.5s ease-in-out;
}

/* Scale down the background image when hovered */
.project-container:hover {
    transform: scale(1.04);
    /* Zoom-out effect */
}

.hover-div {
    z-index: 10;
    /* Place the hover div on top of the overlay */
    opacity: 0;
    /* Initially hidden */
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    transform: translateY(20px);
    /* Slightly lower the hover content initially */
}

.project-container:hover .hover-div {
    opacity: 1;
    /* Show the hover content */
    transform: translateY(0);
    /* Move the hover content into place */
}
</style>