<template>
    <div class="container_faq">
        <header class="main-header" ref="header">
            <navc />
        </header>
        <section class="main_container" :style="{ 'margin-top': marginTop }">
            <div class="faq_image_bg">FAQ</div>
            <div class="faq_box">
                <div class="left">
                    <p>Advertiser</p>
                    <p>Publisher</p>
                    <div>
                        <p>Publisher Sign-up</p>
                        <p>Join Programs</p>
                        <p>Report & Commission</p>
                    </div>
                </div>
                <div class="right">
                    <p>Publisher</p>
                    <p>Publisher Sign-up</p>
                    <div class="el_collapse">
                        <el-collapse v-model="activeName" accordion @change="change">
                            <el-collapse-item v-for="(item, index) in signup" :key="index" :title="item.title" >
                                <div>{{ item.content }}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <p>Join Programs</p>
                    <div class="el_collapse">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item v-for="(item, index) in joinPrograms" :key="index" :title="item.title">
                                <div>{{ item.content }}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                    <p>Report & Commission</p>
                    <div class="el_collapse">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item v-for="(item, index) in reportCommission" :key="index"
                                :title="item.title">
                                <div>{{ item.content }}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
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
import { signup, joinPrograms, reportCommission } from '../../utils/faq.js'

export default {
    name: 'home-page',
    components: {
        navc,
        footerC
    },
    data() {
        return {
            marginTop: 0,
            activeName: '1',
            activeNames: ['1'],
            signup,
            joinPrograms,
            reportCommission,
            color:'#212529'
        }
    },
    mounted() {
        let header = this.$refs.header
        this.marginTop = header.clientHeight + 'px'
    },
    methods:{
        change(e){
            this.color='red'
            debugger
        }
    }
}
</script>
<style lang="scss" scoped>
.container_faq {
    .main-header {
        width: 100%;
        position: fixed;
        top: 0px;
        background-color: #ffffff;
    }

    .main_container {
        min-height: 600px;
        text-align: center;


        .faq_image_bg {
            background-image: url('../../assets/images/faq_banner.png');
            background-size: 100% 100%;
            min-height: 160px;
            background-repeat: no-repeat;
            line-height: 160px;
            color: #212529;
            font-size: 30px;
        }

        .faq_box {
            overflow: hidden;
            width: 100%;
            padding: 50px 0px;

            .left {
                float: left;
                width: 40%;
            }

            .right {
                margin-left: 40%;
                width: 100%;
                text-align: left;

                .el_collapse {
                    width: 900px;

                    ::v-deep .el-collapse-item__header {
                        // color: #007bff;
                        font-size: 20px;
                    }

                    ::v-deep.el-collapse-item__content {
                        font-size: 18px;
                    }
                }
            }
        }
    }
}
</style>