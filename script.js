function convertToHex() {
    let n = parseInt(document.getElementById("decimalInput").value);
    if (isNaN(n) || n < 0) {
        alert('Please enter a valid positive decimal number.');
        return;
    }

    let hm = {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8: '8', 9: '9', 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'};
    let s = '';
    let logOutput = '';
    while (n >= 16) {
        let rem = n % 16;
        s = '-' + hm[rem] + s;
        logOutput += `${n} ---- ${rem}\n`;
        n = Math.floor(n / 16);
    }
    if (n > 0) {
        logOutput += `${n}\n`;
        s = n + s;
    }

    let l = s.split("-");
    let result = l.join('');

    // Update log output and final result
    document.getElementById("logOutput").value = logOutput;
    document.getElementById("hexOutput").textContent = result;
}
