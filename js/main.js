

var images = ['../img/wrxSlid.jpg', '../img/audiSlid.jpg', '../img/hondaSlid.jpg', '../img/fordSlid.jpg', '../img/porSlid.jpg'];


var i = 0;
function carSlider(){
    document.getElementById('slider').src = images[i];

    if(i < images.length - 1){
        i++;
    }else{
        i = 0;
    }

    setTimeout('carSlider()', 2000);
};
