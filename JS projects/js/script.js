var title = document.getElementById('titel')
var wscree = document.getElementById('titel2')
var btn = document.getElementById('btn')
var tarry = document.getElementsByClassName('flex-box');

var logo= document.getElementById('logo')
var startbtn= document.getElementById('start-btn')
var selectorarea= document.getElementById('selector-area')
var bacttostart= document.getElementById('bacttostart')


var c = 0; 
var cp
var cpc


function startbt(){
    if(startbtn.classList.contains('active')){
        selectorarea.classList.add('active');
        startbtn.classList.remove('active')
    }
}

function backbtn(){
    if(selectorarea.classList.contains('active')){
        selectorarea.classList.remove('active');
        startbtn.classList.add('active')
    }
}

function startgame(g) {

    if(c==0){
        cp = g
    }

    // alert(cp);

    if(selectorarea.classList.contains('active')){
        selectorarea.classList.remove('active');
        logo.classList.remove('active')
        document.getElementById('game-bord').classList.add('active')
    }

    wscree.innerText = `player ${g} Turn`

}



// =============================function for tic ===========================

function check(v) {

    var t =tarry[v-1].innerText;

    if(t == ''){

        if(c % 2 == 0){
            tarry[v-1].innerText = cp
            col(cp);
            }
            else{
            tarry[v-1].innerText = cp
            col(cp);
            }
        switc()
        c++;
    }

    function col(cs){
        if(cs =='x'){
            tarry[v-1].style.color = '#2ebf2e'
        }else{
            tarry[v-1].style.color = 'red'
        }
    }

    win()
}

// =========================================switch current player==========================

function switc() {
    if(cp == 'x'){
        cp = 'o'
        wscree.innerText= `player ${cp} Turn`
    }else{
        cp = 'x'
        wscree.innerText= `player ${cp} Turn`
    }
}


// ============================================function for cheke winner ===========================

function win(){
    
    if(c == 9){
        wscree.innerText= ' Match drea';
    }
 
    if((tarry[0].innerText == 'x' && tarry[1].innerText == 'x' && tarry[2].innerText == 'x') ||
    (tarry[3].innerText == 'x' && tarry[4].innerText == 'x' && tarry[5].innerText == 'x') ||
    (tarry[6].innerText == 'x' && tarry[7].innerText == 'x' && tarry[8].innerText == 'x') ||
    (tarry[0].innerText == 'x' && tarry[3].innerText == 'x' && tarry[6].innerText == 'x') ||
    (tarry[1].innerText == 'x' && tarry[4].innerText == 'x' && tarry[7].innerText == 'x') ||
    (tarry[2].innerText == 'x' && tarry[5].innerText == 'x' && tarry[8].innerText == 'x') ||
    (tarry[0].innerText == 'x' && tarry[4].innerText == 'x' && tarry[8].innerText == 'x') ||
    (tarry[2].innerText == 'x' && tarry[4].innerText == 'x' && tarry[6].innerText == 'x')){
        wscree.innerText= ' Winner = Player X';
        disa()
    }

    if((tarry[0].innerText == 'o' && tarry[1].innerText == 'o' && tarry[2].innerText == 'o') ||
    (tarry[3].innerText == 'o' && tarry[4].innerText == 'o' && tarry[5].innerText == 'o') ||
    (tarry[6].innerText == 'o' && tarry[7].innerText == 'o' && tarry[8].innerText == 'o') ||
    (tarry[0].innerText == 'o' && tarry[3].innerText == 'o' && tarry[6].innerText == 'o') ||
    (tarry[1].innerText == 'o' && tarry[4].innerText == 'o' && tarry[7].innerText == 'o') ||
    (tarry[2].innerText == 'o' && tarry[5].innerText == 'o' && tarry[8].innerText == 'o') ||
    (tarry[0].innerText == 'o' && tarry[4].innerText == 'o' && tarry[8].innerText == 'o') ||
    (tarry[2].innerText == 'o' && tarry[4].innerText == 'o' && tarry[6].innerText == 'o')){
        wscree.innerText= ' Winner = Player o';
        disa()
    }


}
// ===========================================function for start over==============================
function rest(){
    c = 0;
   
    for(i=0;i<tarry.length;i++){
        tarry[i].innerText = ''
    }
    switc();


    if(document.getElementById('game-bord').classList.contains('active')){
        selectorarea.classList.add('active');
        logo.classList.add('active')
        document.getElementById('game-bord').classList.remove('active')
    }
}


function disa() {

    for(i=0;i<tarry.length;i++){
        tarry[i].disabled = true
    }
}



