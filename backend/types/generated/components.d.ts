import type { Schema, Attribute } from '@strapi/strapi';

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
      'text-elements.p': TextElementsP;
      'text-elements.right-image': TextElementsRightImage;
    }
  }
}
