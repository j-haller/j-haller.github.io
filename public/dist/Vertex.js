// @prettier
export default class Vertex {
    constructor(x, y) {
        this._svgPoint = null;
        this._x = x;
        this._y = y;
        this._vx = 0;
        this._vy = 0;
        this._mass = 1;
        this._svgPoint = this._makeSvgElement(this._x, this._y);
    }
    _makeSvgElement(x, y) {
        const namespace = 'http://www.w3.org/2000/svg';
        const shape = 'circle';
        const svgElement = document.createElementNS(namespace, shape);
        const radius = 2 * this._mass;
        const color = 'white';
        svgElement.setAttribute('cx', String(x));
        svgElement.setAttribute('cy', String(y));
        svgElement.setAttribute('r', String(radius));
        svgElement.setAttribute('fill', color);
        return svgElement;
    }
    show() {
        const svg = document.getElementById('svg');
        if (null === svg || null == this._svgPoint) {
            return;
        }
        svg.appendChild(this._svgPoint);
    }
    get x() {
        return this._x;
    }
    set x(newX) {
        if (null === this._svgPoint) {
            return;
        }
        this._x = newX;
        this._svgPoint.setAttribute('cx', String(newX));
    }
    get y() {
        return this._y;
    }
    set y(newY) {
        if (null === this._svgPoint) {
            return;
        }
        this._y = newY;
        this._svgPoint.setAttribute('cy', String(newY));
    }
    get vx() {
        return this._vx;
    }
    set vx(newVx) {
        this._vx = newVx;
    }
    get vy() {
        return this._vy;
    }
    set vy(newVy) {
        this._vy = newVy;
    }
}
