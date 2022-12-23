import { Formik, Field, Form, FormikHelpers } from "formik";
import { Grid } from "@mantine/core";
import { string } from "yup";

type Props = {
  email: string;
};

const sendEmail = async (data: any) => {
  try {
    await fetch("/api/email-list", {
      method: "PUT",
      body: JSON.stringify(data),
    });
    console.log("success");
    //if sucess do whatever you like, i.e toast notification
  } catch (error) {
    console.log(error);

    // toast error message. whatever you wish
  }
};

const MailForm: React.FC = () => {
  return (
    <Grid>
      <Grid.Col>
        <Formik
          initialValues={{
            email: "",
          }}
          onSubmit={async (
            values: Props,
            { setSubmitting }: FormikHelpers<Props>
          ) => {
            setSubmitting(true);
            await sendEmail(values);
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="grateul@dead.net"
              type="email"
            />

            <button type="submit">Subscribe</button>
          </Form>
        </Formik>
      </Grid.Col>
    </Grid>
  );
};

export default MailForm;
