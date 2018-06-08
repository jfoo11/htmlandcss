
function createBottles() {
    
var imgElem = document.createElement('img');
imgElem.setAttribute('src','/images/beer.png');
imgElem.classList.add('small');

return (imgElem);

}


var beerSongElem = document.body.querySelector('#beer-song');

var bottle = createBottles();

beerSongElem.appendChild(bottle);