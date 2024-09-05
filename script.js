function submitForm() {
  const email = document.getElementById("email").value;
  const errorMessage = document.getElementById("error-message");
  const infoContainer = document.getElementById("info-container");
  const formContainer = document.getElementById("form-container");

  // Kiểm tra định dạng email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.classList.remove("hide");
    return;
  }

  // Ẩn form và hiển thị thông tin cá nhân
  errorMessage.classList.add("hide");
  formContainer.classList.add("hide");
  infoContainer.classList.remove("hide");
}

/* Ẩn thông tin cá nhân */

function toggleContent() {
  var displayNone_content = document.getElementById("experience_content");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}

function toggleContent1() {
  var displayNone_content = document.getElementById("experience_content1");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card1" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}

function toggleContent2() {
  var displayNone_content = document.getElementById("experience_content2");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card2" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}

function toggleContent3() {
  var displayNone_content = document.getElementById("experience_content3");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card3" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}

function toggleContent4() {
  var displayNone_content = document.getElementById("experience_content4");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card4" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}

function toggleContent5() {
  var displayNone_content = document.getElementById("experience_content5");

  //The corrected code will select the button within the div that has the id="experience_card".
  var button = document.querySelector("#experience_card5" + " button");

  if (
    displayNone_content.style.display === "none" ||
    displayNone_content.style.display === ""
  ) {
    displayNone_content.style.display = "block"; //hiện ra
    button.textContent = "View Less";
  } else {
    displayNone_content.style.display = "none";
    button.textContent = "View More";
  }
}
