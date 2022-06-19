
<template>
    <div class="notice-page">
        <div class="notice">
            <h2 class="title">NOTICE BOARD</h2>
            <!-- <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque,
        cumque!
      </p> -->
        </div>
        <div class="container">
            <div class="notice-body" v-if="notice">
                <p class="notice-date">Published Date <span class="pl-3">{{ notice.published_date }}</span> </p>
                <p class="notice-title">{{ notice.title }}</p>
                <p class="notice-desc">{{ notice.description }}</p>
                <div>
                    <img :src="'http://localhost:8000/images/dum/' + notice.files" alt="image" width="100%"
                        height="auto" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            notice: [],

        }
    },
    mounted() {
        this.getNoticeDetails();

    },
    methods: {
        getNoticeDetails() {
            this.$axios.$get("/notice-details/" + this.$route.params.id)
                .then((res) => {
                    this.notice = res.data[0];
                    console.log(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    },
}
</script>
<style scoped>
.notice h2 {
    text-align: center;
    padding-top: 40px;
    font-size: 45px;
    color: #fff;
}

.notice p {
    text-align: center;
    padding-top: 10px;
    font-size: 18px;
    color: #fff;
}

.notice-body {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background: #fff;
    border-radius: 5px;
    padding: 50px;
}

.notice {
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.7) 100%),
        url("/images/slider4.jpg");
    background-size: cover;
    height: 200px !important;
    background-position: bottom;
    margin-bottom: 80px;
}


.notice-page {
    padding-bottom: 80px;
    /* background: rgb(238, 233, 233); */
    /* background-image: url("/images/bg3.png"); */
}

.notice-title {
    font-size: 25px;
    font-weight: 400;

}

.notice-date {
    font-size: 25px;
    font-weight: 600;

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
