<template>
  <div class="staff">
    <h2 class="title pb-5">OUR TEACHING STAFFS</h2>    
    <div class="container">
      <client-only>
        <carousel v-if="staffs" :autoplay="true" :responsive="responsive" :dots="false" :loop="true">
          <slider v-for="staff in staffs" :key="staff.id">
            <div class="our-staff">
              <div class="pic">
                <img :src="
                  'http://localhost:8000/images/emp/' + staff.profile_photo
                " alt="image" class="staff_image"/>
              </div>
              <div class="team-content">
                <h3 class="text-white pb-2">{{ staff.name }}</h3>
                <span class="post">{{
                    staff.rel_designation.designation
                }}</span>

                <ul class="social" v-if="staff.rel_social">
                  <li v-for="social in staff.rel_social" :key="social._id">
                    <a :href="social.social_url" v-if="social.social_name == 'Facebook'"><i
                        class="fab fa-facebook"></i></a>
                    <a :href="social.social_url" v-if="social.social_name == 'Twitter'"><i
                        class="fab fa-twitter"></i></a>
                    <a :href="social.social_url" v-if="social.social_name == 'Instagram'"><i
                        class="fab fa-instagram"></i></a>
                    <a :href="social.social_url" v-if="social.social_name == 'LinkedIn'"><i
                        class="fab fa-linkedin"></i></a>
                  </li>
                </ul>

              </div>
            </div>
          </slider>
        </carousel>
      </client-only>      
    </div>
  </div>
</template>
<script>
export default {
  name: "CarouselSection",
  components: {},
  data() {
    return {
      responsive: {
        0: { items: 1, nav: false },
        576: { items: 1, nav: false },
        768: { items: 1, nav: false },
        992: { items: 2, nav: false },
        1200: { items: 3, nav: true },
      },
      staffs: "",
    };
  },
  mounted() {
    this.getStaff();
  },

  methods: {
    getStaff() {
      this.$axios
        .$get("/teaching-staff")
        .then((response) => {          
          this.staffs = response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.staff {
  padding: 80px;
}

.staff p {
  font-size: 15px;
  padding-bottom: 40px;
  text-align: center;
  color: #000;
}

.pic img {
  /* height: 400px; */
}
.staff_image{
  height: 400px !important;

}

.our-staff {
  text-align: center;
  width: 95%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 0 auto;
}

.our-staff .pic {
 
  position: relative;
  /* height: 400px !important; */
}

.our-staff .pic:before,
.our-staff .pic:after {
  content: "";
  width: 100%;
  height: 100%;
  border-top: 1px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(0, 1);
  transition: all 0.4s ease-in-out 0s;
}

.our-staff .pic:after {
  border: none;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  transform: scale(1, 0);
}

.our-staff:hover .pic:before,
.our-staff:hover .pic:after {
  border-color: #8475c9;
  transform: scale(1);
}

.our-staff .pic img {
  width: 100%;
  height: auto;
}

.our-staff .team-content {
  background: #333;
  padding: 20px 0;
  color: #fff;
  position: relative;
}

.our-staff:hover .team-content {
  background: #8475c9;
}

.our-staff .team-content:before {
  content: "+";
  width: 20px;
  height: 20px;
  font-size: 17px;
  color: #fff;
  background: #333;
  position: absolute;
  top: -20px;
  right: 0;
  transition: all 0.3s ease 0s;
}

.our-staff:hover .team-content:before {
  width: 100%;
  background: #8475c9;
  color: #8475c9;
}

.our-staff .title {
  font-size: 18px;
  margin: 0 0 8px 0;
  text-transform: uppercase;
}

.our-staff .post {
  display: block;
  font-size: 14px;
  text-transform: uppercase;
}

.our-staff .social {
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
  position: absolute;
  top: -37px;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: scale(0);
  transition: all 0.3s ease 0s;
}

.our-staff:hover .social {
  transform: scale(1);
}

.our-staff .social li {
  display: inline-block;
}

.our-staff .social li a {
  display: block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  color: #a0a0a0;
  margin-right: 10px;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease 0s;
}

.our-staff .social li a:hover {
  color: #fff;
}

.our-staff .social li a:before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  transform: rotate(45deg);
  z-index: -1;
  transition: all 0.3s ease-in-out 0s;
}

.our-staff .social li:hover a:before {
  background: #333;
  color: #fff;
  transform: rotate(-45deg);
}

@media only screen and (max-width: 990px) {
  .our-staff {
    margin-bottom: 10px;
  }
  .staff{
    padding-top: 50px;
  }
 
}
@media only screen and (max-width: 520px) {
 .staff_image{
  height: 200px !important;
}
  .team-content h3{
    font-size: 18px;
  }
  .title{
    font-size: 16px;
  }


 
}
</style>
