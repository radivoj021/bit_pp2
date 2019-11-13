/* $("li:first").css({ "border-bottom": "1px solid" });

$("ul").css({ "text-transform": "uppercase" });

$(".active").addClass("fontColor");

$("li")
  .eq(2)
  .addClass("bcgColor");

$(function() {
  console.log("Welcome");
}); */

var place = $("<div>");

var imagesArray = [];
imagesArray.push(
  "<img src='https://s7d2.scene7.com/is/image/academy/20084685?$m-pdp-product-image$'/>",
  "<img src='http://www.beretta.com/assets/12/13/580x435_APX1.jpg'/>",
  "<img src='https://www.theglobeandmail.com/resizer/LUjuPJWoBlO0v1xwCoaO90LeROE=/620x0/filters:quality(80)/arc-anglerfish-tgam-prod-tgam.s3.amazonaws.com/public/3NXCEHKZAZD5XN7TLHIFE2JFMY.JPG'/>",
  "<img src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Bashar_al-Assad_%282018-05-17%29_03.jpg'/>",
  "<img src='https://imageproxy.themaven.net/https%3A%2F%2Fimages.saymedia-content.com%2F.image%2FMTY2NzA2NzA1MzE1NDA3MTQw%2Fpistol---guns-_-jason-gillman.jpg'/>",
  "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTRZmpfnuRjmZg_9pgegP_x1udDbEW7SOt66fBmbVeATRnkVv&s'/>"
);
for (var i = 0; i < imagesArray.length; i++) {
  place.append(imagesArray[i]);
}

$("body").append(place);

var images = $("img");

for (var i = 0; i < images.length; i++) {
  images.eq(i).css("width", `${100 + Math.random() * 200}px`);
}

place.addClass("divPosition");

console.log(images[1]);
