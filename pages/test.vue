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

    <button @click="setLanguage('en')">English</button>
<button @click="setLanguage('bn')">Bangla</button>
<button @click="setLanguage('ar')">Arabic</button>

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
