import { useState } from "react";
import Details from "./details";
import axios from "axios";

const InputForm = () => {
  const initialFormData = {
    fName: "",
    lName: "",
    email: "",
  }

  const [formData, setFormData] = useState(initialFormData);


  const { fName, lName, email } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [submitted, setSubmitted] = useState()

  // const [items, setItems] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const info = { fName, lName, email };
    // setItems([...items, info]);

    const response = await axios.post(
      "/api/subscribe",
      // "https://cors-anywhere.herokuapp.com/https://us5.api.mailchimp.com/3.0/lists/00e11d7af1",
      {
        members: [
          {
            email_address: email,
            status: "subscribed",
            merge_fields: {
              FNAME: fName,
              LNAME: lName,
            },
          },
        ],
        update_existing: false,
      },
    
    );
    if (response.status === 200){
      setSubmitted("You have signed up successfully!")
      
      setFormData(initialFormData)
    } else {
      setSubmitted("There is an error, please try again!")
      


    }
    // console.log(response);
  };

  return (
    <div>
      <form
        className="flex flex-col my-10 w-1/2 mx-auto sm:w-full"
        onSubmit={handleSubmit}
      >
        <input
          name="fName"
          placeholder="First Name"
          className="border rounded-tl-md rounded-tr-md h-14 text-lg px-5"
          value={fName}
          onChange={handleChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          className="border h-14 text-lg px-5"
          value={lName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email address"
          className="border rounded-bl-md rounded-br-md h-14 text-lg px-5"
          value={email}
          onChange={handleChange}
        />
        <button
          className="bg-yellow-400 text-yellow-900 font-bold p-4 my-6 text-lg rounded-lg hover:bg-yellow-600 hover:text-yellow-50"
          type="submit"
        >
          Sign up!
        </button>
       <h4 className="text-2xl font-bold text-yellow-600"> {submitted}</h4>
    
      </form>
      {/* <div className="grid grid-cols-3 gap-4">
        {items.map((info, index) => (
          <Details key={index} info={info} />
        ))}
      </div> */}
    </div>
  );
};

export default InputForm;


