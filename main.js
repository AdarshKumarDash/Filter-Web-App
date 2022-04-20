noseY = "";
noseX = "";

function preload() {
    mustacheimg = loadImage("https://i.postimg.cc/sgyg1yXK/mustache-161330-1280.webp");
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    pose_net = ml5.poseNet(video, modelloaded)
    pose_net.on("pose", gotposes)
}

function draw() {
    image(video,  0, 0, 640, 480);
    image(mustacheimg, noseX - 110, noseY - 80);
}

function takesnap() {
    save("mustacheuser.png");
}

function modelloaded() {
    console.log("posenet is initialized");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        noseY = results[0].pose.nose.y;
        noseX = results[0].pose.nose.x;
        console.log("noseY = " + noseY + " noseX = " + noseX);
    }
}