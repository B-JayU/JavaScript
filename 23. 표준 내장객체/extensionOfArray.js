var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');

function getRandomValueFromArray(arr) {
	var index = Math.floor(arr.length * Math.random());
	var result = arr[index];
	return result;
}

document.write(getRandomValueFromArray(arr));

