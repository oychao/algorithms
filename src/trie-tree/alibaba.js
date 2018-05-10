const sentence = 'ilikealibaba';
const words = ['i', 'like', 'ali', 'liba', 'baba', 'alibaba',];

class TrieNode {
    constructor() {}
    set(a) {
        this[a] = this[a] || new TrieNode();
        return this[a];
    }
    search(word) {
        word = Array.isArray(word) ? word : word.split('');
        const a = word.shift();
        if (this[a]) {
            if (this[a]._ && word.length === 0) {
                return 1;
            } else if (!this[a]._ && word.length === 0) {
                return -100;
            } else {
                return 1 + this[a].search(word);
            }
        } else {
            return 0;
        }
    }
}

TrieNode.createTree = words => {
    const root = new TrieNode();
    words.forEach(word => {
        let currentNode = root;
        for (let i = 0; i < word.length; i++) {
            currentNode = currentNode.set(word[i]);
        }
        currentNode.set('_');
    });
    return root;
};

const t = TrieNode.createTree(words);

