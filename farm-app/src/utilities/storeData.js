import {configureStore} from '@reduxjs/toolkit';
import sliceFormData from './sliceFormData';

const storeData = configureStore({
    reducer:{
        data: sliceFormData,
    }

});

export default storeData;