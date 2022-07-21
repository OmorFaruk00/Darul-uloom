<template>
  <section class="">
    <div class="">      
      <client-only>
        <carousel v-if="sliders" :autoplay="true" :responsive="responsive" :dots="false" :loop="true">         
          <slide v-for="slider in sliders" :key="slider.id">
            <img :src="base_url + '/images/dum/'+slider.image" alt="image"  class="slider-image" />            
            <div class="carousel-caption">
              <div class="container">
                <div class="content-block">                  
                    <h2>{{slider.title}}</h2>                    
                    <p>{{slider.description}}</p>                  
                  <a href="#" class="btn-apply">APPLY NOW</a>
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
  

  mounted() {
    this.getSlider();
  },
  data() {
    return {
      sliders: '',
      base_url: process.env.url,
      responsive: {
        0: { items: 1, nav: false },
        576: { items: 1, nav: false },
        768: { items: 1, nav: false },
        992: { items: 1, nav: false },
        1200: { items: 1, nav: false },
      },


    };
  },
  methods: {
    getSlider() {
      this.$axios.$get("/slider")
        .then((res) => {          
          this.sliders = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.slider-image{
  width: 100vw;
  height: 700px;

}
.btn-apply:hover{
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.15), 5px 5px rgba(0, 0, 0, 0.1);
    outline: none;
    color: #fff;
}
.btn-apply{
    color: #fff;
    background: #00a9ef;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 12px 25px;
    border-radius: 10px;
    transition: all 0.3s ease 0s;
    border: none;
}
.content-block h2 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #fff;
}
.content-block p {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 50px;
   color: #fff;
} 

@media only screen and (max-width: 767px) {
  .content-block h2{
    font-size: 1.2rem
    
  }
  .content-block p{
    font-size: 0.8rem;
  }
  .slider-image{
  width: 100vw;
  height: 400px;

}
  
  
     
 }
</style>
