function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        console.log('*'.repeat(i));
    }
}

const height = 10;
printTriangle(height);
