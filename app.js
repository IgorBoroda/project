//========================================================================
//                               МАССИВЫ
const roles = ['manager', 'admin', 'ceo'] // massif roles
const roles2 = new Array('manager', 'admin', 'ceo') // другая версия записи массива
//найти последний элемент массива
roles[roles.length - 1] //roles.length  - длина массива
// или
roles.at(-1)
// добавить элемент в конец массива
roles[3] = 'developer' // первый способ
roles.push('developer') // второй  способ ПРАВИЛЬНЫй!!!!!!!! (возвращает длину массива)
roles[roles.length] = 'IgorB' // третий способ roles.length
roles.unshift('Vas') // добавить элемент в начало массива
roles.pop() // удаляет последний элемент (возвращает удаленный элемент)
roles.shift() // удаляет первый элемент (возвращает удаленный элемент)
//=========================================================================
//ПОИСК ЭЛЕМЕНТА В МАССИВЕ
roles.indexOf('ceo') // возвращает индекс элемента в массиве по значению или -1
roles.includes('ceo') // возвращает true или false если такой элемент есть в массиве
// поиск частей элементов
roles.slice(1, 3) // slice возвращает часть массива от индекса 1 до индекса 3 не меняя сам массив
roles.slice(-2) // возвращает часть массива от последнего индекса до индекса 2
roles.splice(1, 2) // splice меняет массив, возвращает массив удалённых элементов
roles.splice(-1) // удаляет последний элемент и возвращает удаленный элемент
roles.reverse() // меняет массив на обратный порядок (может вернуть реверсированьи  массив переменной)
// конкатенация массивов
const roles3 = ['Anna', 'Igor']
roles.concat(roles3) // конкатенация массивов
// ИЗ СТРОКИ В МАССИВ И ОБРАТНО
const url = 'auth/user/login'
const res = url.split('/') // возвращает массив из строки по разделителю
roles.join('-') // возвращает строку из массива по разделителю
//--------------------------
// урок
const tasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6']
const taskMy = 'task5'

// примеры  функций для работы с массивами
// function Add(task) {
// 	return tasks.push(task)
// }
// function Remove(task) {
// 	let index = tasks.indexOf(task)
// 	if (index === -1) {
// 		return
// 	} else return tasks.splice(index, 1)
// }
// function Prioritize2(task) {
// 	const result = Remove(task)
// 	if (!result) {
// 		return
// 	}
// 	tasks.unshift(result[0])
// }
// деструктуризация массива
const userData = ['Anton', 18, 'Moscow']
// хотим вытащить имя и возраст и город
// обычным способом мы делаем это так
// const userName = userData[0]
// const userAge = userData[1]
// const userCity = userData[2]
// с помощью деструктуризации
const [userName2, userAge2, userCity2] = userData
//console.log(userName2, userAge2, userCity2)

// пример с функциями
function getData() {
	return ['Anton', 18, 'Moscow']
}
const userName3 = getData()[0]
const userAge3 = getData()[1]
const userCity3 = getData()[2]
//console.log(userName3, userAge3, userCity3)
// вызов функцию три раза, это плохо
// нужно использовать деструктуризации
//const [userName4, userAge4, userCity4] здесь мы не вызываем массив а создаем переменные которые примут данные из массива (который в данном случае возвращает функция getData())
// можно сделать так на прямую с массивом а не с функцией
// = const [userName4, userAge4, userCity4] = userData;
const [userName4, _, userCity4] = getData() //
//console.log(userName4, userCity4)

// урок rest оператор
const data = [1, 2, 3, 4, 5, 6]
const [one, two, ...others] = data // ... rest оператор только в конце
//console.log(others) // 1,2

//------------------------------------------------------------
//                  Мой вариант решения
// Упражнение - Функция URL
const url2 = 'https://purpleschool.com/auth/user/login'
function getUrl(url) {
	const res2 = url.split('/')
	const [url3, _, domed, ...path] = res2
	const path2 = path.join('/')
	console.log(url3, '\n', domed, '\n', path2)
}
//getUrl(url2)
//------------------------------------------------------------
// как в уроке
function getUrlParts(url) {
	const [protocol, _, host, ...path] = url.split('/')
	if (protocol === 'http:' || protocol === 'https:') {
		if (!host.includes('.')) {
			return
		}
		console.log(protocol, _, host, path)
		console.log(`Протокол ${protocol.split(':')[0]}`)
		console.log(`Домен ${host}`)
		console.log(`Путь внутри сайта: /${path.join('/')}`)
	}
}
//getUrlParts(url2)
//------------------------------------------------------------

//==============================================================
//                     ЦИКЛЫ

const tasks5 = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6']
// можно использовать tasks5.length как длину массива
for (let i = 0; i < tasks5.length; i++) {
	const task = 'task2'
	//console.log(tasks5[i])
	if (task === tasks5[i]) break
}

const massif2 = ['!', 'GJ', 'люблю', 'Я']
let newMassif2 = []
for (let i = massif2.length - 1; i >= 0; i--) {
	newMassif2.push(massif2[i])
}
// console.log(newMassif2)
// console.log(newMassif2.join('  '))

for (let i = 1; i < 5; i++) {
	//console.log(`Цикл 1 - ${i}`)
	for (let j = 1; j < 5; j++) {
		//console.log(`Цикл 2 - ${j}`)
	}
}

// перебор в двухмерном массиве
const tasks6 = [
	[1, 'Задача 1'],
	[2, 'Задача 2'],
]
for (let i = 0; i < tasks6.length; i++) {
	for (let j = 0; j < tasks6[i].length; j++) {
		//console.log(tasks6[i][j])
	}
}

for (let i = 0; i < tasks6.length; i++) {
	for (let j = 0; j < tasks6[i].length; j++) {
		//console.log(tasks6[i][j])
	}
}
//------------ while
// let i = 1
// while (i <= 5) {
// 	console.log(`Цикл  - ${i}`)
// 	i++
// }

//  сравнение массивов for и while
const arr = [1, 4, 6, 8, 9]
for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 5) {
		break
	}
	//console.log(arr[i])
}
let i = 0
while (arr[i] <= 5 && i < arr.length) {
	//console.log(arr[i])
	i++
}

//------------ do while
let j = 0
do {
	//console.log(arr[j])
	j++
} while (j < 0)

//------------ for of цикл и for in цикл
const arr2 = ['sss', 'sdr', 'ssa', 'www', 9]
// сравнение массивов for и (for of) (for in)
for (let i = 0; i < arr2.length; i++) {
	//console.log(arr2[i])
}
// (for of) - проходит по всем элементам массива
for (let element of arr2) {
	//	console.log(element)
}
// (for in) - проходит по индексу массива
for (let i in arr2) {
	//	console.log(i)
}

//------------------------------ Мой вариант решения
const operations = [1000, -700, 300, -500, 10000]
function sumIto(operations2) {
	let sums = 0
	for (const element of operations2) {
		sums += element
	}
	return sums
}

function sumO(operations2) {
	let sums = 0
	for (const element of operations2) {
		sums += element
		if (sums < 0) return false
	}
	return true
}

function sums(operations2) {
	let sums = 0
	let sums0 = 0
	for (const element of operations2) {
		if (element > 0) sums += element
		if (element < 0) sums0 += element
	}
	return { sums, sums0 }
}

// console.log(sumIto(operations)) // возвращает общую сумму
// console.log(sumO(operations)) // возвращает true если все числа положительные
// console.log(sums(operations))// возвращает общую сумму положительных чисел и общую сумму отрицательных

//--------------------------- Вариант решения с урока

const startingBalance = 100
function getBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance
	for (const element of arrayOfOperations) {
		balance += element
	}
	return balance
}

//console.log(getBalance(operations, startingBalance))
function checkBalance(arrayOfOperations, initialBalance) {
	let balance = initialBalance
	let isOk = true
	for (const element of arrayOfOperations) {
		balance += element
		if (balance < 0) {
			isOk = false
			break
		}
	}
	return isOk
}
//console.log(checkBalance(operations, startingBalance))
function averageOperations(arrayOfOperations) {
	let positiveCount = 0
	let positiveSum = 0
	let negativeCount = 0
	let negativeSum = 0
	for (const element of arrayOfOperations) {
		if (element > 0) {
			positiveCount++
			positiveSum += element
		} else if (element < 0) {
			negativeCount++
			negativeSum += element
		}
	}
	return [positiveSum / positiveCount, negativeSum / negativeCount]
}
//console.log(averageOperations(operations))

// =============================================================
//                          ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// Функции высшего порядка — это функции, которые:
// Принимают другие функции в качестве аргументов.
// Или возвращают функцию как результат
//------
// В JavaScript функции являются объектами первого класса. Это значит, что функции можно:
// Хранить в переменных.
// Передавать как аргументы в другие функции.
// Возвращать из других функций.
// Хранить в массивах или объектах.
// пример
const sayHello = () => console.log('Hello!')
const arr4 = [sayHello] // Хранение в массиве
const obj = { greet: sayHello } // Хранение в объекте

//arr4[0]() // "Hello!"
//obj.greet() // "Hello!"
//----
const a = b => b++
function g(a) {
	return a * a
}
//console.log(g(10))
function add(a, b) {
	return a + b
}
function subtract(a, b) {
	return a - b
}
function power(a, b) {
	return a ** b
}
function calculate(a, b, fn) {
	console.log(fn.name)
	const res = fn(a, b)
	return res
}

// let res4 = calculate(3, 3, add)
// console.log(res4)
// res4 = calculate(3, 3, subtract)
// console.log(res4)
// res4 = calculate(3, 3, power)
// console.log(res4)

// урок возвращение функции
function power(pow) {
	return function (num) {
		return num ** pow
	}
}
// const powerOfTwo = power(2)
// console.log(powerOfTwo(2))
// console.log(powerOfTwo(5))
// console.log(power(2)(2))

function advancedPower(pow, num, multiplier) {
	return num ** pow * multiplier
}
//console.log(advancedPower(2, 3, 4)); // (3 ** 2) * 4 = 36

//=====================================================
//урок - итерации в массивах

const score = [5, 10, 0, 15]
// entries помогает итерировать сразу по индексу и элементу
for (const [i, el] of score.entries()) {
	//console.log(`Раунд ${i + 1}: ${el}`)
}

// score.forEach(function (el) {
// 	console.log(`Раунд : ${el}`)
// })
// forEach - итерация по массиву
score.forEach((scoreEl, i) => {
	//console.log(`Раунд ${i + 1}: ${scoreEl}`)
})

const iterator = el => {
	//console.log(`raund : ${el}`)
}
score.forEach(iterator)

//========================================
const transactionUSD = [10, -7, 50, 100]
const transactionInRUB = []
for (const transaction of transactionUSD) {
	transactionInRUB.push(transaction * 100)
}
//===========================================
//-- map
const transactionInRUB2 = transactionUSD.map((transaction, i) => {
	return transaction * 100
})

//console.log(transactionInRUB2)

const operations2 = [100, -20, 7, -20, 50]
// const positiveOperations = []

// for (const operation of operations2) {
// 	if (operation > 0) {
// 		positiveOperations.push(operation)
// 	}
// }
//console.log(positiveOperations)
//--------- другая реализация
const positiveOperations = operations2
	.filter(elementOp => {
		return elementOp > 0
	})
	.map(value => value * 100)
//console.log(positiveOperations)

//===== пример использования с двойным массивом
const prices = [
	[100, 200],
	[120, 100],
	[200, 350],
]
// цикл for
// for (let i = 0; i < prices.length; i++) {
// 	console.log(`Подмассив i ${i}:`, prices[i])
// 	for (let j = 0; j < prices[i].length; j++) {
// 		console.log(`Элемент j ${j} подмассива i ${i}`, prices[i][j])
// 	}
// }

// prices.forEach((subArray, index) => {
// 	console.log(`Подмассив index ${index}:`, subArray)
// 	subArray.forEach((value, interIndex) => {
// 		console.log(
// 			`Элемент interIndex ${interIndex} подмассива index ${index}`,
// 			value
// 		)
// 	})
// })

// prices.forEach((subArray, index) => {
// 	console.log(`Подмассив index ${index}`, subArray)
// 	subArray.forEach((value, interIndex) => {
// 		console.log(`Элемент ${interIndex} подмассива ${index}`, value)
// 	})
// })

// Начнем с примеров: Имеется массив изменения цен, - const prices = [
// 	[100, 200],
// 	[120, 100],
// 	[200, 350],
// ]где 1й  элемент является ценой в момент х, 2й - в момент y. Нужно преобразовать данные в массив, где  будут отображенны только положительные изменения цен [100,200]

// пример с деструктуризацией
const positiveChanges = prices.filter(([x, y]) => y - x > 0)
//console.log(positiveChanges) // [[100, 200], [200, 350]]
// пример без деструктуризации
const positiveChanges2 = prices.filter(element => {
	const x = element[0] // Первый элемент
	const y = element[1] // Второй элемент
	return y - x > 0
})

// const positArray = prices.filter(([x, y]) => y - x > 0)
// console.log(positArray)

const posArray = prices.forEach(elementPrices => {
	const element1 = elementPrices[0]
	const element2 = elementPrices[1]
	return element2 - element1 > 0
})
//console.log(posArray)

const prices2 = [
	[100, 200],
	[120, 100],
	[200, 350],
]
const result = prices2
	.map(product => product[1] - product[0])
	.filter(price => price > 0)
//console.log(result)

const operationn = [100, -20, 7, -30, 50]
let balancee = 0
for (const operation of operationn) {
	balancee += operation
}
//console.log(balancee)
// то же самое только через reduce
const finalBalance = operationn.reduce((acc, operation) => {
	//console.log(`Итерацтя ${i}, acc: ${acc}, operation ${operation}`)
	return (acc += operation)
}, 0)
//console.log(finalBalance)
// найти мин элемент
const minElement = operationn.reduce((acc, operation) => {
	if (operation > acc) {
		return acc
	} else return operation
}, 0)
//console.log(minElement)
const arrr = [1, 4, 4, 10]
const average =
	arrr.reduce((arr, operations) => {
		return arr + operations
	}, 0) / arrr.length
//console.log(average)

const arrt = [1, 4, 4, 10]

const avg = arrt.reduce((arrs, oper, i, arrt) => {
	return arrs + oper / arrt.length
}, 0)
//console.log(avg)

let elGT5
// for (const el of arrr) {
// 	if (el > 5) {
// 		elGT5 = el
// 		break
// 	}
// }
elGT5 = arrr.find(el => el > 5)
const elGT5Index = arrr.findIndex(el => el > 5)
// console.log(elGT5Index)
// console.log(elGT5)

function some(arrays, isvalue) {
	return arrays.includes(isvalue)
}
// console.log(some(arrr, 5))
// console.log(arrr.some(el => el === 3))

const prices3 = [
	[2, 4],
	[3, 4],
	[10, [20, 50]],
]
const ress = prices3.flat(2)
// const ressd = ress.map(el => [el, 1]).flat()
// console.log(ressd)
//console.log(ress) // то есть делает массив плоским (одномерным)
const ress22 = prices3.flatMap(el => el.concat([1])) // сначала map потом flat
//console.log(ress22) // то есть делает массив плоским (одномерным)

const users = ['Vasia', 'Masha', 'Katia', 'Ania']
//console.log(users)
users.sort()
//console.log(users)

const operationsm = [100, -100, -300, 50, 480]
//console.log(operationsm)

//<0  a,b (сохраняем порядок)
//>0  b,а (меняем порядок)
operationsm.sort((a, b) => {
	if (a > b) return 1
	if (a < b) return -1
}) // сортировка по возрастанию
//короткий вариант -
operationsm.sort((a, b) => a - b)
//console.log(operationsm)
operationsm.sort((a, b) => {
	if (a < b) return 1
	if (a > b) return -1
}) // сортировка по убыванию
// короткий вариант -
operationsm.sort((a, b) => b - a)

//console.log(operationsm)

const arrw2 = [1, 2, 3, 4, 5]
const arrw3 = new Array(50)
//console.log(arrw3)
arrw3.fill(1, 10, 20)
arrw3.fill(-1, 0, 10)
arrw3.fill(2, 20)
//console.log(arrw3)

const arrw4 = Array.from({ length: 5 }, (cur, i) => i + 1)
//console.log(arrw4)
let arrrew = [1, 2, 3]
let ressdf = arrrew
	.map(e => [e * 2])
	.flat()
	.reduce((acc, el) => (acc -= el), 0)
//console.log(ressdf)

















