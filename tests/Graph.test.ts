import { assert, describe, expect, it, before } from 'vitest';
import Graph from '../src/Graph.ts';

let graph = new Graph();

describe('Graph', () => {
    it('should initialize Graph with empty vertices and edges', () => {
        expect(graph.vertices).toStrictEqual([]);
        expect(graph.edges).toStrictEqual([]);
    });
});
