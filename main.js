var stage = Snap("#face");
var g = stage.select("#hair");

g.attr({
  transform: "scale(0,0,100,0)"
});

g.select("#nose").attr({
  transform: "scale(1,0)"
});


g.selectAll(".text").attr({
  transform: "scale(0,1,10,10)"
});


g.animate({
  transform: "scale(1,1)"
}, 2500, mina.elastic);

setTimeout(function(){

  g.select("#nose").animate({
    transform: "scale(1,1)"
  }, 2000, mina.bounce);


  setTimeout(function(){
    g.select("#browright").animate({
      transform: "scale(1,1,50,0)"
    }, 3000, mina.elastic);
  },200);


  setTimeout(function(){
    g.select("#browleft").animate({
      transform: "scale(1,1,50,0)"
    }, 3000, mina.elastic);
  },500);


  setTimeout(function(){
    g.select("#eyeLeft").animate({
      transform: "scale(1,1,0,0)"
    }, 3000, mina.elastic);
  },800);

  setTimeout(function(){
    g.select("#eyeRight").animate({
      transform: "scale(1,1,0,0)"
    }, 3000, mina.elastic);
  },1100);

  setTimeout(function(){
    g.select("#mouth").animate({
      transform: "scale(1,1,0,0)"
    }, 3000, mina.elastic);
  },1400);


},200);