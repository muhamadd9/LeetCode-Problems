var chalkReplacer = function(chalk, k) {
    let totalChalk = chalk.reduce((a, b) => a + b, 0);
    k %= totalChalk;  

    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) {
            return i; 
        }
        k -= chalk[i];
    }
};
