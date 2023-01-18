function preload() {
	world_start = loadSound("world_start.wav");
	world_end = loadSound("gameover.wav");
	mario_die = loadSound("mariodie.wav");
	mario_kill = loadSound("kick.wav");
	mario_jump = loadSound("jump.wav");
	mario_collect_coin = loadSound("coin.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent("canvas");
	video = createCapture(VIDEO);
	video.size(830, 400)
	video.parent("game_console")
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on("pose", gotPoses)
	instializeInSetup(mario);
}

function draw() {
	game();
}

function modelLoaded() {
	console.log("Model Loaded");
}

function gotPoses(results) {
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}
