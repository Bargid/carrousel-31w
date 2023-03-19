// (function(){
//     // fonction IFEE
//     console.log('début du carrousel')
//     let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
//     let elmCarrousel = document.querySelector('.carrousel')
//     let elmBouton__x = document.querySelector('.bouton__x')
//     let elmGalerie = document.querySelector('.galerie')
//     let elmGalerie__img = elmGalerie.querySelectorAll('img')
//     let elmCarrousel__figure = document.querySelector('.carrousel__figure')
//     let elmCarrousel__form = document.querySelector(".carrousel__form")
//     console.log(elmGalerie__img.length)

//     console.log(bouton__ouvrir.tagName)

//     bouton__ouvrir.addEventListener('mousedown', function(){
//         console.log('boîte modale')
//         elmCarrousel.classList.add('carrousel--ouvrir')
//         ajouter_carrousel()
//     })
//     elmBouton__x.addEventListener('mousedown', function(){
//         console.log('boîte modale')
//         elmCarrousel.classList.remove('carrousel--ouvrir')
//     })

//     function ajouter_carrousel()
//     {
//         index = 0;
//         for (const elmImg of elmGalerie__img){
//             ajouter_img(elmImg) // ajoute l'image dans le carrousel
//             ajouter_radio()
//         }
//         elmCarrousel__figure.children[0].classList.add("carrouselimg--activer")
//     }

//     function ajouter_img(elmImg){
//         let elmCarrousel__img = document.createElement('img')
//         elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
//         elmCarrousel__img.classList.add("carrouselimg")
//         elmCarrousel__img.dataset.index = index
//         elmCarrousel__figure.appendChild(elmCarrousel__img)
//     }

//     let index = 0
//     let indexprecedent = -1;

//     function ajouter_radio(){
//         let elmCarrousel__radio = document.createElement("input")
//         elmCarrousel__radio.setAttribute("type", "radio")
//         elmCarrousel__radio.setAttribute("name", "radCarrousel")
//         elmCarrousel__radio.dataset.index = index
//         index++
//         elmCarrousel__form.appendChild(elmCarrousel__radio) // fix variable name
//         elmCarrousel__radio.addEventListener("mousedown", function(){
//             activerimage(this.dataset.index)
//         })
//     }

//     function activerimage(index){
//         if(indexprecedent != -1){
//             elmCarrousel__figure.children[indexprecedent].classList.remove("carrouselimg--activer")
//         }
//         elmCarrousel__figure.children[index].classList.add("carrouselimg--activer")
//         indexprecedent = index;
//     }
// })()