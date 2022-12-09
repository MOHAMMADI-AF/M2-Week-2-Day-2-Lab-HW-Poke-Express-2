const React = require("react");
const myStyle = {
  color: "#154360",
  backgroundColor: "#ffffff",
};
class New extends React.Component {
  render() {
    return (
      <div style={myStyle}>
        <hr></hr>
        <h1>New Pokemon page</h1>
        <hr></hr>
        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          <br />
          Image: <input type="text" name="image" /> Add a hyperlink that is
          linked to a Pokemon image.
          <br />
          <br />
          <input type="submit" name="" value="Create Pokemon" />
        </form>
      </div>
    );
  }
}

module.exports = New;
