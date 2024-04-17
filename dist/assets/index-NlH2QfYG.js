(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const l=document.querySelector("#bookList"),p=document.querySelector("#bookForm");p.addEventListener("submit",u);d();async function u(t){t.preventDefault();const e=document.getElementById("title").value,s=document.getElementById("synopsis").value,r=document.getElementById("genre").value,n=document.getElementById("pages").value,o={title:e,synopsis:s,genre:r,pages:parseInt(n),progress:0,completed:!1};await fetch("http://localhost:3000/books",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}),t.target.reset(),d()}async function d(){const t=await fetch("http://localhost:3000/books").then(e=>e.json());m(t)}function m(t){l.innerHTML="",t.forEach(e=>{const s=g(e);l.appendChild(s)})}function g(t){const e=document.createElement("div");e.classList.add("book"),t.completed&&e.classList.add("completed");const s=document.createElement("h3");s.textContent=t.title;const r=document.createElement("p");r.innerHTML=`<strong>Gênero: </strong> ${t.genre}`;const n=document.createElement("p");n.innerHTML=`<strong>Páginas: </strong> ${t.pages}`;const o=document.createElement("p");o.innerHTML=`<strong>Progresso: </strong> ${t.progress/t.pages*100}%`;const c=document.createElement("p");c.innerHTML=`<strong>Sinopse:</strong> ${t.synopsis}`;const i=document.createElement("button");i.textContent="Atualizar",i.className="btn-primary",i.addEventListener("click",()=>f(t));const a=document.createElement("button");return a.textContent="Excluir",a.className="btn-danger",a.addEventListener("click",()=>h(t.id)),e.appendChild(s),e.appendChild(r),e.appendChild(n),e.appendChild(o),e.appendChild(c),t.completed||e.appendChild(i),e.appendChild(a),e}async function f(t){const e=parseInt(prompt("Atualize o progresso de leitura (páginas): "));if(isNaN(e)||e<0||e>t.pages)return alert("Insira uma quantidade de paginas válida!");const s=t.pages===e,r=JSON.stringify({progress:parseInt(e),completed:s});await fetch(`http://localhost:3000/books/${t.id}`,{method:"PATCH",headers:{"Content-type":"application/json"},body:r}),d()}async function h(t){await fetch(`http://localhost:3000/books/${t}`,{method:"DELETE"}),d()}
