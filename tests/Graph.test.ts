import { assert, describe, expect, it, beforeEach } from 'vitest';
import Graph from '../src/Graph.ts';

class Dummy {
    constructor(id: string) {
        this.id = id;
    }
}

let graph: Graph;

describe('Graph', () => {
    beforeEach(() => {
        graph = new Graph();
    });

    it('should initialize Graph with empty vertices and edges', () => {
        expect(graph.vertices).toStrictEqual([]);
        expect(graph.edges).toStrictEqual([]);
    });

    it('should add a vertex', () => {
        const dummy = new Dummy('vertex');
        graph.addVertex(dummy);
        expect(graph.vertices).toStrictEqual([dummy]);
    });

    it('should add vertices whenever an edge is added', () => {
        const dummy1 = new Dummy('1');
        const dummy2 = new Dummy('2');
        graph.addEdge(dummy1, dummy2);
        expect(graph.vertices).toStrictEqual([dummy1, dummy2]);
    });

    it('should add two edges from source to target and from traget to source', () => {
        const dummy1 = new Dummy('1');
        const dummy2 = new Dummy('2');
        graph.addEdge(dummy1, dummy2);
        expect(graph.edges).toStrictEqual([
            [dummy1, dummy2],
            [dummy2, dummy1],
        ]);
    });
});
