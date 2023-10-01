const c1 = document.getElementById('color1');
const c2 = document.getElementById('color2');
const c3 = document.getElementById('color3');
const c4 = document.getElementById('color4');
const c5 = document.getElementById('color5');
const c6 = document.getElementById('color6');
const imgShow = document.getElementById('imgShow');
const dim = document.getElementById('dim');
const about = document.getElementById('about');
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

const changeColorButton = document.getElementById('changeColorButton');
const desk = document.querySelectorAll(".desc-head")

desk.forEach(e => e.addEventListener('click',function(){
    desk.forEach(d => d.classList.remove('active1'));
    this.classList.add('active1');
    

}));

about.addEventListener('click',function(){
  div2.style.display = "block";
  div1.style.display = "none";
});
dim.addEventListener('click',function(){
    div2.style.display = "none";
    div1.style.display = "block";
  });


c1.addEventListener('click',function(){
    imgShow.src="./images/chair1.png";
    changeColorButton.style.background = "#a32638";
});

c2.addEventListener('click',function(){
    imgShow.src="./images/chair2.png";
    changeColorButton.style.background = "#1B1212";
});
c3.addEventListener('click',function(){
    imgShow.src="./images/chair3.png";
    changeColorButton.style.background = "#586f84 ";
});
c4.addEventListener('click',function(){
    imgShow.src="./images/chair4.png";
    changeColorButton.style.background =   "#627c93"
});
c5.addEventListener('click',function(){
    imgShow.src="./images/chair5.png";
   
    changeColorButton.style.background =  '#857870';
});
c6.addEventListener('click',function(){
    imgShow.src="./images/chair6.png";
    changeColorButton.style.background =  '#696969';
    
});

const colors = document.getElementsByClassName('colors')
const  bdr = document.querySelectorAll('.bdr');

bdr.forEach(bd => bd.addEventListener('click',function(){
    bdr.forEach(bdr => bdr.classList.remove('active'));
    this.classList.add('active');
}));



function colorCh(color)
{
let c = document.querySelector('.container');
c.style.background= color;
const s = document.getElementById('sb');
s.style.color = color;
const l = document.getElementById('lm');
l.style.background = color;

}