document.getElementById("bold").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  if (
    paragraph.style.fontWeight === "bold" ||
    window.getComputedStyle(paragraph).fontWeight === "bold"
  ) {
    paragraph.style.fontWeight = "normal";
  } else {
    paragraph.style.fontWeight = "bold";
  }
});

document.getElementById("italic").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  if (
    paragraph.style.fontStyle === "italic" ||
    window.getComputedStyle(paragraph).fontStyle === "italic"
  ) {
    paragraph.style.fontStyle = "normal";
  } else {
    paragraph.style.fontStyle = "italic";
  }
});

document.getElementById("underline").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  if (
    paragraph.style.textDecoration === "underline" ||
    window.getComputedStyle(paragraph).textDecoration === "underline"
  ) {
    paragraph.style.textDecoration = "none";
  } else {
    paragraph.style.textDecoration = "underline";
  }
});

document.getElementById("align-left").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  const computedStyle = window.getComputedStyle(paragraph);
  if (computedStyle.textAlign === "left") {
    paragraph.style.textAlign = "initial";
  } else {
    paragraph.style.textAlign = "left";
  }
});

document.getElementById("align-center").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  const computedStyle = window.getComputedStyle(paragraph);
  if (computedStyle.textAlign === "center") {
    paragraph.style.textAlign = "initial";
  } else {
    paragraph.style.textAlign = "center";
  }
});

document.getElementById("align-right").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  const computedStyle = window.getComputedStyle(paragraph);
  if (computedStyle.textAlign === "right") {
    paragraph.style.textAlign = "initial";
  } else {
    paragraph.style.textAlign = "right";
  }
});

document.getElementById("align-justify").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  const computedStyle = window.getComputedStyle(paragraph);
  if (computedStyle.textAlign === "justify") {
    paragraph.style.textAlign = "initial";
  } else {
    paragraph.style.textAlign = "justify";
  }
});

document.getElementById("up-low").addEventListener("click", function () {
  const paragraph = document.getElementById("paragraph");
  const computedStyle = window.getComputedStyle(paragraph);
  if (computedStyle.textTransform === "uppercase") {
    paragraph.style.textTransform = "lowercase";
  } else {
    paragraph.style.textTransform = "uppercase";
  }
});

document.getElementById("favColor").addEventListener("input", function () {
  const paragraph = document.getElementById("paragraph");
  const color = this.value;

  paragraph.style.color = color;
});
