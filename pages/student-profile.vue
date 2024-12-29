<template>
    <div class="profile">
        <div class="container pt-5">
            <div>
                <div class="from-group">
                    <div class="d-flex justify-content-center">
                        <div class="col-md-6">
                            <div class="input-group mb-5">
                                <input type="text" class="form-control"
                                    placeholder="Search Student Info Like .. Id/Name/Reg Code" v-model="search" />
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
                    <div class="col-lg-6 col-md-6 col-sm-12 mx-auto mb-5">
                        <div class="student-profile">
                            <svg x="0px" y="0px" viewBox="0 0 320 250" enable-background="new 0 0 320 250">
                                <g>
                                    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="374.3652"
                                        y1="91.5918" x2="-35.0314" y2="245.7634">
                                        <stop offset="0" style="stop-color: #91bf38"></stop>
                                        <stop offset="0.9946" style="stop-color: #ccdb36"></stop>
                                    </linearGradient>
                                    <path fill="url(#SVGID_1_)" d="M0.978,227.766v22.245c33.725-31.475,80.804-60.786,139.431-83.669
                		c58.857-22.984,121.38-36.386,180.074-40.869v-13.135c-61.259,10.636-126.854,28.692-191.644,53.984
                		C81.227,184.909,38.228,205.775,0.978,227.766z"></path>
                                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="374.0771"
                                        y1="17.376" x2="-71.6109" y2="107.9793">
                                        <stop offset="0" style="stop-color: #00a595"></stop>
                                        <stop offset="1" style="stop-color: #028c81"></stop>
                                    </linearGradient>
                                    <path fill="url(#SVGID_2_)" d="M299.217,0c-31.008,30.576-77.496,59.286-137.048,81.013
                		c-52.978,19.338-109.018,30.491-161.191,33.914v9.955c39.099-6.122,79.832-15.201,120.71-27.324
                		C203.76,73.23,272.632,40.743,320.482,6.528V0H299.217z"></path>
                                    <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="-82.1938"
                                        y1="77.7007" x2="378.6966" y2="35.6781">
                                        <stop offset="0" style="stop-color: #91bf38"></stop>
                                        <stop offset="0.9946" style="stop-color: #ccdb36"></stop>
                                    </linearGradient>
                                    <path fill="url(#SVGID_3_)" d="M116.131,90.772c-38.549,9.648-77.694,13.872-115.153,13.262v10.893
                		c52.173-3.423,108.213-14.576,161.191-33.914C221.721,59.286,268.209,30.576,299.217,0h-22.665
                		C244.156,39.358,188.06,72.772,116.131,90.772z"></path>
                                    <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="0.978" y1="52.0459"
                                        x2="276.5518" y2="52.0459">
                                        <stop offset="0" style="stop-color: #00a595"></stop>
                                        <stop offset="1" style="stop-color: #019f90"></stop>
                                    </linearGradient>
                                    <path fill="url(#SVGID_4_)" d="M116.131,90.772C188.06,72.772,244.156,39.358,276.552,0h-58.778
                		c-11.807,38.144-46.752,66.597-96.055,78.938C81.536,88.991,39.096,86.515,0.978,72.16v31.875
                		C38.437,104.644,77.582,100.421,116.131,90.772z"></path>
                                    <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="163.9688"
                                        y1="116.0601" x2="-153.4978" y2="200.9754">
                                        <stop offset="0" style="stop-color: #005c61"></stop>
                                        <stop offset="1" style="stop-color: #003e3e"></stop>
                                    </linearGradient>
                                    <path fill="url(#SVGID_5_)" d="M121.688,97.345c-40.879,12.117-81.612,21.194-120.71,27.31v102.885
                		c37.25-21.979,80.249-42.848,127.861-61.436c64.789-25.282,130.385-43.34,191.644-53.983V6.313
                		C272.632,40.532,203.76,73.017,121.688,97.345z"></path>
                                </g>
                            </svg>
                            <div class="signature-icon">
                                <img :src="base_url + '/images/student_photo/' + student.photo" alt="" />
                            </div>
                            <div class="signature-details">
                                <h2 class="title" v-text="student.name"></h2>
                            </div>
                            <ul class="signature-content">
                                <li>
                                    <strong>Reg Code:</strong><span v-text="student.reg_no"></span>
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
                                    <strong>Blood Group:</strong><span v-text="student.blood_group"></span>
                                </li>
                                <li>
                                    <strong> Group:</strong><span v-text="student.group"></span>
                                </li>
                                <li>
                                    <strong>Session:</strong><span v-text="student.session"></span>
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
            });
        },
    },
};
</script>
<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Lobster&display=swap'); */
body {
    background: #c4c4c4;
}

h1 {
    padding: 0 0 30px;
}

.student-profile {
    background-color: #fff;
    font-family: "Exo 2", sans-serif;
    width: 320px;
    padding: 0 0 20px;
    margin: 0 auto;
    border-radius: 20px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    position: relative;
}

.student-profile .signature-icon img {
    color: #028c81;
    background: #fff;
    font-size: 60px;
    text-align: center;
    line-height: 130px;
    width: 150px;
    height: 150px;
    border: 10px solid #91bf38;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    position: absolute;
    top: 35px;
    left: 50%;
}

/* .student-profile .signature-icon i{ line-height:inherit; } */
/* .student-profile .signature-details{
    text-align: center;
    margin: -30px 0 0;
}
.student-profile .signature-details:after{
    content: '';
    width: 40%;
    margin: 10px auto;
    border-bottom: 3px dotted #777;
    display: block;
} */
.student-profile .title {
    color: #003e3e;
    font-family: "Lobster", cursive;
    font-size: 16px;
    letter-spacing: 1px;
    margin: 0;
    padding: 20px 5px;
    display: block;
}

.student-profile .post {
    color: #028c81;
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
    text-transform: capitalize;
}

.student-profile .signature-content {
    text-align: center;
    padding: 0 15px;
    margin: 0;
    list-style: none;
}

.student-profile .signature-content li {
    color: #000;
    font-size: 15px;
    margin-bottom: 3px;
    line-height: 29px;
    /* float: left; */
    text-align: left;
}

.student-profile .signature-content li span {
    color: #000;
    margin-right: 6px;
    margin-left: 5px;
}

@media screen and (max-width: 359px) {
    .student-profile {
        width: 100%;
    }

    .student-profile .signature-icon {
        width: 130px;
        height: 130px;
        line-height: 110px;
        top: 8%;
    }
}
</style>
