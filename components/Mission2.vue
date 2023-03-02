<template>
  <div class="our-mission">
    <div class="container">
        <h2 class="title pb-5">Our Mission</h2>
      <div class="mission-body">
        <div class="row">
          <div class="col-md-4 col-sm-6">
            <div class="mission float-left">
                <!-- <h2>Our Mission</h2> -->
              <div class="mission-icon">
                <img src="/images/logo.png" alt="logo" />
              </div>
            </div>
          </div>
          <div class="col-md-8 col-sm-6">
            <div class="float-left ">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                vitae deleniti ex? Vero omnis ea, debitis magni quam tempora
                temporibus voluptatum modi harum voluptatibus recusandae
                voluptatem vel. Culpa adipisci in cupiditate, libero sint,
                rerum, minus sunt officiis dicta odio velit expedita vero enim
                id nisi molestiae ut neque cumque quas!minus sunt officiis dicta
                odio velit expedita vero enim id nisi molestiae ut neque cumque              
                voluptatem vel. Culpa adipisci in cupiditate, libero sint,
                rerum, minus sunt officiis dicta odio velit expedita vero enim
                id nisi molestiae ut neque cumque quas!minus sunt officiis dicta
                odio velit expedita vero enim id nisi molestiae ut neque cumque
                quas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* .our-mission {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/images/mission.jpg");
  background-size: cover;
  height: 600px !important;
  background-position: bottom;
  margin-bottom: 80px;
} */

.mission-body {
  box-shadow: 5px 5px 10px #dacccc85, -5px -5px 10px rgb(214, 209, 209);
  padding: 50px;
  background: #fff;
  border-radius: 20px;
}
.mission-icon img {
  height: 130px;
  margin-left: 30px;
}
.our-mission {
  background-color: hsl(60, 22%, 96%);
  padding: 80px 0px;
}

.mission {
  color: #fff;
  background-color: #1f7a40;
  font-family: "Raleway", sans-serif;
  width: 300px;
  padding: 30px 40px 30px 20px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
}
.mission:before,
.mission:after {
  content: "";
  background-color: #1f7a40;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  clip-path: polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%);
}
.mission:before {
  background-color: #fff;
  width: calc(100% - 15px);
}
.mission:after {
  width: calc(100% - 30px);
}
.mission .mission-icon {
  font-size: 35px;
  margin: 0 0 10px;
}

.mission .mission-value {
  font-size: 35px;
  font-weight: 600;
}

@media screen and (max-width: 990px) {
  .mission {
    margin-bottom: 40px;
  }
}
</style>
