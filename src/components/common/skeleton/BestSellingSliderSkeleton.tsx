export const BestSellingSliderSkeleton = () => {
  const cards = Array.from({ length: 4 });

  return (
    <section className="w-full py-8 md:py-12 px-2 md:px-4">
      <div
        className="container mx-auto border-2 border-[#fdad5a] rounded-3xl md:rounded-[2.5rem] p-4 sm:p-8 md:p-12"
        style={{ backgroundColor: "#FDF9F3" }}
      >
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="h-7 md:h-9 w-48 md:w-72 animate-pulse rounded-md bg-neutral-200" />
          <div className="h-9 w-28 sm:w-36 animate-pulse rounded-full bg-neutral-200" />
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-3 md:gap-6">
            {cards.map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-[#FDF9F3] basis-[80%] sm:basis-[48%] md:basis-[32%] lg:basis-[24%]"
              >
                <div className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-sm h-full">
                  <div className="relative aspect-square m-3 rounded-2xl overflow-hidden bg-neutral-200 animate-pulse" />
                  <div className="px-5 pb-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-3 w-20 animate-pulse rounded bg-neutral-200" />
                      <div className="h-3 w-16 animate-pulse rounded bg-neutral-200" />
                    </div>
                    <div className="mb-2 h-4 w-full animate-pulse rounded bg-neutral-200" />
                    <div className="mb-4 h-3 w-1/2 animate-pulse rounded bg-neutral-200" />
                    <div className="flex flex-col gap-2">
                      <div className="h-3 w-24 animate-pulse rounded bg-neutral-200" />
                      <div className="h-6 w-28 animate-pulse rounded bg-neutral-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
