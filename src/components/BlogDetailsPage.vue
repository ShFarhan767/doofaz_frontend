<script setup>
const blogs = [
    {
        id: 1,
        // image: "/src/assets/blog/blogDetails.jpg",
        image: "/assets/blogDetails.jpg",
        date: "August 17, 2021",
        author: "John Smithson",
        title: "Getting AI to Reason: Using Neuro-Symbolic Question Answering",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq duis aute irure dolor in reprehenderit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        tags: ["Augmented", "Hardware"]
    },
    {
        id: 2,
        // image: "/src/assets/blog/blogDetails-1.jpg",
        image: "/assets/blogDetails-1.jpg",
        date: "August 17, 2021",
        author: "John Smithson",
        title: "AI and Symbolic Reasoning",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq duis aute irure dolor in reprehenderit consectetur adipiscing elit.",
        tags: ["Augmented", "Hardware"]
    },
    {
        id: 3,
        // image: "/src/assets/blog/blogDetails-2.jpg",
        image: "/assets/blogDetails-2.jpg",
        date: "August 17, 2021",
        author: "John Smithson",
        title: "Exploring Neuro-Symbolic AI",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq duis aute irure dolor in reprehenderit consectetur adipiscing elit.",
        tags: ["Augmented", "Hardware"]
    }
];

const categories = ["Augmented", "Hardware", "Business", "Innovation", "Tech", "UI", "Videos"];

const readNext = [
    {
        // image: "/src/assets/blog/thumbnail-1.jpg",
        image: "/assets/thumbnail-1.jpg",
        date: "August 20, 2021",
        title: "Our Newest Software Is On"
    },
    {
        // image: "/src/assets/blog/thumbnail-2.jpg",
        image: "/assets/thumbnail-2.jpg",
        date: "August 20, 2021",
        title: "Create High Performance"
    },
    {
        // image: "/src/assets/blog/thumbnail-3.jpg",
        image: "/assets/thumbnail-3.jpg",
        date: "August 20, 2021",
        title: "Cyber Safety Rules To Know"
    }
];

const tags = ["Augmented", "Hardware", "Business", "Innovation", "Tech", "UI", "Videos"];
</script>

<template>
    <section class="py-20">
        <!-- Heading Section -->
        <div
            class="bg-[url(https://t3.ftcdn.net/jpg/02/21/79/40/360_F_221794075_LsuBECheGGj3zaCwC8o5OmRHbwVSaLBm.jpg)] bg-no-repeat bg-cover lg:h-[250px] flex items-center">
            <h2 class="font-semibold text-[#48a1da] text-5xl tracking-wider dm-sans px-10">Blog Details</h2>
        </div>

        <div class="container mx-auto px-10">
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-5">

                <!-- First Section (Blog List) -->
                <div class="w-full col-span-2">
                    <div v-for="blog in blogs" :key="blog.id" class="shadow-lg mb-10">
                        <div class="my-10 overflow-hidden">
                            <img :src="blog.image" class="hover:scale-105 transition-all cursor-pointer"
                                alt="blog image">
                        </div>
                        <div class="px-5">
                            <p class="text-[#222222] text-sm font-normal">
                                {{ blog.date }}
                                <span>/By {{ blog.author }}</span>
                            </p>
                            <h2 class="text-4xl font-medium py-3 leading-10 dm-sans">{{ blog.title }}</h2>
                            <p class="text-[#222222] dm-sans text-[17px]">{{ blog.description }}</p>

                            <div class="flex gap-3 py-5">
                                <button v-for="tag in blog.tags" :key="tag"
                                    class="text-sm dm-sans py-1 px-4 border border-[#000] rounded-full hover:bg-black hover:text-white">
                                    {{ tag }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second Section (Categories, Read Next, Tags) -->
                <div class="w-full">
                    <!-- Categories -->
                    <div class="py-10 px-5">
                        <h4 class="text-2xl font-medium dm-sans">Category:</h4>
                        <div class="py-5 w-full flex flex-wrap gap-x-2 gap-y-3">
                            <button v-for="category in categories" :key="category"
                                class="dm-sans text-xs font-medium py-1 px-3 border border-[#000] rounded-full hover:bg-black hover:text-white">
                                {{ category }}
                            </button>
                        </div>

                        <!-- Read Next -->
                        <div class="py-5">
                            <h4 class="text-[22px] font-medium dm-sans">Read Next:</h4>
                            <div v-for="item in readNext" :key="item.title"
                                class="grid grid-cols-3 cursor-pointer py-5 hover:shadow-lg">
                                <div class="py-5 w-28 h-44">
                                    <img :src="item.image" class="w-28 h-44" alt="read next image">
                                </div>
                                <div class="px-8 col-span-2 py-4">
                                    <p class="text-base text-[#000] dm-sans">{{ item.date }}</p>
                                    <h4 class="font-medium text-3xl dm-sans">{{ item.title }}</h4>
                                </div>
                            </div>
                        </div>

                        <!-- Tags -->
                        <div>
                            <h4 class="text-2xl font-medium dm-sans">Tags:</h4>
                            <div class="py-5 w-full flex flex-wrap gap-x-4 gap-y-3">
                                <a v-for="tag in tags" :key="tag" href="#"
                                    class="dm-sans text-base font-medium underline">{{ tag }} /</a>
                            </div>
                        </div>

                        <!-- Follow Us -->
                        <div>
                            <h4 class="text-2xl font-medium dm-sans">Follow us:</h4>
                            <div class="py-5 w-full flex flex-wrap gap-x-6 gap-y-3">
                                <a href="#" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]"><i
                                        class="fa-brands fa-square-facebook"></i></a>
                                <a href="#" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]"><i
                                        class="fa-brands fa-instagram"></i></a>
                                <a href="#" class="dm-sans text-3xl font-medium underline hover:text-[#48a1da]"><i
                                        class="fa-brands fa-square-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="">
                <div class="text-center py-5 mb-5">
                    <h3 class="font-medium text-4xl text-[#48a1da] dm-sans">Web Development</h3>
                </div>
                <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">E-commerce</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/1.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">Corporate</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/2.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">ERP Based</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/3.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">Inventory</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/4.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="text-center py-5 mb-5">
                    <h3 class="font-medium text-4xl text-[#48a1da] dm-sans">Software Development</h3>
                </div>
                <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">E-commerce</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/1.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">Corporate</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/2.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">ERP Based</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/3.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div class="shadow-lg">
                        <div class="bg-[#48a1da] rounded-t-xl">
                            <h4 class="py-2 px-5 dm-sans font-medium text-white">Inventory</h4>
                        </div>
                        <div>
                            <img src="../assets/blog/4.jpg" class="w-full min-h-[270px] bg-cover" alt="">
                        </div>
                        <div class="py-4 px-2">
                            <p class="font-medium text-base text-[#444444] dm-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

.dm-sans {
    font-family: "DM Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}
</style>