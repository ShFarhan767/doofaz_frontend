<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);

// Fetch the API data on mount
onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}clientInfo`);
        data.value = response.data; // Access the array of data from the API response
        console.log('Data Fetched Successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

// Watch for data change and initialize the carousel after data is loaded
watch(data, (newValue) => {
    if (newValue && newValue.data) {
        setTimeout(() => {
            // Destroy previous carousel instance if needed
            $(".custom-carousel").trigger('destroy.owl.carousel');

            // Initialize carousel with new data
            $(".custom-carousel").owlCarousel({
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 1000,
                smartSpeed: 1000,
                autoplayHoverPause: true,
                responsive: {
                    0: { items: 2 },
                    600: { items: 2 },
                    1000: { items: 4 }
                }
            });
        }, 0); // Delay initialization slightly to ensure DOM is ready
    }
});
</script>

<template>
  <section class="client-area bg-[#5f5f5f33] lg:h-auto bg:hover:gray-500">
    <div v-if="data && data.data" class="owl-carousel custom-carousel">
      <!-- Loop through the data array and display client images -->
      <div v-for="(client, index) in data.data" :key="client.id" class="item flex items-center py-8 cursor-pointer">
        <div class="w-[320px] flex justify-center items-center p-10 border border-[#48a1da] rounded-xl">
          <img
            class="hover:grayscale-0 grayscale min-h-[80px] max-h-[80px]"
            :src="IMG + client.image"
            :alt="client.imageAltTag"
            :title="client.imageAltTag"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any specific styles if needed */
</style>