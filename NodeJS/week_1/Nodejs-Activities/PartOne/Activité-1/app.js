const PI = 3.14;

function calculerAire(rayon) {
    return PI * rayon * rayon;
}

console.log(calculerAire(2));

const PI = 3.14;

function calculerAire(rayon) {
    return PI * rayon * rayon;
}

console.log(calculerAire(2));


// Discussion:
// SyntaxError: Identifier 'PI' has already been declared
// If several files define the same names: They overwrite each other, causing conflicts and bugs.
// Why it's a problem: It makes the code unpredictable and hard to maintain.
// How Node.js fixes it: Each file is a separate module with its own scope — no name conflicts.