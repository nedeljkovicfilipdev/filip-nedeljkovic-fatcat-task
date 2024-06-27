type LayoutType = 'layoutSection';

export interface LayoutSection {
    type: LayoutType;
    props: {
        backgroundColor?: string;
    };
    components: Component[];
}
type ComponentType = 'componentHero';

interface Component {
    type: ComponentType;
    props: {
        title: string;
        image: string;
    };
}
