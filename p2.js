const bubbleSort = ({ arr, revers }) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				let tmpNum = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = tmpNum
			}
		}
	}

	// Сортування масиву беремо два перші елементи
	// Якщо перший елемент більший за другий  змінюємо їх місцями
	// Тепер беремо другий і третій елемент  повторюємо так до кінця з слідуючими елементами

	if (revers) {
		console.log(arr)
	} else {
		arr = arr.reverse()
		console.log(arr)
	}
	// Приймаємо true/false якшо true - просто виводим масив, якщо false - роби його звортнім та виводимо

	return arr
}

const insertionSort = ({ arr, revers }) => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i]
		let j
		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentValue
	}

	// ділим умовно масив на дві частини.
	// У лівій збирається відсортована частина, та якщо з правої частини беруться елементи
	// і по черзі ставляться своє місце.

	if (revers) {
		console.log(arr)
	} else {
		arr = arr.reverse()
		console.log(arr)
	}
	// Приймаємо true/false якшо true - просто виводим масив, якщо false - роби його звортнім та виводимо
	return arr
}

// bubbleSort({ arr: arr, revers: false })
// insertionSort({ arr: arr, revers: true })
// succes)

// сортування строкового масиву

const arr4 = ['andriy', 'ivan', 'stas', 'alina', 'ira']

const strSort = arr => {
	const enCollator = new Intl.Collator('en-US')
	const sortEn = [...arr].sort((a, b) => enCollator.compare(a, b))

	console.log(sortEn)
	return sortEn
}

strSort(arr4)

// сортування з видаленням парних чисел

const arr3 = [10, 1, 2, 7, 9, 11, 18]

const sortAndDel = arr => {
	for (let i = 1; i < arr.length; i++) {
		let currentValue = arr[i]
		let j
		for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
			arr[j + 1] = arr[j]
		}
		arr[j + 1] = currentValue
	}

	const newArr = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			newArr.push(arr[i])
		}
	}

	console.log(newArr)
	return newArr
}

sortAndDel(arr3)