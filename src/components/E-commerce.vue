<script setup>
import { IMG } from '../assets/imageUrl';
const Ecommerce = [
    {
        title: "E-commerce Development Service",
        Offer: "E-commerce Offer",
        Dynamic: "Dynamic Management Panel",
        Search: "Search engine friendly",
        Category: "Category Management",
        Hosting:"E-commerce Hosting",
        App:"E-commerce App Development",
        Discount:"Discount Management",
        Easy: "Easy to Checkout",
        Multi: "Multi-Vendor E-commerce",
        Design: "Responsive Design",
        Brand: "Brand & Product Management",
        Order: "Order Management",
        Panel: "Customer Panel",
        Inventory: "Inventory Management",
        Report: "Report Management",
        Payment: "Payment Gateway",
        Sms: "SMS System",
    }
]

const Ecommercess = [
    {
        Title: "Best E-commerce Site Development IT Firm",
        commerce: "-commerce has become a very popular business service as it enables both the sellers and buyers to buy or sell through web pages. DoofazIT facilitates its clients to get easy access to their customers with their products and services, and enable them to receive online payments. DoofazIT also provides consultancy to its clients to enhance the business growth and to keep pace with the changing business trends in the era of e - commerce.",
        Important: "Important Features List for E - commerce Business Website",
        Your: "Your Can Develop Your E-commerce Website with your Requirement and DoofazIT Develop your site match your affordable price.if you want to share your exclusive Idea to E - commerce section our team can provide your maximum satisfaction security / UX / UX / Requirement successfully Done.",
        This: "This is Our Important Features you want to add your self Features list",
        ErpImage: "/assets/8db395b91ff16478cfff4b838fff75e4-BPRTcDRO.png",
        Login: "Administrative Login",
        Product: "Product Inventory Management",
        Category: "Category Management",
        Account: "Account and Profit Management",
        An: "An easy checkout System",
        Management: "Product Management",
        Sales:"Sales Management",
        Customer: "Customer Relationship Management",
        Discount: "Discount Management",
        Multi: "Multi Admin Login",
        Payment: "Payment Gateway System",
        Social: "Social media Plugin",
        Live: "Live Chating System",
        Stock:"Stock Filtering",
        Personal: "Personal Branding Website",
        Sms: "SMS System",
        Otp: "SMS-OTP System",
        Mail: "Mail Marketing",
        System: "Reporting System",
        Fixee: "Fixee",
        Facebook: "Facebook Pixel System",
        Search: "Search Engine Optimization Design and code",
        web: "Web Service",
        E_Service: "E-Commerce Service",
        Online:"Online News Portal",
        Based:"Requirement Based Website",
    }
]

const content_box = [
    {
        boxTitle: "E-commerce Related More Service",
        boxGet: "Get Customized E-commerce",
        Image1: "/assets/1-hlmoxdeS.jpg",
        Image2: "/assets/2-BpX6nTGN.jpg",
        pngtree: "/assets/pngtree-betting-clipart-cartoon-guy-71-p0bHNeO2.png",
        Image3: "/assets/3-DKB-JRaz.jpg",
        Image4:"/assets/4-Bxy4bS7c.jpg",
        Image5: "/assets/5-Dnro8J2K.jpg",
        seebutton: "See more",
        boxCustomized: "Get Customized E-commerce",
    }
]
</script>
<template>
    <section class="Background bg-[gray] pt-10">
        <div class="grid gap-x-8 gap-y-4 grid-cols-1 lg:mt-[100px] mt-[50px] lg:px-10 lg:ml-[20%]">
            <div v-for="(Ecommerces,index) in Ecommerce" :key="index"
                class="content-box opacity-85 lg:w-[700px] 2xl:w-[1000px] border">
                <h2 class="lg:text-[30px] text-[25px] 2xl:text-[40px] font-[700] text-[#48a1da] text-center">{{
                    Ecommerces.title }}</h2>
                <p class="text-[18px] 2xl:text-[30px] font-[500] text-[#68ff4a] text-center">{{ Ecommerces.Offer }}</p>

                <div class="grid gap-x-8 gap-y-4 grid-cols-2 lg:px-5 px-2">
                    <div class="text-[#fff]">
                        <ul class="text-[#fff] lg:pb-10 pb-3 text-[17px]">
                            <li class="mt-52xl:pt-1 2xl:text-[20px] pt-1 opacity-[999]"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Dynamic }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Search }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Category }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Hosting }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.App }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]">
                                </i> {{ Ecommerces.Discount }}
                            </li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1">
                                <i class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                {{ Ecommerces.Easy }}
                            </li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1">
                                <i class="fa-solid fa-paperclip text-[#48a1da]"></i>
                                {{ Ecommerces.Multi }}
                            </li>
                        </ul>
                    </div>
                    <div class="text-[#fff]">
                        <ul class="text-[#fff] pb-10 text-[17px]">
                            <li class="mt-52xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Design }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Brand }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Order }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Panel }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Inventory }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Report }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Payment }}</li>
                            <li class="2xl:pt-1 2xl:text-[20px] pt-1"><i
                                    class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ Ecommerces.Sms }}</li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    </section>

    <section>
        <div v-for="(indexs,index) in Ecommercess" :key="index"
            class="grid gap-x-8 gap-y-4 lg:grid-cols-2 grid-cols-1 pt-10 lg:px-16 px-2 pb-10">
            <div class="content-box1 border lg:w-[800px] 2xl:w-[1000px]">
                <h2 class="text-[#48a1da] text-center lg:text-[25px] 2xl:text-[35px] font-[600] pt-5">{{ indexs.Title }}
                </h2>
                <p class="px-5 pt-5 text-[18px] 2xl:text-[22px]"><span class="text-[#48a1da] text-[25px]">E</span>{{
                    indexs.commerce }}</p>
                <h2 class="text-[#48a1da] text-center lg:text-[25px] 2xl:text-[35px] font-[600] pt-5">{{
                    indexs.Important }}</h2>
                <p class="px-5 pt-5 text-[18px] 2xl:text-[22px]">
                    {{ indexs.Your }}
                </p>
                <h2 class="text-[#48a1da] text-center lg:text-[23px] 2xl:text-[30px] font-[600] pt-5">{{ indexs.This }}
                </h2>

                <div class="grid gap-x-8 gap-y-4 lg:grid-cols-3 grid-cols-1 px-5 pb-5 pt-6">
                    <div class="">
                        <ul class="text-[18px] font-[500] 2xl:text-[20px]">
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Login }}
                            </li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Multi
                                }}
                            </li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{
                                indexs.Category }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Product
                                }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Account
                                }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.An }}
                            </li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{
                                indexs.Management }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Sales }}
                            </li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{
                                indexs.Customer }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{
                                indexs.Discount }}</li>
                            <li class="pt-1"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Stock }}
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="text-[18px] font-[500] 2xl:text-[20px]">
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Payment
                                }}</li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Sms }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Otp }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Live }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Search
                                }}</li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Mail }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.System
                                }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{ indexs.Social
                                }}</li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i>{{ indexs.Fixee }}
                            </li>
                            <li class="pt-2"><i class="fa-regular fa-circle-check text-[#48a1da]"></i> {{
                                indexs.Facebook }}</li>
                        </ul>
                    </div>
                    <div>
                        <img :src="IMG +indexs.ErpImage" alt="">
                    </div>
                </div>

            </div>
            <div
                class="content-box1 lg:w-[300px] 2xl:w-[400px] border lg:ml-[40%] lg:mt-0 mt-5 h-[750px] 2xl:h-[600px]">
                <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                    <h2 class="text-[20px] 2xl:text-[25px] font-[600] text-center pt-1 text-[#fff]">{{ indexs.web }}
                    </h2>
                </div>
                <ul class="pt-8 px-5 text-[18px] 2xl:text-[23px] pb-5">
                    <li class="pt-2"><a href=""><i class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ indexs.E_Service
                            }}</a></li>
                    <li class="pt-2"><a href=""><i class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ indexs.Online
                            }}</a></li>
                    <li class="pt-2"><a href=""><i class="fa-solid fa-paperclip text-[#48a1da]"></i> {{ indexs.Personal
                            }}</a></li>
                    <li class="pt-2"><a href=""><i class="fa-solid fa-paperclip text-[#48a1da]"></i>{{ indexs.Based
                            }}</a></li>
                </ul>
                <div class="px-2 shadow ">
                    <img :src="IMG +indexs.ErpImage" alt="">
                </div>
                <div class="px-2 shadow pt-5 pb-5">
                    <iframe width="280" height="250" src="https://www.youtube.com/embed/fUjG30bUV_s?si=ICfRMahfxRWw6HDL"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>

    <section class="content-box1">
        <div v-for="(boxs,index) in content_box" :key="index" class="">
            <h2
                class="text-center 2xl:text-[30px] font-[600] text-[#48a1da] pt-8 pb-5 lg:text-[30px] lg:pb-5 text-[25px]">
                {{ boxs.boxTitle }}</h2>

            <div class="grid gap-x-8 gap-y-4 2xl:grid-cols-4 lg:grid-cols-4 grid-cols-1 px-5 2xl:pt-16 pb-10">
                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxGet
                            }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image1" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG + boxs.pngtree" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image3" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image5" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image1" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image2" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>
                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image4" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>

                <div class="content-box1">
                    <div class="bg-[#48a1da] h-[40px] 2xl:h-[50px]">
                        <h2 class="text-[20px] 2xl:text-[20px] font-[600] text-center pt-1 text-[#fff]">{{ boxs.boxCustomized }}</h2>
                    </div>
                    <div class="pb-3 px-4">
                        <img :src="IMG +boxs.Image3" alt="">
                        <p class="text-center text-[20px] font-[600] text-[#48a1da]">{{ boxs.boxTitle }}</p>
                        <button type="button" class="expand-button ml-[20%] h-12">{{ boxs.seebutton }}</button>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/ERP/8db395b91ff16478cfff4b838fff75e4.png" class="hidden" alt="">
        <img src="../assets/management/1.jpg" class="hidden" alt="">
        <img src="../assets/management/pngtree-betting-clipart-cartoon-guy-71.png" class="hidden" alt="">
        <img src="../assets/management/2.jpg" class="hidden" alt="">
        <img src="../assets/management/3.jpg" class="hidden" alt="">
        <img src="../assets/management/4.jpg" class="hidden" alt="">
        <img src="../assets/management/5.jpg" class="hidden" alt="">
    </section>

</template>
<style scoped>
.Background {
    width: 100%;    
    height: 600px;
    background: url(../assets/ERP/1n.jpg) no-repeat;
    background-size: cover;
    padding-bottom: 50px;
}
.content-box{
    background: black;
    box-shadow: 5px 3px 5px 0px #c5c5c5;
}
.content-box1{
    box-shadow: 5px 0px 5px 5px #c5c5c5;
}
                        .expand-button {
                            background-color: #3bc5e7;
                            /* Adjust padding as per your requirement */
                            font-size: 18px;
                            font-weight: 600;
                            border-radius: 10px;
                            transition: width 0.3s ease;
                            /* Add transition for smooth animation */
                            animation-name: expand;
                            /* Specify the animation name */
                            animation-duration: 2s;
                            /* Duration of the animation */
                            animation-iteration-count: infinite;
                            /* Make the animation repeat indefinitely */
                            animation-direction: alternate;
                            /* Make the animation reverse direction after each iteration */
                        }
            
                        /* Define the keyframes for the animation */
                        @keyframes expand {
                            from {
                                width: 150px;
                                background: black;
                                color: #fff;
                                /* Start width */
                            }
            
                            to {
                                width: 160px;
                                background: #3bc5e7;
                                /* End width */
                            }
                        }
@media all and (min-width:320px) and (max-width:780px) {
   
    .content-box {
            background: black;
            box-shadow: 5px 0px 5px 5px #c5c5c5;
        }
}
</style>