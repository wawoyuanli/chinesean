<template>
	<div class="container_home">
		<header class="main-header" ref="header">
			<navc />
		</header>
		<section class="main_container pub_banner" :style="{ 'margin-top': marginTop }">
			<div class="bg_mask">
				<div class="banner_text">
					<div class="bigFont">The one-stop affiliate marketing platform for</div>
					<div class="bigFont"><span style="color:#00B7FD">Greater China</span> and <span style="color:#00B7FD">South
							East Asia.</span></div>
					<p class="banner_content">We bring affiliate marketers together from Mainland China, Hong Kong, Taiwan, South
						East Asia and
						the rest of the world. Our promotion and technical support help our vast network of affiliates
						to achieve best performance for our advertisers.</p>
					<div class="btn_box"><a href="#/publisher">I'm a Publisher <font-awesome-icon :icon="['fas', 'arrow-right']">
							</font-awesome-icon></a>
					</div>
				</div>
			</div>
		</section>
		<section class="text_content">
			<div class="text_content_container">
				<div class="text_content_left">
					<div class="line"></div>
					<div class="text_content_left_title">
						<b>What is</b>
						<b>affiliate marketing?</b>
					</div>
					<div class="line"></div>
				</div>
				<div class="text_content_right">
					<p>We partner with virtually all the top brands in Greater China and South East Asia region. They need more
						visitors to their website or app and they are willing to pay whenever a visitor make a purchase, a
						registration or even a click.</p>
				</div>
			</div>
		</section>
		<!-- swiper -->
		<section class="why_chinesean">
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
		<!-- banner text -->
		<p class="banner_text">By joining our network as a Publisher, you may partner with these brands and earn the
			commission rewards. Check
			out the numerous brands <span style="color:#007bff">here</span> . ChineseAN works with all kinds of Publishers.
		</p>
		<section class="box_card_container">
			<ul>
				<li>1</li>
				<li>1</li>
				<li>1</li>
			</ul>
			<!-- <div class="box_card_wrap">
				<el-card class="box-card">
					<img src="../../assets/images/icon_publisher_row1-1.png" alt="">
					<b>KOLS & MICRO-INFLUENCERS</b>
				</el-card>
				<el-card>
					<img src="../../assets/images/icon_publisher_row1-1.png" alt="">
					<b>APPS</b>
				</el-card>
				<el-card>
					<img src="../../assets/images/icon_publisher_row1-1.png" alt="">
					<b>REBATE OR COUPON WEBSITES</b>
				</el-card>
			</div>
			<div class="box_card_wrap">
				<el-card class="box-card">
					<img src="" alt="">
					<b>KOLS & MICRO-INFLUENCERS</b>
				</el-card>
				<el-card>
					<img src="" alt="">
					<b>APPS</b>
				</el-card>
				<el-card>
					<img src="" alt="">
					<b>REBATE OR COUPON WEBSITES</b>
				</el-card>
			</div> -->

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
		overflow: hidden;

		.bg_mask {
			// background: linear-gradient(0deg, rgba(0, 0, 0, 0.332048), rgba(0, 0, 0, 0.332048)), linear-gradient(180deg, rgba(11, 52, 100, 0.31893) 0%, rgba(11, 52, 100, 0.331578) 66.99%);
			background: rgba($color: #000000, $alpha: 0.1);
			background-blend-mode: normal, exclusion;
			z-index: 100;
			display: block;
			mix-blend-mode: normal;
			width: 100%;
			height: 100vh;

			.banner_text {
				width: 70%;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin: 0 auto;
				padding-top: 100px;

				.bigFont {
					color: #fff;
					font-size: $bigfontSize;
				}

				.banner_content {
					color: #fff;
				}

				.btn_box {
					margin-top: 100px;

					a {
						text-decoration: none;
						color: #ffffff;
						padding: 15px 20px;
						border-radius: 6px;
						border: 1px solid #fff;
					}
				}
			}
		}

	}

	.pub_banner {
		background: url('../../assets/images/images_publisher_banner.png') no-repeat left center;
		background-size: 100% auto;
		min-height: 100vh;

	}

	.text_content {
		padding: 100px;

		&_container {
			display: flex;
			align-items: center;
			width: 90%;
			margin: auto;

			.text_content_left {
				display: flex;
				flex-direction: column;

				.line {
					width: 100px;
					height: 4px;
					background: #027BFA;
				}

				.text_content_left_title {
					display: flex;
					flex-direction: column;
					font-size: 40px;
					width: 400px;

					b:last-child {
						color: #027BFA;
					}
				}
			}

			.text_content_right {
				padding: 0px 100px;
				line-height: 1.5;
				color: #1F2D3D;
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

	.banner_text {
		width: 80%;
		text-align: center;
		margin: auto;
		font-size: 24px;
		line-height: 1.5;
		padding: 100px 0px 200px 0px;
	}

	.box_card_container {
		ul {
			overflow: hidden;
			width: 90%;
			display: flex;
			justify-content: space-around;
			margin: auto;
			list-style: none;

			li {
				box-shadow: 0 0px 10px rgb(0 0 0 / 30%);
			}
		}
	}

	.box_card_wrap {
		overflow: hidden;
		width: 90%;
		display: flex;
		justify-content: space-around;
		margin: auto;

		::v-deep .el-card__body {
			width: 430px;
		}

		.box-card {
			display: flex;
			align-items: center;

			img {
				width: 200px;
			}
		}
	}
}
</style>