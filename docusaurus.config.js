// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anatolian Team',
  tagline: 'Always forward with the Anatolian Team 🚀',
  favicon: 'img/favicon.ico',
  customFields: {
    description: 'Anatolian Team Services Website. Installation Guides, Snaphots, StateSync for the testnet networks and more...',
  },

  // Set the production url of your site here
  url: 'https://services.anatolianteam.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AnatolianTeam', // Usually your GitHub org/user name.
  projectName: 'Anatolian-Team-Services', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AnatolianTeam/Anatolian-Team-Services/tree/master/',
          editLocalizedFiles: true
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
      metadata: [
        {name: 'description', content: 'Welcome to the Anatolian Team Services.',},
        {name: 'robots', content: 'index, follow'},
        {name: 'og:image', content: 'img/anatolian-doc-social-card.jpg'},        
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'og:title', content: 'Anatolian Team | Service'},
        {name: 'og:description', content: 'Anatolian Team Services Website. Installation Guides, Snaphots, StateSync for the testnet networks... '},
      ],
      // Replace with your project's social card
      // image: 'img/anatolian-doc-social-card.jpg',
      navbar: {
        title: 'Anatolian Team',
        logo: {
          alt: 'Anatolian Logo',
          src: 'img/AT-Service.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Services',
          },
          {
            type: 'dropdown',
            label: 'Explorer',
            position: 'right',
            items: [
              {
                type: 'html',
                value: '<a href="https://cosmos-testnet.anatolianteam.com" target="_blank" title="Cosmos Testnet Explorer"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/cosmos-t-icon.svg"/>Cosmos Testnet </span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://cosmos.anatolianteam.com" target="_blank" title="Cosmos Mainnet Explorer"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/cosmos-icon.svg"/>Cosmos Mainnet</span></a>'
              },
            ]
          },          
          {
            type: 'dropdown',
            label: 'Links',
            position: 'right',
            items: [
              {
                type: 'html',
                value: '<a href="https://anatolianteam.notion.site/anatolianteam/671b5c5930304d2197dcf7280216c552?v=47dddb1ce0c649e4abfe038c0d7a060d" target="_blank" title="Anatolian Team on Notion"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/notion-icon.svg"/>Notion</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://twitter.com/AnatolianTeam" target="_blank" title="Anatolian Team on Twitter"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/x-icon.svg"/>X (Twitter)</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://www.linkedin.com/company/anatolianteam" target="_blank" title="Anatolian Team on LinkedIn"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/linkedin-icon.svg"/>LinkedIn</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://github.com/AnatolianTeam" target="_blank" title="Anatolian Team on GitHub"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/github-icon.svg"/>GitHub</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://t.me/AnatolianTeam" target="_blank" title="Anatolian Team on Telegram"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/telegram-icon.svg"/>Telegram 💬</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://t.me/AnatolianTeamduyuru" target="_blank" title="Anatolian Team on Telegram"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/telegram-icon.svg"/>Telegram 📣</span></a>'
              },
              {
                type: 'html',
                value: '<a href="https://link3.to/anatolianteam" target="_blank" title="Anatolian Team on Link3"><span id="navbarDropdownItem"><img id="navbarDropdownImage" src="/img/cyber-icon.svg"/>Link3</span></a>'
              },
            ]
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },  
          {
            href: 'https://anatolianteam.com/',
            label: 'Website',
            position: 'right',
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
                label: 'Testnet',
                to: '/docs/category/testnet',
              },
              {
                label: 'Mainnet',
                to: '/docs/category/mainnet',
              },
              {
              label: 'GitHub',
              href: 'https://github.com/AnatolianTeam',
              },
              {
                label: 'Notion - Knowledge Base',
                href: 'https://anatolianteam.notion.site/anatolianteam/671b5c5930304d2197dcf7280216c552?v=47dddb1ce0c649e4abfe038c0d7a060d',
              },              
            ],
          },
          {
            title: 'Blockchain Explorer',
            items: [
              {
                label: 'Cosmos Testnet',
                href: 'https://cosmos-testnet.anatolianteam.com',
              },
              {
                label: 'Cosmos Mainnet',
                href: 'https://cosmos.anatolianteam.com',
              },            
            ],
          },          
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram Chat',
                href: 'https://t.me/AnatolianTeam',
              },
              {
                label: 'Telegram Announcement',
                href: 'https://t.me/AnatolianTeamduyuru',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/AnatolianTeam',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCARaVT57jv7PPHDo0bs0mlA?sub_confirmation=1',
              },
            ],
          },
          {
            title: 'Anatolian Team',
            items: [
              {
                label: 'About Us',
                href: 'https://anatolianteam.com/team/',
              },
              {
                label: 'Projects',
                href: 'https://anatolianteam.com/projects/',
              },
              {
                label: 'Contact',
                href: 'https://anatolianteam.com/contact/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/anatolianteam',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anatolian Team 🐆`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark'
      },
      /*
      announcementBar: {
        id: 'support_us',
        content:
          '⛑️ Our Services Website is Under Construction. 🚧 Hizmetler Web Sitemiz Yapım Aşamasındadır. ⛑️',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      */
    }),
    plugins: [
      [
        '@easyops-cn/docusaurus-search-local',
        {
          hashed: true,
          docsRouteBasePath: '/'
        }
      ]
    ],
    stylesheets: ["https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500&display=swap"],
};

export default config;
