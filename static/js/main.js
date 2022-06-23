import axios from "axios";
import Vue from "vue";

const lang =localStorage.getItem("lang") || "en";
axios.defaults.headers.common["Accept-Language"] = lang;
Vue.config.productionTip = false;



