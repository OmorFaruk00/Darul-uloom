<template>
    <div class="counter-bg">
        <div class="container">
            <h2 class="title pb-5">CURRENT STATISTICS: OUR STRENGTH</h2>
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="counter">
                        <span class="counter-value" v-text="counter.sum_of_active_students"></span>
                        <h3>CURRENT STUDENT</h3>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter purple">
                        <span class="counter-value" v-text="counter.teacher"></span>
                        <h3>TEACHER</h3>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter red">
                        <span class="counter-value" v-text="counter.sum_of_not_active_students"></span>
                        <h3>NUMBER OF ALUMNI</h3>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="counter gray">
                        <span class="counter-value" v-text="counter.staff"></span>
                        <h3>TOTAL STAFF</h3>
                    </div>
                </div>

            </div>
        </div>


    </div>
</template>
<script>
export default {
  layout: "Profile-content",
  created() {
    this.getCounter();
  },
  data() {
    return {
      counter:'',
      base_url: process.env.url,
    };
  },

  methods: {
    getCounter() {
      this.$axios.get("/counter").then((response) => {
        this.counter = response.data;
      });
    },
  },
};
</script>
<style scoped>
.counter-bg {
    padding: 4%;
    background: #f2f2f2;
}

.counter {
    color: #333;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.counter .counter-value {
    font-size: 35px;
    font-weight: 700;
    line-height: 110px;
    height: 130px;
    width: 140px;
    margin: 0 auto 10px;
    border: 15px solid #05BCC0;
    border-bottom: none;
    box-shadow: 0 -5px rgba(0, 0, 0, 0.2) inset, 0 -10px rgba(0, 0, 0, 0.1) inset, 0 -15px rgba(0, 0, 0, 0.05) inset;
    border-radius: 50%;
    display: block;
}

.counter h3 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0;
}

.counter.purple .counter-value {
    border-color: #8E4882;
}

.counter.red .counter-value {
    border-color: #F9605D;
}

.counter.gray .counter-value {
    border-color: #64868c;
}

@media screen and (max-width:990px) {
    .counter {
       margin-bottom: 30px;
       
    }
    .counter-bg {
    padding: 50px 0px;
    
}
}
</style>