<template>
  <div class="footer_c">
    <div class="container">
      <div class="left_box">
        <img src="../assets/images/foot_logo.png" alt="">
        <p>We bring affiliate marketers together from Mainland China, Hong Kong, Taiwan, South East Asia and the rest of
          the world. Our promotion and technical support help our vast network of affiliates to achieve best performance
          for our advertisers.</p>
        <div class="p_a">
          <a href="">I'm a Publisher</a>
          <a href="">I'm an Advertiser</a>
        </div>
      </div>
      <div class="middle_box">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Publisher</a></li>
          <li><a href="">Advertiser</a></li>
        </ul>
      </div>
      <div class="right_box">
        <ul>
          <li><a href="">Blog</a></li>
          <li><a href="">FAQ</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Program Directory</a></li>
        </ul>
      </div>
    </div>
    <p class="footer_copyright">Copyright © 2021 Ignite Vision</p>
    <p class="footer_privacy">Privacy Policy|Terms Of Use</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.footer_c {
  width: 100%;
  background: #0b1127;
  margin: 0 auto;
  padding: 40px 0px;

  .container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;

    .left_box {
      img {
        width: 400px;
      }

      p {
        width: 660px;
        color: #ffffff;
      }
      .p_a{
        display: flex;
        a{
          width: 200px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #ffffff;
          border: 1px solid rgb(197, 191, 191);
          border-radius: 5px;
          text-decoration: none;
          &:last-child{
            margin-left: 30px;
          }
        }
      }
    }

    .middle_box {
      ul {
        list-style: none;

        li {
          padding-bottom: 20px;

          a {
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }

    .right_box {
      ul {
        list-style: none;

        li {
          padding-bottom: 20px;

          a {
            color: #ffffff;
            text-decoration: none;
          }
        }
      }
    }
  }

  .footer_copyright {
    text-align: center;
    color: #ffffff;
    opacity: 0.5;
  }

  .footer_privacy {
    text-align: center;
    color: #ffffff;
    opacity: 0.5;
  }
}
</style>
