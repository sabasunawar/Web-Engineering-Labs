function display(browser) {
  switch (browser.toLowerCase().trim()) {
    case "safari":
      alert(`I use ${browser.toLowerCase().trim()}.`);
      break;
    case "google":
      alert(`I use ${browser.toLowerCase().trim()}.`);
      break;
    case "opera":
      alert(`I use ${browser.toLowerCase().trim()}.`);
      break;
    case "firefox":
      alert(`I use ${browser.toLowerCase().trim()}.`);
      break;
    default:
      alert(`please try again.`);
      break;
  }
}

display(prompt("Enter Your Browser Name : "));
