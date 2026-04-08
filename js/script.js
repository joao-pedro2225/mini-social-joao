let likeCount = 0;
let deslikeCount = 0;

let curtido = false;
let descurtido = false;

function curtir() {
  if (!curtido) {
    likeCount++;
    curtido = true;

    if (descurtido) {
      deslikeCount--;
      descurtido = false;
      document.getElementById("deslikeCount").innerText = deslikeCount;
    }
  } else {
    likeCount--;
    curtido = false;
  }

  document.getElementById("likeCount").innerText = likeCount;
}

function descutir() {
  if (!descurtido) {
    deslikeCount++;
    descurtido = true;

    if (curtido) {
      likeCount--;
      curtido = false;
      document.getElementById("likeCount").innerText = likeCount;
    }
  } else {
    deslikeCount--;
    descurtido = false;
  }

  document.getElementById("deslikeCount").innerText = deslikeCount;
}

document.getElementById("likeBtn").addEventListener("click", curtir);
document.getElementById("deslikeBtn").addEventListener("click", descutir);
