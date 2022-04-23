<template>
    <div class="container_home">
        <header class="main-header" ref="header">
            <navc />
        </header>
        <section class="main_container" :style="{ 'margin-top': marginTop }">
            faq
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
    },
    data() {
        return {
            marginTop: 0
        }
    },
    mounted() {
        let header = this.$refs.header
        this.marginTop = header.clientHeight + 'px'
    }
}
</script>
<style lang="scss" scoped>
.container_home {
    .main-header {
        width: 100%;
        position: fixed;
        top: 0px;
        background-color: #ffffff;
    }

    .main_container {
        min-height: 600px;
        text-align: center;
        background-color: antiquewhite;
    }
}
</style>