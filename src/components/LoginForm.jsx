import * as React from 'react';
import * as Yup from "yup";
import {Form, Formik} from "formik";
import TextError from "./TextError";
import {FormikControl} from "./FormikControl";
import {Button} from "@chakra-ui/core";


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
                            control="chakrainput"
                            type="email"
                            label="Email"
                            name="email"
                        />
                        <FormikControl
                            control="chakrainput"
                            type="password"
                            label="Password"
                            name="password"
                        />
                        <Button variant='solid' type="submit" disabled={!formik.isValid}>Submit</Button>
                    </Form>
                }}
        </Formik>
    );
};
