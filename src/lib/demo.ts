export type Item = {
  name: string;
  slug: string;
  description?: string;
  dates?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Employers',
    items: [
      {
        name: 'Vention',
        dates: 'February 2021 - October 2023',
        slug: 'https://www.vention.io',
        description:
          'Ruby on Rails application for a industrial automation company involving ecommerce and industrial design.',
      },
      {
        name: 'Collab Machine',
        dates: 'September 2021 - December 2021',
        slug: 'https://collabmachine.com/',
        description:
          'A marketplace application built on Ruby on Rails to connect freelancers with projects.',
      },
    ],
  },
  {
    name: 'Open Source',
    items: [
      {
        name: 'pay-rails/pay',
        slug: 'https://github.com/pay-rails/pay',
        description: 'Payments for Ruby on Rails apps',
      },
      {
        name: 'ViewComponent/view_component',
        slug: 'https://github.com/ViewComponent/view_component',
        description:
          'A framework for building reusable, testable & encapsulated view components in Ruby on Rails.',
      },
      {
        name: 'hotwired/stimulus-rails',
        slug: 'https://github.com/hotwired/stimulus-rails',
        description: 'Use Stimulus in your Ruby on Rails app',
      },
      {
        name: 'nwarwick/dyte',
        slug: 'https://github.com/nwarwick/dyte',
        description: 'A Ruby wrapper for version 2 of the Dyte API.',
      },
      {
        name: 'lcampanari/action_view_preview',
        slug: 'https://github.com/lcampanari/action_view_preview',
        description:
          "Development tool for rendering views that wouldn't otherwise be rendered in your application",
      },
    ],
  },
];
