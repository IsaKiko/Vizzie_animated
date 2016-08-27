var x1 = 56
var x2 = 50
var x3 = 45
var x4 = 71
var x5 = 63
var x6 = 65
var x7 = 76
var x8 = 75

var y1 = 199
var y2 = 175
var y3 = 186
var y4 = 205
var y5 = 183
var y6 = 172
var y7 = 192
var y8 = 180

var r1 = 9
var r2 = 5
var r3 = 6
var r4 = 5
var r5 = 6
var r6 = 3
var r7 = 6
var r8 = 5



d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

d3.selection.prototype.moveToBack = function() {  
    return this.each(function() { 
        var firstChild = this.parentNode.firstChild; 
        if (firstChild) { 
            this.parentNode.insertBefore(this, firstChild); 
        } 
    });
};


var mommy = d3.select("#mommy");
mommy.append('path').attr('fill','none').attr('stroke','rgb(116, 192, 223)').attr('stroke-width','3')
.attr('stroke-dasharray',"150.00 150.00")
.attr('stroke-dashoffset',"0.00")
.attr('class','path')
.attr('d','M50,175 L45,186 L56,199 L71,205 L56,199 L76,192 L75,180 L76,192 L63,183 L65,172')

mommy.append('path').attr('fill', 'rgb(255,255,254)').attr('id','sparkle')
.attr('d', "M113.249,170.258 C116.709,166.908 119.491,166.021 119.491,166.021 C119.491,166.021 116.436,165.596 111.615,160.316 C112.014,156.968 113.055,155.059 113.055,155.059 C113.055,155.059 111.274,156.003 108.568,156.731 C103.589,150.486 103.358,147.955 103.358,147.955 C103.358,147.955 103.409,150.437 98.064,157.316 C94.626,156.742 93.085,155.515 93.085,155.515 C93.085,155.515 94.127,157.438 94.435,161.463 C90.662,165.022 87.222,165.953 87.222,165.953 C87.222,165.953 89.529,166.405 93.94,170.272 C93.325,173.827 92.506,175.433 92.506,175.433 C92.506,175.433 93.027,174.484 97.461,173.687 C103.689,180.305 104.044,184.411 104.044,184.411 C104.044,184.411 104.172,180.907 110.446,173.353 C113.702,173.776 115.854,174.413 115.854,174.413 C115.854,174.413 114.463,172.761 113.249,170.258")
// .attr('d', "M113.249,170.258 C116.709,166.908 119.491,166.021 119,166.021 C119.491,166.021 116.436,165.596 111.615,160.316 C112.014,156.968 113.055,155.059 113.055,155.059 C113.055,155.059 111.274,156.003 108.568,156.731 C103.589,150.486 103.358,147.955 103.358,147.955 C103.358,147.955 103.409,150.437 98.064,157.316 C94.626,156.742 93.085,155.515 93.085,155.515 C93.085,155.515 94.127,157.438 94.435,161.463 C90.662,165.022 87.222,165.953 87.222,165.953 C87.222,165.953 89.529,166.405 93.94,170.272 C93.325,173.827 92.506,175.433 92.506,175.433 C92.506,175.433 93.027,174.484 97.461,173.687 C103.689,180.305 104.044,184.411 104.044,184.411 C104.044,184.411 104.172,180.907 110.446,173.353 C113.702,173.776 115.854,174.413 115.854,174.413 C115.854,174.413 114.463,172.761 113.249,170.258")

mommy.append('path').attr('fill', 'rgb(116, 192, 223)')
.attr('d', "M111.338,166.019 C111.338,170.223 107.908,173.633 103.679,173.633 C99.445,173.633 96.017,170.223 96.017,166.019 C96.017,161.814 99.445,158.406 103.679,158.406 C107.908,158.406 111.338,161.814 111.338,166.019")
mommy.append('path').attr('fill', 'rgb(103, 79, 144)')
.attr('d', "M103.679,159.455 C100.035,159.455 97.073,162.399 97.073,166.019 C97.073,169.638 100.035,172.583 103.679,172.583 C107.321,172.583 110.284,169.638 110.284,166.019 C110.284,162.399 107.321,159.455 103.679,159.455 z M103.679,174.679 C98.872,174.679 94.963,170.794 94.963,166.019 C94.963,161.244 98.872,157.359 103.679,157.359 C108.482,157.359 112.392,161.244 112.392,166.019 C112.392,170.794 108.482,174.679 103.679,174.679")
mommy.append('path').attr('fill', 'rgb(255,255,254)')
.attr('d', "M108.015,166.019 C108.015,168.411 106.064,170.351 103.656,170.351 C101.25,170.351 99.298,168.411 99.298,166.019 C99.298,163.626 101.25,161.688 103.656,161.688 C106.064,161.688 108.015,163.626 108.015,166.019")

// mommy.append('circle').attr('r', r1).attr('cx',104).attr('cy',165)

mommy.append('circle').attr('r', r1).attr('cx',x1).attr('cy',y1).attr('fill','rgb(116, 192, 223)').attr('class','c1').attr('id','c11')
mommy.append('circle').attr('r', r2).attr('cx',x2).attr('cy',y2).attr('fill','rgb(116, 192, 223)').attr('class','c2').attr('id','c21')
mommy.append('circle').attr('r', r3).attr('cx',x3).attr('cy',y3).attr('fill','rgb(116, 192, 223)').attr('class','c3').attr('id','c31')
mommy.append('circle').attr('r', r4).attr('cx',x4).attr('cy',y4).attr('fill','rgb(116, 192, 223)').attr('class','c4').attr('id','c41')
mommy.append('circle').attr('r', r5).attr('cx',x5).attr('cy',y5).attr('fill','rgb(116, 192, 223)').attr('class','c5').attr('id','c51')
mommy.append('circle').attr('r', r6).attr('cx',x6).attr('cy',y6).attr('fill','rgb(116, 192, 223)').attr('class','c6').attr('id','c61')
mommy.append('circle').attr('r', r7).attr('cx',x7).attr('cy',y7).attr('fill','rgb(116, 192, 223)').attr('class','c7').attr('id','c71')
mommy.append('circle').attr('r', r8).attr('cx',x8).attr('cy',y8).attr('fill','rgb(116, 192, 223)').attr('class','c8').attr('id','c81')

mommy.append('circle').attr('r', r1-2).attr('cx',x1).attr('cy',y1).attr('fill','rgb(255, 255, 254)').attr('class','c1').attr('id','c12')
mommy.append('circle').attr('r', r2-2).attr('cx',x2).attr('cy',y2).attr('fill','rgb(255, 255, 254)').attr('class','c2').attr('id','c22')
mommy.append('circle').attr('r', r3-2).attr('cx',x3).attr('cy',y3).attr('fill','rgb(255, 255, 254)').attr('class','c3').attr('id','c32')
mommy.append('circle').attr('r', r4-2).attr('cx',x4).attr('cy',y4).attr('fill','rgb(255, 255, 254)').attr('class','c4').attr('id','c42')
mommy.append('circle').attr('r', r5-2).attr('cx',x5).attr('cy',y5).attr('fill','rgb(255, 255, 254)').attr('class','c5').attr('id','c52')
mommy.append('circle').attr('r', r6-2).attr('cx',x6).attr('cy',y6).attr('fill','rgb(255, 255, 254)').attr('class','c6').attr('id','c62')
mommy.append('circle').attr('r', r7-2).attr('cx',x7).attr('cy',y7).attr('fill','rgb(255, 255, 254)').attr('class','c7').attr('id','c72')
mommy.append('circle').attr('r', r8-2).attr('cx',x8).attr('cy',y8).attr('fill','rgb(255, 255, 254)').attr('class','c8').attr('id','c82')


mommy.on('click',move)

// var a = d3.select('#a')

// a.on('click', function(d) {
//             d3.select(this).moveToBack();
//         });  

function move(){

d3.select('.path').transition().duration(1000).ease('linear')
	.attr('stroke-dashoffset', 150)

d3.select('#sparkle')
	.transition().duration(150).ease('quad-in-out')
	.attr('transform',"matrix(0.8, 0, 0, 0.8, "+ (104-0.8*104) +"," + (165-0.8*165) + ")")
	.transition().duration(100).ease('quad-in-out')
	.attr('transform',"matrix(1, 0, 0, 1, "+ (104-1*104) +"," + (165-1*165) + ")")
	.transition().duration(150).ease('quad-in-out')
	.attr('transform',"matrix(0.8, 0, 0, 0.8, "+ (104-0.8*104) +"," + (165-0.8*165) + ")")
	.transition().duration(100).ease('quad-in-out')
	.attr('transform',"matrix(1, 0, 0, 1, "+ (104-1*104) +"," + (165-1*165) + ")")

// C1
d3.selectAll('.c1').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+104).attr('cy',y1+39) 
	.each("end", function(){d3.select('#c12').moveToBack(); d3.select('#c11').moveToBack(); });

d3.selectAll('.c1').transition().delay(2650).duration(650).ease('quad-in-out').attr('cx',x1-31).attr('cy',y1-21)
	.each("end", function(){d3.select('#c11').moveToFront(); d3.select('#c12').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x1).attr('cy',y1);

// C2
d3.selectAll('.c2').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+113).attr('cy',y2-3) 
	.each("end", function(){d3.select('#c22').moveToBack(); d3.select('#c21').moveToBack(); });

d3.selectAll('.c2').transition().delay(2650).duration(750).ease('quad-in-out').attr('cx',x1-38).attr('cy',y2+5)
	.each("end", function(){d3.select('#c21').moveToFront(); d3.select('#c22').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x2).attr('cy',y2);

// C3
d3.selectAll('.c3').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+99).attr('cy',y3-4) 
	.each("end", function(){d3.select('#c32').moveToBack(); d3.select('#c31').moveToBack(); });

d3.selectAll('.c3').transition().delay(2650).duration(700).ease('quad-in-out').attr('cx',x1-30).attr('cy',y3+1)
	.each("end", function(){d3.select('#c31').moveToFront(); d3.select('#c32').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x3).attr('cy',y3);

// C4
d3.selectAll('.c4').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+112).attr('cy',y4+39) 
	.each("end", function(){d3.select('#c42').moveToBack(); d3.select('#c41').moveToBack(); });

d3.selectAll('.c4').transition().delay(2650).duration(600).ease('quad-in-out').attr('cx',x1-35).attr('cy',y4-21)
	.each("end", function(){d3.select('#c41').moveToFront(); d3.select('#c42').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x4).attr('cy',y4);

// C5
d3.selectAll('.c5').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+100).attr('cy',y5-39) 
	.each("end", function(){d3.select('#c52').moveToBack(); d3.select('#c51').moveToBack(); });

d3.selectAll('.c5').transition().delay(2650).duration(620).ease('quad-in-out').attr('cx',x1-39).attr('cy',y5+21)
	.each("end", function(){d3.select('#c51').moveToFront(); d3.select('#c52').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x5).attr('cy',y5);

// C6
d3.selectAll('.c6').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+120).attr('cy',y6-39) 
	.each("end", function(){d3.select('#c62').moveToBack(); d3.select('#c61').moveToBack(); });

d3.selectAll('.c6').transition().delay(2650).duration(720).ease('quad-in-out').attr('cx',x1-36).attr('cy',y6+21)
	.each("end", function(){d3.select('#c61').moveToFront(); d3.select('#c62').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x6).attr('cy',y6);	

// C7
d3.selectAll('.c7').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+104).attr('cy',y7+39) 
	.each("end", function(){d3.select('#c72').moveToBack(); d3.select('#c71').moveToBack(); });

d3.selectAll('.c7').transition().delay(2650).duration(710).ease('quad-in-out').attr('cx',x1-33).attr('cy',y7-21)
	.each("end", function(){d3.select('#c71').moveToFront(); d3.select('#c72').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x7).attr('cy',y7);	

// C8
d3.selectAll('.c8').transition().delay(2000).duration(650).ease('quad-in-out').attr('cx',x1+109).attr('cy',y8-39) 
	.each("end", function(){d3.select('#c82').moveToBack(); d3.select('#c81').moveToBack(); });

d3.selectAll('.c8').transition().delay(2650).duration(620).ease('quad-in-out').attr('cx',x1-32).attr('cy',y8+21)
	.each("end", function(){d3.select('#c81').moveToFront(); d3.select('#c82').moveToFront(); })
	.transition().duration(650).ease('quad-in-out').attr('cx',x8).attr('cy',y8);	


d3.select('.path').transition().delay(4300).duration(1000).ease('linear')
	.attr('stroke-dashoffset', 0)

// var svg = d3.selectAll("svg")

function resize(selection) {
    selection.style("height", function(d) {
      this.style.height = "auto";
      var rect = this.getBoundingClientRect(),
          height = rect.width / d.aspect;
      return isFinite(height)
        ? Math.ceil(height) + "px"
        : null;
    });
  }

mommy.datum(function() {
	console.log(this)
  var viewBox = this.getAttribute("viewBox").split(" "),
      size = viewBox.slice(2),
      width = size[0],
      height = size[1],
      aspect = width / height;
  return {
    viewBox: viewBox,
    width: width,
    height: height,
    aspect: aspect
  };
})
.call(resize);


}