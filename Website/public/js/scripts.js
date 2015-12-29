var img_1 = "img/CE50-35-BK_SN090.JPG"
var img_2 = "img/CE75-61-BK_SN142.jpg"
var img_3 = "img/CS5-5-50-CC_SNXXX.jpg"
var img_4 = "img/F050-35-AL-RC_SN002.jpg"
var img_5 = "img/FF75-262-SA-ET1_SN158.jpg"
var img_6 = "img/FO15-44-BE-Custom.JPG"
var img_7 = "img/LHDC's Small FSM Family.jpg"
var img_8 = "img/FO100-175-BE-HB2_SN144.jpg"
var img_9 = "img/FO100-175-ZD-RC_SN046.jpg"
var img_10 = "img/FR150-35-ZDSC_SN066.jpg"
var img_11 = "img/Product Family.jpg"
var img_12 = "img/USA Mirrors.jpg"
var img_13 = "img/Beam Steering Mechanisms.jpg"
var img_14 = "img/LHDC's Large FSM Family.jpg"

var maxI = 10;
var imgChange = null;
var i = "";
//newSrc ="";
var prevI = "1";

if ($('#headline_img')) {
   
$(window).load(function(){
    var here=window.location.href.split("/").pop();
//    console.log(here)
    if (here===""){
    var height = $('#headline_photo').outerHeight();
    $('#showcase').height(height);
    var img_height = $('#headline_img').outerHeight()
    window.setTimeout( changeIMG,1000)
    window.setTimeout( imgShuffle(img_height),1000)
    } 
})
}

function imgShuffle(img_height){
    $('#headline_img').height(img_height);
    $('#headline_photo').hover(function(){
        clearInterval(imgChange)
    },  function(){
        changeIMG(img_height)
       }
    )}


changeIMG = function(){
    imgChange = window.setInterval( newImg, 7000)
}
        
newImg = function(){
      newSrc  = ""
    i = Math.ceil(((Math.random())*maxI)).toString();
    console.log(i)
    if (i === prevI) {
   i = i+1;
  }
    if (i>maxI) {
        i=1;
    }
    imgTag = "img_" + i;
    newSrc = window[imgTag]
    console.log(newSrc)
    d= new Date()
    $('#headline_text').text(newSrc.replace(/img./g,"").replace(/.jpg/g,"").replace(/_SN.../g,""))
    $('#headline_link').attr('href', newSrc.replace(/img/g,"photo"))
$('#headline_img').attr('src', newSrc + "?" + d.getTime())
    prevI = i;
    console.log(prevI)
}        

//}
//        
//    })
//}