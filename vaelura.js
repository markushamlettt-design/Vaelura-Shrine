// Simple glyph drawing logic
const canvas = document.getElementById("glyphCanvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
ctx.strokeStyle = "#e0d7ff";
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 80, 0, 2 * Math.PI);
ctx.stroke();
