<template>
  <div>
    <div class="blog-header">
      <h2 class="title">OUR BLOG LIST</h2>
    </div>

    <div class="container event-page">    
      <div class="row" v-if="blogs">
        <div class="col-md-6 col-lg-4 col-sm-12 mb-5" v-for="blog in blogs" :key="blog.id">
          <div class="blog">            
              <img :src="
                  base_url+'/images/dum/' + blog.files
                " alt="image" class="blog-image"/>
            
            <div class="blog-content">
              <div class="d-flex justify-content-between">
                <p><span class="fa fa-user mr-2"></span>{{ blog.published_by }}</p> <p> {{blog.published_date}}</p>
                </div>
              <h4>{{ blog.title }}</h4>
              <p class="blog-desc">
                {{ blog.description }}
              </p>
              <div class="d-flex justify-content-end">
                <nuxt-link :to="`/blog-detail/${blog.id}`" class="read-btn">Read more</nuxt-link>
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
      blogs: '',
      base_url: process.env.url,
    }
  },
  mounted() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      this.$axios
        .$get("/blog")
        .then((response) => {
          this.blogs = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>
<style scoped>
.blog-header {
  background: linear-gradient(to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%),
    url("/images/slider4.jpg");
  background-size: cover;
  height: 200px !important;
  background-position: bottom;
  margin-bottom: 60px;
}

.blog-header h2 {
  text-align: center;
  padding-top: 60px;
  font-size: 40px;
  color: #fff;
}
.blog-desc{
overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5 ;   

}
.blog-image{
  height: auto;
  width: 100%;
  margin-bottom: 15px; 

}



.blog {
  box-shadow: 3px 3px 10px #cbced1, -13px -13px 20px #fff;
  width: 100%;
}

.blog-content {
  padding: 5px 20px;
}

.blog-content span {
  color: rgb(128, 116, 116);
  font-size: 14px;
}

.blog-content h4 {
  color: rgb(20, 8, 8);
  font-size: 22px;
  padding: 10px 0px;
}

.blog-content p {
  color: rgb(95, 83, 83);
  line-height: 15px;
  font-size: 14px;
  text-align: justify;
 
}

.read-btn {
  font-size: 16px;
  color: #1F7A40;
  padding: 20px 0px;
}

.read-btn:hover {
  text-decoration: none;
  color: rgb(87, 197, 129);
}

.imgbox img {
  padding-bottom: 8px;
}

/* Event Page */
.event-page {
  margin-bottom: 70px;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
}

.card-text {
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
}

.join-btn {
  font-size: 16px;
  background: #00779c;
  color: #fff;
  padding: 7px 15px;
}

.join-btn:hover {
  background: #000;
  color: #fff;

}

.shadow:before,
.shadow:after {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  background: linear-gradient(45deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #ff0000);
  background-size: 400%;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  z-index: -1;
  animation: animate 20s linear infinite;
}

.shadow:after {
  filter: blur(10px);
}

@keyframes animate {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 300% 0;
  }

  100% {
    background-position: 0 0;
  }
}

.news-body {
  background: #000;
  height: 500px;
}
</style>
