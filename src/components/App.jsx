import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createContact(contactf) {
  return (
    <Card
      id={contactf.id}
      name={contactf.name}
      img={contactf.imgURL}
      tel={contactf.phone}
      email={contactf.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createContact)}
    </div>
  );
}

export default App;
