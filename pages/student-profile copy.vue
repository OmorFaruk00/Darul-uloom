<template>
  <div class="profile">
    <div class="container pt-5">
      <div>
        <div class="from-group">
          <div class="d-flex justify-content-center">
            <div class="col-md-6">
              <div class="input-group mb-5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Student Info Like .. Id/Name/Reg Code"
                  v-model="search"
                />
                <div class="input-group-append">
                  <button class="btn btn-info" @click="searchStudent">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        <div class="container" v-if="student.length != 0">
          <div class="row" >
            <div class="col-lg-6 col-md-6 col-sm-12 mx-auto mb-5">
              <div class="student-profile">
                <div class="signature-img">
                  <img
                    :src="base_url + '/images/student_photo/' + student.photo"
                    alt=""
                  />
                </div>
                <div >

                
                <div class="signature-details">
                  <h2 class="title" v-text="student.name"></h2>
                </div>
                <ul class="signature-content">
                  <li>
                    <strong>Reg Code:</strong
                    ><span v-text="student.reg_no"></span>
                  </li>
                  <li>
                    <strong>Roll No:</strong><span v-text="student.roll"></span>
                  </li>
                  <li>
                    <strong>Class:</strong><span v-text="student.department"></span>
                  </li>
                  <li>
                    <strong>Batch:</strong><span v-text="student.batch"></span>
                  </li>
                  <li>
                    <strong>Blood Group:</strong
                    ><span v-text="student.blood_group"></span>
                  </li>
                  <li>
                    <strong> Group:</strong><span v-text="student.group"></span>
                  </li>
                  <li>
                    <strong>Session:</strong
                    ><span v-text="student.session"></span>
                  </li>
                  <li>
                    <strong>Shift:</strong><span v-text="student.shift"></span>
                  </li>
                </ul>
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
  layout: "Profile-content",
  created() {
    this.searchStudent();
  },
  data() {
    return {
      qualifications: [],
      trainings: [],
      socials: [],
      student: [],
      about: "",
      search: "5",
      base_url: process.env.url,
    };
  },

  methods: {
    searchStudent() {
      this.$axios.get("/students-search/" + this.search).then((response) => {
        this.student = response.data;
        console.log(this.student);
      });
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap");
body {
  background: #f6dacf;
}
h1 {
  padding: 0 0 30px;
}
.student-profile {
  background: #fff;
  font-family: "Roboto Condensed", sans-serif;
  padding: 50px 20px 15px 120px;
  box-shadow: 10px 10px 3px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
}
.student-profile:before {
  content: "";
  background: linear-gradient(to right, #f39c12 49%, #f1c40f 50%);
  width: 18px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.student-profile .signature-img {
  background: #fff;
  width: 200px;
  height: 200px;
  padding: 3px;
  border-radius: 50%;
  border: 5px solid #f1c40f;
  overflow: hidden;
  position: absolute;
  top: 15px;
  left: 30px;
  z-index: 1;
}
.student-profile .signature-img img {
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.student-profile .signature-details {
  color: #fff;
  background: #3498db;
  text-align: center;
  padding: 15px 10px 15px 50px;
  margin-bottom: 20px;
  border-right: 15px solid #2980b9;
}
.student-profile .title {
  font-size: 25px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
}
.student-profile .post {
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.student-profile .signature-content {
  padding: 20px 10px 0 0;
  margin: 0;
  list-style: none;
  position: relative;

}
.student-profile .signature-content:before,
.student-profile .signature-content:after {
  content: "";
  background: #2980b9;
  width: 4px;
  height: 100%;
  position: absolute;
  top: 0;
  left: -25px;
}
.student-profile .signature-content:after {
  background: #f1c40f;
  height: 80%;
  top: 20px;
  left: -35px;
}
.student-profile .signature-content li {
  color: #95afc0;
  font-size: 16px;
  margin: 0 0 10px;
  display: block;
}
.student-profile .signature-content li span {
  color: #000;
  font-size: 18px;
  text-align: center;
  line-height: 23px;
  height: 23px;
  width: 25px;
  margin: 2px 2px 0 0;
  margin-left: 10px;
}
@media screen and (max-width: 576px) {
  .student-profile {
    padding: 200px 0 15px;
  }
  .student-profile:before {
    background: linear-gradient(to bottom, #f39c12 49%, #f1c40f 50%);
    width: 100%;
    height: 15px;
  }
  .student-profile .signature-img {
    margin: 0 auto;
    top: 26px;
    left: 0;
    right: 0;
  }
  .student-profile .signature-details {
    padding: 10px;
    border-right: none;
  }
  .student-profile .signature-content {
    text-align: center;
    padding: 0;
  }
  .student-profile .signature-content:before,
  .student-profile .signature-content:after {
    width: 60%;
    height: 4px;
    transform: translateX(-50%);
    top: -103px;
    left: 50%;
  }
  .student-profile .signature-content:after {
    width: 45%;
    top: -112px;
  }
}
</style>