document.getElementById("select").value;
function show_menu(){
 document.getElementsByClassName("main-menu")[0].style.transform = "translateX(-30px)";
 document.getElementsByClassName('menu-btn')[1].style.display='none';
 document.getElementsByClassName('menu-btn')[0].style.display='block';
 
}    
 function close_menu(){
 document.getElementsByClassName("main-menu")[0].style.transform = "translateX(-900px)";
 document.getElementsByClassName('menu-btn')[1].style.display='block';
 document.getElementsByClassName('menu-btn')[0].style.display='none';   
 }
 function show_eshow(){
     document.getElementsByClassName('esho')[0].style.display='block'
 }
 function close_esho(){
     ocument.getElementsByClassName('esho')[0].style.display='none'
 }
 function img(){
     document.getElementById('img1').src='img/cart-mill-black.png';
     document.getElementById('img2').src='img/cart-milli.png';
 }
 function body(){
     document.body.style.background='red'
 }



 function totalMoney(){
    let sum = document.getElementById("number_money").value;
   
    let name_con = document.getElementById('select').value;
    let name_coned = document.getElementById("select_total").value;
    name_con = name_con.toLowerCase();
    name_coned = name_coned.toLowerCase();




    switch(true) {
            case name_con == "use" &&  name_coned == 'rub': 
            sum = sum * 79.9497 ;
            break;
            case name_con == "use" &&  name_coned == 'tjk': 
            sum = sum * 9.65302 ;
            break;
            case name_con == "use" &&  name_coned == 'euro': 
            sum = sum * 0.93446 ;
            break;
            case name_con == "use" &&  name_coned == 'use': 
            sum = sum * 1;
            break;
            case name_con == "tjk" &&  name_coned == 'euro': 
            sum = sum * 0.09565;
            break;
            case name_con == "tjk" &&  name_coned == 'use': 
            sum = sum * 0.10236;
            break;
            case name_con == "tjk" &&  name_coned == 'tjk': 
            sum = sum * 1;
            break;
            case name_con == "euro" &&  name_coned == 'tjk': 
            sum = sum * 10.3204;
            break;
            case name_con == "euro" &&  name_coned == 'use': 
            sum = sum * 1.06914;
            break;
            case name_con == "euro" &&  name_coned == 'euro': 
            sum = sum * 1;
            break;
            case name_con == "euro" &&  name_coned == 'rub': 
            sum = sum * 85.4774;
            break;
            case name_con == "rub" &&  name_coned == 'euro': 
            sum = sum * 0.01168;
            break;
            case name_con == "rub" &&  name_coned == 'use': 
            sum = sum * 0.01250;
            break;
            case name_con == "rub" &&  name_coned == 'tjk': 
            sum = sum * 0.12065;
            break;
            case name_con == "rub" &&  name_coned == 'rub': 
            sum = sum * 1;
            break;
        }
        document.getElementById('total_conerted').value = sum.toFixed(2)

        let name_con_mon = document.getElementById('select_total').value;
    
     
    
          
 }
 totalMoney();