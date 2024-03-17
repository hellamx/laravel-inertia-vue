import langRu from "@/lang/ru/client.json";

export default {
    email(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    validate(e, validateState) {
        // Получаем id поля и устанавливаем значение
        let id = e.target.id;
        validateState[id].value = e.target.value;

        // Проверка на обязательное заполнение
        if (!validateState[id].value.length)
            this.setFieldIsInvalid(id, 'required', validateState);
        else
            this.setFieldIsValid(id, validateState);

        // Проверка полей
        if (typeof validateState[id].minLength !== 'undefined') {
            if (validateState[id].value.length < validateState[id].minLength)
                this.setFieldIsInvalid(id, id + '_min', validateState);
            else
                this.setFieldIsValid(id, validateState);
        } else {
            if (!this.email(validateState[id].value))
                this.setFieldIsInvalid(id, 'email_invalid', validateState);
            else
                this.setFieldIsValid(id, validateState);
        }
    },
    setFieldIsInvalid (name, errorName, validateState) {
        validateState[name].error = true;
        validateState[name].errorMessage = langRu.errors[errorName];
    },
    setFieldIsValid (name, validateState) {
        validateState[name].error = false;
        validateState[name].errorMessage = '';
    }
}
