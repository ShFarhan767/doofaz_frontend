<script setup>
import { IMG } from '../assets/imageUrl';

const clientPage = [
    {
        feniImage: "/assets/feni-cadet.png",
        Feni: "Feni Girls Cadet...",
        Software: "Software",
        Hosting: "Hosting",
        BarishalImage: "/assets/barishal-cadet.png",
        Barishal: "Barishal Cadet...",
        beaconImage: "/assets/beacon.png",
        Beacon: "Beacon Pharma",
        sylhetImage: "/assets/sylhet-cadet.png",
        Sylhet: "Sylhet Cadet Coll...",
        janakanthoImage: "/assets/janakantho.png",
        Daily: "Daily Janakantho",
        sms: "SMS",
        emcImage: "/assets/emc.png",
        emc: "EMC",
        noaparaImage: "/assets/noapara-td.png",
        Noapara: "Noapara Traders",
        hasanImage: "/assets/demo-logo.png",
        Hasan: "Hasan Traders",
        rupkathaImage: "/assets/rupkatha.png",
        Rupkatha: "Rupkatha",
        clgImage: "/assets/clg-scl.png",
        clg: "CLG School",
        doma: "Doma",
        maglaImage: "/assets/magel.png",
        magel: "MAGEL",
        baezlImage: "/assets/bazel.png",
        baezl: "BAEZL",
        bahannoImage: "/assets/bahanno.png",
        Bahanno: "Bahanno News",
        callingImage: "/assets/calling-bell.png",
        CallingBell: "CallingBell",
        domain: "Domain",
        saltImage: "/assets/salt-and-suger.png",
        Salt: "Salt & Suger"

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

    <section class="py-10">
        <div class="container mx-auto px-4">
            <div v-for="(indexs, index) in clientPage" :key="index"
                class="grid gap-x-8 gap-y-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-5">
                <!-- ======================Feni Girls Cadet...=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-3 pb-2">
                        <img :src="indexs.feniImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]"> {{ indexs.Feni }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================Feni Girls Cadet...End=========================== -->

                <!-- ======================Barishal Cadet ...=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-3 pb-2">
                        <img :src="indexs.BarishalImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]"> {{ indexs.Barishal }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================Barishal Cadet ...End=========================== -->

                <!-- ======================Beacon Pharma=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.beaconImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]"> {{ indexs.Beacon }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================Beacon Pharma End=========================== -->

                <!-- ======================Sylhet Cadet...=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.sylhetImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[22px] font-semibold text-[#48a1da]"> {{ indexs.Sylhet }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================Sylhet Cadet...End=========================== -->

                <!-- ======================janakantho=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.janakanthoImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.Daily }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.sms }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================janakantho End=========================== -->

                <!-- ======================emc=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.emcImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.Barishal }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.sms }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================emc End=========================== -->

                <!-- ======================Barishal Cadet ...=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.BarishalImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.emc }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.sms }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================Barishal Cadet ...End=========================== -->

                <!-- ======================noapara-td.png=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.noaparaImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]"> {{ indexs.Noapara }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================noapara-td.png End=========================== -->

                <!-- ======================Hasan Traders=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.hasanImage" alt="">
                    </div>
                    <div class="mlg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]"> {{ indexs.Hasan }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }}</span> </p>
                    </div>
                </div>
                <!-- ======================Hasan Traders End=========================== -->

                <!-- ======================Rupkatha=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.rupkathaImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.Rupkatha }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.sms }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================Rupkatha End=========================== -->

                <!-- ======================CLG School=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.clgImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.clg }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.doma }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================CLG School End=========================== -->

                <!-- ======================MAGEL=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.maglaImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.magel }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.doma }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================MAGEL End=========================== -->

                <!-- ======================BAEZL=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.baezlImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.baezl }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.doma }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================BAEZL End=========================== -->

                <!-- ======================Bahanno News=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.bahannoImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.Bahanno }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"> </i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.sms }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================Bahanno News End=========================== -->

                <!-- ======================CallingBell=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.callingImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.CallingBell }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]">{{ indexs.Hosting }}</span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.domain }}</span> </p>
                    </div>
                </div>
                <!-- ======================CallingBell End=========================== -->

                <!-- ======================Salt & Suger=========================== -->
                <div class="border mt-5 rounded-[10px] lg:w-[280px] md:w-[290] w-full">
                    <div class="image w-[55px] ml-4 pt-4 pb-2">
                        <img :src="indexs.saltImage" alt="">
                    </div>
                    <div class="lg:ml-[80px] xl:ml-[80px] md:ml-[80px] ml-[100px] -mt-[60px]">
                        <h2 class="text-[23px] font-semibold text-[#48a1da]">{{ indexs.Salt }}</h2>
                        <p class="text-[#8987a0]"> <span class="hover:text-[#ae00b9]"> {{ indexs.Software }} </span> <i
                                class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i> <span
                                class="hover:text-[#ae00b9]"> {{ indexs.Hosting }} </span>
                            <i class="fa-solid fa-circle text-[5px] mb-2 text-[#ae00b9]"></i>
                            <span class="hover:text-[#ae00b9]"> {{ indexs.doma }} </span>
                        </p>
                    </div>
                </div>
                <!-- ======================Salt & Suger End=========================== -->

            </div>
        </div>
        <!-- <img src="../assets/happy clients/feni-cadet.png" class="hidden" alt="">
        <img src="../assets/happy clients/barishal-cadet.png" class="hidden" alt="">
        <img src="../assets/happy clients/beacon.png" class="hidden" alt="">
        <img src="../assets/happy clients/sylhet-cadet.png" class="hidden" alt="">
        <img src="../assets/happy clients/janakantho.png" class="hidden" alt="">
        <img src="../assets/happy clients/emc.png" class="hidden" alt="">
        <img src="../assets/happy clients/noapara-td.png" class="hidden" alt="">
        <img src="../assets/happy clients/demo-logo.png" class="hidden" alt="">
        <img src="../assets/happy clients/rupkatha.png" class="hidden" alt="">
        <img src="../assets/happy clients/clg-scl.png" class="hidden" alt="">
        <img src="../assets/happy clients/magel.png" class="hidden" alt="">
        <img src="../assets/happy clients/bazel.png" class="hidden" alt="">
        <img src="../assets/happy clients/bahanno.png" class="hidden" alt="">
        <img src="../assets/happy clients/calling-bell.png" class="hidden" alt="">
        <img src="../assets/happy clients/salt-and-suger.png" class="hidden" alt=""> -->
    </section>

</template>
<style scoped>
.Background {
    width: 100%;
    height: 500px;
    margin-top: -100px;
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