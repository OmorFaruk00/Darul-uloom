<template>
    <div>
        <div class="top_menu container">
            <div class="row pb-2">
                <div class="col-lg-2 col-md-2 col-sm-12">
                    <div class="top-logo">
                        <img src="/images/logo.png" alt="logo" />
                    </div>
                </div>
                <div class="col-lg-10 col-md-10 col-sm-12 ">
                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-xl-8">
                            <div class="top-title">
                                <h2>দারুল উলূম ইসলামিয়া</h2>
                                <h2>دار العلوم الإسلامية</h2>
                                <!-- <h2>darul uloom islamia</h2> -->
                                <h2>Darul Uloom Islamia</h2>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-xl-4 ">
                            <div class="pt-3 top-icon">
                                <img src="/images/phone.png" alt="phone"><span>+8801896267384</span><br />
                                <img src="/images/email.png" alt="email">
                                <span>info@darululoom-islamia.org</span><br />

                                <div class="d-flex pt-3">
                               
                                    <button class="btn-lang" @click="setLanguage('bn')">Bangla</button>
                                    <button class="btn-lang"  @click="setLanguage('en')">English</button>
                                    <button class="btn-lang" @click="setLanguage('ar')">عربي</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/about">ABOUT US</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/notice">NOTICE BOARD</NuxtLink>

                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/admission">ADMISSION</NuxtLink>

                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/man-power">MAN POWER</NuxtLink>

                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/student-profile">STUDENTS PROFILE</NuxtLink>

                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
                        </li>

                        <li class="nav-item">
                            <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentLanguage: "en", // Default language
    };
  },
  mounted() {
    this.initGoogleTranslate();
  },
  methods: {
    initGoogleTranslate() {
      window.googleTranslateElementInit = () => {
        new google.translate.TranslateElement(
          {
            pageLanguage: "en", // Set the default page language
            includedLanguages: "en,bn,ar", // Allowed languages
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };

      // Load the Google Translate script
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    },

   

    reloadGoogleTranslate() {
      // Clear the existing widget
      const container = document.getElementById("google_translate_element");
      container.innerHTML = "";

      // Re-initialize Google Translate
      this.initGoogleTranslate();
    },




setLanguage(languageCode) {
  const hashValue = `#googtrans(${languageCode === 'en' ? 'en|en' : `en|${languageCode}`})`;
  window.location.hash = hashValue;

  // Clear the Google Translate cookies to reset the state
  document.cookie = `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  document.cookie = `googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=.${window.location.hostname};path=/`;

  // Set the new language in the cookie
  if (languageCode !== 'en') {
    const cookieValue = `/en/${languageCode}`;
    document.cookie = `googtrans=${cookieValue};path=/`;
    document.cookie = `googtrans=${cookieValue};domain=.${window.location.hostname};path=/`;
  }

  // Reload the page to apply the selected language
  window.location.reload();
}

  },
};
</script>
<style scope>
.top-icon img {
    height: 25px;
    width: auto;
    padding-right: 10px;
}

.top-logo img {
    height: 150px;
    margin-top:5px;

}

.top-title {
    margin-top: 15px;

}

.top-title h2 {
    color: rgb(24, 35, 72);
    /* font-size: 20px; */
}

.dropdown-toggle {
    color: #fff;
}

.dropdown-toggle::after {

    cursor: pointer;
    color: #fff;
}

.nav-link {
    font-size: 14px;
    color: #fff !important;
    margin-right: 20px;

}

.nuxt-link-exact-active {
    /* background: rgb(0, 255, 166) !important;
    border-radius: 4px; */
    color: rgb(84, 239, 198) !important;

}

.nav-item {
    color: #fff;
    font-weight: 700;
}

.dropdown-item {
    color: #000;
}

.navbar {
    /* background:rgb(24, 35, 72); */
    /* background: #337ab7; */
    background: #1F7A40;

}

.menu_icon {
    color: rgb(87, 10, 10);
}

.dropdown-item {
    color: rgb(48, 67, 132);
    line-height: 20px;
    font-size: 14px;
    padding: 15px 40px 15px 40px;
}

.top-icon {
    font-size: 15px;
    line-height: 25px;
}

.top-icon i {
    margin-right: 10px;
}

.btn-lang {
    border: 2px solid #1F7A40;
    margin-right: 10px;
    padding: 0px 10px;
    color: #000;
    border-radius: 5px;
    cursor: pointer;
}

.btn-lang:hover {
    background: #1F7A40;
    color: #fff !important;

}

/* Header */
.content-block {
    margin-bottom: 10px;
    ;

}

.content-block h2 {
    font-size: 50px;
    text-transform: uppercase;
    margin-bottom: 50px;
}

.read-story {
    padding: 15px 40px 15px 40px;
    margin-top: 80px;
    color: white;
}

.bnt-apply {
    background: rgb(48, 67, 132);
    padding: 12px 25px;
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
}

.bnt-apply:hover {
    background: rgb(24, 35, 72);
    padding: 12px 25px;
    cursor: pointer;
    color: #fff;

}

@media only screen and (max-width: 767px) {
    .top-logo {
        width: fit-content;
        margin: 0rem auto;

    }

    .name {
        padding-left: 50px;
    }
}
</style>
