export class Production {
    generated;
    node;

    constructor(generated, nodes, productionName) {
        this.generated = generated;
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
}

export class Node {
    sons;
    label;

    constructor(label, sons = undefined) {
        this.sons = sons;
        this.label = label;
    }

    getSons() {
        return this.sons;
    }

    getName() {
        return this.label;
    }
}