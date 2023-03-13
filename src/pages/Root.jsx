import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from "../components/Modal";

const Root = () => {
  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  const closeHandle = () => {
    setModal(false);
  };
  return (
    <>
      <Modal
        modal={modal}
        setModsal={setModal}
        cart={cart}
        setCart={setCart}
        close={closeHandle}
      />
      <Header setModal={setModal} />
      <main className="main" onClick={() => closeHandle()}>
        <Outlet context={[cart, setCart]}></Outlet>
      </main>
      <Footer />
    </>
  );
};

export default Root;
