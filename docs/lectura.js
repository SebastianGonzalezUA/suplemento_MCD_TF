
const sizeKey='suplemento-20261110-font';let size=18;try{size=Number(localStorage.getItem(sizeKey))||18}catch(e){}function font(n){size=Math.min(24,Math.max(15,size+n));document.documentElement.style.setProperty('--size',size+'px');try{localStorage.setItem(sizeKey,size)}catch(e){}}font(0);
document.querySelectorAll('[data-font]').forEach(b=>b.onclick=()=>font(Number(b.dataset.font)));
const zoom=document.getElementById('zoom');document.querySelectorAll('img').forEach(im=>{function show(){zoom.querySelector('img').src=im.src;zoom.querySelector('img').alt=im.alt;zoom.showModal()}im.onclick=show;im.onkeydown=e=>{if(e.key==='Enter')show()}});zoom?.querySelector('button').addEventListener('click',()=>zoom.close());zoom?.addEventListener('click',e=>{if(e.target===zoom)zoom.close()});
document.getElementById('highlight')?.addEventListener('change',e=>document.body.classList.toggle('show-diff',e.target.checked));
document.getElementById('unchanged')?.addEventListener('change',e=>document.body.classList.toggle('hide-unchanged',!e.target.checked));
document.querySelectorAll('[data-mode]').forEach(b=>b.onclick=()=>{document.body.classList.remove('mode-old','mode-new');if(b.dataset.mode!=='both')document.body.classList.add('mode-'+b.dataset.mode);document.querySelectorAll('[data-mode]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))});
document.getElementById('section-select')?.addEventListener('change',e=>{if(e.target.value){const el=document.getElementById(e.target.value);if(el.classList.contains('unchanged')){document.body.classList.remove('hide-unchanged');document.getElementById('unchanged').checked=true}el.scrollIntoView({behavior:'smooth'})}});

document.querySelectorAll('[data-filter-tables]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.trim().toLocaleLowerCase('es');document.querySelectorAll('.paper table tbody tr').forEach(row=>row.hidden=q&&!row.textContent.toLocaleLowerCase('es').includes(q));}));
