export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://leratdeville.github.io',
    title: 'leratdeville',
    subtitle: ' ',
    description: 'Kişisel blog',
    headerNavLinks: [
        {
            text: 'Ana Sayfa',
            href: '/'
        },
        {
            text: 'Yazılar',
            href: '/blog'
        },
        {
            text: 'Hakkında',
            href: '/about'
        }
    ],
    footerNavLinks: [],
    socialLinks: [],
    hero: {
        title: 'Hoş geldin.',
        text: 'Buraya kendi giriş metnini yazabilirsin; istemezsen boş bırak.',
        actions: [
            {
                text: 'Yazılara Göz At',
                href: '/blog'
            }
        ]
    },
    postsPerPage: 8
};

export default siteConfig;
