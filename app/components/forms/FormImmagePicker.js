import React from 'react';
import {useFormikContext} from 'formik'

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

function FormImmagePicker({name}) {
    // var imageUris=values[name];

    const handleAdd = (uri) => {
        setFieldValue(name,[...values[name],uri]);
      };
      const handleDelete = (uri) => {
        setFieldValue(name,values[name].filter((imageUri) => imageUri !== uri));
      };

    const {errors,setFieldValue,touched,values}=useFormikContext();
    return (
        <>
            <ImageInputList imageUris={values[name]} onAddImage={handleAdd} onRemoveImage={handleDelete}/>
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}


export default FormImmagePicker;