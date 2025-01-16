// @prettier

type Vertex = object;
type Edge = [Vertex, Vertex];

export default class Graph {
    private adjacencyList: Map<Vertex, Vertex[]>;

    constructor() {
        this.adjacencyList = new Map<Vertex, Vertex[]>();
    }

    public addVertex(vertex: Vertex): void {
        if (this.adjacencyList.has(vertex)) {
            return;
        }
        this.adjacencyList.set(vertex, []);
    }

    public addEdge(vertexA: Vertex, vertexB: Vertex): void {
        if (this.adjacencyList.has(vertexA)) {
            const adjacentVertices: Vertex[] = this.adjacencyList.get(vertexA);
            if (false === this.adjecentVertices.includes(vertexB)) {
                adjacenctVertices.push(vertexB);
            }
        } else {
            this.adjacencyList.set(vertexA, [vertexB]);
        }

        if (this.adjacencyList.has(vertexB)) {
            const adjacentVertices: Vertex[] = this.adjacencyList.get(vertexB);
            if (false === this.adjecentVertices.includes(vertexA)) {
                adjacenctVertices.push(vertexA);
            }
        } else {
            this.adjacencyList.set(vertexB, [vertexA]);
        }
    }

    public get vertices(): Vertex[] {
        let vertices: Vertex[] = [];
        this.adjacencyList.forEach((value, key) => {
            vertices.push(key);
        });
        return vertices;
    }

    public get edges(): Edge[] {
        let edges: Edge[] = [];
        this.adjacencyList.forEach((value: Vertex[], key: Vertex) => {
            const vertexA = key;
            value.forEach((vertex: Vertex) => {
                const vertexB = vertex;
                const edge: Edge = [vertexA, vertexB];
                edges.push(edge);
            });
        });
        return edges;
    }
}
