import * as React from 'react';
import * as Yup from "yup";
import {Formik, Form} from "formik";
import {FormikControl} from "./FormikControl";


export const RegistrationForm = () => {

    const options = [
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', value: 'telephonemoc'}
    ];

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('This field is required'),
        password: Yup.string().required('This field is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required(),
        modeOfContact: Yup.string().required('This field is required'),
        phone: Yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: Yup.string().required('This field is required')
        })
    });

    const onSubmit = values => {
        console.log('Registration Form data', values)
    };

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            {
                formik => {
                    return <Form>
                        <FormikControl control="input"
                                       type="email"
                                       label="Email"
                                       name="email"/>
                        <FormikControl control="input"
                                       type="password"
                                       label="Password"
                                       name="password"/>
                        <FormikControl control="input"
                                       type="password"
                                       label="Confirm Password"
                                       name="confirmPassword"/>
                        <FormikControl control="radio"
                                       label="Mode of contact"
                                       name="modeOfContact"
                                       options={options}/>
                        <FormikControl control="input"
                                       type="text"
                                       label="Phone number"
                                       name="phone"
                                       options={options}/>
                        <button type="submit" disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    );
};
