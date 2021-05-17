import React from "react";

class AddPlace extends React.Component {
  state = {
    name: "",
    description: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.description === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addPlaceHandler(this.state);
    this.setState({ name: "", description: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Place</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.Description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </div>
          <button >Add</button>
        </form>
      </div>
    );
  }
}

export default AddPlace;
