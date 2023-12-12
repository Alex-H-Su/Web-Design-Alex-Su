// script.js

document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("mountainCanvas");
    var ctx = canvas.getContext("2d");

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw mountain range
    drawMountains(ctx, canvas.width, canvas.height);

    // Add snow to the mountain peaks
    addSnowToPeaks(ctx, canvas.width, canvas.height);
});

function drawMountains(ctx, width, height) {
    // Set the background color
    ctx.fillStyle = "#87CEEB"; // Light blue sky
    ctx.fillRect(0, 0, width, height);

    // Draw mountains
    ctx.fillStyle = "#228B22"; // Green color for mountains

    var mountainHeight = height * 0.6;
    var mountainWidth = width / 3;

    for (var i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(i * mountainWidth, height);
        ctx.lineTo(i * mountainWidth + mountainWidth / 2, height - mountainHeight);
        ctx.lineTo((i + 1) * mountainWidth, height);
        ctx.closePath();
        ctx.fill();
    }
}

function addSnowToPeaks(ctx, width, height) {
    // Add snow to the mountain peaks
    ctx.fillStyle = "#FFFFFF"; // White color for snow

    var mountainHeight = height * 0.6;
    var mountainWidth = width / 3;

    for (var i = 0; i < 3; i++) {
        // Draw snow on the top of each mountain
        ctx.beginPath();
        ctx.moveTo(i * mountainWidth + mountainWidth / 2 - 20, height - mountainHeight);
        ctx.lineTo(i * mountainWidth + mountainWidth / 2 + 20, height - mountainHeight);
        ctx.lineTo(i * mountainWidth + mountainWidth / 2, height - mountainHeight - 30);
        ctx.closePath();
        ctx.fill();
    }
}
