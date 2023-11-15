import "../style.css";
import { nav } from "/nav";
import data from "/public/data.json";

console.log(data);

const listeArticles = () => {
  let html = "";

  for (let i = 0; i < data.length; i++) {
    const articles = data[i];
    let articlePost = `
      <a class="flex shadow-md shadow-black hover:scale-105 transition" href="/fiche/index.html?id=${articles.id}">
        <img src="${articles.avatar}" class="aspect-square bg-cover bg-center h-48 ml-4 m-auto" alt="">
        <div class="p-4">
          <div class="flex justify-between mb-2"><h5 class="text-xl font-semibold">${articles.nom}</h5>
          
          <h6 class="">Type :  ${articles.type}</h6></div>
<div class="text-gray-400"><p>${articles.content}</p></div>
        </div>
        
      </a>
    `;
    html += articlePost;
  }
  return html;
};

document.querySelector("#app").innerHTML = `
  <main class="bg-zinc-800 text-slate-50">
    ${nav}

    <div class="mx-8">
      <div class="grid grid-cols-2 gap-4">
        ${listeArticles()}
      </div>
    </div>
    
  </main>
`;
