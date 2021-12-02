for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handle);

    function handle() {
        var buttonHtml = this.innerHTML;       
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    }
}
// document.addEventListener("keydown",function(event){
//     makeSound(event.key);
//     buttonAnimation(event.key);
// });
document.addEventListener("keydown",keybord);
    function keybord(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    }


        
            


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default:
            console.log(buttonHtml);


}
}

function buttonAnimation(char){
    var animation = document.querySelector("."+char);
    animation.classList.add("pressed");

    // setTimeout(timeout,100)
    // function timeout(){
    //     animation.classList.remove("pressed");
    // }
    setTimeout(function(){
        animation.classList.remove("pressed");
    },100);

}



