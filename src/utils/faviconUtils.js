export function updateFaviconWithNotification() {
  const canvas = document.createElement("canvas");
  const size = 128; // Increased size of the favicon
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = "/logo.ico";

  img.onload = () => {
    ctx.drawImage(img, 0, 0, size, size);

    // Larger red circle
    const circleRadius = 18; // Increased circle radius
    ctx.beginPath();
    ctx.arc(size - 20, 20, circleRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "#e53935"; // Red color
    ctx.fill();

    // Larger "1" text
    const fontSize = 24; // Increased font size
    ctx.font = `bold ${fontSize}px sans-serif`;
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText("1", size - 20, 20 + fontSize / 4); // Adjusted position for bigger text

    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = canvas.toDataURL("image/png");
    }
  };
}

export function resetFavicon() {
  const favicon = document.querySelector("link[rel='icon']");
  if (favicon) {
    favicon.href = "/logo.ico";
  }
}
