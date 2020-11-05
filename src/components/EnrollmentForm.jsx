import * as React from 'react';
import * as Yup from "yup";
import {Formik, Form} from "formik";
import {FormikControl} from "./FormikControl";


export const EnrollmentForm = (props) => {

    const selectOptions = [
        {key: 'Select your course', value: ''},
        {key: 'React', value: 'react'},
        {key: 'Angular', value: 'angular'},
        {key: 'Vue', value: 'vue'},
    ];

    const checkboxOptions = [
        {key: 'HTML', value: 'HTML'},
        {key: 'CSS', value: 'css'},
        {key: 'Javascript', value: 'javascript'},
    ];

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('This field is required'),
        bio: Yup.string().required('This field is required'),
        course: Yup.string().required('Required'),
        courseDate: Yup.date().required('Required').nullable()
    });

    const onSubmit = values => {
        console.log('Enrollment Form data', values)
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
                        <FormikControl control="textarea"
                                       label="Bio"
                                       name="bio"/>
                        <FormikControl control="select"
                                       label="Course"
                                       name="course"
                                       options={selectOptions}/>
                        <FormikControl control="checkbox"
                                       label="Your skillset"
                                       name="skills"
                                       options={checkboxOptions}/>
                        <FormikControl control="date"
                                       label="Course Date"
                                       name="courseDate"
                        />
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    );
};
