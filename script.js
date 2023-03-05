const images = document.getElementsByClassName('img')

let index = 0
changeImage(index)

function changeImage(i) {
    index += i
    for(i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }

    if(index < 0) {
        index = images.length - 1
    }

    if(index > images.length - 1) {
        index = 0
    }

    images[index].style.display = 'block';
}