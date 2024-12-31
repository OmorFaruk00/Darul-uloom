// export default ({ app }, inject) => {
//     if (process.client) {
//       // Dynamically load the Google Translate script
//       const script = document.createElement('script');
//       script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       document.body.appendChild(script);
  
//       window.googleTranslateElementInit = () => {
//         new google.translate.TranslateElement({
//           pageLanguage: 'en', // Default language of the page
//         }, 'google_translate_element');
//       };
//     }
//   }
  
export default ({ app }, inject) => {
    if (process.client) {
      // Dynamically load the Google Translate script
      const script = document.createElement('script');
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
  
      // Initialize Google Translate element
      window.googleTranslateElementInit = () => {
        new google.translate.TranslateElement({
          pageLanguage: 'en', // Default language of the page
          includedLanguages: 'bn,en,ar', // Languages you want to include (Bangla, English, Arabic)
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        }, 'google_translate_element');
      };
    }
  }
  