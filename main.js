const textLang = "Bienvenido al curso de React Native en PachaQtec";

const language = "Inglés";

const dataList = [
  {
    idioma: "Español",
    texto: "Bienvenido al curso de React Native en PachaQtec",
    id_idioma: 1,
  },
  {
    idioma: "Inglés",
    texto: "Welcome to the React Native course at PachaQtec",
    id_idioma: 2,
  },
  {
    idioma: "Francés",
    texto: "Bienvenue dans le cours React Native chez PachaQtec",
    id_idioma: 3,
  },
  {
    idioma: "Italiano",
    texto: "Benvenuti al corso React Native presso PachaQtec",
    id_idioma: 4,
  },
  {
    idioma: "Portugués",
    texto: "Bem-vindo ao curso React Native na PachaQtec",
    id_idioma: 5,
  },
];

const identifyLang = function () {
  for (let obj of dataList) {
    if (Object.values(obj).includes(language)) {
      return `${obj.idioma}: ${obj.texto}`;
    }
  }
};

const translate = function () {
  for (let obj of dataList) {
    if (Object.values(obj).includes(textLang)) {
      return `${obj.idioma}: ${obj.texto}`;
    }
  }
};

console.log(identifyLang());
console.log(translate());
