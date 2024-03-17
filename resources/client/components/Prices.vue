<script>
    import PriceBlock from "@/components/PriceBlock.vue";

    export default {
        components: {
            PriceBlock,
        }
    }
</script>

<template>
    <section class="relative pt-24 pb-36">
        <div class="relative z-10 container px-4 mx-auto">
            <h2 class="mb-11 text-4xl md:text-4xl text-center xl:text-4xl font-heading tracking-px-n leading-none md:max-w-xl mx-auto">Тарифные планы</h2>
            <div class="max-w-7xl w-full mx-auto">
                <div class="flex flex-wrap -m-5">
                    <PriceBlock name="Бесплатный" forUse="Для личного использования" memory="1" days="365 дней" price="Бесплатно" buttonText="Присоединиться"></PriceBlock>
                    <PriceBlock name="Стандарт" forUse="Для рабочих групп" memory="5" days="2 года" price="9$ / месяц" buttonText="Выбрать тариф"></PriceBlock>
                    <PriceBlock name="Премиум" forUse="Для профессионалов" memory="10" days="5 лет" price="19$ / месяц" buttonText="Выбрать тариф"></PriceBlock>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 w-full py-64 bg-dark-500"></div>
    </section>
</template>
