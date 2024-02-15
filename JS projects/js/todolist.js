var inputlist = document.getElementById('list-inputs');
var dis = document.getElementById('to-do-list');
var todo_list = document.getElementsByClassName('list');
var list =  document.getElementsByClassName('list-txt')
var chekbtn = document.getElementsByClassName('checkbtn');   
var listcnt = 0;
var listarry = [];

function addlist() {
    if(inputlist.value != ''){

        dis.innerHTML += `<li class="todolist"><input type="checkbox" onclick="check(${listcnt})" class="checkbtn"><p class="list" id="${listcnt}"><span class="list-txt">${inputlist.value}<span></p><button class="remove-btn" onclick="remove(${listcnt})">remove</button></li>`;
        listarry.push(todo_list[todo_list.length - 1].innerHTML)
        listcnt ++;
        liststust()
        inputlist.value =  '';
    }
}

function remove(ri) {
    listarry = listarry.filter((val) =>{
        return val !== document.getElementById(ri).innerHTML
    })
    dis.innerHTML = ''
    for(i=0 ; i < listarry.length ; i++){
        dis.innerHTML +=  `<li class="todolist"><input type="checkbox" onclick="check(${i})" class="checkbtn"><p class="list"  id="${i}">${listarry[i]}</p><button class="remove-btn" onclick="remove(${i})">remove</button></li>`;
    }  
    listcnt = i;
    liststust()
}

function check(ci) {
    if(chekbtn[ci].checked == true){
        list[ci].style.color = 'red'
        listarry[ci] = todo_list[ci].innerHTML
    }else{
        list[ci].style.color = '#494a4b'
        listarry[ci] = todo_list[ci].innerHTML
    }
}

function liststust() {
    for(i=0 ; i < listarry.length ; i++){
        if(list[i].style.color == 'red'){
            chekbtn[i].checked = true;
        }
    }  
}

// function remove(rc) {
//     listarry = listarry.filter((val) => { 
//         return val != list[rc].innerHTML
//     }
//     )

//     dis.innerHTML = ''

//     for(i = 0 ; i < listarry.length ; i++){
//         dis.innerHTML  += '<li class="todolist"><input type="checkbox" onclick="check('+i+')" class="checkbtn"><span class="list">' + listarry[i] + '</span><button class="remove-btn" onclick="remove('+i+')">remove</button></li>';
//     }
// }


// function addlist() {

//     if(inputlist.value != ''){
//         // console.log(inputlist.value);

//         dis.innerHTML += '<li class="todolist"><span><input type="checkbox" onclick="check('+listcnt+')" class="checkbtn">' + inputlist.value + '</span><button class="remove-btn" onclick="remove('+listcnt+')">remove</button></li>';

//         listcnt ++;

//         locatstor()
        
//         inputlist.value =  '';
//     }
// }

// function remove(rc) {
//     // console.log(rc)
//     todo_list[rc].style.display = 'none';
// }

// 

// function locatstor() {
//     for(i = 0 ; i < todo_list.length ; i++ ){
//         localStorage.setItem("todo"+i,todo_list[i].innerHTML)
//     }
// }

