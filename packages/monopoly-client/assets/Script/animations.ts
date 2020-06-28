import { EventEmitter } from 'events';
import { createEvent } from '@prisel/client';
import { AnimationArgs, AnimationName, Animation } from '@prisel/monopoly-common';

export function createAnimationEvent<K extends AnimationName>(animationName: K) {
    return createEvent<Animation<AnimationArgs[K]>>(animationName);
}

export const animEmitter = new EventEmitter();
