// Armazene os nomes dos botões em um array
var buttonNames = ['QUALIDADE', 'PRODUÇÃO', 'PROCESSOS', 'MANUTENÇÃO'];

// Armazene os nomes dos novos botões em um objeto
var newButtonNames = {
    'QUALIDADE': ['Checklist de Limpeza'],
    'PRODUÇÃO': ['Guia Troca De Fase', 'Instrução de Trabalho', 'Autonomous Care'],
    'PROCESSOS': ['Plano de controle', 'Checklist de Arranjos Temporarios', 'Lançamentos de Parâmetros Manuais'],
    'MANUTENÇÃO': ['LSW']
};

// Armazene os URLs dos novos botões em um objeto
var newButtonUrls = {
    'Checklist de Limpeza': 'https://www.amazon.com',
    'Guia Troca De Fase': 'https://kimberlyclark.sharepoint.com/sites/Y4745/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FY4745%2FShared%20Documents%2FProjeto%20paperless%2FFeminine%2DCare%2FProdu%C3%A7%C3%A3o%2FNI%2Epdf&viewid=b615a2b9%2Dec62%2D44d0%2Dae61%2Df53f6b455721&parent=%2Fsites%2FY4745%2FShared%20Documents%2FProjeto%20paperless%2FFeminine%2DCare%2FProdu%C3%A7%C3%A3o',
    'Instrução de Trabalho': 'https://kimberlyclark.sharepoint.com/sites/Y4745/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FY4745%2FShared%20Documents%2FProjeto%20paperless%2FFeminine%2DCare%2FProdu%C3%A7%C3%A3o%2Fbotao%20dpf%2Epdf&viewid=b615a2b9%2Dec62%2D44d0%2Dae61%2Df53f6b455721&parent=%2Fsites%2FY4745%2FShared%20Documents%2FProjeto%20paperless%2FFeminine%2DCare%2FProdu%C3%A7%C3%A3o',
    'Autonomous Care': 'https://brsza022/PIVision/#/Displays/633/CART%C3%95ES-DE-CUIDADO-AUTONOMOS',
    'Plano de controle': 'https://www.etq.kcc.com:443/RelianceProd/reliance?ETQ$CMD=CMD_OPEN_ATTACHMENT_LAST_REV&ETQ$FILE_NAME=PC_BR_SZ_FC_AC-22+Plano+de+Controle.xlsx&ETQ$APPLICATION_ID=7&ETQ$FORM_ID=37&ETQ$KEY_VALUE=882564&ETQ$SOURCE_FIELD_ID=22423&ETQ$ORIGINAL_DOC_ID=506844',
    'Checklist de Arranjos Temporarios': 'https://brsza022/PIVision/#/Displays/1263/01_Temp_Arrangement_Controls',
    'Lançamentos de Parâmetros Manuais': '',
    'LSW': 'https://www.example8.com'
};

// Armazene as propriedades dos novos botões em objetos separados
var newButtonProps = {
    'Checklist de Limpeza':{startPos:{top: 150, left: 150}, finalPos: {top: 500, left: 780}},
    'Guia Troca De Fase': { startPos: { top: 150, left: 150 }, finalPos: { top: 500, left: 1200 } },
    'Instrução de Trabalho': { startPos: { top: 200, left: 200 }, finalPos: { top: 500, left: 400 } },
    'Autonomous Care': { startPos: { top: 250, left: 250 }, finalPos: { top: 500, left: 780 } },
    'Plano de controle': { startPos: { top: 300, left: 300 }, finalPos: { top: 500, left: 1200 } },
    'Checklist de Arranjos Temporarios': { startPos: { top: 350, left: 350 }, finalPos: { top: 500, left: 400 } },
    'Lançamentos de Parâmetros Manuais': { startPos: { top: 400, left: 400 }, finalPos: { top: 500, left: 805 } },
    'LSW': { startPos: { top: 450, left: 450 }, finalPos: { top: 500, left: 780 } }
};

// Use o array ao gerar os botões
for (let i = 0; i < buttonNames.length; i++) {
    const button = document.createElement('button');
    button.className = 'custom-button ' + buttonNames[i].toLowerCase(); // Adiciona uma classe única para cada botão em letras minúsculas
    button.textContent = buttonNames[i];
    button.onclick = function() { moveButton(button); }; // Passa o próprio botão aqui
    document.querySelector('.button-container').appendChild(button);
}

function moveButton(button) {
    // Define a posição inicial do botão antes da animação
    var startPos = { top: button.offsetTop, left: button.offsetLeft };

    // Oculta todos os botões
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(btn => btn.style.display = 'none');

    // Exibe apenas o botão clicado no topo
    button.style.display = 'block';
    button.style.position = 'absolute';
    button.style.top = `${startPos.top}px`;
    button.style.left = `${startPos.left}px`;

    // Define a posição final do botão após a animação
    var finalPos;
    switch (button.textContent) {
        case 'QUALIDADE':
            finalPos = { top: '120px', left: '42%' }; // Exemplo de posição final para QUALIDADE
            break;
        case 'PRODUÇÃO':
            finalPos = { top: '120px', left: '42%' }; // Exemplo de posição final para PRODUÇÃO
            break;
        case 'PROCESSOS':
            finalPos = { top: '120px', left: '42%' }; // Exemplo de posição final para PROCESSOS
            break;
        case 'MANUTENÇÃO':
            finalPos = { top: '120px', left: '42%' }; // Exemplo de posição final para MANUTENÇÃO
            break;
    }

    // Animação suave para mover o botão para a posição final
    $(button).stop().animate({
        top: finalPos.top, // Posição Y final
        left: finalPos.left // Posição X final
    }, {
        duration: 1000, // 1 segundo de duração
        complete: function() {
            // Exibe o botão "X" após a animação
            const closeButton = document.querySelector('.close-button');
            closeButton.style.display = 'block';

            // Gera novos botões
            generateButtons(button.textContent); // Passa o texto do botão aqui
        }
    });
}


function closeAction() {
    // Oculta o botão "X"
    const closeButton = document.querySelector('.close-button');
    closeButton.style.display = 'none';

    // Restaura os botões para a posição original
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(btn => {
        btn.style.display = 'block';
        btn.style.position = 'static';
        btn.style.top = 'auto';
        btn.style.left = 'auto';
    });

    // Remove os novos botões
    const newButtons = document.querySelectorAll('.new-button');
    newButtons.forEach(btn => {
        btn.remove();
    });
}

function generateButtons(buttonName) {
    // Seleciona o container dos botões
    const container = document.querySelector('.button-container');

    // Cria um novo container para os novos botões
    const newButtonContainer = document.createElement('div');
    newButtonContainer.className = 'new-button-container'; // Adiciona a classe 'new-button-container'
    container.appendChild(newButtonContainer);

    // Cria novos botões baseados no botão clicado
    for (let i = 0; i < newButtonNames[buttonName].length; i++) {
        const newButton = document.createElement('button');
        newButton.className = 'custom-button new-button ' + buttonName.toLowerCase(); // Adiciona a classe 'new-button' e a classe única do botão em letras minúsculas
        newButton.textContent = newButtonNames[buttonName][i]; // Use o array de nomes dos novos botões aqui
        newButton.style.float = 'left'; // Adiciona a propriedade float

        // Adiciona um evento de clique ao botão para abrir um novo link
        newButton.onclick = function() {
            window.open(newButtonUrls[newButton.textContent], '_blank'); // Use o array de URLs dos novos botões aqui
        };

        // Use newButtonProps para definir a posição inicial e final dos novos botões
        if (newButtonProps[newButton.textContent]) {
            const { startPos, finalPos } = newButtonProps[newButton.textContent];
            newButton.style.position = 'absolute';
            newButton.style.top = `${startPos.top}px`;
            newButton.style.left = `${startPos.left}px`;

            // Animação suave para mover o botão para a posição final
            $(newButton).stop().animate({
                top: `${finalPos.top}px`, // Posição Y final
                left: `${finalPos.left}px` // Posição X final
            }, {
                duration: 1000, // 1 segundo de duração
            });
        }

        newButtonContainer.appendChild(newButton); // Adiciona o novo botão ao novo container

        // Adiciona a classe 'visible' ao novo botão após um pequeno atraso
        setTimeout(function() {
            newButton.classList.add('visible');
        }, 100);
    }
}

// Suponha que você tenha um elemento onde deseja adicionar os botões
const container = document.querySelector('custom-button new-button produção visible');

// Itera sobre os nomes dos novos botões
for (const buttonName in newButtonNames) {
  if (newButtonNames.hasOwnProperty(buttonName)) {
    const button = document.createElement('button');
    button.textContent = buttonName;

    // Adiciona um ouvinte de evento para o clique do botão
    button.addEventListener('click', () => {
      // Aqui você pode adicionar a lógica para o download
      // Por exemplo, usando a API fetch ou criando um Blob e um link de download
      // Substitua 'seuarquivo.pdf' pela URL correta do arquivo
      const url = newButtonUrls[buttonName];
      fetch(url)
        .then(response => response.blob())
        .then(blob => {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'Guia de Troca de Fase ABS Embaladora Focke.pdf'; // Nome do arquivo para download
          a.click(); // Simula o clique no link de download
        });
    });

    // Adicione o botão ao contêiner
    container.appendChild(button);

  }
}



function toggleDropdown() {
    const dropdown = document.getElementById("custom-button new-button produção visible");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}