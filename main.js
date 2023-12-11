function  randomletter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  }

let win = 0;
let loses = 0;
let chanse = 10;

let userChoisearr = [];
let ranSymbol = randomletter();






window.addEventListener("keypress", function(i){
    const userChoise = i.key;
    if(userChoisearr.includes(userChoise)){
        alert("Təkrar simvollardan istifadə etməyin!")
    }

    

    userChoisearr.push(userChoise);
    console.log(userChoisearr);

    if(userChoisearr === ranSymbol){
        win++;
        alert("Təbriklər, doğru simvolu tapdız");
        gameRule();

    }else{
        chanse--;
        if(chanse === 0){
            loses++;
        alert(`Təəssüfki, doğru simvolu tapmadınız cavab ${ ranSymbol}`);
        gameRule();
        }
        
    }
});

function gameRule(){
     chanse = 10;
userChoisearr = [];
 ranSymbol = randomletter();

}


