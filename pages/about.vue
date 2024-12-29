<template>
  <div>
    <div class="about">
      <h2 class="title">about Us</h2>    
    </div>
    <!-- about-intro -->
    <div class="about-intro">
      <div class="container">
        <div class="row">
          <div class="intro-img col-md-6 col-sm-12 col-xl-6">
            <img class="img-responsive about-img" src="images/slider4.jpg" alt="" />
          </div>
          <div class="intro-img col-md-6 col-sm-12 col-xl-6">
            <h2 class="title ">INTRODUCTION</h2>
            <p class="intro-desc">
              DUI - Darul Uloom Islamia is the outcome of a collective dream. The dream was to establish an education institute where education would be imparted to the students to make them successful in this life and the Hereafter. Accordingly, a balanced mix of curriculum combining Islamic subjects (Qawmi) and Scientifics (Combination of Science, Computer & Language) customized syllabus was selected for the institute. The Madrasa's infrastructure development started in 2017. After a minimum development of infrastructure, we started our academic journey in 2022.  We plan to expand the institute by increasing one class each year so that the intakes can build a strong foundation going through the early years’ education program. The location of the institute at Village: Moniram, Post Office: Falgacha, Union: Bamondanga, Police Station: Sundargonj, District: Gaibandha. Moniram is a beautiful Village and our Darul Uloom Islamia is situated not in the village but near the village for a Noise and pollution-free environment. 
            </p>
          </div>
        </div>
      </div>
    </div>
     <!-- about-founder -->
    <div class="about-founder">
      <div class="container">
        <div class="row">
          <div class="intro-img col-md-6 col-sm-12 col-xl-6">
            <h2 class="title pb-3">FOUNDER</h2>
            <p class="intro-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              libero aliquid, necessitatibus exercitationem tenetur soluta
              officia alias? Delectus quas dolorem eaque laborum, amet rerum
              minus perferendis sequi dignissimos eligendi? Omnis eos provident
              nobis iste sint natus fugit quasi dignissimos, excepturi possimus
              veritatis aut optio reprehenderit officia est soluta, aliquid
              blanditiis. Aspernatur impedit pariatur molestiae debitis!
              Voluptatum quos, neque officia aperiam nesciunt fugiat amet, nihil
              deserunt minima architecto ipsum? Perferendis quas odit, ratione
              natus id rem obcaecati nihil, sit ipsam et corporis adipisci
              architecto est facilis accusantium cumque molestias eos hic quo.
              Doloribus magnam suscipit, ipsam nisi optio beatae! Incidunt,
              laborum.
            </p>
          </div>
          <div class="intro-img col-md-6 col-sm-12 col-xl-6">
            <img class="img-responsive" src="images/slider2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

    <!-- our mission -->
    <Mission />   
    <Teaching-staffs />
    <Committee />
  </div>
</template>
<style>
.about {
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
.about-img{
  height: 100%;
}
.about h2 {
  text-align: center;
  padding-top: 60px;
  font-size: 40px;
  color: #fff;
}
.about p {
  text-align: center;
  padding-top: 10px;
  font-size: 18px;
  color: #fff;
}
.about-intro {  
  padding-bottom: 80px;
}
.intro-img img {
  width: 100%;
}
.intro-desc {
  font-size: 15px;
  color: #000;
  line-height: 20px;
  text-align: justify;
}
.about-founder {
  padding: 80px;
  background-image:url("/images/bg3.png");
}

@media (max-width: 680px) {
.about-intro {
  padding: 30px;
}
.about-founder {
  padding: 30px;  
}
.title {    
    font-size: 18px;
    padding-top: 20px;
    margin-top: 0px;
   
}
 .about{
      margin-bottom: 0px;
    }
}

 @media only screen and (max-width: 767px) {
   

   
 }
</style>