<template>
  <div>
    <footer class="footer-section">
      <div class="container">
        <div class="footer-cta pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-md-5 mb-30">
              <div class="single-cta">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="cta-text">
                  <h4>Find us</h4>
                  <span>Village: Moniram, PS: Sundargonj,</span><br>
                  <span>Union: Bamandanga, Gaibandha-5721</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-3 ">
              <div class="single-cta">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>+8801896267384</span>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-md-4 mb-30">
              <div class="single-cta">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <div class="cta-text">
                  <h4>Mail us</h4>
                  <span>info@darululoom-islamia.org</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content pt-5 pb-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-logo">
                  <a href="index.html"><img src="/images/logo.png" class="img-fluid" alt="logo"></a>
                </div>
                <div class="footer-text">
                  <p>DUI - Darul Uloom Islamia is not just a traditional madrasa, but a complete Islamic way of life. InshaAllah, it is our responsibility to build a better life for your child.</p>
                </div>
                <div class="footer-social-icon mb-3">
                  <span>Follow us</span>                  
                  <a href="https://www.facebook.com/IslamiaDarulUloom" target="_blank"><img src="/images/icon/fb.png"  alt="" height="30px"></a>
                  <a href="https://www.instagram.com/islamiadarululoom" target="_blank"><img src="/images/icon/ins.png"  alt="" height="30px"></a>
                  <a href="https://wa.me/8801896267384" target="_blank"><img src="/images/icon/whatsapp.png"  alt="" height="30px"></a>
                  <a href="https://x.com/DarulUloomISLA" target="_blank"><img src="/images/icon/x.png"  alt="" height="30px"></a>
                 
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <nuxt-link to="/">Home</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/about">about us</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/contact">contact</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/notice">notice</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/notice">event</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/admission">admission</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/blog">blog</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/gallery">gallery</nuxt-link>
                  </li>

                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div class="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address">
                    <button><img src="/images/icon/sub1.png"  alt="" height="30px"></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-area">
        <div class="container">
          <div class=" text-center text-lg-center">
            <div class="copyright-text">
              <p>Copyright &copy; <span v-text="currentYear"></span>, All Right Reserved <a href="#">Darul Uloom Islamia</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>
<script>
export default {
 
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },


};
</script>
<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}

.footer-section {
  background: #151515;
  opacity: 0.9;
  position: relative;
}
.footer-cta {
  border-bottom: 1px solid #373636;
}
.single-cta svg {
  color: #1F7A40;
  font-size: 30px;
  float: left;
  margin-top: 8px;
  height: 40px;
}
.cta-text {
  padding-left: 15px;
  display: inline-block;

}
.cta-text h4 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}

.cta-text span {
  color: #a29c9c;
  font-size: 15px;
}

.footer-content {
  position: relative;
  z-index: 2;
}

.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}

.footer-logo {
  margin-bottom: 5px;
}

.footer-logo img {
  max-width: 150px;
  margin-top: -40px;
}

.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}

.footer-social-icon span {
  color: #fff;
  display: block;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 20px;
}

.footer-social-icon a {
  color: #fff;
  font-size: 16px;
  margin-right: 15px;
}

.footer-social-icon i {
  height: 40px;
  width: 40px;
  text-align: center;
  line-height: 38px;
  border-radius: 50%;
}

.facebook-bg {
  background: #3B5998;
}

.twitter-bg {
  background: #55ACEE;
}

.google-bg {
  background: #DD4B39;
}

.footer-widget-heading h3 {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}

.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #1F7A40;
}

.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}

.footer-widget ul li a:hover {
  color: #1F7A40;
}

.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}

.subscribe-form {
  position: relative;
  overflow: hidden;
}

.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #fff;
}

.subscribe-form button {
  position: absolute;
  right: 0;
  background: #1F7A40;
  padding: 13px 20px;
  border: 1px solid #1F7A40;
  top: 0;
}

.subscribe-form button i {
  color: #fff;
  font-size: 22px;
  transform: rotate(-6deg);
}

.copyright-area {
  background: #202020;
  padding: 25px 0;
}

.copyright-text p {
  margin: 0;
  font-size: 14px;
  color: #878787;
}

.copyright-text p a {
  color: #1F7A40;
}

.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}

.footer-menu li:hover a {
  color: #1F7A40;
}

.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style>