var spread_slider;
var number_slider;
var color_slider;
var glow_slider;
var rotate_checkbox;
var stars = [];

var spread = 5;
var num_stars= 9;
var color_shift= 128;
var glow= 11;

function setup() {

    createCanvas(768,512, WEBGL);
    background(0,0,0,0);

    var div = createDiv('Spread');
    spread_slider= createSlider(1, 10, spread);
    var div = createDiv('Number of stars');
    number_slider= createSlider(3, 18, num_stars);
    var div = createDiv('Color Shift');
    color_slider= createSlider(50, 200, color_shift);
    var div = createDiv('Glow');
    glow_slider= createSlider(6, 16, glow);
    rotate_checkbox = createCheckbox('  Rotate?', false);


}

function draw() {
    background(0);

    if (rotate_checkbox.checked()){
        rotateY(frameCount * 0.01);
    }

    spread = spread_slider.value();
    num_stars= number_slider.value();
    color_shift= color_slider.value();
    glow= glow_slider.value();

    for (var i = 0; i < num_stars; i++) {
      var position={};
      position.x= random(-768, 768);
      position.y= random(-512, 512);
      position.z= random(-768, 768);
      stars.push(position);
    }

    noStroke();

   for (var i = 0; i < num_stars; i++) {
     push();
     translate(spread*0.1*stars[i].x, spread*0.1*stars[i].y, spread*0.1*stars[i].z);
     var c1;
     if (color_shift<128) {
       c1=color(255,color_shift*2, color_shift*2, glow);
     }
     else if (color_shift>=128) {
       c1 = color((255-color_shift)*2, (255-color_shift)*2, 255, glow);
     }
     var c2 = color(255,255,255,0);
     for (var r = glow; r > 0; --r) {
       fill(lerpColor(c1, c2, r/glow));
       sphere(r);
     }
     pop();
   }
   fill(255,255, 255,255);

    for (var i = 0; i < num_stars; i++) {
      push();
      translate(spread*0.1*stars[i].x, spread*0.1*stars[i].y, spread*0.1*stars[i].z);
      sphere(2);
      pop();
    }

}
