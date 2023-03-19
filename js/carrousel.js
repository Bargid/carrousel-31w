(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__form = document.querySelector(".carrousel__form")
    let elmCarrousel__arrowLeft = document.createElement('button');
    let elmCarrousel__arrowRight = document.createElement('button');

    bouton__ouvrir.addEventListener('mousedown', function(){
        
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_carrousel(0)
    })
    elmBouton__x.addEventListener('mousedown', function(){
        
        elmCarrousel.classList.remove('carrousel--ouvrir')
        index__precedent = -1;
    })

    elmGalerie__img.forEach((img, index) => {
        img.addEventListener("click", function(){
            elmCarrousel.classList.add('carrousel--ouvrir')
            ajouter_carrousel(index)
        })
    });
    
    function ajouter_carrousel(index)
    {
        elmCarrousel__figure.innerHTML = '';
        elmCarrousel__form.innerHTML = '';

        for (const [i, elmImg] of elmGalerie__img.entries()){
            ajouter_img(elmImg, i)
            ajouter_radio(i)
        }
        
        activer__image(index)
        ajouter_arrows();
    }
    
    function ajouter_img(elmImg, index){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add("carrousel__img")
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }

    let index__precedent = -1;

    function ajouter_radio(index){
        let elmCarrousel__radio = document.createElement("input")
        elmCarrousel__radio.setAttribute("type", "radio")
        elmCarrousel__radio.setAttribute("name", "radCarrousel")
        elmCarrousel__radio.dataset.index = index
        elmCarrousel__form.appendChild(elmCarrousel__radio)
        elmCarrousel__radio.addEventListener("mousedown", function(){
            activer__image(this.dataset.index)
        })

    }

    function activer__image(index){
        if(index__precedent != -1){
            elmCarrousel__figure.children[index__precedent].classList.remove("carrousel__img--activer")
            elmCarrousel__form.children[index__precedent].checked = false;
        }
        elmCarrousel__figure.children[index].classList.add("carrousel__img--activer")
        elmCarrousel__form.children[index].checked = true;
        index__precedent = index;
    }

    function ajouter_arrows() {
        let left_arrow = document.createElement("div");
        left_arrow.classList.add("carrousel__arrow", "carrousel__arrow--left");
        elmCarrousel__figure.appendChild(left_arrow);
      
        let right_arrow = document.createElement("div");
        right_arrow.classList.add("carrousel__arrow", "carrousel__arrow--right");
        elmCarrousel__figure.appendChild(right_arrow);
      
        left_arrow.addEventListener("click", function () {
          let index =
            index__precedent === 0
              ? elmGalerie__img.length - 1
              : index__precedent - 1;
          activer__image(index);
        });
      
        right_arrow.addEventListener("click", function () {
          let index =
            index__precedent === elmGalerie__img.length - 1
              ? 0
              : index__precedent + 1;
          activer__image(index);
        });
      }
})();
