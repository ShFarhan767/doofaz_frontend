<script setup>
import { IMG } from '../assets/imageUrl';

$(document).ready(function () {
    $(".custom-carousel").owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true, // Uncomment this line to enable autoplay
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});


const blogarea = [
    {
        Title:"Read Our Latest Tips & Tricks",
        title: "Read Our Latest Tips & Tricks",
        image1: "/assets/1-BNUZCdHx.jpg",
        image2: "/assets/2-MZsYq6qh.jpg",
        image3: "/assets/3-Ck3SYr7l.jpg",
        image4: "/assets/4-Bxy4bS7c.jpg",
        image5:"/assets/5-DKrur6NH.jpg",
        date: "20 December 2020",
        button: "Learn More",
        discription: " We denounce with righteous indige nation and dislike men who are so beguiled...",
        Open: "Open Source Job Report Show More Openings Fewer",
        Servo: "Servo Project Joins The Linux Foundation Fold Desco",
        Necessity: "Necessity May Give Us Your Best Virtual Court System",
        Tech: "Tech Products That Makes Its Easier to Stay at Home",
        admin: "admin",
        Digital: "Digital Technology",
        Web: "Web Development",
        It: "It Service",
        Software: "Software Development",
        Artifical:"Artifical Intelligence",
    }
]
</script>

<template>
    <section class="blog-area lg:h-auto bg:hover:gray-500">

        <div class="Title py-5 md:mt-20">

            <h2 class="text-center font-bold md:text-4xl text-2xl text-[#48a1da] py-4">{{ blogarea.Title }}
            </h2>
            <div class="w-full flex justify-center">
                <span class="Heading_Line relative w-28 h-1 bg-[#48a1da]"></span>
            </div>
        </div>

        <div v-for="(blog, index) in blogarea" :key="index" class="owl-carousel custom-carousel">

            <div class="item">
                <article class="swiper-slide swiper-slide-prev rounded-lg card" role="group" aria-label="3 / 4"
                    data-swiper-slide-index="2">
                    <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG +blog.image4"
                                class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">

                            <a href="#"
                                class="custom-font text-white text-lg px-5 py-1 rounded-full absolute right-9 lg:top-[340px] top-72 linear">
                                {{ blog.Digital }}
                            </a>
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ blog.date }}</span>
                                </p>
                                <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.Open }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.discription }}
                            </p>
                            <a href="#" class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                {{blog.button}}
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </article>
            </div>
            <div class="item">
                <article class="swiper-slide swiper-slide-prev rounded-lg card" role="group" aria-label="3 / 4"
                    data-swiper-slide-index="2">
                    <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG +blog.image3"
                                class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">

                            <a href="#"
                                class="custom-font text-white text-lg px-5 py-1 rounded-full absolute right-9 lg:top-[340px] top-72 linear">
                                {{ blog.Web }}
                            </a>
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ blog.date }}</span>
                                </p>
                                <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.Tech }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.discription }}
                            </p>
                            <a href="#" class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                {{ blog.button}}
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </article>
            </div>
            <div class="item">
                <article class="swiper-slide swiper-slide-prev rounded-lg card" role="group" aria-label="3 / 4"
                    data-swiper-slide-index="2">
                    <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG +blog.image1"
                                class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">

                            <a href="#" class="custom-font text-white text-lg px-5 py-1 rounded-full absolute right-9 lg:top-[340px] top-72 linear">
                                {{ blog.It }}
                            </a>
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ blog.date }}</span>
                                </p>
                                <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.Servo }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.discription }}
                            </p>
                            <a href="#" class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                {{ blog.button}}
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </article>
            </div>
            <div class="item">
                <article class="swiper-slide swiper-slide-prev rounded-lg card" role="group" aria-label="3 / 4"
                    data-swiper-slide-index="2">
                    <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG +blog.image2"
                                class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">

                            <a href="#"
                                class="custom-font text-white text-lg px-5 py-1 rounded-full absolute right-9 lg:top-[340px] top-72 linear">
                                {{ blog.Software }}
                            </a>
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ blog.date }}</span>
                                </p>
                                <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.Necessity }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.discription }}
                            </p>
                            <a href="#" class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                {{ blog.button}}
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </article>
            </div>
            <div class="item">
                <article class="swiper-slide swiper-slide-prev rounded-lg card" role="group" aria-label="3 / 4"
                    data-swiper-slide-index="2">
                    <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                        data-aos-duration="2000">
                        <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                            <img :src="IMG +blog.image5"
                                class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                alt="Human">

                            <a href="#"
                                class="custom-font text-white text-lg px-5 py-1 rounded-full absolute right-9 lg:top-[340px] top-72 linear">
                                {{ blog.Artifical }}
                            </a>
                        </a>
                        <div class="px-2 pb-10">
                            <div class="grid grid-cols-2 gap-5 pb-3">
                                <p class="text-[#454545] custom-font">
                                    <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                    <span class="ml-3 text-sm">{{ blog.date }}</span>
                                </p>
                                <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p>
                            </div>
                            <h3
                                class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                {{ blog.Servo }}
                            </h3>
                            <p class="text-start text-[#333333] custom-font text-lg py-5">
                                {{ blog.discription }}
                            </p>
                            <a href="#" class="text-start  leading-8 text-lg font-semibold custom-font text-[#333]">
                                {{ blog.button }}
                                <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                            </a>
                        </div>
                    </article>
                </article>
            </div>
        </div>
        <img src="../assets/blog/1.jpg" class="hidden" alt="">
        <img src="../assets/blog/2.jpg" class="hidden" alt="">
        <img src="../assets/blog/3.jpg" class="hidden" alt="">
        <img src="../assets/blog/4.jpg" class="hidden" alt="">
        <img src="../assets/blog/5.jpg" class="hidden" alt="">
    </section>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Livvic:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Pacifico&family=Plus+Jakarta+Sans:ital,wght@0,553;1,553&family=Poppins:wght@300;400&family=Protest+Guerrilla&family=Roboto+Flex:opsz,wght@8..144,400;8..144,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

/* Apply the fonts to specific elements or classes */
.Title h2,
.custom-font {
    font-family: "Livvic", sans-serif;
}

.item {
    width: 420px !important;
    margin-right: 30px;
    height: auto;
    padding-bottom: 80px;
}
@media all and (min-width:320px) and (max-width:780px) {
    .item {
        width: 355px !important;
        margin-right: 30px;
        height: auto;
        padding-bottom: 70px;
    }
}

.Heading_Line::before {
    content: '';
    position: absolute;
    left: 0;
    top: -2.7px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #1940AA;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    animation-name: watermark-animate;
}
.touch{
    transition: all 500ms ease;
    box-shadow: 0 6px 25px rgba(12, 89, 219, 0.09);
    cursor: pointer;
    transition: all 500ms ease;
}
.linear{
    background: -webkit-linear-gradient(left, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
}
.touch:hover .linear{
    background: linear-gradient(to left, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
}
@keyframes watermark-animate {
    0% {
        left: 0;
    }

    100% {
        left: 95%;
    }
}
</style>