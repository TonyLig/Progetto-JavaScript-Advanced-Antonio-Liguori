// Fulpage configuration object
const fullPageApi = new fullpage("#fullpage", {
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  css3: true,
  loopHorizontal: true,
  fitToSection: false,
  keyboardScrolling: true,
  licenseKey: "gplv3-license",
  credits: {
    enabled: false,
    label: "Made with fullPage.js",
    position: "right",
  },
});

export default fullPageApi;
