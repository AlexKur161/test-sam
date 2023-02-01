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






// function random (min, max) {
//     return Math.random() * (max - min) + min;
// }

// function setRandomBgColor() {
//     circle.forEach(circleItem => {
//         const newPosX = Math.random() * (300 - 1) + 1;
//         const newPosY = Math.random() * (140 - 1) + 1;
//         circleItem.style.setProperty('--main-x-position', newPosX  + 'px');
//         circleItem.style.setProperty('--main-y-position', newPosY  + 'px');
//     });
// }
// setRandomBgColor()



// function positionCircle() {
//     let x = random(0, 300)
//     let y = random(0, 200)
//     let arrayPosition, maxPosition = 0
//     let timer = 0
//                 cards.forEach( itemCards => {
//                     itemCards.addEventListener('mouseover', () => {
//                         setInterval(() => {
                            
//                     circle.forEach( itemCircle => {
//                         if(x < 300) {
//                     y += 1
//                     x += 1   
//                     itemCircle.style.top = y + 'px'
//                     itemCircle.style.left = x + 'px'
//                     arrayPosition = itemCircle.style.left.split('')
//                     maxPosition = Number(arrayPosition.splice(0, arrayPosition.length - 2).join(''))
//                     console.log(itemCircle.style.top)
//                     }
//                     else if(x > 300 || x > 300) {
//                         y -= 1
//                         x -= 1    
//                         itemCircle.style.top = y + 'px'
//                         itemCircle.style.left = x + 'px'
//                         arrayPosition = itemCircle.style.left.split('')
//                         maxPosition = Number(arrayPosition.splice(0, arrayPosition.length - 2).join(''))
//                         console.log(itemCircle.style.top)
//                         }
//                 })
//                 console.log(x)
//             }, 50)
//             })
//         }) 
// }
// positionCircle()
