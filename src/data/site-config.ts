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
    subtitle: '',
    description: 'kişisel blog',
    headerNavLinks: [
        {
            text: 'ana sayfa',
            href: '/'
        },
        {
            text: 'yazılar',
            href: '/blog'
        },
        {
            text: 'hakkında',
            href: '/about'
        }
    ],
    footerNavLinks: [],
    socialLinks: [],
    postsPerPage: 8
};

export default siteConfig;
