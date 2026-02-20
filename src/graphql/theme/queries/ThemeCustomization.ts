import { gql } from "@apollo/client";

export const GET_THEME_CUSTOMIZATION = gql`
  query themeCustomization {
    themeCustomization {
      id
      type
      name
      status
      sortOrder
      translations {
        id
        themeCustomizationId
        localeCode
        options {
          title
          css
          html
          images {
            title
            link
            image
            imageUrl
          }
          filters {
            key
            value
          }
          column_1 {
            title
            url
            sortOrder
          }
          column_2 {
            title
            url
            sortOrder
          }
          column_3 {
            title
            url
            sortOrder
          }
          services {
            serviceIcon
            description
            title
          }
        }
      }
    }
  }
`;
