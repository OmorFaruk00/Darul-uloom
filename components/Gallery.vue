<template>
    <div class="our-gallery">
        <div class="container" v-if="gallery">
            <h2 class="title mb-5">Photo Gallery</h2>
            <div class="row">
                <div class="col-md-12">
                    <div class="tab" role="tabpanel">
                        <ul class="nav nav-tabs nav-list d-flex justify-content-center" role="tablist">
                            <li role="presentation" class="active">
                                <a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"
                                    class="btn">Academic</a>
                            </li>
                            <li role="presentation">
                                <a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"
                                    class="btn">Event</a>
                            </li>
                            <li role="presentation">
                                <a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab"
                                    class="btn">Tour</a>
                            </li>
                        </ul>
                        <div class="tab-content tabs">
                            <div role="tabpanel" class="tab-pane active" id="Section1" v-if="gallery.academic">
                                <div class="row">
                                    <div class="col-lg-3 col-md-4 col-sm-12" v-for="gallery in gallery.academic.slice(0,8)"
                                        :key="gallery.id">
                                        <img :src="
                                            base_url+'/images/gallery/' + gallery.image
                                        " alt="image" class="gallery_image" />                                      
                                    </div>


                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="Section2" v-if="gallery.event">
                                <div class="row">
                                     <div class="col-lg-3 col-md-4 col-sm-12" v-for="gallery in gallery.event.slice(0,8)"
                                        :key="gallery.id">
                                        <img :src="
                                            base_url+'/images/gallery/' + gallery.image
                                        " alt="image" class="gallery_image" />                                      
                                    </div>

                                </div>
                            </div>
                            <div role="tabpanel" class="tab-pane fade" id="Section3" v-if="gallery.tour">
                                <div class="row">
                                   <div class="col-lg-3 col-md-4 col-sm-6" v-for="gallery in gallery.tour.slice(0,8)"
                                        :key="gallery.id">
                                        <img :src="
                                            base_url+'/images/gallery/' + gallery.image
                                        " alt="image" class="gallery_image" />                                      
                                    </div>

                                </div>
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
            gallery: '',
            base_url: process.env.url,
        }
    },
    mounted() {
        this.getImage();
    },
    methods: {
        getImage() {
            this.$axios.$get('/gallery').then((res) => {                
                this.gallery = res;
                console.log(res)
            }).catch((error) => {
                console.log(error)

            });
        }
    }
};
</script>
<style scoped>
.gallery_image {
    height: 200px;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}


.nav-tabs {
    border-bottom: none;
}

.our-gallery {
    padding: 3%;
    background: #fff;
}

.tab-content {
    padding: 20px 20px 0px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
        rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border: none;
    border-radius: 10px;
    background: #fff;
}

ul li .active {
    color: #1F7A40;
    /* text-shadow: 0 0 3px #999; */
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    background: #1F7A40;
}

.btn {
    color: #222;
    background-color: #e7e7e7;
    font-family: "Prompt", sans-serif;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
    margin-right: 20px;
    margin-bottom: 40px;
}

.btn:hover {
    color: #fff;
    text-shadow: 0 0 3px #333;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}

.btn:before,
.btn:after {
    content: "";
    background-color: #e7e7e7;
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    z-index: -1;
    border-radius: 10px;
    transition: all 0.7s cubic-bezier(0.77, 0, 0.175, 1);
}

.btn:after {
    background-color: #1F7A40;
    width: 100%;
    height: 0%;
    top: -10%;
    left: 0%;
    right: auto;
    bottom: auto;
    z-index: -2;
}

.btn:hover:before {
    background-color: #1F7A40;
}

.btn:hover:after {
    height: 100%;
    top: 101%;
}

.btn.blue:after {
    background-color: #1F7A40;
}

.btn.blue:hover:before {
    background-color: #1F7A40;
}

@media only screen and (max-width: 767px) {
    .btn {
        margin-bottom: 20px;
    }
}
</style>>
</style>