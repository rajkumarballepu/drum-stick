for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function (){
        sound(this.innerHTML);
        btnAnimation(this.innerHTML);
        // What to do when click detected
    });
    
}
document.addEventListener("keydown", function(event){
    sound(event.key);
    btnAnimation(event.key);
});
function sound(key){
    console.log(key);
    var audio;
        switch (key) {
            case "w":case "W":
                audio = new Audio("sounds/crash.mp3");
                break;
            case "a":case "A":
                audio = new Audio("sounds/kick-bass.mp3");
                break;
            case "s":case "S":
                audio = new Audio("sounds/snare.mp3");
                break;
            case "d":case "D":
                audio = new Audio("sounds/tom-1.mp3");
                break;
            
            case "j":case "J":
                    audio = new Audio("sounds/tom-2.mp3");
                    break;
            case "k":case "K":
                    audio = new Audio("sounds/tom-3.mp3");
                    break;
            case "l":case "L":
                    audio = new Audio("sounds/tom-4.mp3");
                    break;
            default:
                audio = new Audio();
                console.log(key);
                break;
        }
        audio.play();
}
function btnAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}
// console.log("I got clicked");
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();