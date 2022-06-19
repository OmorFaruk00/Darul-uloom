<template>
  <div class="notice">
      <div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-xl-6" v-if="notices">
        <h2 class="font-weight-bolder  pb-2">OUR LATEST EVENTS</h2>
        <div class="notice-body p-3" >
          <div v-for="notice in notices.slice(0,4)" :key="notice.id">
          <nuxt-link :to="`/notice-detail/${notice.id}`" class="p-2 d-flex">
            <h6 class="notice-date">{{notice.published_date}}</h6>
            <h6 class="notice-title">{{notice.title}}</h6>
            </nuxt-link>
          </div>
                
          <div class="d-flex justify-content-end">
              <nuxt-link to="/notice" class=" btn-submit">See More</nuxt-link>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6" v-if="events">
        <h2 class="font-weight-bolder  pb-2">OUR LATEST EVENTS</h2>
        <div class="notice-body p-3" >
          <div v-for="event in events.slice(0,4)" :key="event.id">
          <nuxt-link :to="`/notice-detail/${event.id}`" class="p-2 d-flex">
            <h6 class="notice-date">{{event.published_date}}</h6>
            <h6 class="notice-title">{{event.title}}</h6>
            </nuxt-link>
          </div>
                
          <div class="d-flex justify-content-end">
              <nuxt-link to="/notice" class=" btn-submit">See More</nuxt-link>
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
.notice{
  padding: 5% 3%;
  
  background: #fff;
  /* background-image:url("/images/bg3.png"); */
  /* background-image: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.8) 100%),url("/images/bg2.webp"); */  
  
}
 .notice-body{
   box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
   background: #fff;
   border-radius: 5px;
 }
 .notice-date{
     font-size: 15px;
     background: rgb(204, 203, 203);
     padding: 14px;
     border-radius: 10px;
     margin-right: 20px;
     font-weight: 900;
     width: 33% ;
 }
 .notice-title{
     padding-top: 10px;
     font-size: 15px;
     font-weight: 600;     
 }
 .notice-title:hover{
     cursor: pointer;
     color: rgb(24, 35, 72);
 }
 .btn-see-more{
     background: rgb(48, 67, 132);;
     color: #fff;
     cursor: pointer;

 }
 .btn-see-more:hover{
    background: rgb(24, 35, 72);
    color: #fff;
    cursor: pointer;
    
    
}
</style>
