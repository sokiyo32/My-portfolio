
s = document.createElement("script");
s.src =chrome.extension.getURL("src/youtubeDL.js");

s.onload = function () {
    this.remove();

}

document.head.appendChild(s);

