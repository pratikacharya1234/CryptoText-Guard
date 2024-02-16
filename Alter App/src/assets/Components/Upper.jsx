import { useState } from "react";
export default function Upper() {
    const [text, setText] = useState('');

  return (
    <>  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
    <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert To Uppercase</button>

    </>
    )
}
