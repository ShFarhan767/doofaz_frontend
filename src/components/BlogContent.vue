<script setup>
import { ref } from 'vue';
import { IMG } from '../assets/imageUrl';

const blogBox = ref([
    {
        image: '/assets/1-BNUZCdHx.jpg',
        // type: 'Software Development',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
    {
        image: '/assets/3-Ck3SYr7l.jpg',
        // type: 'Software',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
    {
        image: '/assets/2-MZsYq6qh.jpg',
        // type: 'Software',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
    {
        image: '/assets/4-Bxy4bS7c.jpg',
        // type: 'Software',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
    {
        image: '/assets/4-Bxy4bS7c.jpg',
        // type: 'Software',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
    {
        image: '/assets/4-Bxy4bS7c.jpg',
        // type: 'Software',
        date: '08 October 2024',
        title: 'Tech Products That Makes Its Easier to Stay at Home',
        description: 'We denounce with righteous indige nation and dislike men who are so beguiled...',
        buttonName: 'Learn More',
        buttonLink: '#',
    },
])


const blogOldNews = ref([
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
    {
        // image: '/src/assets/blog/1.jpg',
        image: '/assets/1.jpg',
        title: 'We denounce with righteous indige nation.'
    },
])
</script>

<template>
    <section class="py-20 mt-10">
        <div class="container mx-auto">
            <div class="grid lg:grid-cols-3 gap-5">
                <div class="grid lg:grid-cols-2 col-span-2 grid-cols-1 gap-5">

                    <div v-for="(blog, index) in blogBox" :key="index" class="item border rounded-lg">
                        <RouterLink to="/blog-details">
                            <article class="bg-white touch shadow-custom rounded-lg p-5 group" data-aos="fade-up"
                                data-aos-duration="2000">
                                <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                                    <img :src="IMG + blog.image"
                                        class="w-full lg:h-full md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                        alt="Human">

                                    <!-- <a href="#"
                                class="custom-font text-white text-lg px-5 py-1 rounded-full absolute left-80 lg:top-[340px] top-72 linear">
                                {{ blog.type }}
                            </a> -->
                                </a>
                                <div class="px-2 pb-10">
                                    <div class="grid grid-cols-2 gap-5 pb-3">
                                        <p class="text-[#454545] custom-font">
                                            <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                            <span class="ml-3 text-sm">{{ blog.date }}</span>
                                        </p>
                                        <!-- <p class="text-[#454545]">
                                    <i class="fa-regular fa-user text-[#48a1da]"></i>
                                    <span class="ml-2 text-[15px] font-medium">{{ blog.admin }}</span>
                                </p> -->
                                    </div>
                                    <h3
                                        class="text-start text-[#48a1da] leading-8 text-xl font-semibold custom-font hover:text-[#333]">
                                        {{ blog.title }}
                                    </h3>
                                    <p class="text-start text-[#333333] custom-font text-lg py-5">
                                        {{ blog.description }}
                                    </p>
                                    <a :href="blog.buttonLink"
                                        class="text-start leading-8 text-lg font-semibold custom-font text-[#333]">
                                        {{ blog.buttonName }}
                                        <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                                    </a>
                                </div>
                            </article>
                        </RouterLink>
                    </div>


                </div>

                <div class="border bg-[#f5f5f5] rounded-lg lg:block hidden">
                    <div class="pt-10">
                        <h4 class="text-start text-3xl font-semibold text-[#48a1da] ml-5">Web Desining</h4>
                    </div>

                    <div class="py-10 px-4">
                        <ul class="font-medium text-xl">
                            <li class="pb-4">
                                <span class="text-[#ff6060] font-semibold mx-2">
                                    ==>
                                </span>
                                Web Development
                            </li>
                            <li>
                                <span class="text-[#ff6060] font-semibold mx-2">
                                    ==>
                                </span>
                                Software Development
                            </li>
                        </ul>
                    </div>

                    <div class="pt-5">
                        <h4 class="text-start text-3xl font-semibold text-[#48a1da] ml-5">Web Development</h4>
                    </div>

                    <div class="py-10 px-4">
                        <ul class="font-medium text-xl">
                            <li class="pb-4">
                                <span class="text-[#ff6060] font-semibold mx-2">
                                    ==>
                                </span>
                                Web Development
                            </li>
                            <li>
                                <span class="text-[#ff6060] font-semibold mx-2">
                                    ==>
                                </span>
                                Software Development
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            <div class="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10">
                <div v-for="(old, index) in blogOldNews" :key="index">
                    <div>
                        <img :src="old.image" class="rounded-t-lg" alt="">
                    </div>
                    <h3 class="text-[#48a1da] text-lg font-medium py-3">{{ old.title }}</h3>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
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

.touch {
    transition: all 500ms ease;
    box-shadow: 0 6px 25px rgba(12, 89, 219, 0.09);
    cursor: pointer;
    transition: all 500ms ease;
}

.linear {
    background: -webkit-linear-gradient(left, #03228f 0%, #03228f 0%, #03228f 26%, #4e95ed 100%, #2989d8 100%, #207cca 100%, #0b70e1 100%);
}

.touch:hover .linear {
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