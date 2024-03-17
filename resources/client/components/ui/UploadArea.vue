<script setup>
    import IconUpload from '@/assets/icons/upload.svg?component'
</script>

<template>
    <div class="w-full md:flex-1 p-3">
        <div class="relative flex flex-col items-center justify-center p-6 h-44 text-center leading-9 tracking-tight text-white-100 focus-within:text-blue-400 focus-within:border-blue-400 border border-dashed border-white-100 rounded-lg">
            <IconUpload></IconUpload>
            <p class="mb-1 mt-4 text-base">
                <span>Нажмите, чтобы загрузить файлы</span>
            </p>
            <p class="text-xs" >до 256MB</p>
            <input class="absolute top-0 left-0 w-full h-full opacity-0" type="file">
        </div>
    </div>
</template>

<style scoped>

</style>
