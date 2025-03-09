<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const data = ref(null);
const blogBox = ref(null);
const selectedCategory = ref(null);
const currentPage = ref(1); // Current page for pagination
const itemsPerPage = ref(3); // Number of items per page for pagination

onMounted(() => {
    fetchData();
});
// fetchData();

// Fetch blog and category data on mount
const loading = ref(true); // New loading state

async function fetchData() {
    try {
        loading.value = true;
        
        const categoryResponse = await axios.get(`${BASE_URL}blogCategoryInfo`);
        data.value = categoryResponse.data;

        const blogResponse = await axios.get(`${BASE_URL}blogCardInfo`);
        blogBox.value = blogResponse.data;

    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false; // Stop loading once data is fetched
    }
}

// Run fetchData on mount

// Filter and sort blogs based on category and publish status
const filteredBlogs = computed(() => {
    let blogs = blogBox.value?.data.filter(blog => blog.frontendShowStatus === "published") || [];

    if (selectedCategory.value) {
        blogs = blogs.filter(blog => blog.categoryName == selectedCategory.value);
    }

    // Sort by date in descending order
    return blogs.sort((a, b) => {
        const dateA = a.updated_at || a.created_at;
        const dateB = b.updated_at || b.created_at;
        return new Date(dateB) - new Date(dateA);
    });
});

// Paginate the filtered and sorted blogs
const paginatedBlogs = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return filteredBlogs.value.slice(start, end);
});

// "More Blogs" computed property
const moreBlogs = computed(() => {
    const paginatedSet = new Set(paginatedBlogs.value);
    return filteredBlogs.value.filter(blog => !paginatedSet.has(blog));
});

// Calculate the total number of pages
const totalPages = computed(() => Math.ceil(filteredBlogs.value.length / itemsPerPage.value));

// Pagination navigation function
function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
}
</script>

<template>
    <section class="py-20 mt-10">
        <div class="container mx-auto">
            <!-- Main Blog Section -->
            <div class="grid lg:grid-cols-4 gap-5">
                <div class="grid lg:grid-cols-3 col-span-3 grid-cols-1 gap-5">
                    <!-- Show Skeleton Loader when loading -->
                    <div v-if="loading" class="grid lg:grid-cols-3 col-span-3 grid-cols-1 gap-5">
                        <div v-for="n in 3" :key="n" class="skeleton-blog-item"></div>
                    </div>
                    
                    <!-- Blog Items when data is loaded -->
                    <div v-else v-for="blog in paginatedBlogs" :key="blog.id">
                        <div class="item border rounded-lg lg:min-h-[720px]">
                            <RouterLink :to="{ name: 'blog-details', params: { slug: blog.slug } }">
                                <article class="bg-white shadow-custom rounded-lg p-2 group" data-aos="fade-up"
                                    data-aos-duration="2000">
                                    <a href="#!" class="mb-6 rounded overflow-hidden flex justify-center">
                                        <img :src="IMG + blog.Image" :title="blog.imageAltTag"
                                            class="w-full lg:h-full lg:min-h-[300px] lg:max-h-[300px] md:h-full transform scale-1 group-hover:scale-105 duration-500"
                                            alt="Human">
                                    </a>
                                    <div class="px-2 pb-10">
                                        <div class="grid grid-cols-2 gap-5 pb-3">
                                            <p class="text-[#454545] custom-font">
                                                <i class="fa-regular fa-calendar-check text-[#48a1da]"></i>
                                                <span class="ml-3 text-sm">{{ formatDate(blog.created_at) }}</span>
                                            </p>
                                        </div>
                                        <h3
                                            class="text-start text-[#48a1da] leading-8 text-lg font-semibold custom-font hover:text-[#333]">
                                            {{ blog.title }}
                                        </h3>
                                        <p class="text-start text-[#333333] custom-font text-base py-5">
                                            {{ blog.shortDescription }}
                                        </p>
                                        <a :href="blog.buttonUrl"
                                            class="text-start leading-8 text-base font-semibold custom-font text-[#333]">
                                            Read More
                                            <i class="fa-solid fa-chevron-right text-base text-[#48a1da]"></i>
                                        </a>
                                    </div>
                                </article>
                            </RouterLink>
                        </div>
                    </div>
                </div>

                <!-- Blog Category Skeleton -->
                <div class="border bg-[#f5f5f5] rounded-lg lg:block hidden">
                    <div class="bg-[#48a1da] py-5 rounded-t-lg">
                        <h4 class="text-start text-3xl font-semibold text-white ml-5">Blog Category</h4>
                    </div>

                    <div class="py-4 px-4">
                        <ul class="font-medium text-xl">
                            <li class="pb-5">
                                <!-- Show Skeleton Buttons when loading -->
                                <div v-if="loading" class="w-full flex flex-wrap justify-start">
                                    <div v-for="n in 3" :key="n" class="skeleton-category-button"></div>
                                </div>

                                <!-- Show Categories when data is loaded -->
                                <div v-else class="w-full flex flex-wrap justify-start">
                                    <button @click="selectedCategory = null" 
                                            :class="['dm-sans text-base font-medium py-1 px-3 border border-[#000] rounded-lg lg:w-[70%] my-2',
                                                selectedCategory === null ? 'bg-black text-white' : 'hover:bg-black hover:text-white']">
                                        All Blogs
                                    </button>
                                    <button v-for="category in data.data" :key="category.id"
                                            @click="selectedCategory = category.id"
                                            :class="['dm-sans text-base font-medium py-1 px-3 border border-[#000] rounded-lg lg:w-[70%] my-2',
                                                selectedCategory === category.id ? 'bg-black text-white' : 'hover:bg-black hover:text-white']">
                                        {{ category.catagoryName }}
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- Pagination Skeleton -->
            <div class="flex justify-center mt-6">
                <div v-if="loading" class="skeleton-pagination"></div>
                <div v-else>
                    <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                        :class="['px-3 py-1 mx-1 border rounded', currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200']">
                        {{ page }}
                    </button>
                </div>
            </div>

            <!-- More Blogs Skeleton -->
            <div class="container mx-auto mt-10">
                <h3 class="text-center dm-sans text-3xl font-semibold pt-10">More Blog</h3>
                <div class="grid grid-cols-4 gap-5 mt-10">
                    <div v-if="loading" v-for="n in 4" :key="n" class="skeleton-more-blog"></div>
                    <div v-else v-for="blog in moreBlogs" :key="blog.id" class="blog-entry shadow pb-5 pt-2 px-2 hover:shadow-lg">
                        <RouterLink :to="{ name: 'blog-details', params: { slug: blog.slug } }">
                            <div class="">
                                <img :src="IMG + blog.Image" class="rounded-t-lg min-h-[180px] max-h-[180px] w-full" alt="">
                            </div>
                            <p class="py-2 dm-sans text-sm text-[#333] font-medium">{{ formatDate(blog.created_at || blog.updated_at) }}</p>
                            <h3 class="dm-sans text-base text-[#333] font-medium">{{ blog.title }}</h3>
                        </RouterLink>
                    </div>
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

/* Skeleton Loaders */
.skeleton-blog-item,
.skeleton-category-button,
.skeleton-pagination,
.skeleton-more-blog {
    background-color: #e0e0e0;
    border-radius: 4px;
    animation: pulse 1.5s infinite ease-in-out;
}

/* Individual skeleton styles */
.skeleton-blog-item {
    height: 600px;
    margin-bottom: 20px;
}

.skeleton-category-button {
    height: 40px;
    width: 70%;
    margin: 10px 0;
}

.skeleton-pagination {
    width: 100px;
    height: 40px;
}

.skeleton-more-blog {
    height: 250px;
}

/* Pulse animation */
@keyframes pulse {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
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