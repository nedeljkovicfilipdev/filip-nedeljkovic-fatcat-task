// src/layoutData.ts

import { LayoutSection } from '@homework-task/types/types';

export const data: LayoutSection[] = [
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
        props: { backgroundColor: '#fff' },
        components: [
            {
                type: 'componentTrustBar',
                props: {
                    images: [
                        '/media/cats/cat_3.png',
                        '/media/cats/cat_4.png',
                        '/media/cats/cat_5.png',
                        '/media/cats/cat_6.png',
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#f0f0f0' },
        components: [
            {
                type: 'componentItemsShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        },
                        {
                            title: 'Item 2',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        },
                        {
                            title: 'Item 3',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        },
                        {
                            title: 'Item 4',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        },
                    ],
                },
            },
        ],
    },
    {
        type: 'layoutSection',
        props: { backgroundColor: '#fff' },
        components: [
            {
                type: 'componentPanelShowcase',
                props: {
                    items: [
                        {
                            title: 'Panel 1',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            image: '/media/cats/cat_7.png',
                        },
                        {
                            title: 'Panel 2',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            image: '/media/cats/cat_8.png',
                        },
                        {
                            title: 'Panel 3',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            image: '/media/cats/cat_9.png',
                        },
                        {
                            title: 'Panel 4',
                            description:
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            image: '/media/cats/cat_10.png',
                        },
                    ],
                },
            },
        ],
    },
];
