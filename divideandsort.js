const number = 5956560165043;

function divideAndSort(deretAngka) {
    const arr = deretAngka.toString().split(0);
    let result = "";
    for (i = 0; i < arr.length; i++) {
        const newArray = arr[i].split("");
        const joinArray = newArray.sort().join("");
        result += joinArray;

    }
    console.log(parseInt(result))
}

divideAndSort(number);