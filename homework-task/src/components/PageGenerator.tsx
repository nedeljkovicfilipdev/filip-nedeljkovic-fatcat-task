import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { ComponentProps, LayoutSection } from '@homework-task/types/types';

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

const renderComponent = (component: ComponentProps) => {
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
