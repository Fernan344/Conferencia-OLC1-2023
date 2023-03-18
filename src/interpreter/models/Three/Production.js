import graphviz from 'graphviz'
import crypto from 'crypto';
import moment from 'moment/moment';

export class Production {
    generated;
    node;    

    constructor(generated, nodes, productionName) {
        this.generated = generated;
        this.counter = 0;
        this.node = new Node(
            productionName            
        )
        this.node.setSons((nodes || []).map((node) => {
            if(node instanceof Production) return node.getNode();
            return new Node(node, this.generateHash())
        }))
    }
    
    getResult() {
        return this.generated
    }

    getNode() {
        return this.node
    }

    build() {
        const g = graphviz.digraph("G");
        this.node.build(g);
        return g.to_dot();
    }

    generateHash() {
        return crypto.createHash('sha256').update(JSON.stringify(this)).digest('hex');
    }
}

export class Node {
    sons;
    label;
    timestamp;
    productionHash;

    constructor(label, productionHash, sons = undefined) {
        this.sons = sons;
        this.label = label;
        this.productionHash = productionHash;
        this.timestamp = moment().format('x');
    }

    getSons() {
        return this.sons;
    }

    getName() {
        return this.label;
    }

    setSons(sons){
        this.sons = sons
    }

    setFather(father){
        this.father = father;
        return this;
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
        return crypto.createHash('sha256').update(JSON.stringify(this)).digest('hex');
    }
}