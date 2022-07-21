<template>
    <div class="container blog-page">
        <div>
            <img :src="
                base_url+'/images/dum/' + blog.files
            " alt="image" height="450px" width="100%" />
        </div>
        <div class="blog">
            <div class="blog-content">
                <div class="d-flex justify-content-between">
                    <p><span class="fa fa-user mr-2"></span>{{ blog.published_by }}</p>
                    <p> Date: {{ blog.published_date }}</p>
                </div>
                <h4>{{ blog.title }}</h4>
                <p class="blog-desc">
                    {{ blog.description }}
                </p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            blog: '',
            base_url: process.env.url,
        }
    },
    mounted() {
        this.getBlogDetails();
    },
    methods: {
        getBlogDetails() {
            this.$axios
                .$get("/blog-details/" + this.$route.params.id)
                .then((response) => {
                    console.log(response.data[0]);
                    this.blog = response.data[0];
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
}
</script>
<style scoped>
.blog-page {
    padding: 50px 0px;
}


.blog {
    box-shadow: 3px 3px 10px #cbced1, -13px -13px 20px #fff;
}

.blog-content {
    padding: 20px 50px;
}

.blog-content span {
    color: rgb(128, 116, 116);
    font-size: 14px;
}

.blog-content h4 {
    color: rgb(20, 8, 8);
    font-size: 28px;
    padding: 10px 0px;
}

.blog-content p {
    color: rgb(95, 83, 83);
    line-height: 15px;
    font-size: 18px;
    text-align: justify;

}

.blog-desc {
    line-height: 30px !important;
    padding-bottom: 50px;
}
</style>
