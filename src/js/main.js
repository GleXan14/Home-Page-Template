

//Constant
const DESKTOP = './src/images/desktop';
const MOBILE = './src/images/mobile';
const img = [];

//Variables
let activador = true;


//function to get a element DOM
const get = (selector) => {
    return document.querySelector(selector)
};

// element DOM
const btnMenu = get('.btn-menu');
const iconMenu = get('.btn-menu i');
const menu = get('.menu-container');
const body = get('body');

//menu responsive

btnMenu.addEventListener('click', function(){

    iconMenu.classList.toggle('fa-times');
    
    if(activador){

        menu.style.right = '0';
        menu.style.transition = '0.5s';
        iconMenu.style.color = '#000';
        btnMenu.style.position = 'fixed'
        btnMenu.style.right = '2%';
        activador = false;

    }else{
        menu.style.right = '-100%';
        iconMenu.style.color = '#fff';
        btnMenu.style.position = 'relative'
        btnMenu.style.right = '0';
        activador = true;
    }

   
});




//to get every our-creations img
for(i=1; i<=8;i++){
    img[i] = get(`#img${i} img`);
}





//change our-creations images
window.addEventListener("resize", function(){
    if(screen.width < 550){

        img[1].src = `${MOBILE}/image-deep-earth.jpg`;
        img[2].src = `${MOBILE}/image-night-arcade.jpg`;
        img[3].src = `${MOBILE}/image-soccer-team.jpg`;
        img[4].src = `${MOBILE}/image-grid.jpg`;
        img[5].src = `${MOBILE}/image-from-above.jpg`;
        img[6].src = `${MOBILE}/image-pocket-borealis.jpg`;
        img[7].src = `${MOBILE}/image-curiosity.jpg`;
        img[8].src = `${MOBILE}/image-fisheye.jpg`;
    }else{
        img[1].src = `${DESKTOP}/image-deep-earth.jpg`;
        img[2].src = `${DESKTOP}/image-night-arcade.jpg`;
        img[3].src = `${DESKTOP}/image-soccer-team.jpg`;
        img[4].src = `${DESKTOP}/image-grid.jpg`;
        img[5].src = `${DESKTOP}/image-from-above.jpg`;
        img[6].src = `${DESKTOP}/image-pocket-borealis.jpg`;
        img[7].src = `${DESKTOP}/image-curiosity.jpg`;
        img[8].src = `${DESKTOP}/image-fisheye.jpg`;
    }
});












