// @prettier
export default class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (this.adjacencyList.has(vertex)) {
            return;
        }
        this.adjacencyList.set(vertex, []);
    }
    addEdge(vertexA, vertexB) { }
    get vertices() {
        let vertices = [];
        this.adjacencyList.forEach((value, key) => {
            vertices.push(key);
        });
        return vertices;
    }
    get edges() {
        let edges = [];
        this.adjacencyList.forEach((value, key) => {
            const vertexA = key;
            value.forEach((vertex) => {
                const vertexB = vertex;
                const edge = [vertexA, vertexB];
                edges.push(edge);
            });
        });
        return [];
    }
}
