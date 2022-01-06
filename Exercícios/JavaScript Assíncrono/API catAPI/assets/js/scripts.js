const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const returnCats = async () => {
    try {
        const dados = await fetch(BASE_URL);         // faz a fetch dos dados
        const dadosJSON = await dados.json();   // converte para JSON
        return dadosJSON.webpurl;
    }
    catch (err) {
        console.log("Erro: " + err.message);
    }
};

const loadImage = async () => {
    const img = document.getElementsByTagName('img')[0];
    img.src = await returnCats();
};

loadImage();

const button = document.getElementById('change-cat');
button.addEventListener('click', loadImage);