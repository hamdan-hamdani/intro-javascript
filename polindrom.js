function palindrom(text) {
    if (text === undefined || text.length === 0) {
        console.log("Selesai");
    } else {
        x = text.length - 1;
        let arr = [];
        for (x; x >= 0; x--) {
            arr.push(text[x]);
        }
        arr = arr.join("");
        if (text === arr) {
            console.log(`${text} palindrom`);
        } else {
            console.log(`${text} bukan palindrom`);
        }
    }
}
palindrom("malam");