const paletas = [
    {
      id: 1,
      sabor: 'Morango com Leite Condensado',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/morango-com-leite-condensado.png',
      preco: 10.0,
    },
    {
      id: 2,
      sabor: 'Ninho com Nutella',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/ninho-com-nutella.png',
      preco: 10.0,
    },
    {
      id: 3,
      sabor: 'Morango',
      descricao:
        'Quam vulputate dignissim suspendisse in est ante in nibh mauris.',
      foto: './assets/images/Morango.png',
      preco: 7.0,
    },
];
  
const findPaletasService = () => {
    return paletas;
};
  
const findPaletaByIdService = (id) => {
    return paletas.find((paleta) => paleta.id == id);
};

const createPaletaService = (newPaleta) => {
    const newId = paletas.length + 1;
    newPaleta.id = newId;
    paletas.push(newPaleta);
    return newPaleta;
};
const updatePaletaService = (id, paletaEdited) => {
    paletaEdited['id'] = id;
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    paletas[paletaIndex] = paletaEdited;
    return paletaEdited;
};
const deletePaletaService = (id) => {
    const paletaIndex = paletas.findIndex((paleta) => paleta.id == id);
    return paletas.splice(paletaIndex, 1);
};

module.exports = {
    findPaletasService,
    findPaletaByIdService,
    createPaletaService,
    updatePaletaService,
    deletePaletaService,
};
