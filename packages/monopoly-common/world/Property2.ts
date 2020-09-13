import { exist } from '../exist';
import { PropertyInfo } from '../types/propertyInfo';
import { createClass } from './createClass';
import { GameObject } from './GameObject';
import {
    DimensionMixinConfig,
    NameMixinConfig,
    OwnerMixinConfig,
    PropertyLevelMixinConfig,
    required,
} from './mixins';

export const PropertyClass = createClass('property', [
    required(DimensionMixinConfig),
    required(PropertyLevelMixinConfig),
    required(NameMixinConfig),
    OwnerMixinConfig,
]);

export type Property2 = InstanceType<typeof PropertyClass>;

export const Properties = {
    purchasedBy(property: Property2, owner: GameObject) {
        property.propertyLevel.current = 0;
        property.owner = owner.id;
    },

    upgrade(property: Property2, newLevel: number) {
        property.propertyLevel.current = newLevel;
    },

    purchaseable(property: Property2): boolean {
        return !exist(property.owner);
    },
    upgradable(property: Property2, requester: GameObject): boolean {
        return (
            exist(property.owner) &&
            property.owner === requester.id &&
            property.propertyLevel.current < property.propertyLevel.levels.length - 1
        );
    },
    investable(property: Property2, requester: GameObject): boolean {
        return Properties.purchaseable(property) || Properties.upgradable(property, requester);
    },

    getWorth(property: Property2): number {
        // the worth of a property is the sum of the cost taken to
        // purchase/upgrade the property.
        return property.propertyLevel.levels.reduce(
            (prev, cur, level) =>
                level <= property.propertyLevel.current ? prev + cur.cost : prev,
            0,
        );
    },

    getBasicPropertyInfo(
        property: Property2,
    ): Required<Pick<PropertyInfo, 'name' | 'pos' | 'currentLevel'>> {
        return {
            name: property.name,
            pos: property.dimension.anchor,
            currentLevel: property.propertyLevel.current,
        };
    },

    getPropertyInfoForInvesting(property: Property2, requester: GameObject): PropertyInfo | null {
        const basicPropertyInfo = Properties.getBasicPropertyInfo(property);

        if (property.propertyLevel.current >= property.propertyLevel.levels.length) {
            return null;
        }

        const nextLevel = basicPropertyInfo.currentLevel + 1;
        return {
            ...basicPropertyInfo,
            currentLevel: nextLevel,
            levels: property.propertyLevel.levels,
            ...property.propertyLevel.levels[nextLevel],
            isUpgrade: Properties.upgradable(property, requester),
        };
    },

    getPropertyInfoForRent(property: Property2): PropertyInfo | null {
        const basicPropertyInfo = Properties.getBasicPropertyInfo(property);
        if (
            basicPropertyInfo.currentLevel < 0 ||
            basicPropertyInfo.currentLevel >= property.propertyLevel.levels.length
        ) {
            return null;
        }
        return {
            ...basicPropertyInfo,
            rent: property.propertyLevel.levels[basicPropertyInfo.currentLevel].rent,
        };
    },
};
