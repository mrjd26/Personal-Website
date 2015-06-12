//globals declarations
var ltx = 390;
var lty = 50;
var mtx = 390;
var mty = 50;
var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");

// draws the Html5 Canvas lines
function draw(x_start, y_start, x_end, y_end, x_change, y_change) {
  ctx.moveTo(x_start,y_start);
  ctx.lineTo(x_end,y_end);
  ctx.stroke();
  ltx = x_end + x_change;
  lty = y_end + y_change;
}

//handles the logic for the angled line(s)
var check = function(){
 if(lty < 100){
  ctx.beginPath();
  x_change = -4;
  y_change = 4;
  draw(mtx,mty,ltx,lty,x_change,y_change);
  setTimeout(check,1);
  ctx.closePath();
 } else {
  console.log('end check 1');
 }
}

//handles the logic for the straight line
var check2 = function(){
  if (lty >= 100 && ltx > 0) {
   ctx.beginPath();
   x_change = -8;
   y_change = 0;
   draw(mtx,mty,ltx,lty,x_change,y_change);
   setTimeout(check2,1);
   ctx.closePath();
  } else {
   console.log('done');
  }
}

// the animation of all 3 lines being drawn on the canvas
function animate(){
  check();
  setTimeout(function(){
  mtx = 495;
  mty = 25;
  ltx = 495;
  lty = 25;
  }, 700);
  setTimeout(check,700);
  setTimeout(function(){
  mtx = 423;
  mty = 100;
  ltx = 423;
  lty = 100;
  }, 1500);
  setTimeout(check2,1500);
}

function clearCanvas(){
 // top left, width x height of canvas
 ctx.clearRect(0,0,700,150);
}
function reDraw(){
  ctx.fillStyle = "#003147";
  ctx.font = "20pt Verdana";
  ctx.fillText("Mike Jarvis's Portfolio",50,75);
  ctx.beginPath();
  ctx.arc(395,50,5,0,2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(500,20,5,0,2*Math.PI);
  ctx.stroke();
}

  /***********************
   start jquery doc ready
  ***********************/
$( document ) .ready(function(){

 $("#myCanvas").click(function() {
  ltx = 390;
  lty = 50;
  mtx = 390;
  mty = 50;

  clearCanvas();
  reDraw();
  setTimeout(animate,500);
 });

 /* skills box */
 $(".desc").mouseenter(function(){
  var e = this.id;
  if (e == 'python') {
   var inner = "<h3>Top Skills</h3><br><p><ul><li>Jquery</li><li>Python</li><li>Django</li><li>JSON</li><li>HTML/CSS/Javascript</li><li>App Engine</li></ul></p>";
   $(this).css({'color':'#0B39D5'});
  }  else if (e =='chem') {
    var inner = "<h3>Top Skills</h3><br><p><ul><li>DeltaV</li><li>Reactors</li><li>DCS</li><li>Forklift</li><li>Industrial tools</li><li>Railcars</li><li>Trucks</li></ul></p>";
$(this).css({'color':'#0B39D5'});
  }  else if (e == 'ion') {
    var inner = "<h3>Top Skills</h3><br><p><ul><li>Battery</li><li>Machine Shop</li><li>EE Lab</li><li>Prototype</li><li>Mechanical</li><li>R&D</li><li>Hardware</li></ul></p>";
   $(this).css({'color':'#0B39D5'});
  }  else if (e == 'env') {
    var inner = "<h3>Top Skills</h3><br><p><ul><li>Chemistry</li><li>Biology</li><li>Geology</li><li>Statistics</li><li>Env. Science</li><li>Sustainability</li></ul></p>";
   $(this).css({'color':'#0B39D5'});
  }  else if (e =='glass'){
    var inner = "<h3>Top Skills</h3><br><p><ul><li>Lab Creation</li><li>Lab Management</li><li>Data Analysis</li><li>Product Dev</li><li>Software</li></ul></p>";
   $(this).css({'color':'#0B39D5'});
  }
  $("#skill_box").css({'visibility':'visible'}).html(inner);
 });

 $(".desc").mouseout(function(){
  $("#skill_box").css({'visibility':'hidden'});
  $(this).css({'color':'white'});
 });

 /* soundcloud delivery */
 $(".musc").mouseenter(function(){
   var inner = '<div><ul><li class="sound"><iframe width="100%" height="90" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208836074&amp;color=0b39d5&amp;auto_play=false&amp;hide_related=false&amp;download=false&amp;buying=false&amp;show_comments=false&amp;enable_api=false&amp;sharing=false&amp;show_user=false&amp;show_artwork=false&amp;show_playcount=false&amp;show_bpm=false&amp;show_reposts=false"></iframe></li><li><iframe width="100%" height="90" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208842961&amp;color=0b39d5&amp;auto_play=false&amp;hide_related=false&amp;download=false&amp;buying=false&amp;show_comments=false&amp;enable_api=false&amp;sharing=false&amp;show_user=false&amp;show_artwork=false&amp;show_playcount=false&amp;show_bpm=false&amp;show_reposts=false"></iframe></li></ul></div>';
  $(this).css({'color':'#0B39D5'});
  $("#skill_box").css({'visibility':'visible'}).html(inner);
 });

 $(".musc").mouseout(function(){
  $(this).css({'color':'white'});
 });

 $("#solar,#Tesla,#Google,#truck,#motorcycle").tooltip();

$("#accordion").accordion({
 active: false,
 collapsible: true,
 heightStyle: "content",
});

 /****************************
 photoswipe plugin
 ***************************/

 function openPhotoSwipe(target){

 var pswpElement = document.querySelectorAll('.pswp')[0];

 /********** my picture grabber ******************/
 $.getJSON("/json_maker/", { target: target.id } )
  .done(function( json ) {
   console.log(json);
   var items = json;

   // define options (if needed)
   var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
   };

   // Initializes and opens PhotoSwipe
   var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
   gallery.init();
  });
 };

 /** handles picture gallery folders
    each needs specific handler **/
 $('#solar').click(function() { openPhotoSwipe(this)});
 $('#motorcycle').click(function() {openPhotoSwipe(this)});
 $('#truck').click(function() {openPhotoSwipe(this)});
 $('#Google').click(function() {openPhotoSwipe(this)});
 $('#Tesla').click(function() {openPhotoSwipe(this)});

 //jquery-ui css framework override
 $('#about_box.ui-accordion-content, #youtube_box.ui-accordion-content').css({'padding-left':'0','padding-right':'0'});
 $('#codepen_pen.ui-accordion-content, #main_container.ui-accordion-content').css({'padding':'0'});
 $('#projects.ui-accordion-content, #youtube_box.ui-accordion-content').css({'padding':'10px 0 10px 0'});

 var is_open = false;

 $('#resume').click(function(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  var width = w/1.5;
  var height = h/1.1;
  var marginLeft = - (width / 2); 
  var marginTop =  - (height / 2);
  $('#popup').css({'display':'block','height':height+'px','width':width+'px','margin-left':marginLeft,'margin-top':marginTop}).draggable().resizable();
  if (is_open) {
   // close popup and set to false
  setTimeout(function(){is_open = false; $('#popup').css({'display':'none'})},500);
  } else {
  setTimeout(function(){is_open = true;}, 500);
  }
 });
 
 $('#background, #close').click(function(){
  console.log("background was clicked",is_open);
  if (is_open && ($('#popup').css('display') != 'none')) {
   console.log("this condition executing");
   $('#popup').css({'display':'none'});
   is_open = false;
  } 
 });
 
//end document.ready
});
