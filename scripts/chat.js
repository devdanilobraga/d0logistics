// Selecionar o botão "Alterar Cor"
var changeColorBtn = document.getElementById('change-color-btn');

// Adicionar um ouvinte de evento de clique ao botão
changeColorBtn.addEventListener('click', function() {
  // Obter a cor de fundo atual do chat-container
  var chatContainer = document.querySelector('.chat-container');
  var currentColor = getComputedStyle(chatContainer).backgroundColor;

  // Verificar se a cor atual é preto ou branco
  if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'rgba(0, 0, 0, 0)') {
    // Definir a cor de fundo como branco
    chatContainer.style.backgroundColor = '#ffffff';
    changeColorBtn.style.backgroundColor = '#000000';
    changeColorBtn.style.color = '#ffffff';
  } else {
    // Definir a cor de fundo como preto
    chatContainer.style.backgroundColor = '#000000';
    changeColorBtn.style.backgroundColor = '#ffffff';
    changeColorBtn.style.color = '#000000';
  }
});

// Função para adicionar uma mensagem do usuário no chat
function addUserMessage(message) {
    var chatLog = document.getElementById('chat-log');
    var userDiv = document.createElement('div');
    userDiv.className = 'user-message';

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;

    var messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = getCurrentTime();

    messageContainer.appendChild(messageContent);
    messageContainer.appendChild(messageTime);
    userDiv.appendChild(messageContainer);

    chatLog.appendChild(userDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Função para adicionar uma mensagem do bot no chat
function addBotMessage(message) {
    var chatLog = document.getElementById('chat-log');
    var botDiv = document.createElement('div');
    botDiv.className = 'bot-message';

    var messageContainer = document.createElement('div');
    messageContainer.className = 'message-container';

    var messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;

    var messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = getCurrentTime();

    messageContainer.appendChild(messageContent);
    messageContainer.appendChild(messageTime);
    botDiv.appendChild(messageContainer);

    chatLog.appendChild(botDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
}


// Função para obter o horário atual no formato "hh:mm"
function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
}

// Função para lidar com o evento de clique no botão de envio
function handleSendMessage() {
    var userInput = document.getElementById('user-input');
    var message = userInput.value;

    if (message.trim() !== '') {
        addUserMessage(message);

        // Lógica de resposta do bot
        var botResponse = getBotResponse(message);
        addBotMessage(botResponse);

        userInput.value = '';
    }
}

// Adicionar um ouvinte de eventos para o botão de envio
var sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', handleSendMessage);

// Adicionar um ouvinte de eventos para a tecla "Enter" no campo de entrada do usuário
var userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});



// Array de palavras-chave e respostas para o assunto "Esportes"
var sportsTriggerWords = ['esporte', 'futebol', 'basquete', 'tênis', 'ginástica'];
var sportsResponses = [
  "O futebol é um esporte muito popular em todo o mundo. Você tem algum time favorito?",
  "O basquete é um esporte emocionante de assistir. Você já praticou alguma vez?",
  "A ginástica artística requer muita habilidade e flexibilidade. É incrível ver os atletas em ação."
];

// Array de palavras-chave de gratidão e respostas
var gratitudeTriggerWords = ['obrigado', 'obrigada', 'grato', 'grata', 'agradecido', 'agradecida'];
var gratitudeResponses = [
  "De nada! Fico feliz em poder ajudar.",
  "Você é bem-vindo(a)! Estou aqui para ajudar sempre que precisar.",
  "É um prazer poder ser útil. Estou à disposição!",
  "Agradeço suas palavras. Estou aqui para oferecer suporte.",
  "A gratidão é uma ótima virtude! Estou feliz por poder contribuir."
];


// Array de palavras-chave e respostas para o assunto "Tecnologia"
var technologyTriggerWords = ['tecnologia', 'computador', 'smartphone', 'internet', 'programação'];
var technologyResponses = [
  "A tecnologia está sempre em constante evolução. Você já ouviu falar sobre inteligência artificial?",
  "Os smartphones têm se tornado cada vez mais poderosos e versáteis. Qual é o seu modelo favorito?",
  "A programação é uma habilidade valiosa nos dias de hoje. Já pensou em aprender a programar?"
];

// Array de palavras-chave e respostas para o assunto "Música"
var musicTriggerWords = ['música', 'banda', 'cantor', 'álbum', 'gênero musical'];
var musicResponses = [
  "A música tem o poder de nos emocionar e nos conectar. Qual é a sua música favorita no momento?",
  "Existem muitas bandas talentosas por aí. Você tem alguma banda favorita?",
  "Os gêneros musicais são variados e abrangem diferentes estilos. Qual é o seu gênero musical preferido?"
];

// Array de palavras-chave e respostas para o assunto "recepção"
var recepcao =['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite'];
var recepcaoresponses=[ 'Olá, bem vindo! Como posso ajudar?']
  
// Array de palavras gatilho
var triggerWords = ['criptomoeda', 'bitcoin', 'cotação criptomoeda', 'cotaçao criptomoeda', 'cotação cripto', 'cotacao cripto', 'cotação', 'cotaçao' , 'cotaçao', 'ethereum', 'blockchain', 'mineração', 'carteira digital', 'token', 'investimento', 'exchange', 'wallet', 'moeda digital', 'altcoin', 'ICO'];
var triggerWordsresponses = [
    "Para obter a cotação mais atualizada, visite nosso site: https://devdanilobraga.github.io/apiconsultacriptomoedas/.",
    "As criptomoedas são uma forma interessante de investimento. Você já pensou em investir nelas?",
    "A tecnologia blockchain é o fundamento das criptomoedas. Ela oferece segurança e transparência nas transações.",
    "A mineração de criptomoedas envolve resolver problemas complexos para verificar e adicionar transações à blockchain.",
    "Uma carteira digital é uma forma segura de armazenar suas criptomoedas. Recomendo pesquisar sobre as opções disponíveis.",
    "Tokens são ativos digitais que representam algum valor dentro de um ecossistema específico.",
    "As ICOs (Ofertas Iniciais de Moedas) são eventos de arrecadação de fundos para projetos baseados em blockchain. Elas têm ganhado popularidade nos últimos anos."
];
// Array de palavras-chave e respostas para o assunto "Tempo e clima"
var weatherTriggerWords = ['tempo', 'clima', 'previsão', 'temperatura', 'chuva', 'sol'];
var weatherResponses = [
  "A previsão para hoje é de tempo ensolarado, com temperatura máxima de 25°C.",
  "Parece que vai chover amanhã. Não se esqueça de levar um guarda-chuva!",
  "A temperatura atual é de 18°C. Prepare-se para um dia fresco."
];

// Array de palavras-chave e respostas para o assunto "Filmes e séries"
var moviesTriggerWords = ['filme', 'série', 'assistir', 'recomendação', 'ator', 'diretor'];
var moviesResponses = [
  "Recomendo o filme 'A Origem'. É um suspense cheio de reviravoltas.",
  "Se você gosta de comédias, sugiro assistir à série 'Brooklyn Nine-Nine'. É muito engraçada!",
  "O ator Leonardo DiCaprio protagoniza muitos filmes aclamados, como 'O Lobo de Wall Street' e 'Titanic'."
];

// Array de palavras-chave e respostas para o assunto "Viagens"
var travelTriggerWords = ['viagem', 'destino', 'passagem', 'hotel', 'turismo'];
var travelResponses = [
  "Um destino popular para viagens é Paris, na França. A Torre Eiffel e o Louvre são imperdíveis!",
  "Se você está planejando uma viagem, recomendo verificar os preços de passagens no site Skyscanner.",
  "Ao procurar um hotel, considere os comentários de outros viajantes no Booking.com. Isso pode te ajudar a escolher o melhor lugar para ficar."
];

// Array de palavras-chave e respostas para o assunto "Receitas culinárias"
var recipesTriggerWords = ['receita', 'cozinhar', 'ingrediente', 'sobremesa', 'prato principal'];
var recipesResponses = [
  "Que tal experimentar uma receita de brownie de chocolate? É uma delícia!",
  "Se você está procurando uma receita de prato principal, recomendo o clássico espaguete à bolonhesa.",
  "Se você gosta de sobremesas, uma receita simples e saborosa é a mousse de limão. Refrescante e fácil de fazer!"
];

// Array de respostas engraçadas quando o bot não souber a resposta
const funnyResponses = [
    "Hm, essa é uma pergunta difícil. Acho que preciso estudar mais.",
    "Você me pegou de surpresa! A resposta está em algum lugar no universo da comédia.",
    "Não sei a resposta, mas posso te contar uma piada engraçada enquanto procuro.",
    "Haha, você me pegou! Minha memória cômica está melhor do que minha memória de fatos.",
    "Ops, essa foi uma pergunta para a qual não estou preparado. Mas estou pronto para contar uma piada!"
  ];

  // Array de palavras-chave relacionadas a piadas
const jokesTriggerWords = ['piada', 'engraçado', 'risada', 'humor', 'divertido', 'comédia'];
const jokesResponses = [
  "Por que o livro de matemática se suicidou? Porque tinha muitos problemas.",
  "Qual é o animal mais antigo do mundo? A zebra, porque está sempre nas listas de animais em ordem alfabética.",
  "Por que o elefante não pega fogo? Porque ele já é cinza.",
  "O que o tomate foi fazer no banco? Tirar extrato.",
  "Qual é o fim da picada? Quando o mosquito vai embora.",
  "Por que o jacaré tirou o jacarezinho da escola? Porque ele réptil de ano.",
  "Por que o jacaré não usa tênis? Porque ele já tem o tênis de água.",
  "Qual é o cereal mais perigoso? O Milho-Qaeda.",
  "O que o passarinho falou para o pássaro surdo? Pia!",
  "O que o advogado do frango foi fazer na delegacia? Foi soltar a franga.",
  "Por que a girafa tem um pescoço tão grande? Porque sua cabeça fica muito longe do corpo."
];

// Função para obter a resposta do bot
function getBotResponse(message) {
  var lowerCaseMessage = message.toLowerCase();

  // Verificar palavras-chave e retornar a resposta correspondente
  if (containsTriggerWord(lowerCaseMessage, weatherTriggerWords)) {
    return getRandomResponse(weatherResponses);
  } else if (containsTriggerWord(lowerCaseMessage, moviesTriggerWords)) {
    return getRandomResponse(moviesResponses);
  } else if (containsTriggerWord(lowerCaseMessage, travelTriggerWords)) {
    return getRandomResponse(travelResponses);
  }else if (containsTriggerWord(lowerCaseMessage, jokesTriggerWords)) {
    return getRandomResponse(jokesResponses);
  }else if (containsTriggerWord(lowerCaseMessage, recipesTriggerWords)) {
    return getRandomResponse(recipesResponses);
  } else if (containsTriggerWord(lowerCaseMessage, triggerWords)) {
    return getRandomResponse(triggerWordsresponses);
  }else if (containsTriggerWord(lowerCaseMessage, recepcao)) {
    return getRandomResponse(recepcaoresponses);
  }else {
    return getRandomResponse(funnyResponses);
  }
}

// Função para verificar se a mensagem contém alguma palavra-chave
function containsTriggerWord(message, triggerWords) {
  for (var i = 0; i < triggerWords.length; i++) {
    if (message.includes(triggerWords[i])) {
      return true;
    }
  }
  return false;
}

// Função para retornar uma resposta aleatória do array de respostas
function getRandomResponse(responses) {
  var randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
}
