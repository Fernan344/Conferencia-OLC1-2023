import graphviz from 'graphviz'
import crypto from 'crypto';

export class Production {
    generated;
    node;
    counter;

    constructor(generated, nodes, productionName) {
        this.generated = generated;
        this.counter = 0;
        this.node = new Node(
            productionName,
            (nodes || []).map((node) => {
                if(node instanceof Production) return node.getNode()
                return new Node(node)
            })
        )
    }
    
    getResult() {
        return this.generated
    }

    getNode() {
        return this.node
    }

    build() {
        const g = graphviz.digraph("G");
        this.node.build(g, this.counter);
        return g.to_dot();
    }
}

export class Node {
    sons;
    label;
    timestamp;

    constructor(label, sons = undefined) {
        this.sons = sons;
        this.label = label;
        this.timestamp = new Date().toISOString();
    }

    getSons() {
        return this.sons;
    }

    getName() {
        return this.label;
    }

    build(g) {
        const node = g.addNode(this.generateHash(), { label: this.getName()});
        node.set('style', 'filled');
        this.getSons() && this.getSons().forEach(son => {
            const sonG = son.build(g);
            const edge = g.addEdge(node, sonG);
            edge.set('color', 'red');
        })
        return node;
    }

    generateHash() {
        return crypto.createHash('sha1').update(JSON.stringify(this)).digest('hex');
    }
}