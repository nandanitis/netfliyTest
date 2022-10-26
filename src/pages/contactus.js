import React from "react";
import "./contactus.css";
import { useState } from "react";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const contact = { name, email, phone, message };

    const response = await fetch(`/contactus`, {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      console.log("new Contact added:", json);
    }
  };

  return (
    <div>
      {" "}
      <div className="container">
      <div className="margin-Top">
        <div className="screen">
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO : +91 9449573121</div>
            </div>
            <form>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="NAME"
                      defaultValue="Nandan "
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="email"
                      className="app-form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      className="app-form-control"
                      placeholder="CONTACT NO"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="MESSAGE"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                    />
                  </div>
                  <div className="app-form-group buttons">
                    <button className="app-form-button">CANCEL</button>
                    <button className="app-form-button" onClick={handleSubmit}>
                      SEND
                    </button>
                  </div>
                  {error && <div className="error">{error}</div>}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contactus;
