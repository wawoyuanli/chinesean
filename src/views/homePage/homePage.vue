<template>
    <div class="container_home">

        <header class="main_header" ref="header">
            <navc />
        </header>
        <section class="main_container" :style="{ 'margin-top': marginTop }">
            <video src="https://www.chinesean.com/static/img/home.mp4" autoplay playsinline muted loop
                class="f_video pc_video"></video>
            <!-- <video src="https://www.chinesean.com/static/img/home.mp4" autoplay playsinline muted loop
                class="f_video phone_video"></video> -->
            <div class="bg_mask">
                <div class="mask_content">
                    <div class="text_skyblue">
                        <div class="line1">The one-stop affiliate marketing platform for</div>
                    </div>
                    <div class="text_skyblue">
                        <div class="p1">Greater China</div>
                        <div class="and">and</div>
                        <div class="p2">South East Asia.</div>
                    </div>
                    <p class="p3">We bring affiliate marketers together from Mainland China, Hong Kong, Taiwan, South
                        East
                        Asia and the
                        rest of the world. Our promotion and technical support help our vast network of affiliates to
                        achieve best performance for our advertisers.</p>
                    <div class="btn_box">
                        <a class="btn_box_content" href="#/publisher">
                            <p>I'm a Publisher</p>
                            <i class="el-icon-right" style="font-weight:bold"></i>
                        </a>
                        <a class="btn_box_content" href="#/advertiser">
                            <p>I'm a Advertiser</p>
                            <i class="el-icon-right" style="font-weight:bold"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div style="clear:both"></div>
        </section>
        <section class="silder_banner">
            <div class="carousel_box_text">
                <p> Established in 2007 as the first and only affiliate network that covers the entire Greater China and
                    South East Asia region, Chinese worldwide, ChineseAN now brings advertisers and publishers together
                    from
                    Mainland China, Hong Kong, Taiwan, South East Asia and other countries.</p>
            </div>
            <div class="carousel_img">
                <img src="../../assets/images/a1.png" alt="">
                <img src="../../assets/images/a2.png" alt="">
                <img src="../../assets/images/a3.png" alt="">
            </div>
        </section>
        <section class="why_chinesean">
            <div class="content">
                <p></p>
                <div class="why_chinesean_wrapper">
                    <div>Why</div>
                    <div>ChineseAN</div>
                </div>
                <p></p>
            </div>
            <div class="four_text_img_box">
                <div class="img_text_box">
                    <img src="../../assets/images/icon_home_1.png" alt="">
                    <p class="title">Greater China and South East Asia</p>
                    <p class="content">Strong coverage of Greater China and South East Asia. Local support from 3
                        offices in Asia.</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_home_2.png" alt="">
                    <p class="title line_height">Technology</p>
                    <p class="content">Inhouse R&D offering the most advanced tracking platform and highest flexibility
                        in integration with partners</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_home_3.png" alt="">
                    <p class="title line_height">Services</p>
                    <p class="content">Close partnership with advertisers and publishers offering premium exposure,
                        exclusive promotion and data support</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_home_row2-4.png" alt="">
                    <p class="title line_height">Wechat Network</p>
                    <p class="content">The world’s first network that supports partnership between Wechat Stores and
                        mini-program merchants with mini-programs, Wechat official accounts and third-party publishers.
                    </p>
                </div>
            </div>
        </section>
        <section class="adv_main">
            <div class="publisher_advertiser">
                <div class="publisher">
                    <p class="_title_publisher">Publisher</p>
                    <p class="_content">We help publishers monetize by connecting them to top brands in various sectors.
                        Our intelligent
                        platform and our experienced team of affiliate managers work with publishers to optimize their
                        earnings. We provide publishers with valuable data, exclusive offers and professional advise.
                    </p>
                    <el-card class="box-card box_shadow_wrap">
                        <img src="../../assets/images/flyday.png" alt="">
                        <p class="flydayhk">Flyday.hk</p>
                        <p> Flyday is a popular travel blog which offers destination ideas and trip planning tips to
                            leisure
                            travelers. ChineseAN supports it with latest updates of travel product offerings and
                            promotions.
                            We provide a convenient way for it to monetize its audience traffic of its website and its
                            facebook page.</p>
                    </el-card>
                </div>
                <div class="advertiser">
                    <p class="_title_advertiser">Advertiser</p>
                    <p class="_content">We help publishers monetize by connecting them to top brands in various sectors.
                        Our intelligent
                        platform and our experienced team of affiliate managers work with publishers to optimize their
                        earnings. We provide publishers with valuable data, exclusive offers and professional advise.
                    </p>
                    <el-card class="box_shadow_wrap box-card">
                        <img src="../../assets/images/iHerb.png" alt="">
                        <p class="iHerb">iHerb</p>
                        <p>iHerb is a successful international online merchant of branded healthcare products. We
                            partner with them to expand to the Greater China region through various blogs and shopping
                            information channels to make overseas online shopping of healthcare products part of life.
                            Thousands of orders are generated on monthly basis.</p>
                    </el-card>
                </div>
            </div>

        </section>
        <section class="why_chinesean">
            <div class="content">
                <p></p>
                <div class="why_chinesean_wrapper">
                    <div>Our technology </div>
                    <div>makes a difference</div>
                </div>
                <p></p>
            </div>
            <div class="four_text_img_box">
                <div class="img_text_box">
                    <img src="../../assets/images/icon_1.png" alt="">
                    <p class="title">API</p>
                    <p class="content">Our inhouse platform offers the most flexible API integration with any platform
                        in the world</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_2.png" alt="">
                    <p class="title line_height">Analytics</p>
                    <p class="content">We provide comprehensive analytics for optimization of performance</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_3.png" alt="">
                    <p class="title line_height">AI</p>
                    <p class="content">Our big data and AI platform offer automated recommendation, intelligent ad
                        serving and fraud detection</p>
                </div>
            </div>
            <div class="four_text_img_box">
                <div class="img_text_box">
                    <img src="../../assets/images/icon_4.png" alt="">
                    <p class="title">Loyalty Solution</p>
                    <p class="content">
                        We offer a full suite of points earning and redemption solutions to loyalty programs</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_5.png" alt="">
                    <p class="title line_height">Cross-device</p>
                    <p class="content">We support cross-device and cookieless options for tracking transactions across
                        devices</p>
                </div>
                <div class="img_text_box">
                    <img src="../../assets/images/icon_6.png" alt="">
                    <p class="title line_height">Innovation</p>
                    <p class="content">Together with our partners, our R&D team continuously come up with new solutions
                        to bring results</p>
                </div>
            </div>
        </section>
        <section class="why_chinesean">
            <div class="content">
                <p></p>
                <div class="why_chinesean_wrapper">
                    <div>Our </div>
                    <div>Partners</div>
                </div>
                <p></p>
            </div>
            <el-carousel :interval="5000" arrow="always" class="swiper_wrap">
                <el-carousel-item v-for="(item, index) in 2" :key="index">
                    <div class="swiper" v-if="index === 0">
                        <img src="../../assets/images/JD_com.png" alt="">
                        <img src="../../assets/images/Klook.png" alt="">
                        <img src="../../assets/images/Nike.png" alt="">
                        <img src="../../assets/images/Tripcom.png" alt="">
                        <img src="../../assets/images/ebay.png" alt="">
                        <img src="../../assets/images/Nike.png" alt="">
                    </div>
                    <div class="swiper" v-if="index === 1">
                        <img src="../../assets/images/agoda.png" alt="">
                        <img src="../../assets/images/Branding_lenovo-logo_lenovologoposred_low_res.png" alt="">
                        <img src="../../assets/images/Charles & Keith.png" alt="">
                        <img src="../../assets/images/Taobao.png" alt="">
                        <img src="../../assets/images/Zalora.png" alt="">
                        <img src="../../assets/images/Estee Lauder.png" alt="">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </section>
        <section class="affiliate_marketing">
            <div class="content">
                <p></p>
                <div class="why_chinesean_wrapper">
                    <div>What is affiliate marketing? </div>
                </div>
                <p></p>
            </div>
            <div class="affiliate_content">Affiliate marketing is a major model of performance marketing in which the
                advertiser pays publishers and
                affiliate networks the advertising fee based on actual outcome of the marketing campaigns. This fee is
                usually in the form of revenue share or a fixed fee per registration. To advertisers, affiliate
                marketing is a low-risk and potentially high-return approach to grow sales and expand into new markets.
                To publishers, both for leisure or business, affiliate marketing is a reliable means to monetize
                audience traffic to get a stable income.</div>
            <el-card class="elcard box-card">
                <div class="whiteBox">
                    <div class="box1">
                        <div class="tap">Tap into our list of partner advertisers</div>
                        <div class="publisher_btn"><a href="#/publisher" class="a_link">I'm a Publisher
                                <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></a></div>
                    </div>
                    <div class="box2">
                        <div class="want">Want to grow your business in Greater China or South East Asia</div>
                        <div class="advertiser_btn"><a href="#/advertiser" class="a_link">I'm a Advertiser
                                <font-awesome-icon :icon="['fas', 'arrow-right']"></font-awesome-icon></a></div>
                    </div>
                </div>
            </el-card>
            <div class="whitebottom">
            </div>
        </section>
        <section class="bgwhite">
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
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-color: #ffffff;

    .main_header {
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 999;
        background-color: #ffffff;
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
            // overflow: hidden;
            transition: 1s opacity;
        }

        .bg_mask {

            position: absolute;
            min-height: 100vh;
            width: 100%;
            background: linear-gradient(0deg, rgba(0, 0, 0, 0.332048), rgba(0, 0, 0, 0.332048)), linear-gradient(180deg, rgba(11, 52, 100, 0.31893) 0%, rgba(11, 52, 100, 0.331578) 66.99%);
            z-index: 100;

            .mask_content {
                padding-top: 160px;

                .text_skyblue {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    font-size: 60px;

                    .line1 {
                        color: #ffffff;
                    }

                    .p1 {
                        color: #00B7FD;
                    }

                    .and {
                        color: #ffffff;
                        padding: 0px 20px;
                    }

                    .p2 {
                        color: #00B7FD;
                    }
                }

                .p3 {
                    width: 67%;
                    text-align: center;
                    margin: 0 auto;
                    color: #ffffff;
                    font-family: "Roboto", "Source Sans Pro", 'Helvetica Neue', 'Microsoft YaHei', '黑体-简', 'b8bf53', "Helvetica Neue", Helvetica, Arial, sans-serif;
                    ;
                    font-size: 24px;
                    line-height: 1.8
                }

                .btn_box {
                    display: flex;
                    justify-content: center;
                    margin: 0 auto;

                    .btn_box_content {
                        text-decoration: none;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 200px;
                        height: 40px;
                        border: 2px solid #ffffff;
                        border-radius: 4px;
                        color: #ffffff;
                        margin: 100px 20px 0px 20px;
                    }
                }

            }
        }
    }

    .silder_banner {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 120px 0px;

        .carousel_box_text {
            width: 40%;
            text-align: left;
            display: block;
        }

        .carousel_img {
            display: flex;
            align-items: center;

            img {
                width: 30%;
                margin-left: 4px;
            }
        }
    }

    .why_chinesean {
        padding: 80px 0px;

        .content {
            padding-bottom: 60px;

            p {
                width: 80px;
                height: 4px;
                background: #007bff;
                display: block;
                margin: 0 auto;
            }

            .why_chinesean_wrapper {
                display: flex;
                justify-content: center;
                padding: 10px 0px;
                font-size: 30px;

                div:last-child {
                    color: #007bff;
                    margin-left: 10px;
                }
            }
        }

        .four_text_img_box {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
            margin: 0 auto;

            .img_text_box {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0px 10px;

                img {
                    width: 90px;
                    height: 90px;
                }

                .title {
                    font-size: 24px;
                    height: 65px;
                    font-weight: bold;
                    text-align: center;

                }

                .line_height {
                    line-height: 65px;
                }

                .content {
                    text-align: center;
                    color: #525252;
                }
            }
        }

        .swiper_wrap {
            width: 80%;
            margin: 0 auto;

            ::v-deep .el-carousel__container {
                height: 94px;
            }

            .swiper {
                display: flex;
                justify-content: space-around;
                align-items: center;

                img {
                    width: 189px;
                    height: 94px;
                }
            }
        }
    }

    .adv_main {
        width: 100%;
        min-height: 500px;
        background-image: url('../../assets/images/images_home_publisher.png'), url(../../assets/images/images_home_advertiser.png);
        background-repeat: no-repeat, no-repeat;
        background-position: left 0, right 0;
        background-size: 50.1% auto, 50.1% auto;
        margin-bottom: 300px;

        .publisher_advertiser {
            width: 70%;
            display: flex;
            justify-content: space-around;
            margin: 0 auto;

            .publisher {
                ._title_publisher {
                    font-size: 40px;
                    color: #ffffff;
                }

                ._content {
                    color: #ffffff;
                }

                .box_shadow_wrap {
                    width: 500px;
                    position: absolute;

                    img {
                        width: 228px;
                        height: 85px;
                        display: block;
                        margin: 0 auto;
                    }

                    .flydayhk {
                        text-align: center;
                        color: #333;
                        font-size: 24px;
                    }
                }

            }

            .advertiser {
                margin-left: 100px;

                ._title_advertiser {
                    font-size: 40px;
                    color: #ffffff;
                }

                ._content {
                    color: #ffffff;
                }

                .box_shadow_wrap {
                    width: 500px;
                    position: absolute;

                    img {
                        width: 131px;
                        height: 85px;
                        display: block;
                        margin: 0 auto;
                    }

                    .iHerb {
                        font-size: 24px;
                        color: #333;
                        text-align: center;
                    }
                }

            }
        }
    }

    .affiliate_marketing {
        width: 100%;
        background: #386dbc;
        overflow: hidden;

        .content {
            padding: 60px 0px 20px 0px;

            p {
                width: 80px;
                height: 4px;
                background: #fff;
                display: block;
                margin: 0 auto;
            }

            .why_chinesean_wrapper {
                display: flex;
                justify-content: center;
                padding: 10px 0px;
                font-size: 30px;

                div:last-child {
                    color: #ffffff;
                    margin-left: 10px;
                }
            }
        }

        .affiliate_content {
            width: 60%;
            color: #fff;
            text-align: center;
            margin: 0 auto;
            padding-bottom: 30px;

        }

        .elcard {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            width: 60%;

            .whiteBox {
                display: flex;
                width: 100%;
                margin: 0 auto;

                .box1 {
                    width: 50%;
                    border-right: 1px solid gray;
                    margin: auto;

                    .tap {
                        width: 80%;
                        text-align: center;
                        margin: 0 auto;
                        font-size: 30px;
                        min-height: 150px;
                        padding: 20px 0px;
                    }

                    .publisher_btn {
                        width: 200px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border-radius: 10px;
                        border: 2px solid #027BFA;
                        margin: auto;

                        .a_link {
                            text-decoration: none;
                            color: #027BFA;
                        }
                    }
                }

                .box2 {
                    flex: 1;
                    text-align: center;
                    margin: auto;

                    .want {
                        width: 80%;
                        text-align: center;
                        margin: 0 auto;
                        font-size: 30px;
                        min-height: 150px;
                        padding: 20px 0px;
                    }

                    .advertiser_btn {
                        width: 200px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        border-radius: 10px;
                        border: 2px solid #027BFA;
                        margin: auto;

                        .a_link {
                            text-decoration: none;
                            color: #027BFA;
                        }

                    }
                }
            }
        }

        .whitebottom {
            width: 100%;
            height: 100px;
        }
    }

    .bgwhite {
        width: 100%;
        min-height: 260px;
    }
}
</style>