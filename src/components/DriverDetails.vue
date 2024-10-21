<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const zoomImage = document.querySelector('.zoom-image');
  const zoomContainer = document.querySelector('.zoom-container');

  zoomContainer.addEventListener('mousemove', (e) => {
    moveImage(e);
  });

  zoomContainer.addEventListener('mouseleave', () => {
    resetImage();
  });

  function moveImage(e) {
    const rect = zoomContainer.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Adjust the transform origin to the mouse position
    zoomImage.style.transformOrigin = `${x * 100}% ${y * 100}%`;
    zoomImage.style.transform = 'scale(2)'; // Adjust the scale for more or less zoom
  }

  function resetImage() {
    // Reset the image position and scale when the mouse leaves the container
    zoomImage.style.transform = 'scale(1)';
    zoomImage.style.transformOrigin = 'center center';
  }
});
</script>

<template>
    <section class="py-12">
        <div
            class="bg-[url(https://t3.ftcdn.net/jpg/02/21/79/40/360_F_221794075_LsuBECheGGj3zaCwC8o5OmRHbwVSaLBm.jpg)] bg-no-repeat bg-cover lg:h-[250px] flex items-center">
            <h2 class="font-semibold text-[#48a1da] text-5xl tracking-wider dm-sans px-10">Driver Details</h2>
        </div>
        <div class="container mx-auto py-10">
            <div class="grid lg:grid-cols-2">

                <div>
                    <div class="flex justify-center ">
                        <div
                            class="product-card lg:max-w-full max-w-[320px] rounded-2xl drop-shadow-2xl overflow-hidden cursor-pointer relative border group">
                            <div class="zoom-container">
                                <img src="../assets/Driver/details-1.png" class="zoom-image" alt="Product Image">
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex justify-start">
                    <div class="pt-4 pl-10 mt-2">
                        <div class="border-b w-full py-5">
                            <h3 class="lg:text-3xl text-xl font-semibold text-[#000]">Dotmax X718 1D Barcode Scanner</h3>
                        </div>

                        <p class="font-normal lg:text-lg text-base pt-3">
                            <span class="font-medium text-3xl text-[#2c306b]">Key Features:</span>
                            <ul class="py-5 list-disc mx-10">
                                <li>Brand: Dotmax </li>
                                <li>Model: X718</li>
                                <li>Type: 1D</li>
                            </ul>
                        </p>

                        <p class="font-normal lg:text-lg text-base pt-3">
                            <span class="font-medium text-lg text-[#000]">Warranty: One Year Replacement </span>
                        </p>
                        <p class="font-normal lg:text-lg text-base pt-3">
                            <span class="font-medium text-lg text-[#2c306b]">Price : </span>
                            <span class="text-red-600 text-xl">2,150.00৳  <strike class="text-[#797979] text-lg px-2">2,200.00৳ </strike> </span>
                        </p>

                        <div class="w-40 mt-6">
                            <a class="px-5 py-[8px] bg-red-500 text-white text-lg rounded-2xl tracking-wider" href="#" target="__blank">
                                Oder Now
                            </a>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div class="py-10">
                <div class="text-center">
                    <h3 class="font-medium text-2xl ">Description</h3>
                </div>

                <div class="border rounded-xl pb-10">

                    <div class="text-center py-5">
                        <h2 class="font-semibold text-[#4d4d4d] text-3xl ">Dotmax 1D CCD Barcode Scanner for Retail shop</h2>
                    </div>

                    <div class="mx-5">
                        <h4 class="font-semibold text-[#000] text-2xl ">Descriptions:</h4>
                        <ul class="list-disc mx-5 leading-8 text-base font-medium text-[#000]">
                            <li class="py-2">1D USB barcode scanner is a device designed to read one-dimensional (1D) barcodes. which are the most common type of barcodes used in various industries. Here’s a description of its key features and functionalities:</li>
                            <li class="py-2"> The scanner uses laser or CCD (Charge-Coupled Device) technology to read 1D barcodes. which consist of vertical lines and spaces. Common barcode formats include UPC, EAN, Code 39, Code 128, and more.</li>
                            <li class="py-2"> USB Connectivity: </li>
                            <li class="py-2"> The scanner connects to computers or point-of-sale (POS) systems via a USB interface. This plug-and-play functionality allows for easy setup without the need for additional drivers or software. </li>
                            <li class="py-2"> Ease of Use:</li>
                            <li class="py-2"> Most 1D USB CCD barcode reader are designed for simple operation. Users typically just need to point the scanner at the barcode and pull the trigger or press a button to scan. </li>
                            <li class="py-2"> Durability: </li>
                            <li class="py-2"> Many models are built to withstand the rigors of daily use in retail, warehousing, and other environments. They may feature rugged designs that can endure drops and spills.</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<style scoped>
.gradient {
    background: #0695FF;
    display: flex;
    justify-content: center;
    align-items: center;
}

.zoom-container {
  position: relative;
  overflow: hidden; /* To prevent overflow of the zoomed image */
  width: 100%;
  max-width: 500px; /* Adjust the width based on your layout */
}

.zoom-image {
  width: 100%;
  transition: transform 0.2s ease; /* Smooth zooming effect */
}

.zoom-container:hover .zoom-image {
  transform: scale(2); /* Zoom level, adjust this for more or less zoom */
}
</style>