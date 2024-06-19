/*
const rr = 10*50;
//console.log(rr);
const double_ = 12.6/ 3.17;
//console.log(double_);
const stepen = 2**3**2;
//console.log(stepen);

const city = 'Moscow';
const street = 'Novoslobodskaya';
//console.log(city+', '+street+'.'+''+5);
let age = 20;
const igor = 38;
console.log(age<igor);
const isSuited = 100 - 10 > 90+5;
console.log(isSuited);
let a = null;
let b  = 5.7;
console.log(typeof a);
*/


/*
  let stavka    = 80;
  let zakaz     = 40;
  let hour_Work = 5;
  let day_Work  = 5;
  let living    = 11;
  let tudey     = 'Понелельник';
  let currentDeyWork = ((living - 2)* hour_Work);
  let true_ = currentDeyWork > zakaz;
  console.log(true_);
  console.log(stavka*zakaz);
  */

/*
const projectName = 'Сайт Магазина ' ;
const price = 2000;
const author = 'Василий Путиер ';

const template = author + ' заказал '   + projectName + 'по цене '  + price;
console.log(template);

const template2 = `${author} заказал ${projectName} по цене ${price} $`;
console.log(template2);

const template3 = 'Проект \n' + 'Цена :' + price + '$';
console.log(template3);

const template4 = `Проект 
Цена : ${price}$`
console.log(template4);
*/
/*
const age = '18';
console.log(Number(age)+5);
console.log(String(age));
*/


/*

const mony = 100;
const canBuy = mony > 50;
if (canBuy)
{
 console.log('Mожет купить наш пролукт');

}
console.log('Итог');
*/
  /*
const depo       = 12000;
const percent    = 7/100;
const inkrMounth = 2*12;
const custHome = 13500;
fаinalDeposit    = depo * (1+(percent/12))**inkrMounth;
if (fаinalDeposit > custHome)
{
    let comment = `Покупка возможна! Итоговый депозит : ${fаinalDeposit}
    Остаток после покупки : ${fаinalDeposit - custHome}`;
    console.log(comment);
}else
{ 
let comment = `Покупка не возможна. Недостаточно средств. Итоговый депозит : ${fаinalDeposit} 
    Остаток после покупки : ${fаinalDeposit - custHome}`;
    console.log(comment);

}
*/
/*
const role = 'r';
switch(role){
case 'manager':
    console.log('Менеджер');
    break;
    case 'admin':
    console.log('Admin');break;
    case 'CEO':
        console.log('СEO');break;
default: console.log('Мы тебя не знаем');
break;

}
*/


/*
// тернарныe опператоры
100 > 101 ? console.log('True'):console.log('False');
const srtr = 10 > 0 ? 'Больше':'Меньше';
console.log(srtr);

const bmvX3Price = 100000;
const fortTPrice = 10000;
const budget     = 200000;
const massage = budget > bmvX3Price ? 'BMV': 
budget > fortTPrice ? 'Ford':'Velosiped';
console.log(`Я хочу купить ${massage}`);
*/


/*
const repley = 8;
const iRobot = true;
const repleyTrue =  (repley === -8 || repley === 22) ? true:iRobot === true ? true:false;
console.log(repleyTrue);
// по другому - из урока
const res = 'Я не побот';
switch(true){
    case res === 'Я не побот':
    case Number(res)=== 22:
    case Number(res)===-8:
        console.log('Yes');
        break;
    default:
        console.log('Вы робот!');
}
*/

/*
const isAdmin = false;
const canWraite = false;
console.log(`Системный файл ${isAdmin && canWraite}`);
console.log(`Обычный файл ${isAdmin || canWraite}`);
console.log(`Инвертируем права админа ${!isAdmin}`);
*/

/*
const isAdmin = false;
const filename = isAdmin && 'file.mp4';
console.log(filename);
*/


/*
const balance = 100;
const bonus = 10;
const isBaned = false;
const isFirst = true;
const isSetting = true;

if ((balance >=100 || bonus>= 100)&&(!isBaned && !isFirst && isSetting))
{
console.log('Mojet kupit');

}else console.log('Ne Mojet kupit');

//==========================

const comment = ((balance >=100 || bonus>= 100)&&(!isBaned && !isFirst && isSetting))?'Yes':'Now';
console.log(`Могу купить игру: ${comment ? 'Да': 'Нет'} `);
*/


/*
function logName(name,surname){
  const comment = `Main Name ${name} ${surname}`;
  return comment;
}
*/
//console.log(logName('Igor','Borodaev'));
//logName('Igor','Borodaev');
//logName('Igor','Borodaev');



function countDepositSum(depoInUsd,month,rate){
    const sum = depoInUsd *(1+rate/12)** month;
    return sum;
}

const example = countDepositSum(10000,24,0.14);

console.log('example:', example);


function onClick() {
    const input = prompt('My message');
    console.log(input);
}

//=====================


