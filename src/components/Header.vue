<template>
    <main class="__variable_9c9965 font-sans">
        <div class="min-h-screen">
            <header class="relative h-14 bg-white shadow-md shadow-gray-200">
                <div class="mx-auto flex h-full items-center px-4 xl:container">
                    <div class="mr-5 flex shrink-0 items-center">
                        <RouterLink :to="{ name: 'home' }"><img alt="logo" :src="logo" width="100" height="35"
                                decoding="async" data-nimg="1" style="color: transparent" /></RouterLink>
                    </div>
                    <ul class="ml-auto hidden h-full md:flex">
                        <li class="font-medium text-neutral-700 transition-colors false">
                            <RouterLink :to="{ name: 'shop' }" class="flex h-full items-center px-5">Shop</RouterLink>
                        </li>

                    </ul>
                    <ul class="ml-auto items-center md:flex">
                        <form class="relative flex h-10 max-w-[200px] content-between items-center">
                            <input
                                class="h-full w-full rounded-lg border border-solid border-transparent bg-neutral-100 p-2.5 pr-9 text-neutral-900 placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
                                type="text" name="search" id="search" placeholder="Search" value="" /><svg
                                stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="absolute right-0 h-full w-[30px] cursor-pointer pr-2.5 text-neutral-500"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </form>
                        <a class="ml-5 hidden md:block" href="/wishlist"><svg stroke="currentColor" fill="none"
                                stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                class="text-neutral-700 transition-colors hover:text-violet-700" height="20px"
                                width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                                </path>
                            </svg></a><a class="ml-5 hidden md:block" href="/cart"><svg stroke="currentColor"
                                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" class="text-neutral-700 transition-colors hover:text-violet-700"
                                height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg></a><a class="ml-5 hidden md:block" href="/signin"><svg stroke="currentColor"
                                fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                                stroke-linejoin="round" class="text-neutral-700 transition-colors hover:text-violet-700"
                                height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg></a>
                    </ul>
                </div>
            </header>
            <RouterView></RouterView>
        </div>
        <footer class="mb-16 bg-white md:mb-0">
            <div class="mx-auto max-w-7xl px-4 py-10">
                <div class="flex flex-col md:flex-row">
                    <div class="flex flex-col md:flex-1">
                        <a href="/"><img alt="kara shop logo" :src="logo" width="100" height="35" decoding="async"
                                data-nimg="1" style="color: transparent" /></a>
                        <p class="py-4 text-sm font-normal text-neutral-500">
                            Small, artisan label that offers a thoughtfully curated collection
                            of high quality everyday essentials made.
                        </p>
                        <div class="my-5 flex justify-center md:justify-start">
                            <a target="_blank"
                                class="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                                href="https://instagram.com"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                    </path>
                                </svg></a><a target="_blank"
                                class="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                                href="https://twitter.com"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
                                    </path>
                                </svg></a><a target="_blank"
                                class="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                                href="https://facebook.com"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z">
                                    </path>
                                </svg></a><a target="_blank"
                                class="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                                href="https://linkedin.com"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                    </path>
                                </svg></a>
                        </div>
                    </div>
                    <div class="mt-5 flex justify-between md:mt-0 md:flex-[2] md:justify-around">
                        <div class="flex flex-col">
                            <strong class="mb-5 text-sm font-bold text-neutral-600 md:text-base">Company</strong>
                            <ul class="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                                <a class="transition hover:text-neutral-700" href="/about">About</a><a
                                    class="transition hover:text-neutral-700" href="/term-of-use">Term of Use</a><a
                                    class="transition hover:text-neutral-700" href="/privacy-policy">Privacy
                                    Policy</a><a class="transition hover:text-neutral-700" href="/how-works">How it
                                    Works</a><a class="transition hover:text-neutral-700" href="/contact-us">Contact
                                    Us</a>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <strong class="mb-5 text-sm font-bold text-neutral-600 md:text-base">Support</strong>
                            <ul class="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                                <a class="transition hover:text-neutral-700" href="/support">Support Career</a><a
                                    class="transition hover:text-neutral-700" href="/24-service">24h Service</a><a
                                    class="transition hover:text-neutral-700" href="/quick-chat">Quick Chat</a>
                            </ul>
                        </div>
                        <div class="flex flex-col">
                            <strong class="mb-5 text-sm font-bold text-neutral-600 md:text-base">Contact</strong>
                            <ul class="flex flex-col gap-2 text-xs font-normal text-neutral-500 md:text-sm">
                                <a class="transition hover:text-neutral-700" href="/whatsapp">Whatsapp</a><a
                                    class="transition hover:text-neutral-700" href="/24-service">Support 24</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-neutral-100">
                <div class="mx-auto max-w-7xl px-2 py-3">
                    <div
                        class="flex flex-col items-center justify-between gap-3 text-xs font-medium text-neutral-700 md:flex-row">
                        <p>Copyright © 2022 KARA Shop</p>
                        <a target="_blank" href="https://github.com/mehrabmp/kara-shop"><svg stroke="currentColor"
                                fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.25rem"
                                width="1.25rem" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                                </path>
                            </svg></a>
                        <p>
                            Created By
                            <strong><a target="_blank" href="https://github.com/mehrabmp">Mehrab</a></strong>.
                            <!-- -->All Right Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView, routerViewLocationKey } from 'vue-router'
import logo from "@/assets/logo.webp"
</script>

<style scoped>

</style>
