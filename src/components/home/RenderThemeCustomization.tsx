import { FC, Suspense } from "react";
import { safeParse } from "@utils/helper";
import { ThemeCustomizationResponse } from "@/types/theme/theme-customization";
import ImageCarousel from "./ImageCarousel";
import { MobileSearchBar } from "@components/layout/navbar/MobileSearch";
import CategoryGrid from "./CategoryGrid";
import BestSellingProducts from "./BestSellingProducts";
import ArabicBanner from "./ArabicBanner";

interface RenderThemeCustomizationProps {
  themeCustomizations: ThemeCustomizationResponse["themeCustomizations"];
}

const RenderThemeCustomization: FC<RenderThemeCustomizationProps> = ({
  themeCustomizations,
}) => {
  if (!themeCustomizations?.edges?.length) return null;

  const sortedEdges = [...themeCustomizations.edges].sort(
    (a, b) => (a.node.sortOrder || 0) - (b.node.sortOrder || 0),
  );

  const firstStaticContentId =
    sortedEdges.find(({ node }) => node.type === "static_content")?.node.id ??
    null;

  return (
    <>
      <MobileSearchBar />
      <section className="w-full max-w-screen-2xl mx-auto pb-4 px-4 xss:px-7.5">
        {sortedEdges.map(({ node }) => {
       console.log("chekcnewww",node)
          const translation =
            node.translations.edges.find((e) => e.node.locale === "en") ||
            node.translations.edges[0];
          if (!translation) return null;

          const options = safeParse(translation.node.options) || {};
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
