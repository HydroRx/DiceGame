// Define the function
function onReload() {
    var rannum = Math.floor((Math.random() * 6)) + 1;
    var rannum2 = Math.floor((Math.random() * 6)) + 1;
  
    var a = document.getElementsByClassName("img1");
    var b = document.getElementsByClassName("img2");
  
    a[0].src = "./images/dice" + rannum + ".png";
    b[0].src = "./images/dice" + rannum2 + ".png";
  
    if (rannum === rannum2) {
      document.querySelector("h1").textContent = "It's a draw!";
    } else if (rannum > rannum2) {
      document.querySelector("h1").textContent = "Player 1 wins!";
    } else if (rannum < rannum2) {
      document.querySelector("h1").textContent = "Player 2 wins!";
    }
  }
  
  // Attach the function to the window.onload event
window.onload = onReload;
  