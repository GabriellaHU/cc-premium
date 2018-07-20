// ----------------------------------------------
// ----------------- Cat Pictures ---------------
// ----------------------------------------------

//array of cat pictures
const cats = [
  {
    src: 'images/5372754294_db6acaa1e5_z.jpg',
    name: 'Grumpy',
    count: 0,
  },
  {
    src: 'images/5655186625_2eedca4fc6_z.jpg',
    name: 'Tiger',
    count: 0,
  },
  {
    src: 'images/5675069067_c427114ce0_z.jpg',
    name:'Shylo',
    count: 0,
  },
  {
    src: 'images/8086455101_227ba7054d_z.jpg',
    name: 'Bob',
    count: 0,
  },
  {
    src: 'images/12367551225_3c15302538_z.jpg',
    name: 'Cutie',
    count: 0,
  }
];


// ----------------------------------------------
// --------------- Cat Selector  ----------------
// ----------------------------------------------

// creates a radiogroup in the DOM

const catContainer = document.querySelector('.img-container');
const catImg = document.createElement('img');
const catName = document.createElement('figcaption');
const catSelector = document.querySelector('.cat-radiogroup');
const counter = document.querySelector('.counter');

for (let i = 0; i < cats.length; i++) {

    const catSelection = document.createElement('input');
    catSelection.setAttribute('type', 'radio');
    catSelection.setAttribute('id', i);
    catSelection.setAttribute('name', 'cat');
    catSelection.setAttribute('aria-checked', false);
    catSelection.removeAttribute('class');
    catSelection.setAttribute('value', cats[i].name);
    catSelector.appendChild(catSelection);

    const catLabel = document.createElement('label');
    catLabel.setAttribute('for', cats[i].name);
    catLabel.textContent = cats[i].name;
    catSelector.appendChild(catLabel);

    // changes the radio group selection

    catSelection.addEventListener('click', (function(iCopy) {

      return function() {
           let selectedCat = cats[iCopy].src;
           let selectedName = cats[iCopy].name;
           let selectedID = cats[iCopy].id;

           catReset();
           catSelection.setAttribute('aria-checked', true);
           catSelection.setAttribute('class', 'selected');

           catImg.setAttribute('src', selectedCat);
           catContainer.appendChild(catImg);
           selectedCat.textContent = selectedName
           catContainer.appendChild(catName);

           counter.textContent = `Cat clicks: ${cats[iCopy].count}`

          };
      })(i));

};

// ----------------------------------------------
// ------------------ Reset Cat -----------------
// ----------------------------------------------
//resets the the rest of the radio buttons, when a new one is selected

const catChoices = document.querySelectorAll('input');
const catReset = function() {
  catChoices.forEach( function(catChoice){
    catChoice.setAttribute('aria-checked', false);
    catChoice.removeAttribute('class');
  });
};

// ----------------------------------------------
// ------------------ Init Cat ------------------
// ----------------------------------------------

//initializes the original selection of the first cat

function initCat() {

  catImg.setAttribute('alt', 'cat');
  catImg.setAttribute('class', 'cat-pic');
  catImg.setAttribute('src', cats[0].src);
  catContainer.appendChild(catImg);
  document.getElementById('0').setAttribute('aria-checked', true);
  document.getElementById('0').setAttribute('class', 'selected');
  document.getElementById('0').setAttribute('checked', true);
}

initCat();

// ----------------------------------------------
// ----------------- Click Counter --------------
// ----------------------------------------------

catContainer.addEventListener('click', function() {

  const chosenCat = document.querySelector('.selected');
  const id = chosenCat.getAttribute('id');

  cats[id].count = cats[id].count + 1;
  counter.textContent = `Cat clicks: ${cats[id].count}`;

 });
