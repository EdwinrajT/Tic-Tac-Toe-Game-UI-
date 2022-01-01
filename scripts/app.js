const modalWindow = document.getElementById('backdrop');
const configOverlay = document.getElementById('config-overlay');

const editplayerOneBtn = document.getElementById('player-1-btn');
const editplayerTwoBtn = document.getElementById('player-2-btn');

const cancelCloseButton = document.getElementById('cancel-close-btn');


editplayerOneBtn.addEventListener('click',openPlayerConfig);
editplayerTwoBtn.addEventListener('click',openPlayerConfig);

cancelCloseButton.addEventListener('click', closeConfig);
configOverlay.addEventListener('click', closeConfig)