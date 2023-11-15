import "../style.css";
import { nav } from "/nav";
import data from "/public/data.json";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id") - 1;

const ficheMonster = () => {
  let html = "";

  const articles = data[id];
  let articlePost = `
      <a class="flex shadow-md shadow-black" href="/fiche/index.html?id=${articles.id}">
        <img src="${articles.avatar}" class="aspect-square bg-cover bg-center h-96 ml-4 m-auto" alt="">
        <div class="grid space-content-evenly"><div class="p-4">
          <div class="flex justify-between mb-2"><h5 class="text-xl font-semibold">${articles.nom}</h5>
          </div>
         <div><p>${articles.content}</p></div>
         </div>

            <div class="p-4"><h6 class="">Type :  ${articles.type}</h6>
                <div><p>Taille : ${articles.taille}</p>
                <p>Poids : ${articles.poids}</p></div>
            </div>
        </div>
        
      </a>
    `;
  html += articlePost;

  return html;
};

document.querySelector("#app").innerHTML = `
  <main class="bg-zinc-800 text-slate-50 h-screen">
    ${nav}

    <div class="mx-8">
      <div class="">
        ${ficheMonster()}
      </div>
    </div>
    
  </main>
`;
