import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";

import "./App.css";

import  ContactForm  from "./components/ContactForm";
import { Provider } from "react-redux";
import storeData from "./utilities/storeData";
import { useMemo } from "react";

function App() {
  //subscribing to the store using a selector

  return (
    <>
    <Provider store={storeData}>
    <ContactForm />
    </Provider>
    </>
   
  );
}

export default App;
