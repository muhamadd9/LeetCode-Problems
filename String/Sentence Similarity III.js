var areSentencesSimilar = function(sentence1, sentence2) {
    const words1 = sentence1.split(' ');
    const words2 = sentence2.split(' ');

    if (words1.length < words2.length) {
        return areSentencesSimilar(sentence2, sentence1);
    }

    let i = 0; 
    let j = 0; 
    
    // Match words from the beginning
    while (i < words2.length && words1[i] === words2[i]) {
        i++;
    }

    // Match words from the end
    while (j < words2.length && words1[words1.length - 1 - j] === words2[words2.length - 1 - j]) {
        j++;
    }

    // Check if the matched prefix + suffix covers the shorter sentence
    return i + j >= words2.length;
};
