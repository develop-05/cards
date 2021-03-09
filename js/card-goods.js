const catalog = document.querySelector('.catalog');
const subCatalog = document.querySelector('.sub-catalog');
const magazine = document.querySelector('.magazine');
const catalogMobile = document.querySelector('.catalog-mobile');


catalog.onclick = function () {
  subCatalog.classList.toggle('sub-catalog-active');
  catalog.classList.toggle('catalog-active');
};

magazine.onclick = function () {
  subCatalog.classList.toggle('sub-catalog-active');
  magazine.classList.toggle('magazine-active');
};


catalogMobile.onclick = function () {
  subCatalog.classList.toggle('sub-catalog-active');
  catalogMobile.classList.toggle('catalog-mobile-active');
};



let count = document.getElementById("buttonCountNumber");

document.getElementById("plus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 100){
    count.innerHTML++;
    let countPlus = count.innerHTML;
  }
}

document.getElementById("minus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
  }
}
