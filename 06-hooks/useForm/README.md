# useForm Hook

Ejemplo de uso:
```
const initialForm = {
    name: '',
    age: 0,
    email: ''
};

const [formsValues, handleInputChange, reset] = useForm(initialForm);
```