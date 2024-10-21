<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null); // for the title

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}atGlanceTitleInfo`);
        data.value = response.data;
        console.log('Title Data fetched successfully:', data.value);
    } catch (error) {
        console.error('Error fetching title data:', error);
    }
});

const content = ref(null);

// Reactive array for counters' displayed values
const displayCounters = ref([]);

// Method to fetch the data from API (replace with your actual API call)
const fetchData = async () => {
    try {
        const response = await fetch(`${BASE_URL}atGlanceInfo`);  // Replace with your actual API URL
        const data = await response.json();
        content.value = data;

        // Initialize displayCounters with zeros
        displayCounters.value = content.value.data.map(() => 0);

        // Start animating counters
        content.value.data.forEach((box, index) => {
            animateCounter(box.counterNumber, index);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Method to animate the counter from 0 to finalValue
const animateCounter = (finalValue, index) => {
    let startValue = 0;
    const duration = 10000; // Duration of animation in milliseconds (2 seconds)
    const increment = Math.ceil(finalValue / (duration / 60)); // Increment step

    const updateCounter = () => {
        if (startValue < finalValue) {
            startValue += increment;
            if (startValue > finalValue) {
                startValue = finalValue;  // Make sure it doesn't go over the final value
            }
            displayCounters.value[index] = startValue;

            // Continue updating the counter until it reaches the final value
            requestAnimationFrame(updateCounter);
        }
    };

    // Start the counter animation
    updateCounter();
};

// Fetch data when the component is mounted
onMounted(() => {
    fetchData();
});
</script>

<template>
    <section class="bg-[#e8ecf7] py-10">
        <div class="container mx-auto">
            <!-- Display title -->
            <div v-if="data && data.data" class="text-center">
                <h3 v-for="(title, index) in data.data" :key="index"
                    class="font-semibold text-4xl text-[#001329] pb-10">
                    {{ title.title }}
                </h3>
            </div>

            <!-- Display counter boxes dynamically -->
            <div class="grid gap-x-8 gap-y-4 lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                <div v-for="(box, index) in content?.data" :key="box.id"
                    class="lg:py-10 bg-white py-5 text-center relative">
                    <!-- Image -->
                    <div class="flex justify-center">
                        <img :src="IMG + box.image" :alt="box.imageAltTag" class="lg:w-16 lg:h-16 w-14 h-14">
                    </div>

                    <!-- Counter Number with dynamic value -->
                    <div
                        class="text-[#000] lg:text-4xl text-3xl font-semibold text-center font-[Poppins, sans-serif !important]">
                        <div :id="`counter-${index}`">{{ displayCounters[index] }}</div>
                    </div>

                    <!-- Box Name -->
                    <label class="text-[#001329] lg:text-[20px] text-lg font-[600] bottom-0 relative">{{ box.boxName }}</label>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Use the dynamic --num value directly in the counter display */
.countBox-0 {
    animation: counter1 5s forwards alternate ease-in-out;
    counter-reset: num var(--num);
    font: 800 system-ui;
    padding: 0.7rem;
}

.countBox-0::before {
    content: counter(num);
}

/* Similar styling for each box */
.countBox-1 {
    animation: counter2 5s forwards alternate ease-in-out;
    counter-reset: num var(--num);
    font: 800 system-ui;
    padding: 0.7rem;
}

.countBox-1::before {
    content: counter(num);
}

/* Add keyframes for animation with placeholder --num */
@keyframes counter1 {
    from {
        --num: 0;
    }

    to {
        --num: var(--num);
        /* This value comes dynamically from the inline style */
    }
}

@keyframes counter2 {
    from {
        --num: 0;
    }

    to {
        --num: var(--num);
        /* This value comes dynamically from the inline style */
    }
}

@keyframes counter3 {
    from {
        --num: 0;
    }

    to {
        --num: var(--num);
        /* This value comes dynamically from the inline style */
    }
}

@keyframes counter4 {
    from {
        --num: 0;
    }

    to {
        --num: var(--num);
        /* This value comes dynamically from the inline style */
    }
}

/* Add more keyframes if needed for other counter animations */
</style>