<template>
  <div class="contact-page">
    <div class="contact">
      <h2 class="title">Contact Us</h2>     
    </div>
    <div class="container"> 
        <div class="pb-5 d-flex justify-content-center">
          <div class="contactbox blue">
            <div class="service-icon">
              <span><i class="fa fa-home"></i></span>
            </div>
            <h3 class="box-title">Our Campus</h3>
            <div class="description">
              <h6><i class="fa fa-map"></i>&nbsp; Village: Moniram, PS: Sundargonj,<br><br> Union: Bamandanga, Gaibandha-5721</h6>
              <h6> <i class="fa fa-phone"></i>&nbsp; +8801896267384</h6>
              <h6> <i class="fa fa-envelope"></i>&nbsp;info@darululoom-islamia.org</h6>
            </div>            
          </div>
        </div>           
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d350439.2743933493!2d89.06495819512853!3d25.565138016723225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x39fd29b9d895a549%3A0x742b249ab3f960d3!2z4Kam4Ka-4Kaw4KeB4KayIOCmieCmsuCnguCmriDgpofgprjgprLgpr7gpq7gpr_gpq_gprzgpr4gRGFydWwgVWxvb20gSXNsYW1pYSDYr9in2LHYp9mE2LnZhNmI2YUg2KfZhNil2LPZhNin2YXZitipLCBWaWxsYWdlOiBNb25pcmFtLCBQUzogU3VuZGFyZ29uaiBVbmlvbjosIEJhbWFuZGFuZ2EgLSBSYW5ncHVyIFJkLCA1NzIx!3m2!1d25.5665738!2d89.4472675!5e0!3m2!1sen!2sbd!4v1735451459124!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


    <section>    
    <div class="container">        
            <div class="d-flex justify-content-center p-5">
                <div class="form-container">
                    <div class="form-icon">
                        <i class="fa fa-envelope-open"></i>
                    </div>
                    <div class="form-horizontal">
                        <h3 class="form-title">Contact Us</h3>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-user"></i></span>
                            <input class="form-control" type="text" placeholder="Name" v-model="contact.name">
                            <h6 v-if="error.name" v-text="error.name[0]" class="text-danger"></h6>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-book"></i></span>
                            <input class="form-control" type="text" placeholder="Subject" v-model="contact.subject">
                            <h6 v-if="error.subject" v-text="error.subject[0]" class="text-danger"></h6>
                        </div>
                        <div class="form-group">
                            <span class="input-icon"><i class="fa fa-envelope"></i></span>
                            <input class="form-control" type="email" placeholder="Email Address" v-model="contact.email">
                            <h6 v-if="error.email" v-text="error.email[0]" class="text-danger"></h6>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" cols="120" placeholder="Message" v-model="contact.message"></textarea>
                            <h6 v-if="error.message" v-text="error.message[0]" class="text-danger"></h6>
                        </div>
                        <button class="btn signin" @click="SendMessage()">Send Message <i class="fa fa-long-arrow-alt-right"></i></button>
                    </div>
                </div>
            </div> 
                 
    </div>

      
    </section>
  </div>
</template>
<script>
export default{
  data(){
    return{
      contact:{
        name:'',
        email:'',
        subject:'',
        message:''
      },
      error:[],
    }
  },
  methods: {
    SendMessage(){
     
      this.$axios.$post("/contact",this.contact)
        .then((res) => {
          this.contact ="",
          this.error = "",
           this.$toaster.success(res.message);
          

          console.log(res);
        })
        .catch((err) => {
          this.error = err.response.data.errors;
          console.log(err);
        });
    }
  }


}
</script>
<style scoped>
.contact {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/images/slider4.jpg");
  background-size: cover;
  height: 200px !important;
  background-position: bottom;
  margin-bottom: 80px;
}
.contact h2 {
  text-align: center;
  padding-top: 60px;
  font-size: 40px;
  color: #fff;
}
.contact p {
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  color: #fff;
}
.contactbox {
  color: #00ce9e;
  font-family: "Poppins", sans-serif;
  text-align: center;
  padding: 0 25px 50px;
  position: relative;
  z-index: 1;
  width: 80%;
}
.contactbox:before,
.contactbox:after {
  content: "";
  background-color: #fff;
  border: 10px solid #00ce9e;
  border-radius: 50px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.contactbox:after {
  border-style: dotted;
  border-radius: 0;
  border-top: none;
  border-bottom: none;
  top: 35%;
  bottom: 55px;
}
.contactbox .service-icon {
  color: #fff;
  background: #00ce9e;
  font-size: 35px;
  line-height: 62px;
  height: 80px;
  width: 80px;
  margin: 0 auto 40px;
  border-radius: 50%;
  border: 10px solid #fff;
  position: relative;
}
.contactbox .service-icon:before {
  content: "";
  background-color: #00ce9e;
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  position: absolute;
  top: 50%;
  left: -20px;
  right: -20px;
  bottom: -20px;
  z-index: -1;
}
.box-title {
  font-size: 28px;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0 0 10px;
  color: #1F7A40;
  padding-bottom: 20px;
}
.description h6{
    padding-bottom: 10px;
    /* text-align: left; */
}
.contactbox .description {
  color: #777;
  font-size: 13px;
  line-height: 30px;
  margin: 0;
  text-align:center;
}
.contactbox.blue {
  color: #a8c897;
}
.contactbox.blue:before,
.contactbox.blue:after {
  border-color: #1F7A40;
}
.contactbox.blue .service-icon,
.contactbox.blue .service-icon:before {
  background-color: #1F7A40;
}

.form-container{
    font-family: 'Roboto', sans-serif;
    padding: 40px 40px 0 0;
    position: relative;
    /* width: 70%; */
}
.form-container .form-icon{
    color: #E6145E;
    background-color: #fff;
    font-size: 40px;
    text-align: center;
    line-height: 80px;
    height: 80px;
    width: 80px;
    border: 3px solid #E6145E;
    border-radius: 50% 50% 50% 0;
    box-shadow: 0 0 20px rgba(0,0,0,0.3);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
}
.form-container .form-horizontal{
    background: linear-gradient(#e7e7e7 25px,rgba(255,255,255,0.97) 25px);
    padding: 40px 20px 20px;
    box-shadow: 0 0 20px -5px rgba(0,0,0,0.3);
    border-radius: 15px;
}
.form-container .form-title{
    color: #222;
    font-size: 27px;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    margin: 0 0 20px;
}
.form-container .form-title:after{
    content: '';
    background-color: #E6145E;
    height: 3px;
    width: 110px;
    margin: 10px 0 0;
    display: block;
    clear: both;
}
.form-horizontal .form-group{
    background-color: rgba(255,255,255,0.15);
    margin: 0 0 15px;
    border-bottom: 2px solid #e7e7e7;
}
.form-horizontal .input-icon{
    color: #b5b5b5;
    font-size: 20px;
    text-align: center;
    line-height: 35px;
    height: 35px;
    width: 30px;
    margin: 0 0 0 4px;
    vertical-align: top;
    display: inline-block;
}
.form-horizontal .form-control{
    color: #222;
    background-color: transparent;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    width: calc(100% - 40px);
    height: 33px;
    padding: 3px 10px 0 0;
    box-shadow: none;
    border: none;
    border-radius: 0;
    display: inline-block;
    transition: all 0.3s;
}
.form-horizontal textarea.form-control{
    height: auto;
    width: 100%;
}
.form-horizontal .form-control:focus{
    box-shadow: none;
    border: none;
}
.form-horizontal .form-control::placeholder{
    color: #b5b5b5;
    font-size: 15px;
    font-weight: 400;
    text-transform: capitalize;
}
.form-horizontal .btn{
    color: #d1d1d1;
    background-color: #fff;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 15px 7px 20px;
    margin: 0 auto;
    border: 2px solid #e7e7e7;
    border-radius: 20px;
    display: block;
    transition: all 0.3s ease 0s;
}
.form-horizontal .btn:hover,
.form-horizontal .btn:focus{
    color: #E6145E;
    background-color: #fff;
    border: 2px solid #E6145E;
}
.form-horizontal .btn i{ transition: all 0.3s ease 0s; }
.form-horizontal .btn:hover i{
    color: #E6145E;
    transform: translateX(3px);
}

@media only screen and (max-width: 990px) {
  .contactbox {
    margin: 0 0 30px;
  }
}



@media screen and (max-width: 479px) {
  
  
}
</style>
