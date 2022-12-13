const React = require("react");
// As you can see we are using the app layout
const DefaultLayout = require("./Default.jsx");

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Edit Page">
        {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
        {/* form is not complete we will do that below*/}
        <form>
          Name:{" "}
          <input
            type="text"
            name="name"
            defaultValue={this.props.pokemon.name}
          />
          <br />
          Image:{" "}
          <input
            type="text"
            name="color"
            defaultValue={this.props.fruit.color}
          />
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
