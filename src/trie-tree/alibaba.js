// question
// https://stackoverflow.com/questions/50267324/alibaba-interview-print-a-sentence-with-min-spaces/

const sentence = 'ilikealibaba';
const words = ['i', 'like', 'ali', 'liba', 'baba', 'alibaba',];

class TrieNode {
    constructor() { }
    set(a) {
        this[a] = this[a] || new TrieNode();
        return this[a];
    }
    search(word, marks, depth = 1) {
        word = Array.isArray(word) ? word : word.split('');
        const a = word.shift();
        if (this[a]) {
            if (this[a]._) {
                marks.push(depth);
            }
            this[a].search(word, marks, depth + 1);
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

function searchSentence(sentence) {
    const marks = [];
    t.search(sentence, marks);
    const ret = {};
    marks.map(mark => {
        ret[mark] = searchSentence(sentence.slice(mark));
    });
    return ret;
}

const solutionTree = searchSentence(sentence);

function deepTraverse(tree, sentence, targetLen = sentence.length) {
    const stack = [];
    const sum = () => stack.reduce((acc, mark) => acc + mark, 0);
    const ret = [];
    (function traverse(tree) {
        const keys = Object.keys(tree);
        keys.forEach(key => {
            stack.push(+key);
            if (sum() === targetLen) {
                const result = [];
                let tempStr = sentence;
                stack.forEach(mark => {
                    result.push(tempStr.slice(0, mark));
                    tempStr = tempStr.slice(mark);
                });
                ret.push(result);
            }
            if(tree[key]) {
                traverse(tree[key]);
            }
            stack.pop();
        });
    })(tree);
    return ret;
}

const solutions = deepTraverse(solutionTree, sentence);

solutions.sort((s1, s2) => s1.length - s2.length).forEach((s, i) => {
    console.log(`${i + 1}. ${s.join(' ')} (${s.length - 1} spaces)`);
});
console.log('pick no.1');

