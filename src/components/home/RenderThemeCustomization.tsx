import { FC, Suspense } from "react";
import { safeParse } from "@utils/helper";
import { ThemeCustomizationResponse } from "@/types/theme/theme-customization";
import ImageCarousel from "./ImageCarousel";
import { MobileSearchBar } from "@components/layout/navbar/MobileSearch";
import CategoryGrid from "./CategoryGrid";
import BestSellingProducts from "./BestSellingProducts";
import ArabicBanner from "./ArabicBanner";

interface RenderThemeCustomizationProps {
  themeCustomizations: ThemeCustomizationResponse["themeCustomization"];
}

const RenderThemeCustomization: FC<RenderThemeCustomizationProps> = ({
  themeCustomizations,
}) => {
  if (!themeCustomizations || themeCustomizations.length === 0) return null;

  const sortedCustomizations = [...themeCustomizations].sort(
    (a, b) => (a.sortOrder || 0) - (b.sortOrder || 0),
  );

  const firstStaticContentId =
    sortedCustomizations.find((node) => node.type === "static_content")?.id ??
    null;

  return (
    <>
      <MobileSearchBar />
      <section className="w-full max-w-screen-2xl mx-auto pb-4 px-4 xss:px-7.5">
        {sortedCustomizations.map((node) => {
          const translation =
            node.translations.find((t) => (t.locale || t.localeCode) === "en") ||
            node.translations[0];
          if (!translation) return null;

          const options = typeof translation.options === 'string' 
            ? safeParse(translation.options) || {}
            : translation.options || {};
          if (Object.keys(options).length === 0) return null;

          switch (node.type) {
            case "image_carousel":
              return <ImageCarousel key={node.id} />;
            case "static_content":
              if (!firstStaticContentId || node.id !== firstStaticContentId) {
                return null;
              }
              return (
                <div key={node.id}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <CategoryGrid />
                  </Suspense>
                  <BestSellingProducts />
                  <ArabicBanner />
                </div>
              );
            default:
              return null;
          }
        })}
      </section>
    </>
  );
};

export default RenderThemeCustomization;
