<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { BASE_URL } from '../assets/apiConfig';
import { IMG } from '../assets/imageUrl';

const companyProfileTitle = ref([]);
const companyProfileData = ref({}); // Changed to an object to store data by ID

const fetchCompanyProfileInfo = async () => {
    try {
        // Fetch title information
        const titleResponse = await axios.get(`${BASE_URL}companyProfileTitleInfo`);
        console.log("Raw Title Response:", titleResponse.data);

        // Extract the array from the `data` property
        if (titleResponse.data && Array.isArray(titleResponse.data.data)) {
            companyProfileTitle.value = titleResponse.data.data.sort((a, b) => a.position - b.position);
        } else {
            console.error("Unexpected format for companyProfileTitleInfo:", titleResponse.data);
        }

        console.log("Processed Company Profile Title Data:", companyProfileTitle.value);

        // Fetch company profile data
        const dataResponse = await axios.get(`${BASE_URL}companyProfileDataInfo`);
        console.log("Raw Company Profile Data Response:", dataResponse.data);

        // Store company profile data indexed by id
        if (dataResponse.data && typeof dataResponse.data === 'object') {
            companyProfileData.value = dataResponse.data.data.reduce((acc, item) => {
                acc[item.id] = item;
                return acc;
            }, {});
        } else {
            console.error("Unexpected format for companyProfileDataInfo:", dataResponse.data);
        }

        console.log("Processed Company Profile Data:", companyProfileData.value);
    } catch (error) {
        console.error("Error fetching company profile information:", error);
    }
};

onMounted(fetchCompanyProfileInfo);
</script>

<template>
    <section class="Background bg-[gray] pt-10">
        <!-- ====================Headding-area==================== -->
        <div class="container mx-auto">
            <div class="text-center">
                <h2
                    class="lg:text-5xl md:text-4xl text-5xl font-bold lg:mt-[210px] mt-[150px] lg:px-0 px-3 text-[#f47621] leading-tight">
                    Information</h2>
            </div>
        </div>
        <!-- ====================Headding-area End==================== -->
    </section>

    <!-- =======================Table=========================== -->
    <section class="pt-10 pb-10">
        <div class="table-area container mx-auto px-6 pt-5 pb-5">
            <div class="relative overflow-x-auto sm:rounded-lg">
                <table class="w-[800px] text-sm text-left rtl:text-right text-gray-500">
                    <tbody>
                        <tr v-for="title in companyProfileTitle" :key="title.id" class="border-b border-gray-200 dark:border-gray-700">
                            <td class="px-6 py-4 font-semibold text-[16px] text-[#48a1da] border-r-2 border-t-2 border-l-2 lg:w-[300px] md:w-[250px] w-[250px]">
                                {{ title.title }}
                            </td>
                            <th scope="row" class="px-6 py-4 font-normal text-[black] text-[16px] whitespace-nowrap bg-gray-50 border-t-2 border-r-2">
                                <!-- Check if an image exists, otherwise show titleData -->
                                <template v-if="companyProfileData[title.id]?.image">
                                    <img :src="IMG + companyProfileData[title.id].image" alt="Company Profile Image" class="max-w-[150px] max-h-[150px]" />
                                </template>
                                <template v-else>
                                    {{ companyProfileData[title.id]?.titleData || 'No data available' }}
                                </template>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <!-- =======================Table End=========================== -->

</template>

<style scoped>
.Background {
    width: 100%;
    background: url(../assets/company/companyprofile.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}
.table-area{
    width: 850px;
    border: 1px solid black;
}
 @media all and (min-width:320px) and (max-width:780px) {
    .table-area {
            width: 350px;
            border: 1px solid black;
        }
 }
</style>