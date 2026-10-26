(() => {
 const dialog=document.querySelector('#mosslume-gallery');
 const image=document.querySelector('#mosslume-image');
 const caption=document.querySelector('#mosslume-caption');
 const tabs=[...dialog.querySelectorAll('[data-gallery-index]')];
 const slides=[
  {src:'assets/mosslume-gameplay.png',caption:'游戏实机',alt:'MOSSLUME 像素小岛实机：房屋、河流、伙伴与物品栏'},
  {src:'assets/mosslume-forest.png',caption:'森林概念图',alt:'月夜下的森林、荧光蘑菇、木桥与石门概念图'},
  {src:'assets/mosslume-title.png',caption:'游戏标题画面',alt:'MOSSLUME 标题与海边村落的游戏加载画面'}
 ];
 let index=1,opener;
 function show(next){index=(next+slides.length)%slides.length;const item=slides[index];image.src=item.src;image.alt=item.alt;caption.textContent=`${String(index+1).padStart(2,'0')} / 03 — ${item.caption}`;tabs.forEach((tab,i)=>tab.setAttribute('aria-pressed',String(i===index)));}
 document.querySelectorAll('[data-open-moss]').forEach(button=>button.addEventListener('click',()=>{opener=button;show(1);dialog.showModal();window.yeminScroll?.stop();}));
 dialog.querySelector('.gallery-close').addEventListener('click',()=>dialog.close());
 dialog.querySelector('.gallery-prev').addEventListener('click',()=>show(index-1));
 dialog.querySelector('.gallery-next').addEventListener('click',()=>show(index+1));
 tabs.forEach((tab,i)=>tab.addEventListener('click',()=>show(i)));
 dialog.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();show(index+1)}if(e.key==='ArrowLeft'){e.preventDefault();show(index-1)}});
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
 dialog.addEventListener('close',()=>{window.yeminScroll?.start();opener?.focus({preventScroll:true});});
})();
