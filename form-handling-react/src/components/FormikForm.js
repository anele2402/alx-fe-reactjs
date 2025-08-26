import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const FormikForm = () => (
  <Formik
    initialValues={{ name: '', email: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}

  >
    {() => (
      <Form style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', gap: '10px' }}>
        <label>Name:</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

        <label>Email:</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <label>Password:</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
