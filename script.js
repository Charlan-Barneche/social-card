
//setar variaveis
const card = window.document.getElementById ('card')
const imgbx = window.document.querySelector ('#card #imgBx')
const img = window.document.querySelector ('#imgBx img')
const details = window.document.querySelector ('#content #details')
//

card.addEventListener ('mouseover' , mouseover)
card.addEventListener('mouseout' , mouseout)


function mouseover(){
    card.style.height = '450px';

    img.style.position = 'absolute';
    img.style.top = '0';
    img.style.left = '-7px';

    imgbx.style.top = '-15%';
    imgbx.style.height = '250px';
    imgbx.style.width = '250px';

    details.style.transform = 'translateY(0px)'

}

function mouseout(){
    card.style.height = '190px';

    imgbx.style.top = '-20%';
    imgbx.style.left = '50%';
    imgbx.style.height = '150px';
    imgbx.style.width = '150px';
    imgbx.translateY = '-50%'

    details.style.transform = 'translateY(150px)'

}
