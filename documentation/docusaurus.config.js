// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const repositories = [
  {label: 'simply-framework', href: 'https://github.com/Amorfx/simply-framework'},
  {label: 'simply (boilerplate)', href: 'https://github.com/Amorfx/simply'},
  {label: 'simply-maker', href: 'https://github.com/Amorfx/simply-maker'},
  {label: 'simply-mvc', href: 'https://github.com/Amorfx/simply-mvc'},
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simply Framework',
  tagline: 'Develop in WordPress become much better',
  url: 'https://amorfx.github.io',
  baseUrl: '/simply-documentation/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  organizationName: 'Amorfx',
  projectName: 'simply-documentation',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Amorfx/simply-documentation/tree/main/documentation',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Simply framework',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'GitHub',
            position: 'right',
            items: repositories,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'Repositories',
            items: repositories,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Simply Framework`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // markup-templating must come first: php and twig depend on it
        additionalLanguages: ['markup-templating', 'php', 'yaml', 'bash'],
      },
    }),

  plugins: [
    ['@cmfcmf/docusaurus-search-local', {indexBlog: false}],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pages that were removed or renamed, filled as the target pages are written
        redirects: [],
      },
    ],
  ],
};

export default config;
