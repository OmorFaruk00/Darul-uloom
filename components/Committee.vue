<template>
  <div class="committee">
    <div id="main">
      <div class="container">
        <h2 class="title pb-5">GOVERNING BODIES</h2>
        <div class="accordion" id="faq">        
          <div class="card" v-if="committee.Majlishe_Shura">
            <div class="card-header" id="faqhead4">
              <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4"
                aria-expanded="true" aria-controls="faq4">Mojlishe Shura  <img src="/images/icon/down.png" alt="" class=" float-right text-info" height="18px"></a>
            </div>

            <div id="faq4" class="collapse px-3" aria-labelledby="faqhead3" data-parent="#faq">
              <div class="card-body">
                <div class="row pb-3">
                  <div class="col-md-4 col-sm-12 col-xl-4 pb-5" v-for="committee in committee.Majlishe_Shura"
                    :key="committee.id">
                    <div class="our-committee">
                      <div class="pic">
                        <img :src="base_url+'/images/dum/' + committee.image" alt="image"
                          class="committee_img" />
                      </div>
                      <div class="content">
                        <h3 class="">{{ committee.member_name }} ({{ committee.member_type }})</h3>
                        <!-- <span class="post">{{committee.member_type}}</span> -->
                        <span class="profession">Profession : {{ committee.profession }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card " v-if="committee.Majlishe_Alema">
            <div class="card-header" id="faqhead5">
              <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5"
                aria-expanded="true" aria-controls="faq5">Mojlishe Alema  <img src="/images/icon/down.png" alt="" class=" float-right" height="18px"></a>
            </div>

            <div id="faq5" class="collapse px-3" aria-labelledby="faqhead5" data-parent="#faq">
              <div class="card-body">
                <div class="row pb-3">
                  <div class="col-md-4 col-sm-12 col-xl-4 pb-5 " v-for="committee in committee.Majlishe_Alema"
                    :key="committee.id">
                    <div class="our-committee">
                      <div class="pic">
                        <img :src="base_url+'/images/dum/' + committee.image" alt="image"
                          class="committee_img" />

                      </div>
                      <div class="content">
                        <h3 class="">{{ committee.member_name }} ({{ committee.member_type }})</h3>
                        <span class="profession">Profession : {{ committee.profession }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      committee: "",
      base_url: process.env.url,

    }
  },
  mounted() {
    this.getCommittee();
  },
  methods: {
    getCommittee() {
      this.$axios.$get("/committee")
        .then((res) => {
          this.committee = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },

  },
}
</script>
<style scoped>
.profession {
  font-size: 14px;
  color: #8c8c8c;
  font-weight: 700;
}

.committee_img {
  height: 300px !important;
}

.committee {
  background-color: hsl(60, 22%, 96%);
  padding: 5%;
}



#main #faq .card {
  margin-bottom: 30px;
  border: 0;
}

.card-header {
  border: 0;
  -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
  box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
  border-radius: 5px;
  padding: 0;

}

.card-header a {
  font-size: 20px;
  font-weight: 400;

}

#main #faq .card .card-header .btn-header-link {
  color: #fff;
  display: block;
  text-align: left;
  background: #fff;
  color: #222;
  padding: 15px;
}

#main #faq .card .card-header .btn-header-link:after {
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  float: right;
}

#main #faq .card .card-header .btn-header-link.collapsed {
  background: #fff;
  color: rgb(14, 5, 5);
}

#main #faq .card .card-header .btn-header-link.collapsed:after {
  content: "\f106";
}

#main #faq .card .collapsing {
  background: #fff;
  line-height: 30px;
}

#main #faq .card .collapse {
  border: 0;
}

#main #faq .card .collapse.show {
  background: #fff;
  line-height: 30px;
  color: #222;
}

.our-committee {
  box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
}



.pic {
  height: 15%;

}




.content h3 {
  font-size: 18px;
  font-weight: 900;

}

.content {
  text-align: left;
  height: 120px;

}





.our-committee:hover .pic:after {
  bottom: 0;
}

.our-committee .pic img {
  width: 100%;
  height: auto;
}

.our-committee .social {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  position: absolute;
  bottom: 45%;
  left: 0;
  opacity: 0;
  z-index: 2;
  transition: all 0.5s ease 0.3s;
}

.our-committee:hover .social {
  opacity: 1;
}

.our-committee .social li {
  display: inline-block;
}

.our-committee .social li a {
  display: block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  color: #fff;
  margin-right: 10px;
  position: relative;
  transition: all 0.3s ease 0s;
}

.our-committee .social li a:after {
  content: "";
  width: 100%;
  height: 100%;
  background: #5b51ec;
  border-radius: 0 20px 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease 0s;
}

.our-committee .social li a:hover:after {
  transform: rotate(180deg);
}

.our-committee .content {
  padding: 20px;
}

.our-committee . {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #047168;
  text-transform: uppercase;
  margin-bottom: 7px;
}

.our-committee .post {
  display: block;
  font-size: 17px;
  font-weight: 600;
  color: #707070;
  text-transform: capitalize;
}

@media only screen and (max-width: 990px) {
  .our-committee {
    margin-bottom: 30px;
  }
  .title{
    padding-top: 30px;
  }
}
</style>