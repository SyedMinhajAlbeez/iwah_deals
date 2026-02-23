// "use client"

import Link from "next/link";
// import { Suspense } from "react";
// import { getThemeCustomization } from "@/utils/bagisto";
// import LogoIcon from "@components/common/icons/LogoIcon";

import PaymentIcons from "@components/home/PaymentIcons";
import FaceBookIcon from "@components/common/icons/social-icon/FaceBookIcon";
import InstaGramIcon from "@components/common/icons/social-icon/InstaGramIcon";
import TikTokIcon from "@components/common/icons/social-icon/TikTokIcon";
import Subscribe from "./Subscribe";
import FooterMenu from "./FooterMenu";
// import ServiceContent from "./ServiceContent";
import BenefitsSection from "./BenefitsSection";


export default async function Footer() {

  // const menu = await getThemeCustomization();

  // const services = menu?.services_content?.themeCustomization?.[0];
  // const serviceData = services?.translations;

  return (
    <>
      <div className="pt-10">
        <BenefitsSection />
        {/* <ServiceContent name={services?.name} serviceData={serviceData} /> */}
      </div>
      <footer
        style={{ backgroundColor: "#F98814" }}
        // className="hidden lg:block border-t border-white text-white "
        className="block border-t border-white text-white"
      >
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 gap-y-6 px-6 py-6  min-[880px]:flex-row min-[880px]:gap-12 min-[880px]:gap-y-20 min-[880px]:px-4">
          {/* Column 1 */}
          <div className="flex flex-1 flex-col ">
            <h1 className="font-light" style={{ fontSize: "2.25rem" }}>
              Sign Up To Our Newsletter.
            </h1>
            <p className="text-base font-thin opacity-50">
              Be the first to hear about the latest offers.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-1 flex-col gap-4">
            <Subscribe />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 gap-y-6 px-6 py-6 text-sm  min-[880px]:flex-row min-[880px]:gap-12 min-[880px]:gap-y-20 min-[880px]:px-4">
          {/* <div className="flex flex-col gap-[14px]">
              <Link
                className="flex items-center gap-2 md:pt-1 cursor-pointer"
                href="/"
                aria-label="Go to homepage"
                title="Go to homepage"
              >
                <LogoIcon />
                <span className="sr-only">Go to homepage</span>
              </Link>
            </div> */}
          {/* <div className="flex flex-col gap-x-8 md:flex-row lg:gap-x-[50px]">
              <Suspense
                fallback={
                  <div className="flex h-[188px] w-[200px] flex-col gap-2">
                    {Array(6)
                      .fill(0)
                      .map((_, index) => (
                        <div key={index} className={skeleton} />
                      ))}
                  </div>
                }
              >
                <FooterMenu
                  menu={menu?.footer_links?.themeCustomizations?.edges}
                />
              </Suspense>
            </div> */}
          <FooterMenu />
        </div>
        <div className="border-t border-white/60 py-6 text-sm">
          <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center gap-1 px-4 md:flex-row">
            <div className="flex-1 text-center">
              <div className="flex gap-[14px]">
                <Link
                  href="https://www.facebook.com/share/183pc9e4Kh/"
                  aria-label="Visit Iwah Deals on Facebook"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <FaceBookIcon />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/iwah_deals?igsh=MXJ2emhoaDdvaTZsOQ=="
                  aria-label="Visit Iwah Deals on Instagram"
                  title="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <InstaGramIcon />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@iwahdeals.com?lang=en&is_from_webapp=1&sender_device=mobile&sender_web_id=7609705302963701249"
                  aria-label="Visit Iwah Deals on TikTok"
                  title="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <TikTokIcon />
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>

            <div className="flex-1 text-center">
              <PaymentIcons />
            </div>
            <p className="flex-1 text-right opacity-60">
              Alisons Technology - All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
