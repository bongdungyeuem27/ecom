<template>
    <div class="group flex flex-col">
        <div class="relative h-[400px] overflow-hidden rounded-lg transition sm:h-[350px]">
            <a class="relative block h-full w-full" href="/product/20/slug">
                <img alt="Guide Pack Cap image" width="350" height="350" decoding="async" data-nimg="1" :src="image"
                    class="absolute h-full w-full duration-700 group-hover:scale-110 opacity-100" loading="lazy"
                    style="color: transparent;">

                <div class="absolute h-full w-full bg-black opacity-0 duration-500 group-hover:opacity-10">
                </div>
            </a>
            <button class="absolute top-3 right-3 z-10 hidden rounded-xl bg-white p-2.5 text-lg group-hover:block"><svg
                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-red-600"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                    </path>
                </svg></button><button
                class="absolute bottom-3 right-3 z-10 hidden rounded-xl bg-white p-2.5 text-lg group-hover:block"><svg
                    stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                    stroke-linejoin="round" class="text-blue-500" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg></button>
        </div>

        <a href="/product/20/slug" class="flex-shrink flex flex-col flex-grow basis-0">
            <h2 class=" text-base font-medium flex-shrink-1 basis-0 flex-grow-1">{{ data.name }}</h2>
            <h3 class="py-1 text-xs font-normal capitalize text-neutral-500">{{ data.category }}</h3>
            <div class="flex items-center justify-between mt-auto">
                <h3 class="my-3 text-xl font-medium text-black">${{ data.price }}</h3>
                <div class="flex items-center justify-center text-xs text-neutral-500"><svg stroke="currentColor"
                        fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="mr-1 text-yellow-400"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
                        </path>
                    </svg>
                    <h4>3.9 (69 Reviews)</h4>
                </div>
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/apis/product";
import product from "@/assets/product.webp"
import { defineProps, reactive } from "vue";
type Props = {
    data: IProduct
}
const props = defineProps<Props>();
const { data } = props
const image = `${import.meta.env.VITE_BACKEND}public/${data._id}.webp`

</script>

<style scoped>

</style>