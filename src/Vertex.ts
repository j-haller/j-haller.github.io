// @prettier

export default class Vertex {
    private _x: number;
    private _y: number;
    private _vx: number;
    private _vy: number;
    private _mass: number;
    private _svgPoint: SVGElement | null = null;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._vx = 0;
        this._vy = 0;
        this._mass = 1;
        this._svgPoint = this._makeSvgElement(this._x, this._y);
    }

    private _makeSvgElement(x: number, y: number) {
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

    public show() {
        const svg = document.getElementById('svg');
        if (null === svg || null == this._svgPoint) {
            return;
        }
        svg.appendChild(this._svgPoint);
    }

    get x(): number {
        return this._x;
    }

    set x(newX: number) {
        if (null === this._svgPoint) {
            return;
        }
        this._x = newX;
        this._svgPoint.setAttribute('cx', String(newX));
    }

    get y(): number {
        return this._y;
    }

    set y(newY: number) {
        if (null === this._svgPoint) {
            return;
        }
        this._y = newY;
        this._svgPoint.setAttribute('cy', String(newY));
    }

    get vx(): number {
        return this._vx;
    }

    set vx(newVx: number) {
        this._vx = newVx;
    }

    get vy(): number {
        return this._vy;
    }

    set vy(newVy: number) {
        this._vy = newVy;
    }
}
