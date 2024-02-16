import { useState } from "react";
import CryptoJS from "crypto-js";
export default function Home() {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleEncrypt = () => {
    if (text.length > 0) {
      try {
        const encrypted = CryptoJS.AES.encrypt(text, 'yourSecretKey').toString();
        setEncryptedText(encrypted);
      } catch (e) {
        console.error('Encryption error:', e);
      }
    }
  };

  const handleDecrypt = () => {
    if (encryptedText.length > 0) {
      try {
        const decrypted = CryptoJS.AES.decrypt(encryptedText, 'yourSecretKey').toString(CryptoJS.enc.Utf8);
        setDecryptedText(decrypted);
      } catch (e) {
        console.error('Decryption error:', e);
        setDecryptedText('Decryption failed');
      }
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <>
      <h1>Put Your Text for analysis</h1>
      <div className="container mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="10">
        </textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleEncrypt}>Encrypt Your Message</button>
        <button className="btn btn-primary mx-1 " onClick={handleDecrypt}>Decrypt Your Message</button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words & {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Taken</p>
        <h3>Preview</h3>
        <p>{text}</p>
        {encryptedText && <p>Encrypted Text: {encryptedText}</p>}
        {decryptedText && <p>Decrypted Text: {decryptedText}</p>}
      </div>
    </>
  );
}
