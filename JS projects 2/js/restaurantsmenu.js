// ======================================== js for qty selection ==========================================
var qtycnt = document.getElementsByClassName('qty-cnt');
var qtynum;
function qtyplus(qn) {

    qtynum = parseInt(qtycnt[qn - 1].innerText)
    qtynum++
    qtycnt[qn - 1].innerText = qtynum;

    document.getElementsByClassName('disply-err')[qn - 1].innerText = ''

    // ============================ this js use for price calculation ==============================
    if (btncheck[qn - 1].checked == true) {
        getvalue = pricevalue[qn - 1].innerText;
        subtotal += parseFloat(getvalue.slice(1, getvalue.length));
        // console.log(getvalue.slice(1, getvalue.length))
        billanomut()
        if(document.getElementById('inputGroup').value != '' && grossanount > 0){
            updateanount();
        }
    }
}
function qtymin(qn) {

    qtynum = parseInt(qtycnt[qn - 1].innerText)
    
    // ============================ this js use for price calculation ==============================

    if (btncheck[qn - 1].checked == true && qtynum > 0) {
        getvalue = pricevalue[qn - 1].innerText;
        // console.log(getvalue.slice(1, getvalue.length))
        subtotal -= parseFloat(getvalue.slice(1, getvalue.length));
        billanomut();
        if(document.getElementById('inputGroup').value != '' && grossanount >= 0){
            updateanount();
        }
    }

    if (qtynum > 0) {
        qtynum--;
    }

    qtycnt[qn - 1].innerText = qtynum;


}
// ======================================== js for generate bill amount ========================================================

var subtotal = 0;
var pricevalue = document.getElementsByClassName('item-price');
var btncheck = document.getElementsByClassName('btn-check');
var btn = document.getElementsByClassName('btn');
var getvalue;

function bill(itnu) {

    if (qtycnt[itnu - 1].innerText == 0) {
        btncheck[itnu - 1].checked = false
    }


    if (qtycnt[itnu - 1].innerText != 0) {

        if (btncheck[itnu - 1].checked == true) {

            getvalue = pricevalue[itnu - 1].innerText;
            subtotal += parseFloat(getvalue.slice(1, getvalue.length) * qtycnt[itnu - 1].innerText);
            billanomut()
            document.getElementsByClassName('btn')[itnu - 1].innerText = "Remove for Cart"

            if(document.getElementById('inputGroup').value != '' && grossanount >= 0){
                updateanount();
            }
        }

        if (btncheck[itnu - 1].checked == false) {

            getvalue = pricevalue[itnu - 1].innerText;
            subtotal -= (parseFloat(getvalue.slice(1, getvalue.length) * qtycnt[itnu - 1].innerText));
            billanomut()
            qtycnt[itnu - 1].innerText = 0;
            document.getElementsByClassName('btn')[itnu - 1].innerText = "Add to Cart"
            if(document.getElementById('inputGroup').value != '' && grossanount >= 0){
                updateanount();
            }
        }

    } else {
        document.getElementsByClassName('disply-err')[itnu - 1].innerText = 'Please Select Qty'
    }

}
// ======================================== js for Dispaly bill amount ========================================================

var itemtotal = document.getElementById('subtotal');
var gstamount = document.getElementById('gst-amount');
var grosstotal = document.getElementById('gross-amount');
var diacount = document.getElementById('dis-amount');
var payamount = document.getElementById('total-amount');
var itemanount;
var gsttotal;
var grossanount;
var disanount;

function billanomut() {
    itemanount = subtotal.toFixed(2);
    gsttotal = ((itemanount * 18) / 100).toFixed(2)
    grossanount = (parseFloat(itemanount) + parseFloat(gsttotal)).toFixed(2);

    itemtotal.innerText = '₹' + itemanount;
    gstamount.innerText = '₹' + gsttotal;
    grosstotal.innerText = '₹' + grossanount;
    payamount.innerText = '₹' + grossanount;
}

var disarry = [25, 20, 15, 5, 10];
var rd
function dic() {

    if (document.getElementById('inputGroup').value != '' && grossanount > 0) {

        rd = Math.round(Math.random() * 4);

        document.getElementById('disper').innerText = disarry[rd] + '%'

        disanount = (grossanount * (disarry[rd] / 100)).toFixed(2);

        diacount.innerText = '₹' + disanount;

        document.getElementById('inputGroup').disabled = true

        payamount.innerText = '₹' + (grossanount - disanount).toFixed(2);
    }
}

// function dicrefe() {
//     diacount.innerText = "₹ 00.00";
//     document.getElementById('disper').innerText = ''
//     document.getElementById('inputGroup').disabled = false;
//     document.getElementById('inputGroup').value = ''
// }

function updateanount() {
    disanount = (grossanount * (disarry[rd] / 100)).toFixed(2);
    diacount.innerText = ' ₹' + disanount
    payamount.innerText = '₹' + (grossanount - disanount).toFixed(2);
}