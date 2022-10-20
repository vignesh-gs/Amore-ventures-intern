import React from 'react'
 
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
 
    fetch('http://localhost:3000/vendor_details', {
        method: 'POST',
        // converting the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          id:
          <input type="text" value={this.state.value} name="id" onChange={this.handleChange} />
        </label>
        <label>
         name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <label>
          email:
          <input type="text" value={this.state.value} name="email" onChange={this.handleChange} />
        </label>
        <label>
          company_name:
          <input type="text" value={this.state.value} name="company_name" onChange={this.handleChange} />
        </label>
        <label>
          gstin:
          <input type="text" value={this.state.value} name="gstin" onChange={this.handleChange} />
        </label>
        <label>
          pan:
          <input type="text" value={this.state.value} name="pan" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default MyForm;