export interface ThemeTranslationNode {
  id: string;
  themeCustomizationId: string;
  locale?: string;
  localeCode?: string;
  options: string | Record<string, any>;
}

export interface ThemeCustomizationNode {
  id: string;
  type: string;
  name: string;
  status: string;
  sortOrder: number;
  themeCode?: string;
  translations: ThemeTranslationNode[];
}

export interface ThemeCustomizationResponse {
  themeCustomization: ThemeCustomizationNode[];
}



// footer 
export interface ThemeOptions {
  title: string;
  url: string;
}
export interface FooterColumns {
  column_1?: ThemeOptions[];
  column_2?: ThemeOptions[];
  column_3?: ThemeOptions[];
}
export interface GetFooterResponse {
  themeCustomization: ThemeCustomizationFooterNode[];
}

export interface GetFooterVariables {
  type?: string;
}

export interface ThemeCustomizationFooterNode {
  id: string;
  type: string;
  name: string;
  status: boolean;
  themeCode?: string;
  translations: ThemeCustomizationTranslationNode[];
}

export interface ThemeCustomizationTranslationNode {
  id: string;
  themeCustomizationId: string;
  locale: string;
  options: string | FooterColumns;
}


export interface FooterMenuProps {
  menu: ThemeCustomizationFooterNode[];
}

export interface ThemeCustomizationResult {
  footer_links: GetFooterResponse | null;
  services_content: GetFooterResponse | null;
}
