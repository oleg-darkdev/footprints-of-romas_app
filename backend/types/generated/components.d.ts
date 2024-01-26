import type { Schema, Attribute } from '@strapi/strapi';

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
