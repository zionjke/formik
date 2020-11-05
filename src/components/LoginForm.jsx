import * as React from 'react';
import * as Yup from "yup";
import {Form, Formik} from "formik";
import TextError from "./TextError";
import {FormikControl} from "./FormikControl";


export const LoginForm = (props) => {

    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('This field is required'),
        password: Yup.string().required('This field is required')
    });

    const onSubmit = value => {
        console.log('Login Form Data', value)
    };

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control="input"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }}
        </Formik>
    );
};
