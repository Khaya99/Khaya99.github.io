const viewer=document.getElementById('viewer');
const image=document.getElementById('viewer-image');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
 image.src=button.dataset.image; image.alt=button.querySelector('img').alt;
 document.getElementById('viewer-title').textContent=button.dataset.title;
 viewer.showModal();
}));
document.getElementById('close-viewer').addEventListener('click',()=>viewer.close());
viewer.addEventListener('click',event=>{if(event.target===viewer){const r=viewer.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)viewer.close();}});
