// @prettier

type Vertex = object;
type Edge = [Vertex, Vertex];

export default class Graph {
    private adjacencyList = new Map<Vertex, Vertex[]>();

    constructor() {}

    public addVertex(vertex: Vertex): boolean {
        return false;
    }

    public addEdge(vertexA: Vertex, vertexB: Vertex): boolean {
        return false;
    }

    public get vertices(): Vertex[] {
        return [];
    }

    public get edges(): Edge[] {
        return [];
    }
}
