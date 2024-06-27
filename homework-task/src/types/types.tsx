export type LayoutType = 'layoutSection';

export interface LayoutSection {
    type: LayoutType;
    props: {
        backgroundColor?: string;
    };
    components: ComponentProps[];
}

interface HeroProps {
    title: string;
    image: string;
}

interface TrustBarProps {
    images: string[];
}

interface ItemsShowcaseProps {
    items: {
        title: string;
        description: string;
    }[];
}

interface PanelShowcaseProps {
    items: {
        title: string;
        description: string;
        image: string;
    }[];
}

export type ComponentProps =
    | { type: 'componentHero'; props: HeroProps }
    | { type: 'componentTrustBar'; props: TrustBarProps }
    | { type: 'componentItemsShowcase'; props: ItemsShowcaseProps }
    | { type: 'componentPanelShowcase'; props: PanelShowcaseProps };
