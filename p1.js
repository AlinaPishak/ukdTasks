const arr = [7, 8, 9, 6]

const numToString = arr => {
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case 0:
				arr[i] = 'zero'
				break
			case 1:
				arr[i] = 'one'
				break
			case 2:
				arr[i] = 'two'
				break
			case 3:
				arr[i] = 'tree'
				break
			case 4:
				arr[i] = 'for'
				break
			case 5:
				arr[i] = 'five'
				break
			case 6:
				arr[i] = 'six'
				break
			case 7:
				arr[i] = 'seven'
				break
			case 8:
				arr[i] = 'eight'
				break
			case 9:
				arr[i] = 'nine'
				break
		}
	}

	console.log(arr)
	return arr
}

numToString(arr)