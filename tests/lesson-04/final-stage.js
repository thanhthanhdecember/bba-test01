// Đếm và in ra có bao nhiêu cặp số từ 1 đến 100 có tổng chia hết cho 17
function findPairsDivisibleBy17() {
    let count = 0;
    for (let a = 1; a <= 100; a++) {
        for (let b = a; b <= 100; b++) {
            let sum = a + b;
            if (sum % 17 === 0) {
                console.log(`(${a}, ${b}) = ${sum}`);
                count++;
            }
        }
    }
    console.log(`Tổng cộng: ${count} cặp.`);
}
findPairsDivisibleBy17();