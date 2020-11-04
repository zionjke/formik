import * as React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FastField} from "formik";
import * as Yup from 'yup'
import TextError from "./TextError";


const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const savedValues = {
    name: 'Artem',
    email: 'vincere802@gmail.com',
    channel: 'NA',
    comments: 'Welcome to formik',
    address: '221 Baker street',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
};

const onSubmit = (values,onSubmitProps) => {
    console.log('Form data: ', values);
    console.log('submit props', onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
};


const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email address').required('This field is required'),
    channel: Yup.string().required('This field is required'),
});

const validateComments = value => {
    let error;
    if (!value) {
        error = 'Required'
    }
    return error;
};


export const YoutubeForm = (props) => {
    const [formValues,setFormValues] = React.useState(null);
    // console.log('Formik values: ', formik.values)
    // console.log('Formik errors: ', formik.errors)
    // console.log('Visited Fields: ', formik.touched)

    {/*validateOnBlur={false}*/
    }   // Валидация всей формы при onChange или obBlue (вкл/вікл)
    {/*validateOnChange={false}*/
    }

    return (
        <Formik initialValues={formValues || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
        >
            {
                formik => {
                    console.log('Formik props', formik);
                    return (
                        <Form>
                            <div className="form-control">
                                <label htmlFor="name">Name</label>
                                <Field type="text"
                                       id="name"
                                       name="name"
                                       placeholder="Your name"
                                />
                                <ErrorMessage name="name" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="name">E-mail</label>
                                <Field type="email"
                                       id="email"
                                       name="email"
                                       placeholder="Your email"
                                />
                                <ErrorMessage name="email" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="name">Channel</label>
                                <Field type="text"
                                       id="channel"
                                       name="channel"
                                       placeholder="Your channel"
                                />
                                <ErrorMessage name="channel" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="comments">Comments</label>
                                <Field component="textarea"
                                       id="comments"
                                       name="comments"
                                       validate={validateComments}/>
                                <ErrorMessage name="comments" component={TextError}/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="address">Address</label>
                                <FastField name="address">
                                    {
                                        (props) => {
                                            const {field, form, meta} = props;
                                            return <div>
                                                <input type="text" id="address" {...field}/>
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        }
                                    }
                                </FastField>
                            </div>
                            <div className="form-control">
                                <label htmlFor="facebook">Facebook Profile</label>
                                <Field type="text" id="facebook" name="social.facebook"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="twitter">Twitter Profile</label>
                                <Field type="text" id="twitter" name="social.twitter"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="primaryPh">Primary phone number</label>
                                <Field type="text" id="primaryPh" name="phoneNumbers[0]"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="secondaryPh">Secondary phone number</label>
                                <Field type="text" id="secondaryPh" name="phoneNumbers[1]"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="">List of phone numbers</label>
                                <FieldArray name="phNumbers">
                                    {
                                        (fieldArrayProps) => {
                                            const {push, remove, form} = fieldArrayProps;
                                            const {values} = form;
                                            const {phNumbers} = values;
                                            return <div>
                                                {
                                                    phNumbers.map((n, i) => (
                                                        <div key={i}>
                                                            <Field name={`phNumbers[${i}]`}/>
                                                            {
                                                                i > 0 && (
                                                                    <button type='button'
                                                                            onClick={() => remove()}> - </button>
                                                                )
                                                            }

                                                            <button type='button' onClick={() => push()}> +</button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    }
                                </FieldArray>
                            </div>
                            {/*<button type='button' onClick={() => formik.validateField('comments')}>*/}
                            {/*    Validate comments*/}
                            {/*</button>*/}
                            {/*<button type='button' onClick={() => formik.validateForm()}>*/}
                            {/*    Validate all*/}
                            {/*</button>*/}
                            {/*<button type='button' onClick={() => formik.setFieldTouched('comments')}>*/}
                            {/*    Visit comments*/}
                            {/*</button>*/}
                            {/*<button type='button' onClick={() => formik.setTouched({*/}
                            {/*    name:true,*/}
                            {/*    email:true,*/}
                            {/*    channel:true,*/}
                            {/*    comments:true*/}
                            {/*})}>*/}
                            {/*    Visit fields*/}
                            {/*</button>*/}
                            <button type='button' onClick={() => setFormValues(savedValues)}>Load saved data</button>
                            <button type="submit" disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }

        </Formik>
    );
};
