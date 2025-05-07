(function () {
    'use strict';

    // Estilos do chat
    const style = document.createElement('style');
    style.textContent = `
    .chat-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 320px;
        height: 450px;
        background-color: #1a1a1a;
        border-radius: 10px;
        border: 2px solid #ff0033;
        display: flex;
        flex-direction: column;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        transform: translateY(100%);
        transition: transform 0.5s ease;
        visibility: hidden;
    }

    .chat-header {
        background-color: #ff0033;
        color: #fff;
        padding: 12px;
        text-align: center;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
        font-weight: bold;
    }

    .chat-body {
        flex: 1;
        overflow-y: auto;
        padding: 12px;
        background-color: #333;
        color: #fff;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .chat-footer {
        padding: 12px;
        display: flex;
        gap: 10px;
        background-color: #444;
        border-radius: 0 0 10px 10px;
    }

    .chat-input {
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        border: none;
        background-color: #555;
        color: #fff;
        font-size: 14px;
        outline: none;
    }

    .chat-button {
        background-color: #ff0033;
        padding: 10px;
        border-radius: 6px;
        border: none;
        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s ease;
    }

    .chat-button:hover {
        background-color: #cc002a;
    }

    .sidebar-icon {
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #fff;
        border: 4px solid #ff0033;
        box-shadow: 0 0 15px rgba(255, 0, 51, 0.7);
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .sidebar-icon:hover {
        transform: scale(1.1);
        box-shadow: 0 0 20px rgba(255, 0, 51, 1);
    }
    `;
    document.head.appendChild(style);

    // Criando a caixa de chat
    const chatContainer = document.createElement('div');
    chatContainer.className = 'chat-container';

    const chatHeader = document.createElement('div');
    chatHeader.className = 'chat-header';
    chatHeader.textContent = 'Chat GGNET';
    chatContainer.appendChild(chatHeader);

    const chatBody = document.createElement('div');
    chatBody.className = 'chat-body';
    chatContainer.appendChild(chatBody);

    const chatFooter = document.createElement('div');
    chatFooter.className = 'chat-footer';

    const chatInput = document.createElement('input');
    chatInput.className = 'chat-input';
    chatInput.placeholder = 'Digite sua mensagem...';

    const chatButton = document.createElement('button');
    chatButton.className = 'chat-button';
    chatButton.textContent = 'Enviar';

    chatFooter.appendChild(chatInput);
    chatFooter.appendChild(chatButton);
    chatContainer.appendChild(chatFooter);
    document.body.appendChild(chatContainer);

    // Ícone flutuante
    const icon = document.createElement('img');
    icon.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqYh7CE__-cafXUlORp3ORgLkDSDV941AVXQ&s';
    icon.className = 'sidebar-icon';
    document.body.appendChild(icon);

    // Função de exibição do chat
    function displayChat() {
        if (chatContainer.style.visibility === 'hidden') {
            chatContainer.style.visibility = 'visible';
            chatContainer.style.transform = 'translateY(0%)';
        } else {
            chatContainer.style.visibility = 'hidden';
            chatContainer.style.transform = 'translateY(100%)';
        }
    }

    icon.addEventListener('click', displayChat);

    // Função de enviar mensagem
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const messageElem = document.createElement('div');
            messageElem.className = 'chat-message user';

            const messageContent = document.createElement('div');
            messageContent.className = 'message-content';
            messageContent.textContent = message;
            messageElem.appendChild(messageContent);

            chatBody.appendChild(messageElem);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }

    chatButton.addEventListener('click', sendMessage);

    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    // Adicionando resposta inicial
    setTimeout(() => {
        addChatResponse('Olá! Como posso ajudar?');
    }, 2000);

    // Função para adicionar resposta ao chat
    function addChatResponse(responseText) {
        const messageElem = document.createElement('div');
        messageElem.className = 'chat-message chat';

        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = responseText;
        messageElem.appendChild(messageContent);

        chatBody.appendChild(messageElem);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Garantindo que a caixa de chat aparece com um atraso
    setTimeout(() => {
        chatContainer.style.visibility = 'visible';
        chatContainer.style.transform = 'translateY(0%)';
    }, 1000);

})();
