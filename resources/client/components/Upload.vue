<script setup>
    import UploadArea from "@/components/ui/UploadArea.vue";
    import UploadBg from "@/assets/images/upload__banner.png"
</script>

<template>
    <div class="fast_upload">

        <div class="fast_upload__wrapper">
            <img class="absolute top-0 left-0 h-full w-full object-cover opacity-10" :src="UploadBg" alt="upload__bg">
            <div class="relative flex items-center flex-col max-w-sm mx-auto text-center mb-6">
                <p class="text-2xl leading-9 tracking-tight text-white-100">Быстрая загрузка</p>
            </div>

            <UploadArea></UploadArea>
        </div>
    </div>
</template>
