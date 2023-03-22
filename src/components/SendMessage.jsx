import { useState } from "react"

const SendMessage = () => {

  const [value, setValue] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  }

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
        <form onSubmit={handleSend} className="containerWrap flex px-4">
            <input value={value} onChange={e => setValue(e.target.value)} className="input w-full focus:outline-none rounded-r-none" type="text" placeholder="Type Message Here"/>
            <button type="submit" className="w-auto bg-gray-500 text-white rounded-r-lg px-8 text-sm">Send</button>
        </form>
    </div>
  )
}

export default SendMessage