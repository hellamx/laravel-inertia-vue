<script setup>
    import IconBtc from '@/assets/icons/payment__btc.svg?component'
    import IconEth from '@/assets/icons/payment__eth.svg?component'
    import IconLtc from '@/assets/icons/payment__ltc.svg?component'
    import IconUsdt from '@/assets/icons/payment__usdt.svg?component'
</script>

<template>

    <div class="payment-types">

        <div class="payment-types__wrapper">

            <div class="relative mx-auto w-full p-8 bg-white rounded-4xl">

                <h4 class="block text-3xl text-center mb-2">Оплата</h4>
                <p class="text-lg text-dark-500 text-center mb-12">Оплачивайте быстро и анонимно</p>
                    <div class="flex flex-wrap px-12 justify-between items-center">

                        <div class="px-4 mb-8 xs:mb-0 pb-9 xs:pb-0">
                            <div class="flex w-14 h-14 mb-6 items-center justify-center bg-green-100 rounded-full" >
                                <div class="mx-auto p-3 mt-24 transform hover:-translate-y-3 transition ease-out duration-1000">
                                    <div class="hero__ui--block rounded-full bg-white">
                                        <IconBtc :height="96" :width="96"></IconBtc>
                                        <span class="inline-flex py-2 px-2 mt-3 items-center justify-center rounded-md">
                                            <span class="ml-1 text-md">Bitcoin</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 mb-8 xs:mb-0 pb-9 xs:pb-0">
                            <div class="flex w-14 h-14 mb-6 items-center justify-center bg-green-100 rounded-full" >
                                <div class="mx-auto p-3 mt-24 transform hover:-translate-y-3 transition ease-out duration-1000">
                                    <div class="hero__ui--block rounded-full bg-white">
                                        <IconEth :height="96" :width="96"></IconEth>
                                        <span class="inline-flex py-2 px-2 mt-3 items-center justify-center rounded-md-50">
                                            <span class="ml-1 text-md">Ethereum</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 mb-8 xs:mb-0 pb-9 xs:pb-0">
                            <div class="flex w-14 h-14 mb-6 items-center justify-center bg-green-100 rounded-full" >
                                <div class="mx-auto p-3 mt-24 transform hover:-translate-y-3 transition ease-out duration-1000">
                                    <div class="hero__ui--block rounded-full bg-white">
                                        <IconLtc :height="96" :width="96"></IconLtc>
                                        <span class="inline-flex py-2 px-2 mt-3 items-center justify-center rounded-md">
                                            <span class="ml-1 text-md">Litecoin</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="px-4 mb-8 xs:mb-0 pb-9 xs:pb-0">
                            <div class="flex w-14 h-14 mb-6 items-center justify-center bg-green-100 rounded-full" >
                                <div class="mx-auto p-3 mt-24 transform hover:-translate-y-3 transition ease-out duration-1000">
                                    <div class="hero__ui--block rounded-full bg-white">
                                        <IconUsdt :height="96" :width="96"></IconUsdt>
                                        <span class="inline-flex py-2 px-2 mt-3 items-center justify-center rounded-md">
                                            <span class="ml-1 text-md">USDT</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

</style>
