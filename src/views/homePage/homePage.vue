<template>
    <div class="container_home">
        <header class="main-header">
            <navc />
        </header>
        <section class="main_container">

        </section>
        <footer>
            <footerC/>
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
.container_home {
    .main-header {
        width: 100%;
    }
    .main_container{
        min-height: 600px;
    }
}
</style>