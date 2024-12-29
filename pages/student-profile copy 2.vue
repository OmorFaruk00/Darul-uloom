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
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 mx-auto mb-5">
            <div class="email-signature">
              <div class="signature-icon d-flex justify-content-center">
                <img
                  src="https://api.darululoom-islamia.org//images/student_photo/1694351984_vU0hpXaW3z.jpg"
                  alt=""
                />
              </div>
              <div class="signature-details">
                <h2 class="title" v-text="student.name"></h2>
              </div>
              <ul class="student-profile">
                <li>
                  <strong>Reg Code:</strong
                  ><span v-text="student.reg_no"></span>
                </li>
                <li>
                  <strong>Roll No:</strong><span v-text="student.roll"></span>
                </li>
                <li>
                  <strong>Class:</strong
                  ><span v-text="student.department"></span>
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
</template>
 <script>
export default {
  layout: "Profile-content",
  created() {
    // this.searchStudent();
  },
  data() {
    return {
      qualifications: [],
      trainings: [],
      socials: [],
      student: [],
      about: "",
      search: "",
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  background-color: #346068;
}
h1 {
  color: #fff;
  padding: 0 0 30px;
}
.email-signature {
  background: linear-gradient(to right bottom, #fff 49%, #f5f5f5 50%);
  font-family: "Poppins", sans-serif;
  width: 100%;
  padding: 15px 10px;
  margin: 0 auto;
  border-left: 25px solid #1f7a40;
  box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
.email-signature .signature-icon img {
  color: #333;
  background-color: #fff;
  font-size: 95px;
  text-align: center;
  line-height: 116px;
  height: 120px;
  width: 120px;
  margin: 0 auto 15px;
  border: 5px solid #1f7a40;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.7) inset;
  border-radius: 50%;
}
.email-signature .signature-icon img {
  line-height: inherit;
}
.email-signature .signature-details {
  text-align: center;
  margin: 0 0 20px;
}
.email-signature .title {
  color: #1f7a40;
  font-size: 27px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0;
}
.email-signature .post {
  color: #333;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
}
.email-signature .student-profile {
  padding: 0;
  margin: 0;
  list-style: none;
}
.email-signature .student-profile li {
  color: #333;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 20px;
}
.email-signature .student-profile li span {
  color: #1f7a40;
  font-size: 15px;
  margin: 0 5px;
}
.email-signature .icon {
  padding: 0;
  margin: 0;
  list-style: none;
}
.email-signature .icon li {
  display: inline-block;
  margin: 0 7px;
}
.email-signature .icon li a {
  color: #1f7a40;
  font-size: 17px;
  transition: all 0.3s ease 0s;
}
.email-signature .icon li a:hover {
  color: #333;
  text-shadow: 0 0 3px #1f7a40;
  text-decoration: none;
}
@media screen and (max-width: 300px) {
  .email-signature {
    width: 100%;
  }
}
</style>