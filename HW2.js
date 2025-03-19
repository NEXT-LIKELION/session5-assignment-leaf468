function createChristmasTree(height) {
    let tree = "";

    for (let i = 0; i < height; i++) {
        let line = "";

        for (let j = 0; j < height - i - 1; j++) {
            line += " ";
        }

        for (let k = 0; k < 2 * i + 1; k++) {
            line += "*";
        }

        tree += line + "\n";
    }

    return tree;
}

const tree = createChristmasTree(5);

console.log(tree);
