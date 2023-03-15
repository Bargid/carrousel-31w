(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let boutonouvrir = document.querySelector('.boutonouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBoutonx = document.querySelector('.boutonx')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieimg = elmGalerie.querySelectorAll('img')
    let elmCarrouselfigure = document.querySelector('.carrouselfigure')
    let elmCarrouselform = document.querySelector(".carrouselform")
    console.log(elmGalerieimg.length)

    console.log(boutonouvrir.tagName)

    boutonouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_carrousel()
    })

    elmGalerieimg.addEventListener('mousedown', function(){
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_carrousel()
    })

    elmBoutonx.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })

    function ajouter_carrousel()
    {
        for (const elmImg of elmGalerieimg){
            ajouter_img(elmImg) // ajoute l'image dans le carrousel
            ajouter_radio()
        }
        elmCarrouselfigure.children[0].classList.add("carrouselimg--activer")
    }

    function ajouter_img(elmImg){
        let elmCarrouselimg = document.createElement('img')
        elmCarrouselimg.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrouselimg.classList.add("carrouselimg")
        elmCarrouselimg.dataset.index = index
        elmCarrouselfigure.appendChild(elmCarrouselimg)
    }

    let index = 0
    let indexprecedent = -1;

    function ajouter_radio(){
        let elmCarrouselradio = document.createElement("input")
        elmCarrouselradio.setAttribute("type", "radio")
        elmCarrouselradio.setAttribute("name", "radCarrousel")
        elmCarrouselradio.dataset.index = index
        index++
        elmCarrouselform.appendChild(elmCarrouselradio)
        elmCarrouselradio.addEventListener("mousedown", function(){
            activerimage(this.dataset.index)
        })

    }

    function activerimage(index){
        if(indexprecedent != -1){
            elmCarrouselfigure.children[indexprecedent].classList.remove("carrouselimg--activer")
        }
        elmCarrouselfigure.children[index].classList.add("carrouselimg--activer")
        indexprecedent = index;
    }
})()