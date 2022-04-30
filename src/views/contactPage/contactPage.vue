<template>
	<div class="container_contact_us">
		<header class="main-header" ref="header">
			<navc />
		</header>
		<section class="main_container" :style="{ 'margin-top': marginTop }">
			<div class="bg_mask">Contact Us</div>
			<p class="one_stop">The one-stop affiliate marketing platform for Greater China and South East Asia.</p>
			<div class="content_wrapper">
				<div class="box1">
					<span>I'm a Publisher</span>
					<div class="box1_line">I'm ready to expand my brand's reach through affiliate relationships.</div>
					<b><a href="#/login" class="a_link">Sign Up <font-awesome-icon :icon="['fas', 'arrow-right']">
							</font-awesome-icon></a></b>
				</div>
				<div class="box2">
					<span>I'm an Advertiser</span>
					<div class="box2_line">I'm ready to expand my brand's reach through affiliate relationships.</div>
					<b><a href="#/contact_us" class="a_link">Contact Us <font-awesome-icon :icon="['fas', 'arrow-right']">
							</font-awesome-icon></a></b>
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
.container_contact_us {
	.main-header {
		width: 100%;
		position: fixed;
		top: 0px;
		background-color: #ffffff;
	}

	.main_container {
		min-height: 600px;
		text-align: center;

		.bg_mask {
			background: url(../../assets/images/faq_banner.png) no-repeat center center;
			background-size: 100% auto;
			min-height: 160px;
			line-height: 160px;
			color: #212529;
			font-size: 30px;
		}

		.one_stop {
			padding: 50px 0px 40px 0px;
			text-align: center;
			font-size: 22px;
		}

		.content_wrapper {
			display: flex;
			border: 1px solid #dee2e6;
			width: 80%;
			justify-content: center;
			margin: auto;

			.box1 {
				flex: 1;
				text-align: left;
				border-right: 1px solid #dee2e6;
				padding: 20px 20px;

				&_line {
					padding-bottom: 20px;
				}

				b {
					.a_link {
						text-decoration: none;
						color: #007bff;
					}
				}
			}

			.box2 {
				flex: 1;
				text-align: left;
				padding: 20px 20px;

				&_line {
					padding-bottom: 20px;
				}

				b {
					.a_link {
						text-decoration: none;
						color: #007bff;
					}
				}
			}
		}
	}
}
</style>