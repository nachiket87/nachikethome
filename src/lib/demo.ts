export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Employers',
    items: [
      {
        name: 'Vention',
        slug: 'employment/vention',
        description:
          'Ruby on Rails application for a industrial automation company involving ecommerce and industrial design.',
      },
      {
        name: 'Collab Machine',
        slug: '',
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
        slug: '',
        description: 'Payments for Ruby on Rails apps',
      },
      {
        name: 'ViewComponent/view_component',
        slug: '',
        description:
          'A framework for building reusable, testable & encapsulated view components in Ruby on Rails.',
      },
      {
        name: 'hotwired/stimulus-rails',
        slug: '',
        description: 'Use Stimulus in your Ruby on Rails app',
      },
      {
        name: 'nwarwick/dyte',
        slug: '',
        description: 'A Ruby wrapper for version 2 of the Dyte API.',
      },
      {
        name: 'lcampanari/action_view_preview',
        slug: '',
        description:
          "Development tool for rendering views that wouldn't otherwise be rendered in your application",
      },
    ],
  },
];
