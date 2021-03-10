import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "yup-phone";
import FormikControl from "./FormikControl";

function CustomFormDoorStep() {
  const [next, setNext] = useState(false);
  const dropdownOptions = [
    { key: "KIDS BIKE", value: "kids bike" },
    { key: "ROADIE", value: "react" },
    { key: "MTB", value: "angular" },
    { key: "HYBRID", value: "hybrid" },
    { key: "NOT SURE", value: "not sure" },
  ];

  const dropdownOptions1 = [
    { key: "YES", value: "yes" },
    { key: "NO", value: "no" },
  ];

  const checkboxOptions = [
    { key: "BRAKE CABLE SET : Rs. 250", value: "brake cable set" },
    { key: "GEAR CABLE SET : Rs. 250", value: "gear cable set" },
    { key: "PUNCHER : Rs. 55", value: "puncher" },
    { key: "OTHER", value: "other" },
  ];
  const phoneSchema = Yup.string().phone("IN").required();
  const pincodeValidator = "^[1-9][0-9]{5}$";
  const initialValues = {
    brand: "",
    extra: "",
    bikeType: "",
    model: "",
    gear: "",
    addOn: [],
    name: "",
    mobile1: "",
    mobile2: "",
    email: "",
    address: "",
    pincode: "",
  };

  const validationSchema = Yup.object({
    bikeType: Yup.string().required("Required"),
    gear: Yup.string().required("Required"),
    mobile1: Yup.string().matches(phoneSchema, "Phone number is not valid"),
    mobile2: Yup.string().matches(phoneSchema, "Phone number is not valid"),
    pincode: Yup.string().matches(pincodeValidator, "Pincode is not valid"),
    scheduleDate: Yup.date().required("Required").nullable(),
    returnDate: Yup.date().required("Required").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <div className="container ">
      <div className="row text-start justify-content-center ">
        <h3 className="mt-5" style={{ fontWeight: "600" }}>
          DOOR STEP SERVICE{" "}
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form className="my-3">
                {next === false ? (
                  <div>
                    <h6
                      className="my-3 "
                      style={{
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "1.25rem",
                      }}
                    >
                      Let's talk about your bike....
                    </h6>
                    <div class="row">
                      <div class="col-sm py-2">
                        <div className="row ">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel ">BIKE TYPE</span>
                          </label>
                          <div
                            class="col-md-6 col-8"
                            style={{
                              paddingLeft: 0,
                            }}
                          >
                            <FormikControl
                              control="select"
                              name="bikeType"
                              options={dropdownOptions}
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel mx-3">BRAND</span>
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
                              name="brand"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel mx-3">MODEL</span>
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
                              name="model"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-8 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel mx-3">
                              GEAR OR NON-GEAR
                            </span>
                          </label>
                          <div
                            class="col-md-4 col-8"
                            style={{
                              paddingLeft: 0,
                            }}
                          >
                            <FormikControl
                              control="select2"
                              name="gear"
                              options={dropdownOptions1}
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <h6 className="mt-5" style={{ fontWeight: "600" }}>
                      ADD ON'&
                    </h6>
                    <FormikControl
                      control="checkbox"
                      label="Your skillset"
                      name="addOn"
                      options={checkboxOptions}
                    />

                    <h6 className="mt-5 " style={{ fontStyle: "italic" }}>
                      Any additional information that we should be aware of your
                      bike :
                    </h6>
                    <FormikControl control="textarea" name="extra" />
                    <h6
                      className="my-2 "
                      style={{
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontWeight: "0.5rem",
                      }}
                    >
                      Any spares will cost you extra
                    </h6>

                    <button
                      className="btn btn-dark my-3  me-5 px-5"
                      type="submit"
                      onClick={() => setNext(!next)}
                    >
                      Next
                    </button>
                  </div>
                ) : (
                  <div>
                    <h6
                      className="my-3 "
                      style={{
                        fontStyle: "italic",
                        fontWeight: "400",
                        fontSize: "1.25rem",
                      }}
                    >
                      Let's talk about you....
                    </h6>
                    <div class="row my-3">
                      <div class="col-sm py-2">
                        <div className="row ">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
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
                              placeholder="Name"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2 ps-4">
                        <div className="row align-items-start ">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
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
                              name="mobile1"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="+91 8073734256"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2 ps-4">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel">
                              ALTERNATE MOBILE NO.
                            </span>
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
                              name="mobile2"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="+91 8073734256"
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
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
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

                      <div class="col-sm py-2 ps-4">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel">ADDRESS</span>
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
                              name="address"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2 ps-4">
                        <div className="row align-items-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel">PINCODE</span>
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
                              name="pincode"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                              placeholder="ex:560033"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row my-3">
                      <div class="col-sm py-2">
                        <div className="row vertical-align-start">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel">SCHEDULE DATE</span>
                          </label>
                          <div
                            class="col-md-6 col-8"
                            style={{
                              paddingLeft: 0,
                            }}
                          >
                            <FormikControl
                              control="date"
                              name="scheduleDate"
                              class="form-control form-control-sm"
                              id="colFormLabelSm"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="col-sm py-2 ps-4">
                        <div className="row ">
                          <label
                            for="colFormLabelSm"
                            class="col-md-6 col-4 col-form-label col-form-label-sm text-start"
                          >
                            <span className="customLabel">RETURN DATE</span>
                          </label>
                          <div
                            class="col-md-6 col-8"
                            style={{
                              paddingLeft: 0,
                            }}
                          >
                            <FormikControl
                              control="date"
                              name="returnDate"
                              class="form-control"
                              id="colFormLabelSm"
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
                      onClick={() => setNext(!next)}
                    >
                      Back
                    </button>

                    <button
                      className="btn btn-dark  me-5 px-5"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Submit Enquiry
                    </button>
                    <button
                      className="btn btn-dark  me-5 px-5"
                      type="submit"
                      disabled={!formik.isValid}
                    >
                      Make Payment
                    </button>
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default CustomFormDoorStep;
