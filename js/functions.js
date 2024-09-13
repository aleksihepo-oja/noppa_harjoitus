const dice_image = document.getElementById('dice');
dice_image.addEventListener('click', imageClick);

function imageClick(){
    var rand_num = Math.floor(Math.random() *6+1);
    document.getElementById("dice_img").src="./img/"+ String(rand_num)+".png"
}

