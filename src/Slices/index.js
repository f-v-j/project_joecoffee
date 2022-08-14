import { configureStore } from '@reduxjs/toolkit';
import reducer_from_slice_1 from './Slice_1';

// configureStore вертає store

const store = configureStore({
    reducer: {

        name1: reducer_from_slice_1,
        //name2: reducer_from_slice_2,
        //name3: reducer_from_slice_3,
        //name4: reducer_from_slice_4,


    },
});

export default store;