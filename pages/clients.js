import React, { useState } from "react";
import ContentClientsPage from "@/components/Clients/ContentClientsPage";

const Clients = () => {
  return (
    <>
      <h1 className="client-title">Clients</h1>
      <ContentClientsPage />
    </>
  );
};

export default Clients;
