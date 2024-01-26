import type { Schema, Attribute } from '@strapi/strapi';

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
      'text-elements.h2': TextElementsH2;
      'text-elements.h3': TextElementsH3;
      'text-elements.p': TextElementsP;
      'text-elements.right-image': TextElementsRightImage;
    }
  }
}
