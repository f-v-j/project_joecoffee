import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
    value: 0,
};

const slice_1 = createSlice({
    name: 'slice_1',
    initialState,
    // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // пример с данными
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, incrementByAmount } = slice_1.actions;

// По умолчанию экспортируется редьюсер сгенерированный слайсом
export default slice_1.reducer;