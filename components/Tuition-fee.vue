<template>
    <div class="tuition">
        <div id="main">
            <div class="container">
                <h2 class="title pb-5">FEE</h2>
                <div class="accordion" id="faq">
                    <div class="card" v-if="fee.Residential">
                        <div class="card-header" id="faqhead1">
                            <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1"
                                aria-expanded="true" aria-controls="faq1">Residential <img src="/images/icon/down.png" alt="" class=" float-right" height="18px"></a>
                        </div>
                        <div id="faq1" class="collapse" aria-labelledby="faqhead1" data-parent="#faq">
                            <div class="card-body">
                                 <table class="table table-striped table-bordered text-center">
                                    <thead>
                                        <tr>                                            
                                            <th>Name of Program</th>                                            
                                            <th>Duration</th>
                                            <th>Monthly Fee For Male </th>
                                            <th>Monthly Fee For Female </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="residential in fee.Residential"  :key="residential.id">
                                        <tr>                                            
                                            <td>{{residential.name_of_program}}</td>                                            
                                            <td>{{residential.duration}}</td>
                                           <td>{{residential.monthly_fee_for_male}}</td> 
                                           <td>{{residential.monthly_fee_for_female}}</td> 
                                            
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-if="fee.Non_residential">
                        <div class="card-header" id="faqhead2">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2"
                                aria-expanded="true" aria-controls="faq2">Non Residential <img src="/images/icon/down.png" alt="" class=" float-right" height="18px"></a>
                        </div>

                        <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                            <div class="card-body">
                                <table class="table table-striped table-bordered text-center">
                                    <thead>
                                        <tr>                                            
                                            <th>Name of Program</th>
                                            <th>Duration</th>
                                            <th>Monthly Fee For Male </th>
                                            <th>Monthly Fee For Female </th>
                                        </tr>
                                    </thead>
                                      <tbody v-for="non_residential in fee.Non_residential"  :key="non_residential.id">
                                        <tr>                                            
                                            <td>{{non_residential.name_of_program}}</td> 
                                            <td>{{non_residential.duration}} </td>
                                            <td>{{non_residential.monthly_fee_for_male}}</td> 
                                            <td>{{non_residential.monthly_fee_for_female}}</td>                                           
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-if="fee.Day_care">
                        <div class="card-header" id="faqhead3">
                            <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3"
                                aria-expanded="true" aria-controls="faq3">Day Care <img src="/images/icon/down.png" alt="" class=" float-right" height="18px"></a>
                                
                        </div>
                        <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                            <div class="card-body">
                                 <table class="table table-striped table-bordered text-center">
                                    <thead>
                                        <tr>                                            
                                            <th>Name of Program</th>
                                            <th>Duration</th>
                                            <th>Monthly Fee For Male </th>
                                            <th>Monthly Fee For Female </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="day_care in fee.Day_care"  :key="day_care.id">
                                        <tr>                                            
                                            <td>{{day_care.name_of_program}}</td> 
                                            <td>{{day_care.duration}} </td>
                                            <td>{{day_care.monthly_fee_for_male}}</td> 
                                            <td>{{day_care.monthly_fee_for_female}}</td>                                          
                                        </tr>                                        
                                    </tbody>
                                </table>

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
 
 mounted(){
    this.getTutionFee();
  },
  data() {
    return {
        fee:'',
      
      

    };
  },
  methods: {
     getTutionFee() {
      this.$axios.$get("/tution-fee")
        .then((res) => {         
          this.fee = res;          
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>

.tuition {
    background-color: hsl(60, 22%, 96%);
    padding: 70px;
}

/* #main {
  margin: 50px 0;
  padding: 70px !important;
} */

#main #faq .card {
    margin-bottom: 30px;
    border: 0;
}

#main #faq .card .card-header {
    border: 0;
    -webkit-box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
    box-shadow: 0 0 20px 0 rgba(213, 213, 213, 0.5);
    border-radius: 5px;
    padding: 0;

}

.card-header a {
    font-size: 20px;
    font-weight: 400;

}

#main #faq .card .card-header .btn-header-link {
    color: #fff;
    display: block;
    text-align: left;
    background: #fff;
    color: #222;
    padding: 15px;
}

#main #faq .card .card-header .btn-header-link:after {
    content: "\f107";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    float: right;
}

#main #faq .card .card-header .btn-header-link.collapsed {
    background: #fff;
    color: rgb(14, 5, 5);
}

#main #faq .card .card-header .btn-header-link.collapsed:after {
    content: "\f106";
}

#main #faq .card .collapsing {
    background: #fff;
    line-height: 30px;
}

#main #faq .card .collapse {
    border: 0;
}

#main #faq .card .collapse.show {
    background: #fff;
    line-height: 30px;
    color: #222;
}
@media only screen and (max-width: 767px) {
    .tuition{
        padding: 10px;
    }
}
</style>