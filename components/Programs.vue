<template>
  <section class="program p-5">
    <div class="container">
      <h2 class="title pb-3">OUR PROGRAMS</h2>
      <client-only>
        <carousel v-if="programs" :autoplay="true" :responsive="responsive" :dots="false" :loop="true">
          <slide v-for="program in programs" :key="program.id">
            <div class="card">
              <img :src="'http://localhost:8000/images/dum/' + program.image" alt="image" class="image" />
              <div class="card-body">
                <h2 class="card-title">{{ program.name }}</h2>
                <div class="d-flex justify-content-center">
                  <nuxt-link to="/#" class=" btn-apply">APPLY NOW</nuxt-link>
                </div>
              </div>
            </div>
          </slide>
        </carousel>
      </client-only>
    </div>
  </section>
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
        768: { items: 2, nav: false },
        992: { items: 2, nav: false },
        1200: { items: 3, nav: true },
      },
      programs: "",
    };
  },
  mounted() {
    this.getProgram();
  },

  methods: {
    getProgram() {
      this.$axios.$get("/program")
        .then((res) => {
          console.log('res');
          this.programs = res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

};
</script>
<style scoped>
.btn-apply:hover {
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  box-shadow: 3px 3px rgba(0, 0, 0, 0.15), 5px 5px rgba(0, 0, 0, 0.1);
  outline: none;
  color: #fff;
}

.btn-apply {
  color: #fff;
  background: #00a9ef;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 25px;
  border-radius: 10px;
  transition: all 0.3s ease 0s;
  border: none;
}


.program {
  /* background-color: hsl(60, 22%, 96%); */
  background: #f2f2f2;
}

.card {
  width: 95%;
  transform: scale(1);
  transition: all 1s ease-in-out 0s;
  margin: 20px auto;  
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px; */
}

.card:hover {
  transform: scale(1.05);

}

.card-body h2 {
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  color: #000;
  padding-bottom: 20px;
}
.image{
  height: 300px;
}

</style>
