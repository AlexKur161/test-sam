const cards = document.querySelectorAll('.card')
const greenLeaf = document.querySelector('.green-leaf')
const bordLeaf = document.querySelector('.category-leaf')
const animation = window.matchMedia('(min-width: 1200px)');
const circle = document.querySelectorAll('.card-circle')

if(animation.matches) {
    cards.forEach( itemCards => {
        itemCards.addEventListener('mouseenter', (e) => {
            greenLeaf.classList.add('green-leaf-ani')
            bordLeaf.classList.add('bord-leaf-ani')
        })
        itemCards.addEventListener('mouseleave', (e) => {
            greenLeaf.classList.remove('green-leaf-ani')
            bordLeaf.classList.remove('bord-leaf-ani')
    })
    })
    }