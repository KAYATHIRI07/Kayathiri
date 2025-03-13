import { useState } from "react";

const Usestate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Usestate</h1>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/><br></br>
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange}/><br></br>
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange}/><br></br><br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}; 
export default Usestate;