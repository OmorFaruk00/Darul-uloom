<template>
  <div class="notice-page">
    <div class="notice">
      <h2 class="title">NOTICE BOARD</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
        cumque!
      </p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-xl-6" v-if="notices">
        <h2 class="font-weight-bolder  pb-2">OUR LATEST EVENTS</h2>
        <div class="notice-body p-3" >
          <div class="p-2 d-flex" v-for="notice in notices" :key="notice.id">
            <h6 class="notice-date">{{notice.published_date}}</h6>
            <h6 class="notice-title">{{notice.title}}</h6>
          </div>                
         
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6" v-if="events">
        <h2 class="font-weight-bolder  pb-2">OUR LATEST EVENTS</h2>
        <div class="notice-body p-3" >
          <div class="p-2 d-flex" v-for="event in events" :key="event.id">
            <h6 class="notice-date">{{event.published_date}}</h6>
            <h6 class="notice-title">{{event.title}}</h6>
          </div>
                
          
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default{
  data(){
    return{
      notices:[],
      events:[],
    }
  },
  mounted(){
    this.getNotice();
    this.getEvent();
  },
   methods: {
     getNotice() {
      this.$axios.$get("/notice")
        .then((res) => {          
          this.notices = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
      getEvent() {
      this.$axios.$get("/event")
        .then((res) => {         
          this.events = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
}
</script>
<style scoped>
.notice-body{
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
   background: #fff;
   border-radius: 5px;
 }
.notice {
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


.notice-page {
  padding-bottom: 80px;
  /* background: rgb(238, 233, 233); */
  background-image: url("/images/bg3.png");
}
.notice-date {
  font-size: 15px;
  background: rgb(204, 203, 203);
  padding: 10px;
  border-radius: 10px;
  margin-right: 20px;
  font-weight: 900;
}
.notice-title {
  padding-top: 10px;
  font-size: 15px;
  font-weight: 900;
}
.notice-title:hover {
  cursor: pointer;
  color: rgb(24, 35, 72);
}
.btn-see-more {
  background: rgb(48, 67, 132);
  color: #fff;
  cursor: pointer;
}
.btn-see-more:hover {
  background: rgb(24, 35, 72);
  color: #fff;
  cursor: pointer;
}
</style>
