(()=>{"use strict";const e=new class{constructor(){this.popovers=[]}show(e,t,o){const n=document.createElement("div");n.classList.add("popover","bs-popover-top");const s=document.createElement("div");s.classList.add("popover-header"),s.textContent=e;const i=document.createElement("div");i.classList.add("arrow");const d=document.createElement("div");d.classList.add("popover-body"),d.textContent=t,n.appendChild(s),n.appendChild(d),n.appendChild(i),document.body.appendChild(n);const r=performance.now();this.popovers.push({id:r,element:n});const{paddingTop:c,borderTopWidth:p}=window.getComputedStyle(o),{left:a,top:l}=o.getBoundingClientRect(),m=a+o.offsetWidth/2-n.offsetWidth/2;n.style.left=`${m}px`;const u=l-parseFloat(c)-parseFloat(p)-n.offsetHeight;return n.style.top=`${u}px`,r}remove(e){this.popovers.find((t=>t.id===e)).element.remove(),this.popovers=this.popovers.filter((t=>t.id!==e))}};let t=[];const o=document.querySelector(".container");window.addEventListener("click",(o=>{t.forEach((t=>e.remove(t.id))),t=[];const{target:n}=o;var s;n.classList.contains("btn")&&("Title","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nobis?",s=n,t.push({name:s.name,id:e.show("Title","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, nobis?",s)}))}));const n=document.createElement("button");n.type="button",n.innerHTML="Click to toggle popover",n.classList.add("btn","btn-lg","btn-danger"),o.querySelectorAll(".task")[0].appendChild(n)})();
//# sourceMappingURL=main.js.map