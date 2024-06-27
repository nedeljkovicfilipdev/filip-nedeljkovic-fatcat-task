export type LayoutType = 'layoutSection';

export interface LayoutSection {
    type: LayoutType;
    props: {
        backgroundColor?: string;
    };
    components: Component[];
}

export type ComponentType = 'componentHero' | 'componentTrustBar' | 'componentItemsShowcase' | 'componentPanelShowcase';

export interface Component {
    type: ComponentType;
    props: {
        [key: string]: any;
    };
}
