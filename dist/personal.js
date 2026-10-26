/* Match the reference's inertial scroll; retain Webflow IX2 and Spline events. */
(() => {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root=document.documentElement;
  root.classList.add('scene-loading');
  const skip=document.createElement('a');skip.className='skip-link';skip.href='#projects';skip.textContent='跳到我的作品';document.body.prepend(skip);
  const lenis=new Lenis({lerp:0.1,wheelMultiplier:0.7,gestureOrientation:'vertical',normalizeWheel:false,smoothWheel:!reduced,smoothTouch:true});
  window.yeminScroll=lenis;
  function raf(time){lenis.raf(time);requestAnimationFrame(raf)}requestAnimationFrame(raf);
  skip.addEventListener('click',e=>{e.preventDefault();lenis.scrollTo('#projects',{duration:reduced?0:1.4});document.querySelector('#projects').focus({preventScroll:true})});
  document.querySelector('#projects').tabIndex=-1;
  const scene=document.querySelector('.spline-design');
  const started=performance.now(); let frames=0, fallbackShown=false;
  scene.querySelector('canvas').addEventListener('rendered',()=>frames++);
  document.querySelector('.instruction-wrap button').addEventListener('click',()=>window.yeminSpline?.emitEvent('mouseDown','SMILE BUTTON')); 
  function ready(ok){root.classList.remove('scene-loading');root.classList.add('scene-ready');window.yeminReady=ok;
    if(ok){root.classList.remove('scene-unavailable');scene.querySelector('.scene-fallback')?.remove();}
    if(!ok){root.classList.add('scene-unavailable');const fallback=document.createElement('div');fallback.className='scene-fallback';fallback.innerHTML='<img src="assets/mosslume-cover.png" alt="MOSSLUME 首页封面"><a href="#projects">EXPLORE MY WORK ↓</a>';scene.append(fallback);fallback.querySelector('a').addEventListener('click',e=>{e.preventDefault();lenis.scrollTo('#projects')});}
  }
  const poll=setInterval(()=>{const app=window.Webflow?.require('spline')?.getInstance(scene)?.spline;if(app && frames>1 && app._renderer?.lastFrameIncomplete!==true){clearInterval(poll);window.yeminSpline=app;app.setVariable('Rotate',36);requestAnimationFrame(()=>requestAnimationFrame(()=>ready(true)))}else if(!fallbackShown && performance.now()-started>16000){fallbackShown=true;ready(false)}else if(performance.now()-started>60000){clearInterval(poll)}},100);
})();
