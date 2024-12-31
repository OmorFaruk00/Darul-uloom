<template>
  <div>
    <h1>My Web Page</h1>
    <p>Hello everybody!</p>
    <p>Translate this page:</p>

    <!-- Google Translate Element -->
    <div id="google_translate_element"></div>

    <!-- Language Change Buttons -->
    <div class="d-flex pt-3">
      <button class="btn-lang" @click="changeLanguage('en')">English</button>
      <button class="btn-lang" @click="changeLanguage('bn')">বাংলা</button>
      <button class="btn-lang" @click="changeLanguage('ar')">عربي</button>
    </div>
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

    changeLanguage(languageCode) {
      // Update Google Translate URL hash to trigger language change
      const googleTranslateIframe = document.querySelector(
        "iframe.goog-te-menu-frame"
      );

      if (googleTranslateIframe) {
        const iframeDocument =
          googleTranslateIframe.contentDocument ||
          googleTranslateIframe.contentWindow.document;

        if (iframeDocument) {
          const langButton = iframeDocument.querySelector(
            `a[lang="${languageCode}"]`
          );

          if (langButton) {
            langButton.click(); // Trigger the language switch
          } else {
            console.error(`Language code "${languageCode}" not found.`);
          }
        }
      } else {
        // Fallback: Use URL hash for language switching
        const hashMap = {
          en: "en",
          bn: "bn",
          ar: "ar",
        };

        if (hashMap[languageCode]) {
          window.location.hash = `#googtrans(en|${languageCode})`;
          

          // Reload the Google Translate widget
          this.reloadGoogleTranslate();
        } else {
          console.error(`Language code "${languageCode}" not supported.`);
        }
      }
    },

    reloadGoogleTranslate() {
      // Clear the existing widget
      const container = document.getElementById("google_translate_element");
      container.innerHTML = "";

      // Re-initialize Google Translate
      this.initGoogleTranslate();
    },
  },
};
</script>
