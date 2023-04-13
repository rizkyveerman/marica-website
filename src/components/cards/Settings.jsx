import React from "react";
import Button from "../buttons/Button";
import { Tab } from "@headlessui/react";
import { Formik, Form, Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  return (
    <div className="rounded-3xl max-w-md grid p-4 gap-6 border-2 border-blue-500 bg-white">
      <Tab.Group>
        <div className="flex justify-between items-center bg-slate-200 rounded-lg p-2">
          <Tab.List className="flex">
            <Tab>
              <Button
                variant="primary"
                type="button"
                isClicked={() => "profile settings"}
              >
                Profile
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="primary"
                type="button"
                isClicked={() => "profile settings"}
              >
                Tagihan
              </Button>
            </Tab>
            <Tab>
              <Button
                variant="primary"
                type="button"
                isClicked={() => "profile settings"}
              >
                Akun
              </Button>
            </Tab>
          </Tab.List>
          <div className="close-settings w-10 h-10 rounded-lg bg-white text-slate-400 grid place-content-center">
            <FontAwesomeIcon icon={faClose} height={16} />
          </div>
        </div>
        <Tab.Panels>
          <Tab.Panel>
            <Formik>
              <Form>
                <Field />
              </Form>
            </Formik>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Settings;
