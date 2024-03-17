<script setup>
    import IconAudio from '@/assets/icons/hero__audio.svg?component'
    import IconExcel from '@/assets/icons/hero__excel.svg?component'
    import IconPdf from '@/assets/icons/hero__pdf.svg?component'
    import IconPsd from '@/assets/icons/hero__psd.svg?component'
    import IconWord from '@/assets/icons/hero__word.svg?component'
    import IconZip from '@/assets/icons/hero__zip.svg?component'
    import IconTxt from '@/assets/icons/hero__txt.svg?component'
    import IconImg from '@/assets/icons/hero__img.svg?component'
</script>

<template>
    <div class="hero">

        <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5eb1d1] to-[#5eb1d1] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>

        <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5eb1d1] to-[#5eb1d1] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>

        <div class="absolute -top-80 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5eb1d1] to-[#5eb1d1] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-8">

            <div class="mx-auto w-full lg:mx-0 mb-5 flex justify-between">

                <div class="hero__container w-2/4">
                    <h2 class="text-4xl tracking-tight text-white sm:text-5xl mb-16 mt-3">Храните, делитесь, управляйте файлами</h2>

                    <div class="grid grid-cols-1 gap-y-6 text-base leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        <a class="btn-blue" href="javascript:void(0)">
                            Быстрая загрузка <span class="ml-2" aria-hidden="true">&rarr;</span>
                        </a>
                        <a class="btn-blue" href="javascript:void(0)">
                            Зарегистрироваться <span class="ml-2" aria-hidden="true">&#43;</span>
                        </a>
                    </div>
                </div>

                <div class="hero__ui w-2/4">

                    <div class="w-full p-6 pt-0">

                        <div class="max-w-max mx-auto">

                            <div class="flex flex-wrap justify-center max-w-max -m-3 mb-3">

                                <div class="p-5">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000">
                                        <div class="hero__ui--block rounded-full bg-white">
                                            <div class="p-5">
                                                <IconAudio :height="32" :width="32"></IconAudio>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000">
                                        <div class="hero__ui--block rounded-full bg-white">
                                            <div class="p-5">
                                                <IconExcel :height="32" :width="32"></IconExcel>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconPdf :height="32" :width="32"></IconPdf>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconPsd :height="32" :width="32"></IconPsd>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconWord :height="32" :width="32"></IconWord>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconZip :height="32" :width="32"></IconZip>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconTxt :height="32" :width="32"></IconTxt>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-5" data-path="0.1.0.1.0.1.0">
                                    <div class="mx-auto p-3 transform hover:-translate-y-3 transition ease-out duration-1000" data-path="0.1.0.1.0.1.0.0">
                                        <div class="hero__ui--block rounded-full bg-white" data-path="0.1.0.1.0.1.0.0.0">
                                            <div class="p-5" data-path="0.1.0.1.0.1.0.0.0.1">
                                                <IconImg :height="32" :width="32"></IconImg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

            </div>



            <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">



                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="flex flex-col-reverse">
                        <div class="text-base leading-7 text-gray-500">Размер файлов на бесплатном тарифе</div>
                        <div class="text-2xl leading-9 tracking-tight text-white">до 1GB</div>
                    </div>
                    <div class="flex flex-col-reverse">
                        <div class="text-base leading-7 text-gray-500">Максимальный срок хранения файлов</div>
                        <div class="text-2xl leading-9 tracking-tight text-white">365 дней</div>
                    </div>
                    <div class="flex flex-col-reverse">
                        <div class="text-base leading-7 text-gray-500">Настраивайте гибкий доступ к файлам</div>
                        <div class="text-2xl leading-9 tracking-tight text-white">Приватность</div>
                    </div>
                    <div class="flex flex-col-reverse">
                        <div class="text-base leading-7 text-gray-500">Безопасно передавайте свои файлы на сервер</div>
                        <div class="text-2xl leading-9 tracking-tight text-white">Безопасность</div>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
