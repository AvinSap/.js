import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id} //might be string or a number
      name={contact.name}
      img={contact.img}
      phone={contact.phone}
      email={contact.email}
      born={contact.born}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/v2/D5603AQG5TgrehGJLAg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716168057137?e=2147483647&v=beta&t=ZuU35chhDa7JVIZuE1oeS0lTgJ0prB9VGrMeBV9un8w" />

      {contacts.map(createCard)}

      {/* CUSTOM COMPONENTS IN REACT */}
      {/* <Card
        name={contacts[0].name}
        img={contacts[0].img}
        phone={contacts[0].phone}
        email={contacts[0].email}
        born={contacts[0].born}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        phone={contacts[1].phone}
        email={contacts[1].email}
        born={contacts[1].born}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        phone={contacts[2].phone}
        email={contacts[2].email}
        born={contacts[2].born}
      /> */}
    </div>
  );
}

export default App;
