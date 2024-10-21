<script setup>
const Founder = [
    {
        headingTitle: "Dear Visitor,",
        welcome: "Welcome to the website of",
        CompanyName: "DOOFAZ IT Limited",
        pragrap: "and thank you for your interest.This site will give you an excellent insight about our company and its capabilities.",
        The: "The mission of",
        doofaz: "DOOFAZ IT",
        exceed:"is to exceed customer expectations by providing outstanding customer care through innovations created by talented, qualified employees.We believe that our customer’s satisfaction and thus their loyalty are our success.",
        overall: "Our overall business attitude is shaped by our overall value care. The people of",
        understand:"understand that, in the long run, success in business can only be achieved by maintaining service quality and long - term client relations.Some of our services for which we are looked out for are software development, website designing, e - commerce solution, bulk e - mail and messaging, search engine optimization etc.",
        Thank:"Thank you for visiting our website and for considering our products and services.I encourage you to experience the caring attitude of our competent, dedicated employees.We welcome the opportunity to answer any questions you may have and discuss your needs.Please let us know how we can be of assistance to you.",
        FOUNDERceo:"FOUNDER & CEO, DOOFAZ IT Limited",
        FOUNDERcto: "FOUNDER & CTO,DOOFAZ IT Limited",
        pace: "The pace of change in information technology is rapid, and even more far reaching change may be on the way.We realize the importance of meeting and exceeding our customer's expectations for comprehensive IT services; from whole technology life cycles.Every plan we make, every action we implement, is driven by the desire for quality and is keenly focused on the following pivotal tenets: ",
        component: "A vital component in our quest for quality is the constant investment in our people, facilities, and technologies.We continue to focus on having market leading facilities, which is essential to our purpose to provide the highest standard of quality care that we are proud to deliver to our employees and customers.We are building one of the most sophisticated and the most up - to - date software solution for small, medium and enterprise Organisation.",
        proud:"We are proud of our ability to adapt in a way that benefits our customers and look forward to more of the same.",
        ceo: "Md.Saiful Islam",
        cto:"Md.Nazmul Huda",
        Sincerely: "Sincerely,",
        Providing: "Providing a rewarding place for our employees to work.",
        outstanding: "Providing outstanding technological solutions.",
        Building: "Building a strong relationship with our valuable customers.",
        quality: "Provide good quality end to end software, web, networks and hardware solutions.",
        Sharing: "Sharing experiences with our valuable customers.",
        Being:"Being good financial stewards.",
    }
]
</script>
<template>
    <section class="Background bg-[gray] pt-10">
    </section>

    <section class="bg-[#d8dfe0] overflow-hidden mb-5 mt-5 px-5 pt-5">
        <div v-for="(FounderArea,index) in Founder" :key="index"
            class="paragrep bg-[#fff] lg:w-[800px] lg:ml-[21%] lg:mt-7 lg:mb-7">
            <h2 class="text-sm pt-5 px-5 font-semibold">{{ FounderArea.headingTitle }}</h2>
            <p class="px-5 mt-3 mb-4 text-[18px]">{{ FounderArea.welcome }}<span
                    class="text-md text-[#48a1da] font-bold">{{ FounderArea.CompanyName }}</span>
                {{ FounderArea.pragrap }}</p>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.The }} <span class="text-md text-[#48a1da] font-bold">{{
                    FounderArea.doofaz }}</span>{{ FounderArea.exceed }}</p>

            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.overall }}
                <span class="text-md text-[#48a1da] font-bold">{{ FounderArea.CompanyName }}</span> {{
                FounderArea.understand }}
            </p>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.Thank }}
            </p>

            <h2 class="text-[18px] px-5 mt-7 mb-5 font-normal">{{ FounderArea.Sincerely }}</h2>
            <h2 class="text-[18px] px-5 mt-7 font-medium">{{ FounderArea.ceo }}</h2>
            <h2 class="text-[18px] px-5 font-normal text-[#48a1da]">{{ FounderArea.FOUNDERceo }}</h2>
            <h2 class="text-[18px] px-5 font-normal"><span
                    class="text-md text-[#48a1da] font-bold">Mail:</span>ceo@doofazit.com
            </h2>
            <h2 class="text-[18px] px-5 font-normal"><span
                    class="text-md text-[#48a1da] font-bold">Mail:</span>doofazinfo@gmail.com
            </h2>
            <h2 class="text-[18px] px-5 font-normal"><span class="text-md text-[#48a1da] font-bold">FB:</span> <a
                    href="https://www.facebook.com/saiful45.mb/">www.facebook.com (Click To Connect)</a> </h2>
            <h2 class="text-[18px] px-5 font-normal pb-5"><span class="text-md text-[#48a1da] font-bold">IN:</span> <a
                    href="https://www.linkedin.com/in/engr-saifulislam/">www.linkedin.com (Click To Connect)</a> </h2>
        </div>





        <div v-for="(FounderArea, index) in Founder" :key="index"
            class="paragrep bg-[#fff] lg:w-[800px] lg:ml-[21%] lg:mt-7 mt-7 lg:mb-7">
            <h2 class="text-sm pt-5 px-5 font-semibold">{{ FounderArea.headingTitle }}</h2>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.welcome }}<span class="text-md text-[#48a1da] font-bold">
                    {{ FounderArea.CompanyName }}</span>{{ FounderArea.pragrap }}</p>
            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.pace }}</p>

            <ul class="px-5 mt-4">
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.outstanding }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Providing }} </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Being }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Building }} </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.Sharing }}
                </li>
                <li><i class="fa-solid fa-circle text-[5px] mb-2 text-[#48a1da]"></i> {{ FounderArea.quality }} </li>
            </ul>

            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.component }}</p>

            <p class="px-5 mt-4 text-[18px]">{{ FounderArea.proud }}</p>

            <h2 class="text-[18px] px-5 mt-7 mb-5 font-normal">{{ FounderArea.Sincerely }}</h2>
            <h2 class="text-[18px] px-5 mt-7 font-medium">{{ FounderArea.cto }}</h2>
            <h2 class="text-[18px] px-5 font-normal">{{ FounderArea.FOUNDERcto }}</h2>
            <h2 class="text-[18px] px-5 font-normal"><span
                    class="text-md text-[#48a1da] font-bold">Mail:</span>cto@doofazit.com
            </h2>
            <h2 class="text-[18px] px-5 font-normal"><span class="text-md text-[#48a1da] font-bold">FB:</span> <a
                    href="https://www.facebook.com/Nazmulfci">www.facebook.com (Click To Connect)</a> </h2>

            <h2 class="text-[18px] px-5 font-normal pb-5"><span class="text-md text-[#48a1da] font-bold">IN:</span> <a
                    href="https://www.linkedin.com/in/nazmulfci/">www.linkedin.com (Click To Connect)</a> </h2>
        </div>
    </section>

</template>

<style scoped>
.Background {
    width: 100%;
    height: 400px;
    background: url(../assets/message/Founders-Message.jpg) no-repeat;
    background-size: cover;
    margin-top: -100px;
    padding-bottom: 50px;
}
.paragrep{
    border: 1px solid black;
}
</style>