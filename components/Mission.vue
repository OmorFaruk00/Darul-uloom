<template>
    <div>
      <div class="mission">
        <div class="container">
          <div class="col-lg-6 col-md-6 col-sm-12 float-right mt-5">
          <h2 class="title my-4 text-white">Our Mission</h2>
          <p class="text-justify text-white">
            The mission of DUI—Darul Uloom Islamia is to educate students to be ideal, active practitioners of Islam who will serve humanity and be successful in this life and the life to come. DUI—Darul Uloom Islamia will lead the "Gajatul Hind" for humanbing as well as islam. 
              </p>
        </div>
        </div>  
      </div>  
    </div>
  </template>
  <style scoped>
  .mission {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url("/images/mission.jpg");
    background-size: cover;
    height: 300px !important;  
   
  }
  @media (max-width: 768px) {
  .mission {
    height: auto; 
    padding-bottom: 20px;
  }

  .text-container {
    margin-top: 0;
    text-align: center; 
  }

  h2.title {
    font-size: 1.8rem; 
  }

  p {
    font-size: 0.9rem;
  }
}
  
  </style>