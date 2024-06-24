/*
const bx = document.querySelector('.bx');
const menu_mobile = document.querySelector('.menu-mobile');
const link_mobile = document.querySelectorAll('.link-menu-mobile');

console.log(link_mobile);

link_mobile.forEach((item) => {
    item.addEventListener('click', () => {
        menu_mobile.classList.add('showmenu');
        console.log(menu_mobile);
        
    })
})

bx.addEventListener('click', () =>{
    bx.classList.toggle('activebx');

    menu_mobile.classList.toggle('showmenu');
    console.log(menu_mobile);
})
*/

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.querySelector('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 120) nav.classList.add('active-header'); else nav.classList.remove('active-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== ACCORDION ====================*/ 
document.querySelectorAll('.accordion-button').forEach(button => {
    
    button.addEventListener('click', () => {
        //button.classList.remove('accordion-button-active');

        const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion-button-active');

        if(button.classList.contains('accordion-button-active')){
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }
        else{
          accordionContent.style.maxHeight = 0;
        }
    });
    
});

/*============ VALIDAR FORMULÁRIO ==============*/
/*
// Puxando os elementos do formulário
const formCapture = document.querySelector("#form-capture");
const btnSubmit = document.querySelector("#btn-submit");
const inputName = document.querySelector("#fullname");
const inputEmail = document.querySelector("#email");
const labelErrorName = document.querySelector(".label-error-name");
const labelErrorEmail = document.querySelector(".label-error-email");

// Função pra validar e-mail
btnSubmit.addEventListener('click', () => {

  let statusEmail = false;
  let statusName = false;

  if(inputName.value.length < 2){
    console.log("O nome tem menos de 2 caracteres");

    inputName.classList.add('border-error');
    inputName.classList.remove('border-success');

    labelErrorName.classList.add('label-active');
    statusName = false;
  }
  else{
    inputName.classList.add('border-success');
    inputName.classList.remove('border-error');
    labelErrorName.classList.remove('label-active');
    statusName = true;
  }

  
  if(inputEmail.value == "" || 
        !inputEmail.value.includes('@') || 
        !inputEmail.value.includes('.')){
    inputEmail.classList.add('border-error');
    inputEmail.classList.remove('border-success');
    labelErrorEmail.classList.add('label-active');
    statusEmail = false;
  }
  else{
    inputEmail.classList.add('border-success');
    inputEmail.classList.remove('border-error');
    labelErrorEmail.classList.remove('label-active');
    statusEmail = true;
  }

  if(statusName && statusEmail){
    console.log('forms enviado');
    formCapture.submit();
  }

});
*/

// Quebrar o texto em várias strings
var textWrapper = document.querySelector('.letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='h0-title'>$&</span>");   


/*--=========== GSAP SCROLLTRIGGER ============- */
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

    /*--=========== TIMELINE LOADING E HERO ============- */
    var tl1 = gsap.timeline();
    
    tl1
    .to('.screen-loading', {
      duration: 1,
      opacity: 0, 
      delay: 5,
      //filter: 'blur(10px)',
      //y: "-10%",
      ease: "power4.out",
    })

    .from(".box-hero div", {
      duration: 2, 
      opacity: 0, 
      //y: 200,
      stagger:{each: 0.3},
      ease: "power4.out",
    }, '-=4.5')
    
    .from(".div-title span", {
      duration: 4, 
      opacity: 0, 
      x: -50,
      transform: "skewX(50deg)",
      stagger:{each: 0.4},
      ease: "back.out(3)",
    }, '-=1.0')
    
    

    /*--=========== ANIMAÇÕES ============- */
    


    gsap.from(".btn-project",{
      opacity: 0,
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.btn-project',
        start: 'center 80%',
        end: 'center 10%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from(".section-pin",{
      ease: "power4.out",
      scrollTrigger:{
        trigger: '.section-pin',
        start: 'bottom 70%',
        end: 'bottom -42%',
        pin: true,
        //markers: true,
      }
    });


    /*--================================- */
    /*--=========== TEXTOS ============- */
    /*--================================- */

    gsap.from("#text-ui",{
      x: -50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-ui',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-front",{
      x: 50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-front',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-motion",{
      x: -70,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-motion',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-oneplace",{
      x: 30,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-oneplace',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });


    gsap.from("#text-inspire",{
      x: -200,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-inspire',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-evolve",{
      x: 150,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-evolve',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-enhance",{
      x: -180,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-enhance',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-improve",{
      x: 120,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-improve',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-experience",{
      x: -160,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-experience',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-frontpush",{
      y: 50,
      opacity: 0,
      ease: "back.out(1.7)",
      scrollTrigger:{
        trigger: '#text-frontpush',
        start: 'center 80%',
        end: 'center 50%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-1",{
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-1',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-2",{
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-2',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-3",{
      x: 50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-3',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-4",{
      x: -50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-4',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-5",{
      y: 50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-5',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    gsap.from("#text-6",{
      y: -50,
      opacity: 0,
      ease: "power1.out",
      scrollTrigger:{
        trigger: '#text-6',
        start: 'center 70%',
        end: 'center 60%',
        scrub: 2,
        //markers: true,
      }
    });

    



    gsap.from(".superpowers span",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '.superpowers',
        start: 'top 80%',
        end: 'top 50%',
        scrub: 5,
        //markers: true,
      }
    });


    /*--================================- */
    /*--=========== LOADING AO SCROLL ============- */
    /*--================================- */
    gsap.from("#section-1 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-1',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-2 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-2',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-3 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-3',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-4 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-4',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-5 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-5',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-6 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-6',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-6-2 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-6-2',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-7 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 2,
      scrollTrigger:{
        trigger: '#section-7',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-8 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 1,
      scrollTrigger:{
        trigger: '#section-8',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-9 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.2},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-9',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    gsap.from("#section-10 > div",{
      y: 150,
      opacity: 0,
      ease: "power4.out",
      stagger:{each: 0.1},
      duration: 3,
      scrollTrigger:{
        trigger: '#section-10',
        start: 'top 80%',
        end: 'top 50%',
        //markers: true,
      }
    });

    /*--================================- */
    /*--=========== PESSOAS ============- */
    /*--================================- */
    gsap.from("#person-01",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-01', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-02",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-02', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-03",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-03', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-04",{ y: 200, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-04', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-05",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-05', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-06",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-06', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-07",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-07', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-08",{ y: 120, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-08', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-09",{ y: 200, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-09', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-10",{ y: 200, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-10', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-11",{ y: 50, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-11', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-12",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-12', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-13",{ y: 300, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-13', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-14",{ y: 150, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-14', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-15",{ y: 200, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-15', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-16",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-16', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-17",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-17', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-18",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-18', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-19",{ y: 200, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-19', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });

    gsap.from("#person-20",{ y: 100, ease: "power4.out",
      scrollTrigger:{
        trigger: '#person-20', start: 'center 90%', end: 'center 20%', scrub: 5,
      }
    });
    
});

ScrollTrigger.addEventListener("scrollStart", () => {
  ScrollTrigger.refresh();
});


/*==================== WAVES ====================*/ 
function SineWaveGenerator(options) {
    $.extend(this, options || {});
    
    if(!this.el) { throw "No Canvas Selected"; }
    this.ctx = this.el.getContext('2d');
    
    if(!this.waves.length) { throw "No waves specified"; }
    
    // Internal
    this._resizeWidth();
    window.addEventListener('resize', this._resizeWidth.bind(this));
    // User
    this.resizeEvent();
    window.addEventListener('resize', this.resizeEvent.bind(this));
    
    if(typeof this.initialize === 'function') {
      this.initialize.call(this);
    }
    // Start the magic
    this.loop();
  }
  
  // Defaults
  SineWaveGenerator.prototype.speed = 10;
  SineWaveGenerator.prototype.amplitude = 50;
  SineWaveGenerator.prototype.wavelength = 50;
  SineWaveGenerator.prototype.segmentLength = 10;
  
  SineWaveGenerator.prototype.lineWidth = 2;
  SineWaveGenerator.prototype.strokeStyle  = 'rgba(255, 255, 255, 0.1)';
  
  SineWaveGenerator.prototype.resizeEvent = function() {};
  
  // fill the screen
  SineWaveGenerator.prototype._resizeWidth = function() {
    this.dpr = window.devicePixelRatio || 1;
    
    this.width = this.el.width = window.innerWidth * this.dpr;
    this.height = this.el.height = window.innerHeight * this.dpr;
    this.el.style.width = window.innerWidth + 'px';
    this.el.style.height = window.innerHeight + 'px';
    
    this.waveWidth = this.width * 0.95;
    this.waveLeft = this.width * 0.25;
  }
  
  SineWaveGenerator.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  
  SineWaveGenerator.prototype.time = 0;
  
  SineWaveGenerator.prototype.update = function(time) {  
    this.time = this.time - 0.007;
    if(typeof time === 'undefined') {
      time = this.time;
    }
  
    var index = -1;
    var length = this.waves.length;
  
    while(++index < length) {
      var timeModifier = this.waves[index].timeModifier || 1;
      this.drawSine(time * timeModifier, this.waves[index]);
    }
    index = void 0;
    length = void 0;
  }
  
  // Constants
  var PI2 = Math.PI * 2;
  var HALFPI = Math.PI / 2;
  
  SineWaveGenerator.prototype.ease = function(percent, amplitude) {
    return amplitude * (Math.sin(percent * PI2 - HALFPI) + 1) * 0.5;
  }
  
  SineWaveGenerator.prototype.drawSine = function(time, options) {
    options = options || {};
    amplitude = options.amplitude || this.amplitude;
    wavelength = options.wavelength || this.wavelength;
    lineWidth = options.lineWidth || this.lineWidth;
    strokeStyle = options.strokeStyle || this.strokeStyle;
    segmentLength = options.segmentLength || this.segmentLength;
    
    var x = time;
    var y = 0;  
    var amp = this.amplitude;
   
    // Center the waves
    var yAxis = this.height / 2.8; 
    
    // Styles
    this.ctx.lineWidth = lineWidth * this.dpr;
    this.ctx.strokeStyle = strokeStyle;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.beginPath();
    
    // Starting Line
    this.ctx.moveTo(0, yAxis);
    this.ctx.lineTo(this.waveLeft, yAxis);
    
    for(var i = 0; i < this.waveWidth; i += segmentLength) {
      x = (time * this.speed) + (-yAxis + i) / wavelength; 
      y = Math.sin(x); 
      
      // Easing
      amp = this.ease(i / this.waveWidth, amplitude); 
      
      this.ctx.lineTo(i + this.waveLeft, amp * y + yAxis);
      
      amp = void 0;
    }
    
    // Ending Line
    this.ctx.lineTo(this.width, yAxis);
    
    // Stroke it
    this.ctx.stroke();
    
    // Clean up
    options = void 0;
    amplitude = void 0;
    wavelength = void 0;
    lineWidth = void 0;
    strokeStyle = void 0;
    segmentLength = void 0;
    x = void 0;
    y = void 0;
  } 
  
  SineWaveGenerator.prototype.loop = function() {
    this.clear();
    this.update();
    
    window.requestAnimationFrame(this.loop.bind(this));
  }
  
  new SineWaveGenerator({
    el: document.getElementById('waves'),
    
    speed: 7,
    
    waves: [
      {
        timeModifier: 1,
        lineWidth: 3,
        amplitude: 150,
        wavelength: 200,
        segmentLength: 20,
  //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
      },
      {
        timeModifier: 1,
        lineWidth: 2,
        amplitude: 250,
        wavelength: 200,
  //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
      },
      {
        timeModifier: 1,
        lineWidth: 3,
        amplitude: -150,
        wavelength: 50,
        segmentLength: 10,
  //       strokeStyle: 'rgba(255, 255, 255, 0.2)'
      },
      {
        timeModifier: 1,
        lineWidth: 1,
        amplitude: -100,
        wavelength: 100,
        segmentLength: 20,
  //       strokeStyle: 'rgba(255, 255, 255, 0.1)'
      }
    ],
    
    initialize: function (){
  
    },
    
    resizeEvent: function() {
      var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
      gradient.addColorStop(0,"rgba(32, 130, 217, 0)");
      gradient.addColorStop(0.5,"rgba(46, 102, 201, 0.7)");
      gradient.addColorStop(1,"rgba(32, 130, 217, 0)");
      
      var index = -1;
      var length = this.waves.length;
        while(++index < length){
        this.waves[index].strokeStyle = gradient;
      }
      
      // Clean Up
      index = void 0;
      length = void 0;
      gradient = void 0;
    }
  });
