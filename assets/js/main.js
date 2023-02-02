const circle = document.querySelectorAll('.card-circle')
const cards = document.querySelectorAll('.card')
const greenLeaf = document.querySelector('.green-leaf')
const bordLeaf = document.querySelector('.category-leaf')

cards.forEach( itemCards => {
itemCards.addEventListener('mouseover', () => {
    greenLeaf.style.left = '-150px'
    greenLeaf.style.top = '70px'
    bordLeaf.style.right = '390px'
    bordLeaf.style.bottom = '85px'
    })
    itemCards.addEventListener('mouseout', () => {
        greenLeaf.style.left = '-160px'
        greenLeaf.style.top = '80px'
        bordLeaf.style.right = '400px'
        bordLeaf.style.bottom = '90px'
        })
})
