<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const iframeUrl = route.query.iframe || 'https://default-url.com';  // Default URL if none provided
</script>

<template>
    <div class="container mx-auto py-20 mt-10">
        <iframe :src="iframeUrl" width="100%" height="800px" frameborder="0"></iframe>
    </div>
</template>