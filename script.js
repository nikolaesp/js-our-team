/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (BOOTSTRAP!)
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!
Nome            Ruolo                   Foto (nome file / url di un immagine)
Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg
*/
let person={
    nome:"Wayne Barnett",
    ruolo:"Founder & CEO",
    foto:"wayne-barnett-founder-ceo.jpg"
}

let  teammembers = [
     {nome:"Wayne Barnett",ruolo:"Founder & CEO",foto:"wayne-barnett-founder-ceo.jpg"},
     {nome:"Angela Caroll",ruolo:"Chief Editor",foto: "angela-caroll-chief-editor.jpg"},
     {nome:"Walter Gordon",ruolo:"Office Manager",foto: "walter-gordon-office-manager.jpg"},
     {nome:"Angela Lopez",ruolo:"Social Media Manager",foto: "angela-lopez-social-media-manager.jpg"},
     {nome:"Scott Estrada",ruolo:"Developer",foto: "scott-estrada-developer.jpg"},
     {nome:"Barbara Ramos",ruolo:"Graphic Designer",foto: "barbara-ramos-graphic-designer.jpg"}  
];
let htmlCode = ``;
for(let i = 0; i < teammembers.length; i++){
   let member = teammembers[i];
   console.log("Nome: "+member.nome+"    Ruolo: "+member.ruolo+"         Foto: "+member.foto);
  

htmlCode = htmlCode + 
    `
    <article>
      <div class="col sd-4 g-3">
      <img class="img-fluid w-70" src="./img/${member.foto}" alt="${member.nome}">
      </div>
      <div>
      <h3>${member.nome}</h3>
      <p>${member.ruolo}</p>
      </div>
    </article>
  `;

   // console.log(htmlCode);
}

const teamcards = document.querySelector(".team-cards");

// here's how we do the render;
// since elephantCards is now = to that div, we now say let the inside of that div take in our htmlCode variable that holds our html codes.
teamcards.innerHTML = htmlCode;
