import {configureStore} from '@reduxjs/toolkit';
import { loginSlice } from '../Slice/AuthSlice';
import CrudTime from '../../Componend/CrudTime/CrudTime';


const store = configureStore({
    reducer: {
        item: loginSlice.reducer,
    }
});

export default store;