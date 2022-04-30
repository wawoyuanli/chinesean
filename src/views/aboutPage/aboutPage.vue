<template>
	<div class="container_about_us">
		<header class="main-header" ref="header">
			<navc />
		</header>
		<section class="main_container">
			<video src="https://www.chinesean.com/static/img/about.mp4" autoplay playsinline muted loop
				class="f_video pc_video"></video>
			<div class="bg_mask">
				<div class="big">
					<div class="bigsize">The one-stop affiliate marketing platform for</div>
					<div class="bigsize">
						<span class="blue" style="color:#00B7FD">Greater China </span>
						and
						<span class="blue" style="color:#00B7FD">South East
							Asia.
						</span>
					</div>
				</div>
				<p class="p_line">We bring affiliate marketers together from Mainland China, Hong Kong, Taiwan, South
					East Asia and the
					rest of the world. Our promotion and technical support help our vast network of affiliates to
					achieve best performance for our advertisers.</p>
			</div>
		</section>
		<!-- 地图 -->
		<section class="shadowBox mac_pc">
			<div class="container">
				<div class="our_technology">
					<div class="line"></div>
					<div class="our_technology_title">The world’s first affiliate network which covers Chinese in all parts of the
						world</div>
					<div class="line"></div>
					<p class="our_technology_content">Founded in 2007, ChineseAN is the world's first affiliate network that
						covers Chinese websites in all parts of the world. We are still the only affiliate network that can truly
						offer comprehensive coverage over the entire Greater China region. We offer effective marketing solutions to
						companies, especially those which intend to expand their business to China and South East Asia.</p>
				</div>
				<img src="../../assets/images/map.png" alt="">
			</div>
		</section>
		<!--第三部分-->
		<section class="third_man">
			<div class="container">
				<img src="../../assets/images/man.png" />
				<div class="container_right">
					<div class="line"></div>
					<div class="third_man_title">Our Journey from Hong Kong, to China and to South East Asia</div>
					<div class="line"></div>
					<p class="third_man_content">We are the pioneer of performance marketing in Hong Kong. Our reputation and high
						standard quickly helped us
						established ourselves in Mainland China and Taiwan. Our office in Guangzhou, a major trading hub of China,
						was
						established in 2010. In 2019, we established a team in Bangkok to bring our partnership to this neighbouring
						region.</p>
				</div>
			</div>
		</section>
		<!-- 第四部分 -->
		<section class="shadowBox mac_pc">
			<div class="container">
				<div class="our_technology">
					<div class="line"></div>
					<div class="our_technology_title">Our Team</div>
					<div class="line"></div>
					<p class="our_technology_content">Our team possesses outstanding track record in e-commerce and online
						marketing. Our solid expertise comes from the fact that our management team members had in-depth and
						hands-on experience in affiliate marketing either as an advertiser or a publisher. Based in three offices,
						we provide the best local support to our partners.</p>
				</div>
				<img src="../../assets/images/bg_pc.png" alt="">
			</div>
		</section>
		<!--第五部分-->
		<section class="third_man">
			<div class="container">
				<img src="../../assets/images/mac.png" />
				<div class="container_right">
					<div class="line"></div>
					<div class="third_man_title">
						Our Culture</div>
					<div class="line"></div>
					<p class="third_man_content">We operate on international standard of fairness and accountability. We foster
						trust between advertisers and publishers. We focus on using innovative technology to enhance experience and
						results for our partners. We are serving clients and partners from over 40 countries, and they include big
						brands as well as lesser-known startups. We work with all of them with professionalism and teamwork.</p>
				</div>
			</div>
		</section>
		<!-- 第六部分 -->
		<section class="shadowBox mac_pc">
			<div class="container">
				<div class="our_technology">
					<div class="line"></div>
					<div class="our_technology_title">Our Technology</div>
					<div class="line"></div>
					<p class="our_technology_content">ChineseAN is part of Ignite Vision, a marketing technology company which
						never stops pushing into new
						frontiers of marketing technology. We build advanced analytics, fraud prevention and big data applications
						inhouse. Our team is experienced with sophisticated technical integration with tech-driven partners.</p>
				</div>
				<img src="../../assets/images/mac_pc.png" alt="">
			</div>
		</section>
		<!-- 第七部分 -->
		<section class="third_man">
			<div class="container">
				<img src="https://www.chinesean.com/static/img/images_aboutus_Red-Herring-Award.png" />
				<div class="container_right">
					<div class="line"></div>
					<div class="third_man_title">
						Awards</div>
					<div class="line"></div>
					<p class="third_man_content">We are the winners of the Red Herring Award and Stevie International Business
						Award.</p>
				</div>
			</div>
		</section>
		<!-- 第八部分 -->
		<section class="shadowBox mac_pc">
			<div class="container">
				<div class="our_technology">
					<div class="line"></div>
					<div class="our_technology_title">Our Belief</div>
					<div class="line"></div>
					<p class="our_technology_content">We believe collaboration brings success to everyone. We are open to
						partnership with ad networks and individual publishers.</p>
					<button>Contact Us</button>
				</div>
				<img src="../../assets/images/mac_pc.png" alt="">
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
.container_about_us {
	font-family: $fontFamily;
	position: relative;

	.main-header {
		width: 100%;
	}

	.main_container {
		width: 100%;
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
			overflow: hidden;


			.big {
				padding-top: 15%;

				.bigsize {
					width: 100%;
					color: #fff;
					text-align: center;
					font-size: $bigfontSize;
				}
			}



			.p_line {
				width: 60%;
				color: #fff;
				font-size: $smallfontSize;
				text-align: center;
				margin: auto;
				padding-top: 30px;
			}
		}
	}

	.third_man {
		width: 100%;

		.container {
			width: 80%;
			margin: auto;
			display: flex;
			align-items: center;


			img {
				width: 480px;
				height: 518px;
			}

			.container_right {
				margin-left: 200px;

				.line {
					width: 100px;
					height: 4px;
					background-color: #027BFA;
				}

				.third_man_title {
					width: 70%;
					font-size: 40px;
					padding: 20px 0px;
				}

				.third_man_content {
					font-size: 24px;
					line-height: 1.5;
				}
			}
		}
	}

	.shadowBox {
		width: 100%;
		position: relative;
		min-height: 400px;
		background: #fffF;
		margin-top: 20px;
		margin-bottom: 20px;
		padding: 80px 0px;

		.container {
			width: 80%;
			display: flex;
			margin: auto;

			.our_technology {
				.line {
					width: 100px;
					height: 4px;
					background: #027BFA;
				}

				&_title {
					font-size: 40px;
					padding: 20px 0px;
				}

				&_content {
					color: #1F2D3D;
					font-size: 24px;
					font-family: inherit;
					line-height: 1.5
				}
			}

			img {
				width: 504px;
				height: 418px;
			}
		}

		&:before {
			content: '';
			background: linear-gradient(360deg, #EFEFEF 0%, rgba(236, 236, 236, 0.0001) 100%);
			width: 100%;
			height: 100px;
			display: block;
			mix-blend-mode: normal;
			opacity: 0.9;
			transform: rotate(-180deg);
			position: absolute;
			top: 0;
			left: 0;
		}

		&:after {
			content: '';
			width: 100%;
			display: block;
			height: 100px;
			background: linear-gradient(360deg, #EFEFEF 0%, rgba(236, 236, 236, 0.0001) 100%);
			mix-blend-mode: normal;
			opacity: 0.9;
			position: absolute;
			bottom: 0;
			left: 0;
		}
	}
}
</style>