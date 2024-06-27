import './styles.css';

import { CreateForm } from '@homework-task/components/form/CreateForm';
import { Landing } from '@homework-task/components/landing/Landing';
import { PageGenerator } from '@homework-task/components/PageGenerator';
import { UserList } from '@homework-task/components/user/UserList';
import { LayoutSection } from '@homework-task/types/types';

const data: LayoutSection[] = [
    {
        type: 'layoutSection',
        props: { backgroundColor: '#f0f0f0' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to first Page',
                    image: '/media/cats/cat_1.png',
                },
            },
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to second page',
                    image: '/media/cats/cat_2.png',
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#6C6608' },
        components: [
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to first Page',
                    image: '/media/cats/cat_1.png',
                },
            },
            {
                type: 'componentHero',
                props: {
                    title: 'Welcome to second page',
                    image: '/media/cats/cat_2.png',
                },
            },
        ],
    },
];

export const App = () => {
    return (
        <main>
            <Landing />
            <UserList />
            <CreateForm />
            <PageGenerator data={data} />
        </main>
    );
};
