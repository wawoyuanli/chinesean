<template>
    <div class="container">
        <nav class="navbar">
            <img src="../assets/images/menu.png" alt="" class="menu_img" @click="clickMenu(showMenu)">
            <ul class="dropdown-menu" v-show="showMenu">
                <li>Home</li>
                <li>About Us</li>
                <li>Publisher</li>
                <li>Advertiser</li>
                <li>Blog</li>
                <li>FAQ</li>
                <li>Contact Us</li>
            </ul>
            <div class="navbar-header">
                <a href="#">
                    <img src="../assets/images/logo.png" alt="" class="brand-image">
                </a>
            </div>
            <div class="navbar-custom-menu">
                <ul>
                    <li class="menu mobileHome">
                        <a href="#">Home</a>
                    </li>
                    <li class="menu">
                        <a href="#/about_us">About Us</a>
                    </li>
                    <li class="menu">
                        <a href="#/publisher">Publisher</a>
                    </li>
                    <li class="menu">
                        <a href="#/advertiser">Advertiser</a>
                    </li>
                    <li class="menu">
                        <a href="">Blog</a>
                    </li>
                    <li class="menu">
                        <a href="">FAQ</a>
                    </li>
                    <li class="menu">
                        <a href="">Contact Us</a>
                    </li>
                    <li class="language">
                        <img :src="flagicon" alt="" style="width:24px">
                        <el-select v-model="value" placeholder="请选择" @change="changeHandle">
                            <el-option v-for="item in options" :key="item.value" :value="item.value">
                                <div class="select-options">
                                    <span>
                                        <img :src="item.icon" alt="" style="width:16px">
                                    </span>
                                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                                </div>
                            </el-option>
                        </el-select>
                    </li>
                    <li class="login_box">
                        <a href="">Login</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
// import {changeState} from './resize.js'
export default {
    name: 'nav-c',
    data() {
        return {
            value: 'English',
            options: [{
                value: 'English',
                label: 'English',
                icon: require('../assets/images/america.png')
            },
            {
                value: '简体',
                label: '简体',
                icon: require('../assets/images/china.png')
            }],
            flagicon: require('../assets/images/america.png'),
            showMenu: false,
            clientWidth: 0
        }
    },
    mounted() {
        let _th = this
        window.onresize = function () {
            _th.clientWidth = document.body.clientWidth
        }
    },
    watch: {
        clientWidth(newValue, oldValue) {
            if (this.showMenu) {
                if (newValue > 500) {
                    this.showMenu = false
                }
            }


        }
    },
    methods: {
        changeHandle(e) {
            if (e === 'English') {
                this.flagicon = require('../assets/images/america.png')
            } else if (e === '简体') {
                this.flagicon = require('../assets/images/china.png')
            }
        },
        clickMenu(showMenu) {
            console.log('点击菜单')
            this.showMenu = !showMenu
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/navbar.scss";

.container {
    margin: 0 auto;
    display: flex;
    justify-content: center;

    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 45px 0px;

        .menu_img {
            display: none;
            width: 40px;
            margin-left: 20px;
        }

        .dropdown-menu {
            position: absolute;
            width: 75%;
            height: 500px;
            top: 100px;
            left: 0px;
            list-style: none;
            box-shadow: 0px 0px 5px #e7e7e7;

            li {
                padding: 20px 0px;
                border-bottom: 1px solid #e7e7e7;
            }
        }

        .navbar-header {
            width: 324px;
            height: 62px;
            display: flex;
            align-items: center;

            .brand-image {
                width: 324px;
                height: 45.2px;
                display: block;
            }
        }

        .navbar-custom-menu {
            ul {
                list-style: none;
                display: flex;

                .menu {
                    display: block;
                    padding: 0px 20px;
                    white-space: nowrap;





                    a {
                        font-size: 18px;
                        text-decoration: none;
                        color: #000;
                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

                        &:hover {
                            color: #337ab7 !important;
                        }
                    }

                    &:hover {
                        border-bottom: 4px solid #52b4f7;
                    }
                }

                .language {
                    ::v-deep .el-input__inner {
                        color: #000 !important;
                        width: 120px;
                        font-size: 18px;
                        border: none;
                        text-align: center;
                    }

                    &:hover {
                        color: #fff !important;
                    }

                    .select-options {
                        display: flex;
                        align-items: center;
                        justify-content: space-between
                    }
                }

                .login_box {
                    width: 100px;
                    height: 32px;
                    border: 1px solid #DCDFE6;
                    padding: 2px 0px;
                    text-align: center;
                    border-radius: 5px;

                    a {
                        font-size: 18px;
                        text-decoration: none;
                        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

                        &:hover {
                            color: #ffffff;
                        }
                    }

                    &:hover {
                        color: #ffffff !important;
                        background: rgb(0, 106, 255);

                    }
                }
            }
        }

    }
}
</style>