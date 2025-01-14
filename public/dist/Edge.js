// @prettier
export default class Edge {
    constructor(_pointA, _pointB) {
        this._pointA = _pointA;
        this._pointB = _pointB;
        this._svgEdge = this._makeSvgElement();
    }
    _makeSvgElement() {
        const namespace = 'http://www.w3.org/2000/svg';
        const svgElement = 'line';
        const svgEdge = document.createElementNS(namespace, svgElement);
        const svg = document.getElementById('svg');
        if (null === svg) {
            return null;
        }
        const strokeColor = 'white';
        svgEdge.setAttribute('x1', String(this._pointA.x));
        svgEdge.setAttribute('y1', String(this._pointA.y));
        svgEdge.setAttribute('x2', String(this._pointB.x));
        svgEdge.setAttribute('y2', String(this._pointB.y));
        svgEdge.setAttribute('stroke', strokeColor);
        svg.appendChild(svgEdge);
        return svgEdge;
    }
    get pointA() {
        return this._pointA;
    }
    set pointA(point) {
        if (null === this._svgEdge) {
            return;
        }
        this._pointA = point;
        this._svgEdge.setAttribute('x1', String(point.x));
        this._svgEdge.setAttribute('y1', String(point.y));
    }
    get pointB() {
        return this._pointB;
    }
    set pointB(point) {
        if (null === this._svgEdge) {
            return;
        }
        this._pointB = point;
        this._svgEdge.setAttribute('x2', String(point.x));
        this._svgEdge.setAttribute('y2', String(point.y));
    }
}
