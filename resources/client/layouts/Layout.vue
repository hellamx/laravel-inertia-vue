<script>
    import Header from "../components/Header.vue";
    import Hero from "../components/Hero.vue";
    import Upload from "../components/Upload.vue";
    import Prices from "../components/Prices.vue";
    import PaymentTypes from "../components/PaymentTypes.vue";
    import Footer from "../components/Footer.vue";
    import Login from "../components/Login.vue";
    import TheMenu from "../components/TheMenu.vue";

    export default {
        components: {
            Header,
            Hero,
            Upload,
            Prices,
            PaymentTypes,
            Footer,
            Login,
            TheMenu,
        }
    }
</script>


<template>

    <Header></Header>
<!--
    <TheMenu></TheMenu>-->

    <Hero></Hero>

    <Upload></Upload>

    <Prices></Prices>

    <PaymentTypes></PaymentTypes>

    <Footer></Footer>

<!--    <Login></Login>-->

    <slot></slot>
</template>
