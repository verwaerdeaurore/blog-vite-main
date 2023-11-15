import "./style.css";
import data from "/public/data.json";
import { nav } from "./nav";

const listeArticles = () => {
  let html = "";

  for (let i = 0; i < 4; i++) {
    const articles = data[i];
    let articlePost = `
      <a class="flex shadow-md shadow-black" href="/fiche/index.html?id=${articles.id}">
        <img src="${articles.avatar}" class="aspect-square bg-cover bg-center h-48 ml-4 m-auto" alt="">
        <div class="p-4">
          <div class="flex justify-between mb-2"><h5 class="text-xl font-semibold">${articles.nom}</h5>
          
          <h6 class="">Type :  ${articles.type}</h6></div>
<div><p>${articles.content}</p></div>
        </div>
        
      </a>
    `;
    html += articlePost;
  }
  return html;
};

document.querySelector("#app").innerHTML = `
  <main class="bg-zinc-800 text-slate-50 h-screen" >
    ${nav}

    <div class="mx-8 mt-10">
      <div class="mx-8">
        <div class="grid grid-cols-2 gap-4">
        ${listeArticles()}
        </div>
      </div>

      
     <div class="flex justify-end mt-10">
        <a href="/news/" class="bg-cyan-900 hover:text-slate-400 text-zinc-100 transition-colors  px-4 py-2  rounded-md">Voir tous les Monsters</a>
      </div>
      
    </div>
  </main>
`;
