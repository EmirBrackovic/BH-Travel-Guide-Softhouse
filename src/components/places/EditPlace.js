import React from "react";

class EditPlace extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, description } = props.location.state.place;
    this.state = {
      id,
      name,
      description,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.description === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updatePlaceHandler(this.state);
    this.setState({ name: "", description: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Place</h2>
        <form className="ui form" onSubmit={this.update}>
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
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditPlace;
