import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";
import FormikControl from "./FormikControl";

function DriveTrainForm() {
  const phoneSchema = Yup.string().phone("IN").required();
  const initialValues = {
    name: "",
    mobile: "",
    email: "",
  };

  const validationSchema = Yup.object({
    mobile: Yup.string().matches(phoneSchema, "Phone number is not valid"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="container ">
      <div className="row text-start justify-content-center ">
        <h3 className="mt-5" style={{ fontWeight: "600" }}>
          Drive Train Service{" "}
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="my-5">
                <div>
                  <div class="row my-3">
                    <div class="col-sm py-2">
                      <div className="row ">
                        <label
                          for="colFormLabelSm"
                          class="col-4 col-form-label col-form-label-sm text-start"
                        >
                          <span className="customLabel">NAME</span>
                        </label>
                        <div
                          class="col-md-6 col-8"
                          style={{
                            paddingLeft: 0,
                          }}
                        >
                          <FormikControl
                            control="input"
                            type="text"
                            name="name"
                            class="form-control form-control-sm"
                            id="colFormLabelSm"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm py-2">
                      <div className="row align-items-start ">
                        <label
                          for="colFormLabelSm"
                          class="col-4 col-form-label col-form-label-sm text-start"
                        >
                          <span className="customLabel ">MOBILE NUMBER</span>
                        </label>
                        <div
                          class="col-md-6 col-8 "
                          style={{
                            paddingLeft: 0,
                          }}
                        >
                          <FormikControl
                            control="input"
                            type="text"
                            name="mobile"
                            class="form-control form-control-sm"
                            id="colFormLabelSm"
                            placeholder="Phone (Please add +91 before phone number followed by a space)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row my-3">
                    <div class="col-sm py-2">
                      <div className="row ">
                        <label
                          for="colFormLabelSm"
                          class="col-4 col-form-label col-form-label-sm text-start"
                        >
                          <span className="customLabel">EMAIL</span>
                        </label>
                        <div
                          class="col-md-6 col-8"
                          style={{
                            paddingLeft: 0,
                          }}
                        >
                          <FormikControl
                            control="input"
                            type="email"
                            name="email"
                            class="form-control form-control-sm"
                            id="colFormLabelSm"
                            placeholder="Email: xyz@gmail.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="col-sm py-2"></div>
                  </div>

                  <h6 className="my-5 " style={{ fontStyle: "italic" }}>
                    On submitting the form, our executive will call you to
                    discuss further details.
                  </h6>

                  <button
                    className="btn btn-dark  me-5 px-5"
                    type="submit"
                    disabled={!formik.isValid}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default DriveTrainForm;
