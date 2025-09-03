

const cards = {
    data: [
        {
            title: "Fazer pipoca",
            text: "Eu sou muito bom em fazer pipoca, não sei se você sabe, mas só pra deixar claro.",
            imageURL: ""
        },

        {
            title: "Malabarismo",
            text: "Eu sou consigo malabarisar 3 bolas de uma só vez, dou em média 500 pegadas",
            imageURL: ""
        },

        {
            title: "Forsaken",
            text: "Sou muito bom no jogo Forsaken do roblox, minhas habilidades de Slasher (no-skill) são incríveis",
            imageURL: ""
        },

        {
            title: "Eu sei cantar",
            text: "Na festa do Carlinhos Maia, só labubu. Ela chega com Bobbie Goodies, morango do amor... de pistache",
            imageURL: ""
        },

        {
            title: "Eu sou muito bom no Valorant",
            text: "Nunca joguei, mas já sabe né? Eu sou o mestre gamer",
            imageURL: ""
        }
    ]
}

function createCardController() {
    const cardController = {}

    let currentCard = 0;

    function nextCard() {
        if (currentCard >= 4) {
            currentCard = 0;
        } else { currentCard++; }
        reloadCard(currentCard)
    }
    cardController.nextCard = nextCard;

    function previousCard() {
        if (currentCard <= 0) {
            currentCard = 4;
        } else { currentCard--; }
        reloadCard(currentCard)
    }
    cardController.previousCard = previousCard;

    return cardController;
}
const cardController = createCardController();

function reloadCard(cardID) {
    const cardTitle = document.querySelector("#title");
    const cardText = document.querySelector("#text");

    const newTitle = cards.data[cardID].title;
    const newText = cards.data[cardID].text;

    cardTitle.innerText = newTitle;
    cardText.innerText = newText;
}

const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

arrowLeft.addEventListener('click', cardController.previousCard);
arrowRight.addEventListener('click', cardController.nextCard);


