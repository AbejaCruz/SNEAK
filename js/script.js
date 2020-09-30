fetch('./data/data.json').then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  var portfolio = data;

  let mainListNode = document.getElementById('masonry-with-columns')
  let liList


  for (let i = 0; i < portfolio.data.length; i++) {

    var info= portfolio.data[i];

    liList = document.createElement('li')
    liList.innerHTML = '<img src="' + info.image + '" alt="' + info.title + '"/>';
    liList.innerHTML += '<div class="overlay"><div class="work-info"><h3>' + info.title + '</h3><p>' + info.category + '</p></div></div>';


    let cat = info.category
    liList.className = cat

    mainListNode.appendChild(liList)
  }

 }).catch(err => {
  // Do something for an error here
});

function showCategory(cat) {
  let workscat = document.querySelectorAll('.works li')

  workscat.forEach(element => {
    element.classList.add('hidden')
    if (element.classList.contains(cat)) {
      element.classList.remove('hidden')
      element.classList.add('visible')
    }
  });
};

let hamburger = document.getElementById('hamburger')
hamburger.onclick = deployMenu
let menu = document.getElementById('menu')

function deployMenu() {
  if (menu.classList.contains('deploy')) {
    menu.classList.remove('deploy')
    hamburger.classList.remove('cross')
  } else {
    menu.classList.add('deploy')
    hamburger.classList.add('cross')
  }
}