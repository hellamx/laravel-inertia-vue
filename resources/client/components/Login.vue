<script setup>
    import Logo from '@/assets/icons/logo_dark.svg?component'
</script>

<template>
    <div class="w-full h-screen flex justify-center items-center">

        <div class="w-[360px]">

            <h2 class="mt-4 text-center text-xl tracking-tight text-gray-900">Авторизация</h2>

            <div class="mt-5 sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <input id="email" name="email" type="text" class="input-base">
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                            <div class="text-sm">
                                <a href="#" class="text-blue-400 font-medium hover:underline">Забыли пароль?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input id="password" name="password" type="password" class="input-base">
                        </div>
                    </div>

                    <div>
                        <button type="submit" class="btn-blue w-full">Продолжить</button>
                    </div>
                </form>

                <p class="mt-6 flex justify-between text-center font-medium text-sm text-gray-500">
                    <a href="/" class="text-blue-400 font-medium text-sm hover:underline ms-1">На главную</a>
                    <a href="#" class="text-blue-400 hover:underline ms-1">Регистрация</a>
                </p>

                <Logo class="mx-auto mt-8"></Logo>
            </div>
        </div>
    </div>
</template>
