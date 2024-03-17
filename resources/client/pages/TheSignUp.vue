<script setup>
import Logo from '@/assets/icons/logo_dark.svg?component'

import { reactive } from "vue";
import { Link } from '@inertiajs/vue3';
import validation from '@/assets/js/validation';

import langRu from '@/lang/ru/client.json';

// Поля для валидации [id => minLength]
const fields = {
    email: undefined,
    login: 4,
    password: 8,
}

const validate = (e) => {

    // Устанавливаем значение
    validateState[e.target.id].value = e.target.value;

    // Проверка на обязательное заполнение
    if (!validateState[e.target.id].value.length)
        setFieldIsInvalid(e.target.id, 'required');
    else
        setFieldIsValid(e.target.id);

    // Проверка полей
    for (let field in fields) {
        if (typeof fields[field] !== 'undefined') {
            if (validateState[field].value.length < fields[field])
                setFieldIsInvalid(field, field + '_min');
        } else {
            if (!validation.email(validateState[field].value))
                setFieldIsInvalid(field, 'email_invalid');
            else
                setFieldIsValid(field);
        }
    }

}

const setFieldIsValid = (name) => {
    validateState[name].error = false;
    validateState[name].errorMessage = '';
}

const setFieldIsInvalid = (name, errorName) => {
    validateState[name].error = true;
    validateState[name].errorMessage = langRu.errors[errorName];
}

const validateState = reactive({
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

    for (let key in validateState) {
        if (validateState[key].error) continue;

        if (!validateState[key].value.length)
            setFieldIsInvalid(key, 'required');
        else
            setFieldIsValid(key);
    }

    if (validateState.login.error || validateState.email.error || validateState.password.error) return;

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
                            <input
                                id="login"
                                @change="validate"
                                name="login"
                                type="text"
                                :class="`input-base ${ (validateState.login.error) ? '--invalid' : (validateState.login.value.length ? '--valid' : '') }`">

                            <span v-if="validateState.login.error" class="text-sm block mt-2 font-medium text-red-500">{{ validateState.login.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
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
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
                        </div>
                        <div class="mt-2">
                            <input
                                id="password"
                                @change="validate"
                                name="password"
                                type="password"
                                :class="`input-base ${ (validateState.password.error) ? '--invalid' : (validateState.password.value.length ? '--valid' : '') }`">
                            <span v-if="validateState.password.error" class="text-sm block mt-2 font-medium text-red-500">{{ validateState.password.errorMessage }}</span>
                        </div>
                    </div>

                    <div>
                        <button @click.prevent="signUp" type="submit" class="btn-blue w-full">Продолжить</button>
                    </div>

                </form>

                <div class="mt-6 flex justify-between text-center font-medium text-sm text-gray-500">
                    <Link href="/" class="text-blue-400 font-medium text-sm hover:underline ms-1">На главную</Link>
                    <Link href="/login" class="text-blue-400 hover:underline ms-1">Авторизация</Link>
                </div>

                <Logo class="mx-auto mt-8"></Logo>
            </div>
        </div>
    </div>
</template>
