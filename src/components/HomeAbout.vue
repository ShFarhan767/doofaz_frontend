<script setup>
import { IMG } from '../assets/imageUrl';

const About = [
    {
        Title: "We Are Increasing Business Success With Technology",
        Pragrap: "Join us in celebrating a decade of innovation, growth, and excellence at Doofaz IT Limited! For the past 10 years, we've been at the forefront of the digital revolution, transforming ideas into reality and empowering businesses to thrive in the ever-evolving landscape of technology. Our journey has been fueled by passion, dedication, and a relentless pursuit of excellence.As we reflect on our achievements, we're reminded of the incredible journey that lies ahead. With your continued support, we're excited to embark on the next chapter of innovation, pushing boundaries, and shaping the future of technology. Thank you for being part of our journey. Here's to the next 10 years of success, growth, and making a difference together!"  
    }
]

const AboutImage = [
    {
        image1: "/assets/about-3-IJuCsuGI.webp",
        image2: "/assets/effect-1-DgDfZsPF.png",
        image3: "/assets/dotted-3-_ITdWKJQ.png",
        
    }
]

</script>
<template>
    <section id="HomeAbout-area">
        <div class="container mx-auto">
            <div class="grid gap-x-8 gap-y-4 md:grid-cols-2 sm:1">
                <div class="left-area text-4xl md:py-4 md:px-3 px-1">
                    <div v-for="(abouts,index) in AboutImage" :key="index" class="zoom-ara">
                        <img class="lg:h-[530px] md:h-[230px] h-[200px] mt-16 lg:mt-40 md:mt-20 md:ml-10 ml-5 z-30 relative"
                            :src="IMG +abouts.image1" alt="">
                        <img class="zoom-in-out lg:h-[600px] md:h-[250px] h-[220px] top-0 relative -mt-[60%] lg:-mt-[93%] 2xl:-mt-[80%] md:-mt-[73%] md:ml-10 ml-10 z-20"
                            :src="IMG +abouts.image2" alt="">
                        <img class="zoom-in-out lg:h-[120px] 2xl:h-[180px] md:h-[90px] h-[80px] top-0 relative lg:-mt-[35%] md:-mt-[24%] -mt-[24%] lg:ml-[75%] 2xl:ml-[60%] 2xl:-mt-[25%] md:ml-[65%] ml-[50%] z-20"
                            :src="IMG +abouts.image3" alt="">
                    </div>
                </div>

                <div v-for="(indexs,index) in About" :key="index" class="right-list">
                    <h2 class="lg:text-[36px] text-[18px] ml-4 md:text-[24px] font-bold text-[#48a1da] lg:pt-32 pt-16">
                        {{ indexs.Title }}</h2>
                    <p
                        class="font-normal text-[#454545] text-sm text-justify px-8 mt-3 lg:mt-10 md:mt-4 md:pb-10 pb-10 md:text-justify z-10 relative lg:text-lg md:text-bash w-auto sm:d-none lg:cursor-pointer">
                        {{ indexs.Pragrap }}</p>

                </div>
            </div>
        </div>
        <img src="/src/assets/homeAbout/about-3.webp" class="hidden" alt="">
        <img src="/src/assets/homeAbout/effect-1.png" class="hidden" alt="">
        <img src="/src/assets/homeAbout/dotted-3.png" class="hidden" alt="">
    </section>
</template>
<style scoped>
#HomeAbout-area{
    width: 100%;
    height:850px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    z-index: -3;
    /* background-image: url(../assets/homeAbout/about-company.jpg); */
    background: #f6f7f9;
}
@keyframes zoomInOut {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}

.zoom-ara .zoom-in-out {
    animation: zoomInOut 4s infinite;
}
.right-list h2{
    line-height: 50px;
}
/* #HomeAbout-area::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 600px;
    left: 0;
    top: 710px;
    z-index: 1;
    background: #000;
    opacity: .6;
} */
@media all and (min-width:320px) and (max-width:768px){
#HomeAbout-area{
    width: 100%;
    height:auto;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    z-index: -3;
    /* background-image: url(../assets/homeAbout/about-company.jpg); */
    background: #F6F7F9;
}
.right-list h2 {
    line-height: 30px;
}
/* #HomeAbout-area::before {
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 820px;
    left: 0;
    top:257px;
    z-index: 1;
    background: #000;
    opacity: .6;
} */
}
</style>