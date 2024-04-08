import React from "react";
interface EmailTemplateMyPortalProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplateMyPortal = ({
  name,
  email,
  phone,
  message,
}: EmailTemplateMyPortalProps) => {
  return (
    <>
      <h1 className="text-4xl">Te busca, {name}!</h1>
      <p>Sus contactos son los siguientes:</p>
      <ul>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <p>En el cual tiene el siguiente mensaje </p>
      <p className="text-justify text-base">{message}</p>
      <h1 className="text-xl text-red-500 text-center">
        Recuerda contestar rapido son para las cheves ese dinero
      </h1>
    </>
  );
};
