<script setup>
import Logo from '@/assets/icons/logo_dark.svg?component'

import { reactive } from 'vue';
import { Link } from '@inertiajs/vue3';
import validation from '@/assets/js/validation';

const validate = (e) => {
    validation.validate(e, validateState);
}

const validateState = reactive({
    email: {
        value: '',
        error: false,
        errorMessage: '',
        minLength: undefined,
    },
    password: {
        value: '',
        error: false,
        errorMessage: '',
        minLength: 8,
    },
});

const login = (e) => {

    for (let key in validateState) {
        if (validateState[key].error) continue;

        if (!validateState[key].value.length)
            validation.setFieldIsInvalid(key, 'required', validateState);
        else
            validation.setFieldIsValid(key, validateState);
    }

    if (validateState.email.error || validateState.password.error) return;

    alert('ОТПРАВЛЕНО');
};

</script>

<template>
    <div class="w-full h-screen flex justify-center items-center">

        <div class="w-[360px]">

            <h2 class="mt-4 text-center text-xl tracking-tight text-gray-900">Авторизация</h2>

            <div class="mt-5 sm:w-full sm:max-w-sm">
                <form class="space-y-6" action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
                        <div class="mt-2">
                            <input
                                id="email"
                                @change="validate"
                                name="email"
                                type="text"
                                :class="`input-base ${ (validateState.email.error) ? '--invalid' : (validateState.email.value.length ? '--valid' : '') }`">

                            <span v-if="validateState.email.error" class="text-sm block mt-2 font-medium text-red-500">{{ validateState.email.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm font-medium text-gray-900">Пароль</label>
                            <div class="text-sm">
                                <a href="#" class="text-blue-400 font-medium hover:underline">Забыли пароль?</a>
                            </div>
                        </div>
                        <div class="mt-2">
                            <input
                                id="password"
                                name="password"
                                @change="validate"
                                type="password"
                                :class="`input-base ${ (validateState.password.error) ? '--invalid' : (validateState.password.value.length ? '--valid' : '') }`">

                            <span v-if="validateState.password.error" class="text-sm block mt-2 font-medium text-red-500">{{ validateState.password.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <button @click.prevent="login" type="submit" class="btn-blue w-full">Продолжить</button>
                    </div>
                </form>

                <p class="mt-6 flex justify-between text-center font-medium text-sm text-gray-500">
                    <Link href="/" class="text-blue-400 font-medium text-sm hover:underline ms-1">На главную</Link>
                    <Link href="/signup" class="text-blue-400 hover:underline ms-1">Регистрация</Link>
                </p>

                <Logo class="mx-auto mt-10"></Logo>
            </div>
        </div>
    </div>
</template>
