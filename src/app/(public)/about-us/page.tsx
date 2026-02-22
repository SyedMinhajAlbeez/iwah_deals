import Image from "next/image";

type InfoSection = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  invert?: boolean;
};

const INFO_SECTIONS: InfoSection[] = [
  {
    title: "Iwah Market",
    body: "Iwahdeals is a proudly Bahrain-based e-commerce platform offering a massive range of products since our inception. Our diverse catalog caters to individuals and families, featuring everything from the latest electronics and fashion to home essentials and beauty products.",
    imageSrc: "/image/aboutUs/IwahMarket.png",
    imageAlt: "Iwah market",
  },
  {
    title: "Quality Assurance",
    body: "We guarantee the highest quality for every item listed on our store. With years of operational excellence and thousands of happy customers in Bahrain, we ensure that every product passes through a strict quality check.",
    imageSrc: "/image/aboutUs/qA.png",
    imageAlt: "Quality assurance",
    invert: true,
  },
  {
    title: "Security & Trust",
    body: "Experience a 100% secure shopping environment. At Iwahdeals, we prioritize your data privacy and payment security. Whether you are buying the latest smartphone or daily essentials, our platform ensures a protected transaction every time, giving you the ultimate peace of mind.",
    imageSrc: "/image/aboutUs/trust.png",
    imageAlt: "Security and trust",
  },
  {
    title: "Swift Delivery Across the Kingdom",
    body: "We deliver our goods all across Bahrain. No matter where you live—from Manama to Riffa—your order will be shipped in time and delivered right to your door or any other location you have specified. Every package is handled with the utmost care, ensuring that your ordered products reach you safe and sound, exactly as you expect them to be.",
    imageSrc: "/image/aboutUs/delivery.png",
    imageAlt: "Swift delivery across the kingdom",
    invert: true,
  },
];

/* Alternating: white, orange, white, orange */
const SECTION_BG = ["#FFFFFF", "#FDA33A", "#FFFFFF", "#FDA33A"];

export default function AboutUsPage() {
  return (
    <main
      className="w-full bg-white"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Page title */}
      <div className="mx-auto w-full max-w-[1920px] px-4">
        <h1 className="py-12 text-[32px] font-semibold font-[Poppins] text-[#202020] leading-none text-left md:text-left text-center sm:text-center md:text-left">
          About Us
        </h1>
      </div>

      {/* ── Hero / Orange Section ── */}
      <section className="w-full bg-[#FDA33A]">
        <div className="mx-auto w-full max-w-[1920px] py-16 lg:py-20">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-[120px]">
            {/* Text block */}
            <div
              className="flex w-full max-w-[565px] flex-col justify-self-center lg:justify-self-start"
              style={{ gap: 32 }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A9ACC]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-8.5Z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2
                  className="font-semibold text-white"
                  style={{
                    fontSize: "clamp(26px, 2.5vw, 40px)",
                    lineHeight: "124%",
                    letterSpacing: 0,
                  }}
                >
                  A Family That Keeps
                  <br />
                  On Growing
                </h2>
              </div>

              <div
                className="space-y-5 text-white opacity-95"
                style={{
                  fontSize: "clamp(15px, 1.2vw, 20px)",
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                <p>
                  At Iwahdeals, we aim to redefine the shopping experience in
                  the Kingdom of Bahrain. From a small local venture to a
                  growing digital marketplace, we bring the world to your
                  doorstep.
                </p>
                <p>
                  We focus on building lasting relationships with our customers
                  by providing variety, value, and a seamless shopping journey
                  through our online platform.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex w-full justify-center lg:justify-start">
              <div className="w-full max-w-[680px] overflow-hidden rounded-[25px]">
                <Image
                  src="/image/aboutUs/AFamily.png"
                  alt="About us"
                  width={680}
                  height={493}
                  className="w-full h-auto object-cover"
                  sizes="(min-width: 1024px) 680px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Info Sections ── */}
      {INFO_SECTIONS.map((s, idx) => {
        const isOrange = idx % 2 === 1;
        const bg = SECTION_BG[idx];
        const textColor = isOrange ? "#FFFFFF" : "#202020";

        return (
          <section
            key={s.title}
            className="w-full"
            style={{ backgroundColor: bg }}
          >
            <div className="mx-auto w-full max-w-[1920px] py-16 lg:py-20">
              <div
                className={`mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2 lg:gap-[120px] ${
                  s.invert ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="flex w-full justify-center lg:justify-start">
                  <div className="w-full max-w-[680px] overflow-hidden rounded-[25px]">
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      width={680}
                      height={493}
                      className="w-full h-auto object-cover"
                      sizes="(min-width: 1024px) 680px, 100vw"
                    />
                  </div>
                </div>

                {/* Text */}
                <div
                  className="flex w-full max-w-[565px] flex-col justify-self-center lg:justify-self-start"
                  style={{ gap: 32 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A9ACC]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                        />
                        <path
                          d="M8.5 12h7"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M12 8.5v7"
                          stroke="#FFFFFF"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: "clamp(22px, 2.5vw, 40px)",
                        lineHeight: "124%",
                        letterSpacing: 0,
                        color: textColor,
                      }}
                    >
                      {s.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      fontSize: "clamp(15px, 1.2vw, 20px)",
                      lineHeight: "26px",
                      fontWeight: 400,
                      letterSpacing: 0,
                      color: textColor,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}
