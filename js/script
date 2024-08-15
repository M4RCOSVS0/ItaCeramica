const produtos = {
    "Furadeira-Bosch": {
        nome: "Furadeira Bosch",
        descricao: "Furadeira Bosch com função de Martelete 127v.",
        preco: "R$ 400,00",
        imagem: "img/furadeira_bosch - G.webp",
        alt: "furadeira bosch",
        title: "furadeira bosch"
    },
    "Inchada-cabo-madeira": {
        nome: "Inchada",
        descricao: "Inchada com cabo de madeira resistente.",
        preco: "R$ 100,00",
        imagem: "img/inchada - G.webp",
        alt: "inchada-cabo-madeira",
        title: "inchada-cabo-madeira"
    },
    "Martelo-normal": {
        nome: "Martelo",
        descricao: "Martelo resistente para uso geral.",
        preco: "R$ 89,90",
        imagem: "img/martelo - G.webp",
        alt: "Martelo",
        title: "Martelo"
    },
    "Bloco-tijolo-vedacao-14-cm": {
        nome: "Tijolo de vedacão",
        descricao: "Tijolo de vedação 14 cm.",
        preco: "R$ 2,50",
        imagem: "img/bloco-tijolo-vedacao-14-cm - G.webp",
        alt: "bloco-tijolo-vedacao",
        title: "bloco-tijolo-vedacao"
    },
    "Cimento-Zebu-50kg": {
        nome: "Cimento Zebu 50kg",
        descricao: "Saco de cimento Zebu de 50kg.",
        preco: "R$ 59,90",
        imagem: "img/cimento Zebu 50kg - G.webp",
        alt: "Cimento Zebu 50kg",
        title: "Cimento Zebu 50kg"
    },
    "Argamassa-cimentcola-Quartzuliti": {
        nome: "Argamassa cimentcola",
        descricao: "Argamassa cimentcola para assentamento.",
        preco: "R$ 26,50",
        imagem: "img/Argamassa cimentcola - G.webp",
        alt: "Argamassa cimentcola",
        title: "Argamassa Cimentcola"
    },
    "Piso-ceramico-madeira": {
        nome: "Piso cerâmico madeira",
        descricao: "Piso cerâmico com acabamento em madeira.",
        preco: "R$ 9,90",
        imagem: "img/piso ceramaico madeira - G.webp",
        alt: "piso ceramico madeira",
        title: "piso ceramico madeira"
    },
    "Piso-Argus": {
        nome: "Piso Argus",
        descricao: "Piso cerâmico da linha Argus.",
        preco: "R$ 14,90",
        imagem: "img/piso-Argus - G.webp",
        alt: "piso-Argus",
        title: "piso-Argus"
    },
    "Piso-Duomo-Marrom": {
        nome: "Piso Duomo Marrom",
        descricao: "Piso cerâmico Duomo na cor marrom.",
        preco: "R$ 12,90",
        imagem: "img/Piso-Duomo-Marrom - G.webp",
        alt: "Piso-Duomo-Marrom",
        title: "Piso-Duomo-Marrom"
    },
    "Tinta-acrilica-gesso-branco-Coral": {
        nome: "Tinta acrílica gesso branco",
        descricao: "Tinta acrílica para gesso, cor branca.",
        preco: "R$ 37,90",
        imagem: "img/TINTA-ACRILICA-RENOVA-DIRETO-GESSO-BRANCO-3.6L-CORAL - G.webp",
        alt: "TINTA-ACRILICA",
        title: "TINTA-ACRILICA"
    },
    "Tinta-suvinil-sempre-nova": {
        nome: "Tinta suvinil sempre nova",
        descricao: "Tinta Suvinil, cor sempre nova.",
        preco: "R$ 65,80",
        imagem: "img/tinta-suvinil-sempre-nova - G.webp",
        alt: "tinta-suvinil-sempre-nova",
        title: "tinta-suvinil-sempre-nova"
    },
    "Tinta-spray-uso-geral": {
        nome: "Tinta tekbond spray",
        descricao: "Tinta spray de uso geral, 350 ml.",
        preco: "R$ 18,70",
        imagem: "img/474808_tinta_spray_de_uso_geral_350_ml - G.webp",
        alt: "tinta_spray_de_uso_geral_350_ml",
        title: "tinta_spray_de_uso_geral"
    }
};


const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

if (produtos[produtoId]) {
    document.getElementById('nome-produto').textContent = produtos[produtoId].nome;
    document.getElementById('descricao-produto').textContent = produtos[produtoId].descricao;
    const img = document.getElementById('imagem-produto');
    img.src = produtos[produtoId].imagem;
    img.alt = produtos[produtoId].alt;
    img.title = produtos[produtoId].title;
    document.getElementById('preco-produto').textContent = produtos[produtoId].preco;
} else {
    document.getElementById('nome-produto').textContent = "Produto não encontrado.";
}
