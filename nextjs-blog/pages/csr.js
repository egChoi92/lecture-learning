import Head from "next/head";
import { useEffect, useState } from "react";
import SubLayout from "../components/SubLayout";

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("client");
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}

CSR.layout = function getLayout(page) {
  return (
      <SubLayout>
        {page}
      </SubLayout>
  )
};