<script setup>
    import MenuMe from '@/assets/icons/menu__me.svg?component';
    import MenuUpload from '@/assets/icons/menu__upload.svg?component';
    import MenuFavorites from '@/assets/icons/menu__favorites.svg?component';
    import MenuPlan from '@/assets/icons/menu__plan.svg?component';
</script>

<template>
    <div class="w-full flex justify-center">

        <div class="max-w-screen-2xl w-full flex flex-start">

            <aside class="flex-wrap items-center overflow-hidden justify-between block w-full p-0 my-4 mt-10 bg-dark border-0 shadow-xl xl:ml-6 max-w-64 rounded-md xl:left-0 xl:translate-x-0 ps">

                <div class="items-center block w-auto">
                    <ul class="flex flex-col pl-0 mb-0">

                        <li class="mt-0.5 w-full py-2 hover:bg-blue-400 hover:text-white-100 hover:transition-all ease-linear">
                            <a class="py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="javascript:void(0)">
                                <div class="mr-2 flex h-10 w-10 items-center justify-center text-center p-2.5">
                                    <MenuMe></MenuMe>
                                </div>
                                Мои файлы
                            </a>
                        </li>

                        <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent">

                        <li class="mt-0.5 w-full py-2 hover:bg-blue-400 hover:text-white-100 hover:transition-all ease-linear">
                            <a class="py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="javascript:void(0)">
                                <div class="mr-2 flex h-10 w-10 items-center justify-center text-center p-2.5">
                                    <MenuUpload></MenuUpload>
                                </div>
                                Быстрая загрузка
                            </a>
                        </li>

                        <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent">

                        <li class="mt-0.5 w-full py-2 hover:bg-blue-400 hover:text-white-100 hover:transition-all ease-linear">
                            <a class="py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="javascript:void(0)">
                                <div class="mr-2 flex h-10 w-10 items-center justify-center text-center p-2.5">
                                    <MenuFavorites></MenuFavorites>
                                </div>
                                Избранное
                            </a>
                        </li>

                        <hr class="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />

                        <li class="mt-0.5 w-full py-2 hover:bg-blue-400 hover:text-white-100 hover:transition-all ease-linear">
                            <a class="py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors dark:text-white dark:opacity-80" href="javascript:void(0)">
                                <div class="mr-2 flex h-10 w-10 items-center justify-center text-center p-2.5">
                                    <MenuPlan></MenuPlan>
                                </div>
                                Тарифный план
                            </a>
                        </li>

                    </ul>
                </div>

            </aside>
        </div>
    </div>
</template>

<style scoped>
    li:hover {
        color: white !important;
    }
</style>
