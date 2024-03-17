<script setup>
    import Logo from '@/assets/icons/logo_light.svg?component'

    import { Link } from '@inertiajs/vue3'
</script>

<template>
    <header>
        <div class='header-wrapper'>

            <a class="w-36 text-white-100" href="javascript:void(0)">
                <Logo></Logo>
            </a>

            <ul id="collapseMenu" class='lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full align-middle'>

                <li class='max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded'>
                    <a href='javascript:void(0)' class="link-light active">Главная</a>
                </li>

                <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                    <a href='javascript:void(0)' class='link-light'>Публичные файлы</a>
                </li>

                <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                    <a href='javascript:void(0)' class='link-light'>Тарифы</a>
                </li>

                <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                    <a href='javascript:void(0)' class='link-light'>Оплата</a>
                </li>

                <li class='max-lg:border-b max-lg:py-2 px-3 max-lg:rounded'>
                    <a href='javascript:void(0)' class='link-light'>Преимущества</a>
                </li>

            </ul>

            <div class='flex lg:order-1 max-sm:ml-auto'>

                <Link class="btn-blue mr-3" href="/login">Войти</Link>
                <Link class='btn-blue' href="/signup">Зарегистрироваться</Link>

                <button id="toggle" class='lg:hidden ml-7'>
                    <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>

            </div>

        </div>
    </header>
</template>
