var jcrop_api,ratio;
function loadImage(e) {
	
	$('#preview_image').children().remove();
	var img01 = document.createElement('img');
	img01.src = e.target.result;
	img01.id = "target";
	ratio = 1;
	resize(img01);
	document.getElementById("preview_image").appendChild(img01);
	jQuery(function($){

    // How easy is this??
    
	var inix=0,iniy=0,inix2,iniy2;
	inix2 = Math.min(img01.width,img01.height);
	iniy1 = inix2;
    $('#target').Jcrop({
      onChange:   showCoords,
      onSelect:   showCoords,
	  aspectRatio: 1,
	  setSelect: [inix,iniy,inix2,iniy2]
    },function(){
      jcrop_api = this;
    });

  });
  
  $('#get_result').show();
}
function previewImage() {
 var reader = new FileReader();
 var file = document.getElementById("id_image_large").files[0];
 reader.readAsDataURL(file);
 reader.onload = loadImage;
}
$("#id_image_large").change(previewImage);


function makeImage(){
	if(document.getElementById("id_image_large").files.length == 0){
		alert("No image");
		return ;
	}
	var c = document.getElementById("myCanvas");
	
    var ctx = c.getContext("2d");
	ctx.canvas.width = 300;
	ctx.canvas.height = 300;
    // draw the shape we want to use for clipping
	ctx.beginPath();
	ctx.arc(150, 150, 140, 0, Math.PI*2, true); 
	ctx.closePath();
	ctx.fill();

	// change composite mode to use that shape
	ctx.globalCompositeOperation = 'source-in';

	
	var img = document.getElementById("target");
    ctx.drawImage(img, img_x/ratio, img_y/ratio, img_w/ratio, img_h/ratio,0 ,0,300,300);
	ctx.globalCompositeOperation = 'source-over';
	var addon=document.getElementById("addon");
	ctx.drawImage(addon,0,0);
	
	
	var link = document.createElement("a");    
    link.href = c.toDataURL("image/jpg", 1.0);

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = "image" + ".jpg";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
var img_x=0,img_y=0,img_w=300,img_h=300;
function showCoords(c)
  {
	  img_x = c.x;
	  img_y = c.y;
	  img_w = c.w;
	  img_h = c.h;
  };
  
$('#get_result').hide();

function resize(img01){
	var MAXlen = Math.max(img01.width,img01.height);
	if(MAXlen > 1024.0){
		ratio = 1024.0/MAXlen;
		img01.width = img01.width * ratio;
		img01.height = img01.height * ratio;
	}
}