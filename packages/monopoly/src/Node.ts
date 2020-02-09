import GameObject, { FlatGameObject, Ref } from './GameObject';
import Property from './Property';
import { Room } from '@prisel/server';

export interface FlatNode extends FlatGameObject {
    next: Ref<Node>;
    prev: Ref<Node>;
    property: Ref<Property>;
}
interface Props {
    id: string;
    next?: Node;
    prev?: Node;
    property?: Property;
}

/**
 * A point on the path that players follow
 */
export default class Node extends GameObject {
    public id: string;
    public next?: Node;
    public prev?: Node;
    public property?: Property;

    constructor(props: Props) {
        super();
        const { id, next, prev, property } = props;
        this.id = id;
        this.next = next;
        this.prev = prev;
        this.property = property;
    }

    public genPath(steps: number) {
        const path: Node[] = [];
        let current: Node = this;
        for (let i = 0; i < steps; i++) {
            if (current.next) {
                current = current.next;
                path.push(current);
            } else {
                // the board is incorrectly defined because we cannot find the next node
                break;
            }
        }
        return path;
    }

    public flat(): FlatNode {
        return {
            id: this.id,
            prev: this.ref(this.prev),
            next: this.ref(this.next),
            property: this.ref(this.property),
        };
    }
}

export function create(props: Props): Node {
    return new Node(props);
}