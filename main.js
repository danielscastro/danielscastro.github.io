//Smooth scroll code
const links = document.querySelectorAll('.nav-link')

Array.prototype.forEach.call(links, function(elem, index) {
    var elemAttr = elem.getAttribute("href");
    if(elemAttr && elemAttr.includes("#")) {
      elem.addEventListener("click", function(ev) {
        ev.preventDefault();
        document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
            });
      });
    }
  });

//populate project cards 
const portfolioHeader = document.querySelector('[data-js="portfolio-header"]');

const projects = [{
  name: 'Todo App',
  thumbnail: './assets/todo-app.png',
  deployedLink: 'https://to-do-app-lyart-chi.vercel.app',
  text: 'Um ToDo App simples, porém com alguns temperos interessantes para distanciá-lo dos mais comuns: é possível não só adicionar e remover tarefas, como também riscá-las (tarefa completa) e filtrá-las. Também utilizei o localStorage para armazenar as mudanças no navegador.'
},
{
  name: 'Projeto FAQ usando acordeão',
  thumbnail: './assets/accordion-faq.png',
  deployedLink: 'https://faq-accordion-card-2wj064ixa.vercel.app',
  text: 'Um desafio proposto pelo <a href="https://www.frontendmentor.io" rel="noopener" target="_blank">FrontEnd Mentor</a> de site estático, porém utilizando os acordeões para mostrar e esconder as respostas das perguntas. Feito em design responsivo para a maior parte das telas.'
},
{
  name: 'Encurtador de Links',
  thumbnail: './assets/url-shortener.png',
  deployedLink: 'https://url-shortener-api-bykopieqg-gdankas.vercel.app',
  text: 'Um desafio proposto <a href="https://www.frontendmentor.io" rel="noopener" target="_blank">FrontEnd Mentor</a>. O usuário alimenta a aplicação com uma URL válida, a mesma consulta uma API de encurtamento de links e responde com o link original e o encurtado.'
},
{
  name: 'Weather Web App',
  thumbnail: './assets/city-weather-app.png',
  deployedLink: 'https://city-weather-app-drab.vercel.app',
  text: 'Pequena aplicação que consulta a API do AccuWeather e responde com a temperatura atual da cidade pesquisada, com alguma previsão básica do tempo.'
},
{
  name: 'Currency Converter App',
  thumbnail: './assets/currency-converter.png',
  deployedLink: 'https://currency-converter-app-eight.vercel.app',
  text: 'Este aplicativo itera sobre três moedas mundiais (escalável) e torna possível fazer uma conversão em tempo real de uma moeda para outra. É possível graças à API do Exchangerate.'
}
]

const populatePortfolio = portfolioCardTemplate => {
  projects.forEach(({ name, thumbnail, deployedLink, text }) => {
    portfolioCardTemplate.innerHTML += `
    <div class="card bg-dark text-white mb-3">
      <a href="${thumbnail}">
        <img height="250px" class="card-img-top" src="${thumbnail}" alt="${name}" loading="lazy">
      </a>
    <div class="card-body">
      <a class="link text-white text-bold" href="${deployedLink}" target="_blank" rel="noopener">
        <h5 class="card-title text-white">${name}</h5>
      </a>
      <p class="card-text">${text}</p>
    </div>
  `;
  })
}

window.addEventListener('DOMContentLoaded', () => {
  const portfolioCardTemplate = document.createElement('div');
  portfolioCardTemplate.classList.add('mt-4', 'card-deck');
  portfolioCardTemplate.style="font-size: 10";

  populatePortfolio(portfolioCardTemplate);
  
  portfolioHeader.insertAdjacentElement('afterend', portfolioCardTemplate)
})