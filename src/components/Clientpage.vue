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
            data: response.data.data
        };
        console.log('Data Fetched Successfully:', data.value);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});

const clientPage = [
    {
        feniImage: "/assets/feni-cadet-QiU3Czm5.png",
        Feni: "Feni Girls Cadet...",
        Software: "Software",
        Hosting:"Hosting",
        BarishalImage: "/assets/barishal-cadet-C4vxlDz1.png",
        Barishal:"Barishal Cadet...",
        beaconImage: "/assets/beacon-wyxsG26U.png",
        Beacon:"Beacon Pharma",
        sylhetImage: "/assets/sylhet-cadet-Bcq-ekTk.png",
        Sylhet:"Sylhet Cadet Coll...",
        janakanthoImage: "/assets/janakantho-CcnQ_qJg.png",
        Daily:"Daily Janakantho",
        sms:"SMS",
        emcImage:"/assets/emc-B0euWNtP.png",
        emc:"EMC",
        noaparaImage: "/assets/noapara-td-BSz-2lLb.png",
        Noapara:"Noapara Traders",
        hasanImage: "/assets/demo-logo-CZvUO_7I.png",
        Hasan:"Hasan Traders",
        rupkathaImage: "/assets/rupkatha-DilNB3mr.png",
        Rupkatha:"Rupkatha",
        clgImage: "/assets/clg-scl-D4FHnGeB.png",
        clg: "CLG School",
        doma:"Doma",
        maglaImage: "/assets/magel-Lusl1ovS.png",
        magel:"MAGEL",
        baezlImage: "/assets/bazel-XZfifW2_.png",
        baezl:"BAEZL",
        bahannoImage: "/assets/bahanno-BWVtmCsY.png",
        Bahanno:"Bahanno News",
        callingImage: "/assets/calling-bell-ZlU2p56P.png",
        CallingBell: "CallingBell",
        domain:"Domain",
        saltImage: "/assets/salt-and-suger-gR0Uaq_f.png",
        Salt:"Salt & Suger"
        
    }
]
</script>
<template scope>
    <section class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div class="container mx-auto">
            <div class="text-center">
                <h2
                    class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[200px] mt-[200px] lg:px-0 px-3 text-[#fff] leading-tight">
                    Our Clients</h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>

    <section>
        <div v-if="data && data.data" class="container mx-auto pb-5">
            <div class="grid gap-x-4 gap-y-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                
                <div v-for="(client, index) in data.data" :key="index"
                    class="border lg:mt-5 rounded-[10px] flex items-center p-4 shadow-md">
                    
                    <!-- Image Section -->
                    <div class="w-[70px] h-[70px] flex-shrink-0">
                        <img :src="IMG + client.image" :alt="client.imageAltTag" class="rounded-full w-full h-full">
                    </div>
                    
                    <!-- Text Section -->
                    <div class="ml-4">
                        <h2 class="text-[22px] font-semibold text-[#48a1da]"> {{ client.name }}</h2>
                        <p class="text-sm hover:text-[#ae00b9] font-medium text-black cursor-pointer"> {{ client.services }}</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>
<style scoped>
.Background {
    width: 100%;
    height:500px;
    margin-top:-100px;
    background: url(../assets/clients/asian-business-people-shaking-hands-smiling-their-agreement_33718-221.avif) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}
 @media all and (min-width:320px) and (max-width:780px) {
.Background {
        width: 100%;
        height: 350px;
        background: url(../assets/clients/asian-business-people-shaking-hands-smiling-their-agreement_33718-221.avif) no-repeat;
        background-size: cover;
    }
 }
</style>