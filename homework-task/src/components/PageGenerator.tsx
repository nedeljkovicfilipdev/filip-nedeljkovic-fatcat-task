import { Hero } from '@homework-task/components/Hero';
import { LayoutSection, ComponentType } from '@homework-task/types/types';
import { TrustBar } from './TrustBar';
import { ItemsShowcase } from './ItemsShowcase';
import { PanelShowcase } from './PanelShowcase';

interface PageGeneratorProps {
    data: LayoutSection[];
}

export const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    return (
        <main>
            {data.map((section, index) => (
                <section
                    key={index}
                    style={{ backgroundColor: section.props.backgroundColor }}
                >
                    {section.components.map((component, idx) => (
                        <div key={idx}>{renderComponent(component)}</div>
                    ))}
                </section>
            ))}
        </main>
    );
};

const renderComponent = (component: { type: ComponentType; props: any }) => {
    switch (component.type) {
        case 'componentHero':
            return <Hero {...component.props} />;
        case 'componentTrustBar':
            return <TrustBar {...component.props} />;
        case 'componentItemsShowcase':
            return <ItemsShowcase {...component.props} />;
        case 'componentPanelShowcase':
            return <PanelShowcase {...component.props} />;
        // Add cases if needed
        default:
            return null;
    }
};
