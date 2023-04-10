import MainLayout from "@/layout/MainLayout";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { faSpinner, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

const UserSetting = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, error, userInfo, status } = useSelector(
    (state) => state.user
  );

  return (
    <article>
      <section className="w-full px-4 py-8">
        <Tab.Group>
          <Tab.List className="flex">
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-sky-600 to-sky-400">
              Profile
            </Tab>
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-sky-600 to-sky-400">
              Berlangganan
            </Tab>
            <Tab className="px-5 py-2 rounded-xl outline-none text-slate-600 ui-selected:text-white ui-selected:bg-gradient-to-t from-sky-600 to-sky-400">
              Akun
            </Tab>
          </Tab.List>
          <Tab.Panels className="py-4 md:p-4">
            <Tab.Panel className="grid md:grid-cols-2 gap-4">
              <section className="grid m-4 border-b-2 border-b-slate-300">
                <h4>Profile Saya</h4>
                <div className="min-w-[350px] md:w-96 max-w-lg p-4 rounded-2xl grid gap-4">
                  <Formik
                    initialValues={{
                      name: "",
                    }}
                    onSubmit={async (values) => {
                      dispatch(register(values));
                    }}
                  >
                    {({ isSubmitting }) => (
                      <Form className="grid grid-cols-1 gap-4 w-full">
                        <div className="grid gap-4">
                          <div className="name w-full relative grid gap-2">
                            <label htmlFor="name">Nama</label>
                            <Field
                              type="text"
                              name="name"
                              className="focus:text-sky-600 focus:outline-2 text-slate-700 focus:outline-sky-600 w-full py-3 px-6 rounded-lg bg-slate-300"
                            />
                          </div>
                        </div>
                        <Button
                          type="submit"
                          variant="secondary"
                          disabled={isSubmitting}
                          isClicked={() => "clicked"}
                          className="w-fit"
                        >
                          {isLoading ? (
                            <p className="flex items-center gap-2">
                              <span>
                                <FontAwesomeIcon
                                  icon={faSpinner}
                                  height={16}
                                  className=" animate-spin"
                                />
                              </span>
                              <span>Tunggu sebentar</span>
                            </p>
                          ) : (
                            <p className="flex items-center gap-2">
                              <span>
                                <FontAwesomeIcon
                                  icon={faFloppyDisk}
                                  height={16}
                                  className=""
                                />
                              </span>
                              <span>Simpan</span>
                            </p>
                          )}
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </div>
              </section>
            </Tab.Panel>
            <Tab.Panel>statistik</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </section>
    </article>
  );
};

UserSetting.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default UserSetting;
