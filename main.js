const ListaDeBotoes = document.querySelectorAll('input[type=button]');

console.log(ListaDeBotoes);

for(let index = 0; index < ListaDeBotoes.length; index++){
    ListaDeBotoes[index].onclick = function(){
        console.log(ListaDeBotoes[index].classList.add('ativa'));
    }
    ListaDeBotoes[index].onkeydown = function (evento) {
         if(evento.code === "Digit1" || evento.code === "Space"){
            ListaDeBotoes[index].classList.add('ativa')
            console.log(evento.code);    
        }
    }
    ListaDeBotoes[index].onkeyup = function (evento){
        ListaDeBotoes[index].classList.remove('ativa');
    }

}
