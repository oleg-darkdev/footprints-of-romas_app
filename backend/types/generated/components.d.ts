import type { Schema, Attribute } from '@strapi/strapi';

export interface DateComponentsDateNumbers extends Schema.Component {
  collectionName: 'components_date_components_date_numbers';
  info: {
    displayName: 'CalendarDay';
    description: '';
  };
  attributes: {
    day: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<5>;
    month: Attribute.Enumeration<
      [
        '\u044F\u043D\u0432\u0430\u0440\u044C',
        '\u0444\u0435\u0432\u0440\u0430\u043B\u044C',
        '\u043C\u0430\u0440\u0442',
        '\u0430\u043F\u0440\u0435\u043B\u044C',
        '\u043C\u0430\u0439',
        '\u0438\u044E\u043D\u044C',
        '\u0438\u044E\u043B\u044C',
        '\u0430\u0432\u0433\u0443\u0441\u0442',
        '\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C',
        '\u043E\u043A\u0442\u044F\u0431\u0440\u044C',
        '\u043D\u043E\u044F\u0431\u0440\u044C',
        '\u0434\u0435\u043A\u0430\u0431\u0440\u044C'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'\u044F\u043D\u0432\u0430\u0440\u044C'>;
    subTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum'>;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum'>;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'>;
    readMore: Attribute.Component<'read-more.read-more'>;
    sourcesList: Attribute.Component<'sources.list'>;
    timeline: Attribute.Component<'date-components.timeline'>;
  };
}

export interface DateComponentsTimeline extends Schema.Component {
  collectionName: 'components_date_components_timelines';
  info: {
    displayName: 'Timeline';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
    desc: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'>;
    date: Attribute.Date &
      Attribute.Required &
      Attribute.DefaultTo<'2023-11-16'>;
  };
}

export interface HeroArticleHero extends Schema.Component {
  collectionName: 'components_hero_article_heroes';
  info: {
    displayName: 'article-hero';
    description: '';
  };
  attributes: {
    banner: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 130;
      }> &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic.'>;
  };
}

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
    caption: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'>;
  };
}

export interface NavAnchor extends Schema.Component {
  collectionName: 'components_nav_anchors';
  info: {
    displayName: 'Anchor';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'lorem#1'>;
  };
}

export interface NavNavigation extends Schema.Component {
  collectionName: 'components_nav_navigations';
  info: {
    displayName: 'Navigation';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface ReadMoreReadMore extends Schema.Component {
  collectionName: 'components_read_more_read_mores';
  info: {
    displayName: 'readMore';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'>;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface SourcesList extends Schema.Component {
  collectionName: 'components_sources_lists';
  info: {
    displayName: 'list';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder '>;
    author: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'author name'>;
    year: Attribute.BigInteger & Attribute.Required;
    link: Attribute.String & Attribute.Required & Attribute.DefaultTo<'/'>;
  };
}

export interface TextElementsH1 extends Schema.Component {
  collectionName: 'components_text_elements_h1s';
  info: {
    displayName: 'H1';
    description: '';
  };
  attributes: {
    h1: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
  };
}

export interface TextElementsH2 extends Schema.Component {
  collectionName: 'components_text_elements_h2s';
  info: {
    displayName: 'H2';
    description: '';
  };
  attributes: {
    h2: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
  };
}

export interface TextElementsH3 extends Schema.Component {
  collectionName: 'components_text_elements_h3s';
  info: {
    displayName: 'H3';
    description: '';
  };
  attributes: {
    h3: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder'>;
  };
}

export interface TextElementsP extends Schema.Component {
  collectionName: 'components_text_elements_ps';
  info: {
    displayName: 'P';
    description: '';
  };
  attributes: {
    p: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'>;
  };
}

export interface TextElementsRightImage extends Schema.Component {
  collectionName: 'components_text_elements_right_images';
  info: {
    displayName: 'rightImage';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }> &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'>;
    image: Attribute.Media & Attribute.Required;
    caption: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Lorem ipsum is placeholder text commonly used'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'date-components.date-numbers': DateComponentsDateNumbers;
      'date-components.timeline': DateComponentsTimeline;
      'hero.article-hero': HeroArticleHero;
      'images.images': ImagesImages;
      'nav.anchor': NavAnchor;
      'nav.navigation': NavNavigation;
      'read-more.read-more': ReadMoreReadMore;
      'sources.list': SourcesList;
      'text-elements.h1': TextElementsH1;
      'text-elements.h2': TextElementsH2;
      'text-elements.h3': TextElementsH3;
      'text-elements.p': TextElementsP;
      'text-elements.right-image': TextElementsRightImage;
    }
  }
}
