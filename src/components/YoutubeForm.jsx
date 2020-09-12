import * as React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import TextError from "./TextError";

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook:'',
        twitter: ''
    },
    phoneNumbers: ['','']
}

const onSubmit = values => {
    console.log('Form data: ', values)
}



const validationSchema = Yup.object({
    name: Yup.string().required('This field is required'),
    email: Yup.string().email('Invalid email address').required('This field is required'),
    channel: Yup.string().required('This field is required'),
})


export const YoutubeForm = (props) => {

    // console.log('Formik values: ', formik.values)
    // console.log('Formik errors: ', formik.errors)
    // console.log('Visited Fields: ', formik.touched)

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
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
                    <ErrorMessage name="email"/>
                </div>
                <div className="form-control">
                    <label htmlFor="name">Channel</label>
                    <Field type="text"
                           id="channel"
                           name="channel"
                           placeholder="Your channel"
                    />
                    <ErrorMessage name="channel"/>
                </div>
                <div className="form-control">
                    <label htmlFor="comments">Comments</label>
                    <Field component="textarea"
                           id="comments"
                           name="comments"/>
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <Field name="address">
                        {/*{*/}
                        {/*    (props) => {*/}
                        {/*        const {field,form,meta} = props*/}
                        {/*        return <div>*/}
                        {/*            <input type="text" id="address" {...field}/>*/}
                        {/*            {meta.touched && meta.error ? <div>{meta.error}</div> : null}*/}
                        {/*        </div>*/}
                        {/*    }*/}
                        {/*}*/}
                    </Field>
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
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};
