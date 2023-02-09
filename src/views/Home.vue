<template>
    <main class="__variable_9c9965 font-sans">
        <div class="min-h-screen">

            <div class="overflow-hidden bg-gray-100">
                <div class="mx-auto flex min-h-[80vh] max-w-7xl flex-col px-4 md:flex-row">
                    <div class="flex flex-1 flex-col items-center justify-center pt-10 md:items-start md:px-4 md:pt-0">
                        <span data-aos="fade-down" data-aos-delay="200"
                            class="mb-2.5 rounded-md bg-violet-100 py-1 px-4 text-sm font-semibold text-violet-600 md:mb-5 aos-init aos-animate">Sale
                            70%</span>
                        <h2 data-aos="fade-right" data-aos-delay="300"
                            class="mb-5 text-center text-[2.5rem] font-bold leading-tight text-black md:text-left md:text-5xl aos-init aos-animate">
                            An Industrial Take on Streetwear</h2>
                        <h3 data-aos="fade-right" data-aos-delay="400"
                            class="font-regular mb-5 text-center text-lg leading-tight text-neutral-700 md:mb-10 md:text-left aos-init aos-animate">
                            Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</h3><a
                            data-aos="fade-up" data-aos-delay="500"
                            class="mb-10 flex items-center rounded bg-zinc-900 py-2.5 px-8 text-base font-normal text-white shadow-sm shadow-zinc-500 aos-init aos-animate"
                            href="/"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg><span class="ml-2">Start Shopping</span></a>
                        <div class="mb-5 flex w-full flex-wrap justify-center md:justify-between aos-init aos-animate"
                            data-aos-delay="600" data-aos="fade"><img alt="bazaar brand" :src="bazaar" width="100"
                                height="50" decoding="async" data-nimg="1" class="mx-4 my-1"
                                style="color: transparent;"><img alt="bustle brand" :src="bustle" width="100"
                                height="50" decoding="async" data-nimg="1" class="mx-4 my-1"
                                style="color: transparent;"><img alt="versace brand" :src="versace" width="100"
                                height="50" decoding="async" data-nimg="1" class="mx-4 my-1"
                                style="color: transparent;"><img alt="instyle brand" :src="instyle" width="100"
                                height="50" decoding="async" data-nimg="1" class="mx-4 my-1"
                                style="color: transparent;"></div>
                    </div>
                    <div class="flex flex-1 items-end justify-start"><img alt="hero" data-aos="fade-up" :src="hero"
                            width="550" height="550" decoding="async" data-nimg="1" style="color: transparent;"
                            class="aos-init aos-animate">
                    </div>
                </div>
            </div>
            <div class="bg-white">
                <div class="mx-auto flex flex-col items-center px-4 py-10 md:container"><span
                        class="mb-4 text-sm font-bold uppercase text-violet-700">Promotions</span>
                    <h2 class="mb-6 text-center text-3xl font-bold text-black md:text-4xl">Our Promotions Events</h2>
                    <div class="grid w-full max-w-[1150px] gap-3 md:grid-cols-4"><a class="col-span-2" href="/"><img
                                alt="promo banner 1 image" :src="promoBanner1" width="1806" height="681"
                                decoding="async" data-nimg="1" loading="lazy" style="color: transparent;"></a><a
                            class="row-span-2" href="/"><img alt="promo banner 2 image" :src="promoBanner2" width="881"
                                height="1406" decoding="async" data-nimg="1" loading="lazy"
                                style="color: transparent;"></a><a class="row-span-2" href="/"><img
                                alt="promo banner 3 image" :src="promoBanner3" width="881" height="1406"
                                decoding="async" data-nimg="1" loading="lazy" style="color: transparent;"></a><a
                            class="col-span-2" href="/"><img alt="promo banner 4 image" :src="promoBanner4" width="1806"
                                height="681" decoding="async" data-nimg="1" loading="lazy"
                                style="color: transparent;"></a></div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import hero from "@/assets/hero.png"
import bazaar from "@/assets/bazaar.svg"
import bustle from "@/assets/bustle.svg"
import instyle from "@/assets/instyle.svg"
import versace from "@/assets/versace.svg"
import promoBanner1 from "@/assets/promo-banner-1.webp"
import promoBanner2 from "@/assets/promo-banner-2.webp"
import promoBanner3 from "@/assets/promo-banner-3.webp"
import promoBanner4 from "@/assets/promo-banner-4.webp"

</script>

<style scoped>

</style>