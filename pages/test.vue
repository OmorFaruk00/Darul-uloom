<template>
  <section class="facilitie">
    <div class="container">
      <h2 class="title pb-5">OUR FACILITIES</h2>
      <client-only>
        <carousel v-if="facilities" 
          :autoplay="true"
          :responsive="responsive"
          :dots="false"
          :loop="true"
        >
          <!-- <carousel> -->
          <slide v-for="facilitie in facilities" :key="facilitie.id">
            <div class="py-5" >
                <div class="content">
              <div class="content-body">
                <h2>{{facilitie.title}}</h2>
                <p>
                  {{facilitie.description}}                  
                </p>
              </div>
            </div>
            </div>
          </slide>         
        </carousel>
        <div v-else>

        </div>
        </client-only>
      
    </div>
  </section>
</template>
<script>

export default {
 
 mounted(){
    this.getFacilitie();
  },
  data() {
    return {
        facilities:'',
      responsive: {
        0: { items: 1, nav: false },
        576: { items: 1, nav: false },
        768: { items: 1, nav: false },
        992: { items: 2, nav: false },
        1200: { items: 2, nav: true },
      },
      

    };
  },
  methods: {
     getFacilitie() {
      this.$axios.$get("/facililies")
        .then((res) => {
          console.log('res');
          this.facilities = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.facilitie {
  padding: 80px;
  background: #f5f5f5;
  /* background-image:url("/images/bg3.png"); */
  /* background-position: center; */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  
}

.content {
  width: 95%;  
  transform: scale(1);
  transition: all 1s ease-in-out 0s;
  border-radius: 10px;
  background: #fff;
  padding: 20px 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

}
.content:hover {
  transform: scale(1.05);
}
.content-body h2 {
  font-size: 20px;
  text-align: left;
  font-weight: 700;
  color: rgb(35, 34, 34);
  padding-bottom: 10px;
}
.owl-theme .owl-nav {
  font-size: 50px !important;
}
 @media only screen and (max-width: 767px) {
   .card {
  width: 100%;

}

    
 }
</style>
