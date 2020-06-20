import { Tile, Coordinate } from './packages/monopolyCommon';
import { EVENT_BUS } from './consts';
import Game from './Game';

export function getTileKey(tile: Tile): string {
    return getTileKeyFromCoordinate(tile.pos);
}

export function getTileKeyFromCoordinate(coor: Coordinate): string {
    return `${coor.row}-${coor.col}`;
}

export function setZIndexAction(zIndex: number): cc.ActionInstant {
    return cc.callFunc((node: cc.Node) => {
        node.zIndex = zIndex;
    });
}

export function callOnMoveAction(
    target: cc.Vec2,
    onMove: (node: cc.Node, target: cc.Vec2) => void,
): cc.ActionInstant {
    return cc.callFunc((node: cc.Node) => {
        onMove(node, target);
    });
}

export function getRand<T>(list: T[]): T {
    if (list.length > 0) {
        return list[Math.trunc(Math.random() * list.length)];
    }
    return null;
}

export function playAnimation(node: cc.Node, animationName: string): Promise<never> {
    return new Promise((resolve, reject) => {
        const animationComp = node.getComponent(cc.Animation);
        if (!animationComp) {
            reject(new Error('cannot find animation component'));
        }
        animationComp.play(animationName);
        const offListeners = () => {
            animationComp.off('stop', offListeners);
            animationComp.off('finished', offListeners);
        };
        animationComp.on('stop', () => {
            offListeners();
            resolve();
        });
        animationComp.on('finished', () => {
            offListeners();
            resolve();
        });
    });
}

export function toVec2(vec: cc.Vec3): cc.Vec2 {
    return cc.v2(vec.x, vec.y);
}

export function nullCheck<T>(value: T): T {
    if (value === null || value === undefined) {
        throw new Error('checking value not empty, but is ' + value);
    }
    return value;
}

const LIFECYCLE_SET = new Set([
    'onLoad',
    'start',
    'update',
    'lateUpdate',
    'onDestroy',
    'onEnable',
    'onDisable',
]);
export function lifecycle(container, key, other1) {
    if (CC_DEBUG && !LIFECYCLE_SET.has(key)) {
        throw new Error(
            'Method ' + key + ' of ' + container.constructor.name + ' is not a lifecycle method',
        );
    }
}

export function getGame() {
    return nullCheck(cc.find('Canvas').getComponent(Game));
}

export function assertNever(x: never): never {
    throw new Error('Unexpected value ' + x);
}
