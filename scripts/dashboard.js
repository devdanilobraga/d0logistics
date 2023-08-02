document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const subMenuLinks = document.querySelectorAll(".sub-menu a");
    const subsections = document.querySelectorAll(".subsection");

    menuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = document.getElementById(link.dataset.section);
            targetSection.scrollIntoView({ behavior: "smooth" });

            // Esconder todas as subsections
            subsections.forEach((subsection) => {
                subsection.style.display = "none";
            });
        });
    });

    subMenuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSubsection = document.getElementById(link.dataset.subsection);

            // Mostrar apenas a subsection selecionada
            subsections.forEach((subsection) => {
                subsection.style.display = subsection === targetSubsection ? "block" : "none";
            });
        });
    });
});


  // Array de transportadoras fictícias
  const transportadoras = [
    "JadLog",
    "MMA",
    "BrasPress",
    "TransBrasil",
    "TotalLog",
    "Venkom",
];
const marcas = [
"cadeira escritorio base cromada fortt 1050 preta", 
"Cadeira De Escritório Presidente Base Cromada Com Rodinha Fortt Copenhague - Preta", 
"Cadeira Gamer Escritório Prizi Infinity - Branca", 
"Pirelli 185/75/15 88H"
];



// Função para gerar uma data aleatória entre duas datas específicas
function getRandomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Função para gerar uma data aleatória no formato "dd/mm/aaaa"
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Função para gerar um número aleatório entre dois valores
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para preencher a tabela com dados aleatórios
function generateRandomData() {
    const tableBody = document.getElementById("dataRows");

    for (let i = 0; i < 10; i++) { // Altere o número 10 para a quantidade desejada de linhas
        const marca = marcas[i % marcas.length];
        const codigo = getRandomNumber(10000000000, 99999999999);
        const quantidade = getRandomNumber(100, 2000);
        const recebimento = formatDate(getRandomDate(new Date(2023, 0, 1), new Date(2023, 11, 31)));
       
        const numeroNota = getRandomNumber(100, 999);
        const quantidadeAvaria = getRandomNumber(0, quantidade);
        const observacoes = quantidadeAvaria > 0 ? "Último lote com avarias" : "N/D";

        const transportadora = transportadoras[i % transportadoras.length]; // Alterna entre as transportadoras

        const row = `
            <tr>
                <td>${marca}</td>
                <td>${codigo}</td>
                <td>${quantidade}</td>
                <td>${recebimento}</td>
                <td>${numeroNota}</td>
                <td>${quantidadeAvaria}</td>
                <td>${observacoes}</td>
                <td>${transportadora}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    }
}

generateRandomData();