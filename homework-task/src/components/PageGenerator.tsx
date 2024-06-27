import { Hero } from '@homework-task/components/Hero';
import { LayoutSection } from '@homework-task/types/types';

interface PageGeneratorProps {
    data: LayoutSection[];
}

export const PageGenerator: React.FC<PageGeneratorProps> = ({ data }) => {
    return (
        <div>
            {data.map((section, index) => (
                <div
                    key={index}
                    style={{ backgroundColor: section.props.backgroundColor }}
                >
                    {section.components.map((component, idx) => (
                        <div key={idx}>
                            {component.type === 'componentHero' && (
                                <Hero {...component.props} />
                            )}
                            {/* Add more component type checks and renders */}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};
