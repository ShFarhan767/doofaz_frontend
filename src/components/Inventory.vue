<script setup>
const Inventory= [
        {
                Title: "Inventory Software Solution",
                pragrap: "Organization within a centralized and integrated system",
                Accounting: "Accounting",
                Inventor: "Inventory Management System",
                vat: "VAT & TAX",
                Asset: "Asset Management System",
                hrm: "HRM",
                crm: "CRM",
                Land: "Land Management",
                Module: "Marketing Module",
                Data: "Data Security",
                Easy: "Easy Data Access",
                Cross: "Cross Domain Access",
                ui: "Smart UI/UX",
                Hour: "24 Hour Service",
                Access: "Easy Access In Mobile",
                App: "Android APP",
        }
]
</script>
<template>
        <section class="Background bg-[gray] pt-10">
                <div v-for="(Inventorys, index) in Inventory" :key="index"
                        class="grid gap-x-8 gap-y-4 grid-cols-1 lg:mt-[100px] mt-[50px] lg:px-10 lg:ml-[20%]">
                        <div class="content-box opacity-85 lg:w-[700px] 2xl:w-[1000px] border">
                                <h2
                                        class="lg:text-[30px] text-[25px] 2xl:text-[40px] font-[700] text-[#48a1da] text-center">
                                        {{ Inventorys.Title }}</h2>
                                <p class="text-[18px] 2xl:text-[30px] font-[500] text-[#68ff4a] text-center">
                                        {{ Inventorys.pragrap }}</p>

                                <div class="grid gap-x-8 gap-y-4 grid-cols-2 lg:px-5 px-2">
                                        <div class="text-[#fff]">
                                                <ul class="text-[#fff] lg:pb-10 pb-3 text-[17px]">
                                                        <li class="mt-52xl:pt-1 2xl:text-[20px] pt-1 opacity-[999]"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Accounting }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Inventor }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.vat }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Asset }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.hrm }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.crm }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.vat }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Land }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Module }}</li>
                                                </ul>
                                        </div>
                                        <div class="text-[#fff]">
                                                <ul class="text-[#fff] pb-10 text-[17px]">
                                                        <li class="mt-52xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Data }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Easy }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Cross }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.ui }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Hour }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.Access }}</li>
                                                        <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                                                        class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                                                {{ Inventorys.App }}</li>
                                                </ul>
                                        </div>
                                </div>


                        </div>
                </div>
        </section>
</template>
<style>
.Background {
    width: 100%;
    height: 600px;
    background: url(../assets/ERP/1n.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}

.content-box {
    background: black;
    box-shadow: 5px 3px 5px 0px #c5c5c5;
}
</style>