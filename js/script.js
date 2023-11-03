let navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px"
}

// simple dark mode - without local storages
// function modeBtn() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }


// simple dark mode - without local storages
const modeBtn = document.getElementById("mode-btn");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
    theme.classList.add("dark-mode");
    modeBtn.classList.remove("dark-mode-btn");
    localStorage.setItem("dark-mode", "enabled");
  };

  const disableDarkMode = () => {
    theme.classList.remove("dark-mode");
    modeBtn.classList.add("dark-mode-btn");
    localStorage.setItem("dark-mode", "disabled");
  };

  if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }
  
  modeBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
      document.getElementById('mode-btn').innerHTML="Light Mode"; //change buttin text to light mode
    } else {
      disableDarkMode();
      document.getElementById('mode-btn').innerHTML="Dark Mode"; //change buttin text to dark mode
    }
  });

