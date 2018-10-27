var spread_slider;
var number_slider;
var color_slider;
var glow_slider;
var rotate_checkbox;
var stars = [];

function setup() {

    createCanvas(768,512, WEBGL);
    background(0,0,0,0);

    var div = createDiv('Spread');
    spread_slider= createSlider(1, 10, 5);
    var div = createDiv('Number of stars');
    number_slider= createSlider(3, 18, 9, 1);
    var div = createDiv('Color Shift');
    color_slider= createSlider(50, 200, 128);
    var div = createDiv('Glow');
    glow_slider= createSlider(0,50,25);
    rotate_checkbox = createCheckbox('  Rotate?', false);

}

function draw() {
    background(0);

    var spread = spread_slider.value();
    var num_stars= number_slider.value();
    var color_shift= color_slider.value();
    var glow= glow_slider.value();

    if (rotate_checkbox.checked()){
        rotateY(frameCount * 0.01);
    }
    
    for (var i = 0; i < num_stars; i++) {
      var position={};
      position.x= random(-768, 768);
      position.y= random(-512, 512);
      position.z= random(-768, 768);
      stars.push(position);
    }

    noStroke();
    if (color_shift<128) {
      fill(255,color_shift*2, color_shift*2);
    }
    else if (color_shift>128) {
      fill((255-color_shift)*2, (255-color_shift)*2, 255);
    }


    for (var i = 0; i < num_stars; i++) {
      push();
      translate(spread*0.1*stars[i].x, spread*0.1*stars[i].y, spread*0.1*stars[i].z);
      sphere(3);
      pop();
    }


    orbitControl();
}
