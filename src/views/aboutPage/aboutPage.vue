<template>
    <div class="container_about_us">
        <header class="main-header">
            <navc />
        </header>
        <section class="main_container">
            <video src="https://www.chinesean.com/static/img/about.mp4" autoplay playsinline muted loop
                class="f_video pc_video"></video>
            <div class="bg_mask">
                <div class="bigsize">The one-stop affiliate marketing platform for</div>
                <div class="bigsize">Greater China and South East Asia.</div>
                <p class="p_line">We bring affiliate marketers together from Mainland China, Hong Kong, Taiwan, South East Asia and the
                    rest of the world. Our promotion and technical support help our vast network of affiliates to
                    achieve best performance for our advertisers.</p>

            </div>
        </section>
        <footer>
            <footerC />
        </footer>
    </div>
</template>
<script>
import navc from '../../components/navC.vue'
import footerC from '../../components/footerC.vue'

export default {
    name: 'home-page',
    components: {
        navc,
        footerC
    }
}
</script>
<style lang="scss" scoped>
.container_about_us {
    .main-header {
        width: 100%;
    }

    .main_container {
        width: 100%;
        min-height: 100vh;
        position: relative;
        min-height: 100vh;
        overflow: hidden;


        .f_video {
            position: absolute;
            left: 0;
            min-width: 100%;
            min-height: 100vh;
            transition: 1s opacity;
        }

        .bg_mask {
            position: absolute;
            min-height: 100vh;
            width: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.332048), rgba(0, 0, 0, 0.332048)), linear-gradient(180deg, rgba(11, 52, 100, 0.31893) 0%, rgba(11, 52, 100, 0.331578) 66.99%);
            z-index: 100;
            .bigsize{
                width: 100%;
                color: #fff;
                text-align: center;
                font-size: $bigfontSize;
            }
            .p_line{
                width: 80%;
                color: #fff;
                font-size: $smallfontSize;
                text-align: center;
                margin: auto;
            }
        }
    }
}
</style>