const dateEl = document.getElementById("date");
const date = new Date();
const month = ["Январ", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь"
    , "Ноябрь", "Декабрь"]
dateEl.innerHTML = date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

function totalMoney() {
    let sum = document.getElementById("number_money").value;

    let name_con = document.getElementById('select').value;
    let name_coned = document.getElementById("select_total").value;
    name_con = name_con.toLowerCase();
    name_coned = name_coned.toLowerCase();

    switch (true) {
        case name_con == "use" && name_coned == 'rub':
            sum = sum * 79.9497;
            break;
        case name_con == "use" && name_coned == 'tjk':
            sum = sum * 9.65302;
            break;
        case name_con == "use" && name_coned == 'euro':
            sum = sum * 0.93446;
            break;
        case name_con == "use" && name_coned == 'use':
            sum = sum * 1;
            break;
        case name_con == "tjk" && name_coned == 'euro':
            sum = sum * 0.09565;
            break;
        case name_con == "tjk" && name_coned == 'use':
            sum = sum * 0.10236;
            break;
        case name_con == "tjk" && name_coned == 'tjk':
            sum = sum * 1;
            break;
        case name_con == "euro" && name_coned == 'tjk':
            sum = sum * 10.3204;
            break;
        case name_con == "euro" && name_coned == 'use':
            sum = sum * 1.06914;
            break;
        case name_con == "euro" && name_coned == 'euro':
            sum = sum * 1;
            break;
        case name_con == "euro" && name_coned == 'rub':
            sum = sum * 85.4774;
            break;
        case name_con == "rub" && name_coned == 'euro':
            sum = sum * 0.01168;
            break;
        case name_con == "rub" && name_coned == 'use':
            sum = sum * 0.01250;
            break;
        case name_con == "rub" && name_coned == 'tjk':
            sum = sum * 0.12065;
            break;
        case name_con == "rub" && name_coned == 'rub':
            sum = sum * 1;
            break;
    }
    document.getElementById('total_conerted').value = sum.toFixed(2)

    let name_con_mon = document.getElementById('select_total').value;
}
totalMoney();