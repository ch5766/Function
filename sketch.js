function setup()
{
	createCanvas(800, 800);
	
}

function draw()
{
	background(255);
	fill(0);
	ellipse(mouseX, mouseY, 100, 100);

	drawDonut(50,70,80,100,100);
	drawDonut(60,170,80,500,500);
	drawDonut(50,150,80,600,600);
	drawDonut(50,70,190,700,700);
}

function drawDonut(r, g, b, x, y)
{
	// doughnut #1
	fill(r,g,b);
	ellipse(x, y, 200, 200);
	fill(255);
	ellipse(x, y, 120, 120);
}