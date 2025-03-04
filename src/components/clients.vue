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
        data.value = {
            ...response.data,
            data: response.data.data.filter(item => item.homepageShowStatus === 'enable')
        };
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
            $(".custom-carousel").trigger('destroy.owl.carousel').removeClass('owl-loaded owl-drag');

            // Check if there are enough items for sliding
            if (newValue.data.length > 1) {
                $(".custom-carousel").owlCarousel({
                    loop: false, // Disable loop to prevent cloning
                    margin: 10,
                    autoplay: true,
                    autoplayTimeout: 2000,
                    smartSpeed: 1000,
                    autoplayHoverPause: true,
                    responsive: {
                        0: { items: 2 },
                        600: { items: 2 },
                        1000: { items: 4 }
                    }
                });
            }
        }, 0);
    }
});
</script>

<template>
  <section class="client-area bg-[#5f5f5f33] lg:h-auto bg:hover:gray-500">
    <div class="flex justify-center items-center">
      <h2 class="pt-10 font-semibold text-4xl text-[#48a1da] tracking-wide">Our Clients</h2>
    </div>
    <div v-if="data && data.data" :class="{ 'owl-carousel custom-carousel': data.data.length > 1 }">
      <!-- Loop through the data array and display client images -->
      <div v-for="(client, index) in data.data" :key="client.id" class="item items-center py-8 cursor-pointer">
        <div class="w-[320px] flex justify-center items-center p-3 border border-[#48a1da] rounded-xl mx-5">
          <img
            class="hover:grayscale-0 grayscale min-h-[150px] max-h-[150px] w-full rounded-md"
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