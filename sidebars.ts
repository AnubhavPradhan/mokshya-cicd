import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/What is Mokshya AI',
        'introduction/The Mokshya Ecosystem',
        'introduction/Key Differentiators',
        'introduction/Mokshya AI vs ChatGPT',
      ],
    },
    {
      type: 'category',
      label: 'Quick Start Guide',
      items: [
        'quick-start-guide/Login and Access',
        'quick-start-guide/First Website Scan',
        'quick-start-guide/First Code Scan',
        'quick-start-guide/Conversations & History',
        'quick-start-guide/Plans & Upgrades',

      ],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'Core Features/AI-Penetration Testing',
        'Core Features/Source Code Analysis',
        'Core Features/Search',
        'Core Features/OpenAI Compatibility & API Integrations',
      ],
    },
    {
      type: 'category',
      label: 'Architecture and User Worflows',
      items: [
        'Architecture and User Workflows/Architecture',
        'Architecture and User Workflows/User Workflows'
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'Use Cases/Recon Automation',
        'Use Cases/Github Secret Discovery',
      ],
    },
    {
      type: 'doc',
      id: 'troubleshooting/index',
      label: 'Troubleshooting',
    },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'FAQ',
    },
  ],
};

export default sidebars;
