function reverseWord(sentence) {
    if (sentence === undefined || sentence === "") {
        console.log(`Kalimat tidak boleh undefined atau kosong`);
    } else {
        let x = 0;
        let arr = [];
        let arr2 = [];
        for (x; x <= sentence.length; x++) {
            if (sentence[x] === " " || x == sentence.length) {
                arr2.unshift(arr.join(""));
                for (y = 0; y < arr.length; y = 0) {
                    arr.pop();
                }
            } else {
                arr.push(sentence[x]);
            }
        }
        console.log(arr2.join(" "));
    }
}
reverseWord("Halo saya hamdan hamdani");