<script setup>
import Logo from '@/assets/icons/logo_dark.svg?component'

import { reactive } from "vue";
import { Link } from '@inertiajs/vue3';
import validation from '@/assets/js/validation';

import langRu from '@/lang/ru/client.json';

const setValue = (e) => {

    validate[e.target.id].value = e.target.value;

    if (!validate[e.target.id].value.length)
        (validate[e.target.id].error = true), (validate[e.target.id].errorMessage = langRu.errors.required);
    else (validate[e.target.id].error = false), (validate[e.target.id].errorMessage = '');

    if (e.target.id === 'email') {
        if (!validation.email(e.target.value))
            (validate.email.error = true),
                (validate.email.errorMessage = langRu.errors.email_invalid)
        else
            (validate.email.error = false),
                (validate.email.errorMessage = '')
    }
}

const validate = reactive({
    login: {
        value: '',
        error: false,
        errorMessage: '',
    },
    email: {
        value: '',
        error: false,
        errorMessage: '',
    },
    password: {
        value: '',
        error: false,
        errorMessage: '',
    },
});

const signUp = (e) => {

    for (let key in validate) {
        if (validate[key].error) continue;

        if (!validate[key].value.length)
            (validate[key].error = true), (validate[key].errorMessage = langRu.errors.required);
        else (validate[key].error = false), (validate[key].errorMessage = "");
    }

    if (validate.login.error || validate.email.error || validate.password.error) return;

    alert('ОТПРАВЛЕНО');
};

</script>

<template>
    <div class="w-full h-screen flex justify-center items-center">

        <div class="w-[360px]">

            <h2 class="mt-4 text-center text-xl tracking-tight text-gray-900">Регистрация</h2>

            <div class="mt-5 sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="login" class="block text-sm font-medium leading-6 text-gray-900">Логин</label>
                        </div>
                        <div class="mt-2">
                            <input id="login" @change="setValue" name="login" type="text" :class="`input-base ${ (validate.login.error) ? '--invalid' : '' }`">
                            <span v-if="validate.login.error" class="text-sm block mt-2 font-medium text-red-500">{{ validate.login.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="mt-2">
                            <input id="email" @change="setValue" name="email" type="text" :class="`input-base ${ (validate.email.error) ? '--invalid' : '' }`">
                            <span v-if="validate.email.error" class="text-sm block mt-2 font-medium text-red-500">{{ validate.email.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                        </div>
                        <div class="mt-2">
                            <input id="password" @change="setValue" name="password" type="password"  :class="`input-base ${ (validate.password.error) ? '--invalid' : '' }`">
                            <span v-if="validate.password.error" class="text-sm block mt-2 font-medium text-red-500">{{ validate.password.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <button @click.prevent="signUp" type="submit" class="btn-blue w-full">Продолжить</button>
                    </div>

                </form>

                <p class="mt-6 flex justify-between text-center font-medium text-sm text-gray-500">
                    <Link href="/" class="text-blue-400 font-medium text-sm hover:underline ms-1">На главную</Link>
                    <Link href="/login" class="text-blue-400 hover:underline ms-1">Авторизация</Link>
                </p>

                <Logo class="mx-auto mt-8"></Logo>
            </div>
        </div>
    </div>
</template>
