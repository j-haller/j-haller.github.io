// @prettier

export default class Edge {
    #pointA;
    #pointB;
    #svgEdge;

    constructor(pointA, pointB) {
        this.#pointA = pointA;
        this.#pointB = pointB;
        this.#makeSvgElement();
    }

    #makeSvgElement() {
        const svg = document.getElementById('svg');
        const namespace = 'http://www.w3.org/2000/svg';
        const svgElement = 'line';
        this.#svgEdge = document.createElementNS(namespace, svgElement);

        const strokeColor = 'white';

        this.#svgEdge.setAttribute('x1', this.#pointA.x);
        this.#svgEdge.setAttribute('y1', this.#pointA.y);
        this.#svgEdge.setAttribute('x2', this.#pointB.x);
        this.#svgEdge.setAttribute('y2', this.#pointB.y);
        this.#svgEdge.setAttribute('stroke', strokeColor);
        svg.appendChild(this.#svgEdge);
    }

    get pointA() {
        return this.#pointA;
    }

    set pointA(point) {
        this.#pointA = point;
        this.#svgEdge.setAttribute('x1', point.x);
        this.#svgEdge.setAttribute('y1', point.y);
    }

    get pointB() {
        return this.#pointB;
    }

    set pointB(point) {
        this.#pointB = point;
        this.#svgEdge.setAttribute('x2', point.x);
        this.#svgEdge.setAttribute('y2', point.y);
    }
}
