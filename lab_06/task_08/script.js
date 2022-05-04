const namedom = document.getElementById("name");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confpassword = document.getElementById("confpassword");

function checkAttr(attr, input) {
  document.getElementById(`input-box-${attr}`).className = `mb-3 ${
    input.trim() === "" && "error"
  }`;
}

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  checkAttr("name", namedom.value);
  checkAttr("address", address.value);
  checkAttr("phone", phone.value);
  checkAttr("password", password.value);
  if (password.value !== confpassword.value) {
    confpassword.value = "";
  }
  checkAttr("confpassword", confpassword.value);
});
