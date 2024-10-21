<script setup>
import Slider from '@/components/Slider.vue';
import GlanceCount from '@/components/GlanceCount.vue';
import Accessories from '@/components/Accessories.vue';
import HomeAbout from '@/components/HomeAbout.vue';
import WorkCategoryCard from '@/components/WorkCategoryCard.vue';
import OurProject from '@/components/OurProject.vue';
import industry from '@/components/industry.vue';
import Process from '@/components/Process.vue';
import project from '@/components/project.vue';
import clients from '@/components/clients.vue';
import Customer from '@/components/Customer.vue';
import Blog from '@/components/Blog.vue'
</script>

<template>
    <Slider />
    <Accessories />
    <!-- <HomeAbout /> -->
    <WorkCategoryCard />
    <OurProject />
    <Process />
    <project />
    <industry />
    <Customer />
    <GlanceCount />
    <clients />
    <Blog />
</template>
