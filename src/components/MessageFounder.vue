<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { IMG } from '../assets/imageUrl';
import { BASE_URL } from '../assets/apiConfig';

const founderMessage = ref(null);

onMounted(async () => {
    try {
        const response = await axios.get(`${BASE_URL}foundersMessageInfo`);
        founderMessage.value = response.data;
        console.log('Founder Message Data fetched successfully:', founderMessage.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
</script>
<template>
    <section class="Background bg-[gray] pb-5">
    </section>

    <section class="bg-[#d8dfe0] overflow-hidden mb-5 px-5">
        <div v-if="founderMessage && founderMessage.data" class="lg:w-[800px] lg:ml-[21%] lg:mt-7 lg:mb-7">

            <div v-for="founder in founderMessage.data" :key="founder.id" class="border-b pb-4 mb-4 paragrep bg-white">
                <div class="px-5 mt-7" v-html="founder.description"></div>

                <h2 class="text-[18px] px-5 mt-7 font-semibold">{{ founder.name }}</h2>
                <h2 class="text-[17px] px-5 font-semibold text-[#48a1da]">{{ founder.position }}</h2>
                
                <h2 class="text-[18px] px-5 font-normal">
                    <span class="text-md text-[#48a1da] font-bold">Mail: </span>
                    <a :href="'mailto:' + founder.email" class="text-[#48a1da] hover:underline font-semibold">
                        {{ founder.email }}
                    </a>
                </h2>

                <h2 class="text-[18px] px-5 font-semibold">
                    {{ founder.number }}
                </h2>

                <h2 class="text-[14px] px-5 font-normal flex gap-3 pt-5">
                    <span v-if="founder.facebookLink">
                        <a :href="founder.facebookLink" target="_blank" class="text-[#48a1da] hover:underline">
                            <i class="fa-brands fa-facebook text-[28px] text-[#48a1da]"></i>
                        </a>
                    </span>
                    <span v-if="founder.linkedinLink">
                        <a :href="founder.linkedinLink" target="_blank" class="text-[#48a1da] hover:underline">
                            <i class="fa-brands fa-linkedin-in text-[28px] text-[#48a1da]"></i>
                        </a>
                    </span>
                    <span v-if="founder.twitterLink">
                        <a :href="founder.twitterLink" target="_blank" class="text-[#48a1da] hover:underline">
                            <i class="fa-brands fa-twitter text-[28px] text-[#48a1da]"></i>
                        </a>
                    </span>
                </h2>
            </div>
        </div>

        <!-- <div v-for="(FounderArea, index) in Founder" :key="index"
            class="paragrep bg-[#fff] lg:w-[800px] lg:ml-[21%] lg:mt-7 mt-7 lg:mb-7">
            <h2 class="text-sm pt-5 px-5 font-semibold">{{ FounderArea.headingTitle }}</h2>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.welcome }}<span class="text-md text-[#48a1da] font-bold">
                    {{ FounderArea.CompanyName }}</span>{{ FounderArea.pragrap }}</p>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.pace }}</p>

            <ul class="px-5 mt-4">
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.outstanding }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Providing }} </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Being }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Building }} </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Sharing }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.quality }} </li>
            </ul>

            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.component }}</p>

            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.proud }}</p>

            <h2 class="text-[18px] px-5 mt-7 mb-5 font-normal">{{ FounderArea.Sincerely }}</h2>
            <h2 class="text-[18px] px-5 mt-7 font-medium">{{ FounderArea.cto }}</h2>
            <h2 class="text-[18px] px-5 font-normal">{{ FounderArea.FOUNDERcto }}</h2>
            <h2 class="text-[18px] px-5 font-normal"><span
                    class="text-md text-[#48a1da] font-bold">Mail:</span>cto@doofazit.com
            </h2>
            <h2 class="text-[18px] px-5 font-normal"><span class="text-md text-[#48a1da] font-bold">FB:</span> <a
                    href="https://www.facebook.com/Nazmulfci">www.facebook.com (Click To Connect)</a> </h2>

            <h2 class="text-[18px] px-5 font-normal pb-5"><span class="text-md text-[#48a1da] font-bold">IN:</span> <a
                    href="https://www.linkedin.com/in/nazmulfci/">www.linkedin.com (Click To Connect)</a> </h2>
        </div> -->
    </section>

</template>

<style scoped>
.Background {
    width: 100%;
    height: 430px;
    background: url(../assets/message/Founders-Message.jpg) no-repeat;
    background-size: cover;
    margin-top: -90px;
}
.paragrep{
    border: 1px solid black;
}
</style>