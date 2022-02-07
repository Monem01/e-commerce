import { useState } from "react";
import {db} from "../Panier/firabase";
import {collection ,addDoc} from "firebase/firestore";
export default function Contact() {
  const [message, SetMessage] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const p=collection(db,"Message");
  const handleMessage = async(message, email, event) => {
    event.preventDefault();
    const dataToSend = { email, message };
    setData(dataToSend);
    await addDoc(p,{message:message,email:email})
    SetMessage('');
    setEmail('');
  
  
  };

  return (
    <div className="container" style={{ margin: "100px" }}>
      <form onSubmit={(event) => handleMessage(message, email, event)}>
        <div className="mb-3">
          <label for="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            onChange={(event) => SetMessage(event.target.value)}
            value={message}
            className="form-control"
            id="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Envoyer
        </button>
      </form>
     
    </div>
  );
}
