// "use client"

import Link from "next/link";
import { Suspense } from "react";
import { isObject } from "@/utils/type-guards";
import { getThemeCustomization } from "@/utils/bagisto";
import LogoIcon from "@components/common/icons/LogoIcon";

import PaymentIcons from "@components/home/PaymentIcons";
import FaceBookIcon from "@components/common/icons/social-icon/FaceBookIcon";
import InstaGramIcon from "@components/common/icons/social-icon/InstaGramIcon";
import TwitterIcon from "@components/common/icons/social-icon/TwitterIcon";
import Subscribe from "./Subscribe";
import FooterMenu from "./FooterMenu";
import ServiceContent from "./ServiceContent";
import { ThemeCustomizationTranslationEdge } from "@/types/theme/theme-customization";


export default async function Footer() {

    const skeleton =
        "w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700";
    const menu = await getThemeCustomization();

    const services = menu?.services_content?.themeCustomizations?.edges?.[0]?.node;

    return (
        <>
            <div className="mx-auto my-16 mt-16 sm:mt-0 w-full lg:my-12 md:my-20 md:max-w-4xl px-4 py-8">
                {isObject(services) && services?.translations?.edges && (
                    <ServiceContent
                        name={services?.name}
                        serviceData={services?.translations?.edges?.map(
                            (edge: ThemeCustomizationTranslationEdge) =>
                                edge.node,
                        )}
                    />
                )}
            </div>
            <footer
                style={{ backgroundColor: "#F98814" }}
                className="hidden lg:block border-t border-white text-sm text-white "
            >
                <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 gap-y-6 px-6 py-12 text-sm  min-[880px]:flex-row min-[880px]:gap-12 min-[880px]:gap-y-20 min-[880px]:px-4">
                    {/* Column 1 */}
                    <div className="flex flex-1 flex-col gap-4">
                        <h2 className="text-lg font-semibold">Column One</h2>
                        <p className="text-muted-foreground">Content for the first column goes here.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-1 flex-col gap-4">
                        <Subscribe />
                    </div>

                </div>
                <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 gap-y-6 px-6 py-12 text-sm  min-[880px]:flex-row min-[880px]:gap-12 min-[880px]:gap-y-20 min-[880px]:px-4">



                    <div className="flex flex-col gap-[14px]">
                        <Link
                            className="flex items-center gap-2 md:pt-1 cursor-pointer"
                            href="/"
                            aria-label="Go to homepage"
                            title="Go to homepage"
                        >
                            <LogoIcon />
                            <span className="sr-only">Go to homepage</span>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-x-8 md:flex-row lg:gap-x-[50px]">
                        <Suspense
                            fallback={
                                <div className="flex h-[188px] w-[200px] flex-col gap-2">
                                    {Array(6)
                                        .fill(0)
                                        .map((_, index) => (
                                            <div
                                                key={index}
                                                className={skeleton}
                                            />
                                        ))}
                                </div>
                            }
                        >
                            <FooterMenu
                                menu={
                                    menu?.footer_links?.themeCustomizations?.edges
                                }
                            />
                        </Suspense>

                    </div>
                </div>
                <div className="border-t border-white/60 py-6 text-sm">
                    <div className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center gap-1 px-4 md:flex-row">
                        <div className="flex-1 text-center">
                            <div className="flex gap-[14px]">
                                <Link
                                    href={"#"}
                                    aria-label="Visit Bagisto Store on Facebook"
                                    title="Facebook"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <FaceBookIcon />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link
                                    href={"#"}
                                    aria-label="Visit Bagisto Store on Instagram"
                                    title="Instagram"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <InstaGramIcon />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                                <Link
                                    href={"#"}
                                    aria-label="Visit Bagisto Store on Twitter"
                                    title="Twitter"
                                    target="_blank"
                                    className="cursor-pointer"
                                >
                                    <TwitterIcon />
                                    <span className="sr-only">Twitter</span>
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
