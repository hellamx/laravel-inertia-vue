<script setup>

    import IconMark from '@/assets/icons/prices__mark.svg?component';

    defineProps([
        'name',
        'forUse',
        'memory',
        'days',
        'price',
        'buttonText'
    ])
</script>

<template>
    <div class="w-full md:w-1/3 p-5">
        <div>
            <div class="bg-blue-400 rounded-t-md">
                <div class="py-7 px-9">
                    <h3 class="mb-3 text-xl font-medium text-white-100 leading-snug">{{ name }}</h3>
                    <p class="text-white-100 leading-relaxed">{{ forUse }}</p>
                </div>
            </div>
            <div class="pt-8 pb-9 px-9 bg-white-100 rounded-b-md">
                <p class="mb-6 text-gray-600 font-medium leading-relaxed">Включает в себя:</p>
                <ul class="mb-11">
                    <li class="mb-4 flex items-center" >
                        <IconMark></IconMark>
                        <p class="text-base ml-3 leading-normal">{{ memory }} ГБ для хранения данных</p>
                    </li>
                    <li class="mb-4 flex items-center" >
                        <IconMark></IconMark>
                        <p class="text-base ml-3 leading-normal">{{ days }} хранения файлов</p>
                    </li>
                </ul>
                <p class="mb-6 text-xl text-gray-500 leading-normal">
                    <span class="text-gray-900">{{ price }}</span>
                </p>
                <div class="md:inline-block">
                    <button class="btn-blue" type="button">{{ buttonText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
