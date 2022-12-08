
const numArr = [2, 4, 77, 99, 2]

const searchNum = ({ arr, num }) => {
	let indexSearchNum = -1

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == num) {
			indexSearchNum = i
		}
	}

	console.log(indexSearchNum)
	return indexSearchNum
}

searchNum({ arr: numArr, num: 10 })

const objArr = [
	{
		index: 20,
		userName: 'andriy',
		age: 20,
		occupation: 'rozhniv',
	},
	{
		index: 15,
		userName: 'alina',
		age: 18,
		occupation: 'frankivsk',
	},
	{
		index: 27,
		userName: 'yulia',
		age: 16,
		ocupation: 'kosiv',
	},
]

const searchObj = ({ arr, userName, age, ocupation }) => {
	let indexSearchEl = -1
	switch (true) {
		case userName != undefined:
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].userName == userName) {
					indexSearchEl = i
				}
			}

			break
		case age != undefined:
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].age == age) {
					indexSearchEl = i
				}
			}
			break
		case ocupation != undefined:
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].ocupation == ocupation) {
					indexSearchEl = i
				}
			}
			break
	}

	console.log(indexSearchEl)
	return indexSearchEl
}

searchObj({ arr: objArr, userName: 'alina' })


const array = [
	[1, 2, 11],
	[655, 10, 28],
	[100, 99, 0],
]

const searchNumOnArr = ({ arr, num }) => {
	let searchNumIndex = ''
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (num == arr[i][j]) {
				searchNumIndex = `індекс підмасиву - (${i}), індекс самого елементу - (${j})`
			}
		}
	}

	if (searchNumIndex === '') {
		console.log(-1)
		return -1
	} else {
		console.log(searchNumIndex)
		return searchNumIndex
	}
}

searchNumOnArr({ arr: array, num: 22 })


// binarSearch!!!

const arr6 = [5, 7, 9, 11, 15, 17, 19]

const binarSearch = ({ arr, num }) => {
	let indexSearchEl = -1
	let start = 0
	let end = arr.length
	let pivot = Math.floor((start + end) / 2)

	for (let i = 0; i < arr.length; i++) {
		if (arr[pivot] !== num) {
			if (num < arr[pivot]) end = pivot
			else start = pivot
			pivot = Math.floor((start + end) / 2)
		}

		if (arr[pivot] === num) indexSearchEl = pivot
	}

	console.log(indexSearchEl)
	return indexSearchEl
}

binarSearch({ arr: arr6, num: 11 })

const unSortArr = [7, 2, 11, 5, 17, 55, 30]

const binarSearchAndSort = ({ arr, num }) => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i]
		let j
		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentValue
	}

	let indexSearchEl = -1
	let start = 0
	let end = arr.length
	let pivot = Math.floor((start + end) / 2)

	for (let i = 0; i < arr.length; i++) {
		if (arr[pivot] !== num) {
			if (num < arr[pivot]) end = pivot
			else start = pivot
			pivot = Math.floor((start + end) / 2)
		}

		if (arr[pivot] === num) indexSearchEl = pivot
	}

	console.log(indexSearchEl)
	return indexSearchEl
}

binarSearchAndSort({ arr: unSortArr, num: 5 })

const binarySearchAndRecurs = (arr, num) => {
	if (!arr.length) return -1

	const lengthArr = arr.length
	const mid = parseInt(lengthArr / 2)

	return arr[mid] !== num
		? binarySearchAndRecurs(
				arr[mid] > num ? arr.slice(0, mid) : arr.slice(mid + 1),
				num,
		  )
		: mid
}

console.log(binarySearchAndRecurs(arr6, 7))

const arrAge = [
	{ name: 'John', age: 13 },
	{ name: 'Ana', age: 15 },
	{ name: 'Alina', age: 20 },
]

const binSearchObj = (arr, age) => {
	if (arr[0].age == age) {
		return 0
	}
	if (!arr.length) return -1

	const lengthArr = arr.length
	const mid = parseInt(lengthArr / 2)

	return arr[mid].age !== age
		? binarySearchAndRecurs(
				arr[mid].age > age ? arr.slice(0, mid) : arr.slice(mid + 1),
				age,
		  )
		: mid
}

console.log(binSearchObj(arrAge, 15))


const unSortArrAge = [
	{ name: 'John', age: 20 },
	{ name: 'Ana', age: 10 },
	{ name: 'Ana', age: 22 },
	{ name: 'Alina', age: 34 },
	{ name: 'Andriy', age: 15 },
	{ name: 'sasha', age: 16 },
	{ name: 'ivan', age: 23 },
]

const binSearchObjAndSort = (arr, age) => {
	arr.sort((a, b) => (a.age > b.age ? 1 : -1))

	if (arr[0].age == age) {
		return 0
	}
	if (!arr.length) return -1

	const lengthArr = arr.length
	const mid = parseInt(lengthArr / 2)

	return arr[mid].age !== age
		? binarySearchAndRecurs(
				arr[mid].age > age ? arr.slice(0, mid) : arr.slice(mid + 1),
				age,
		  )
		: mid
}

console.log(binSearchObjAndSort(unSortArrAge, 10))