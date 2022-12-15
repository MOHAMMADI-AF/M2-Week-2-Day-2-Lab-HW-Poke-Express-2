const React = require("react");
const DefaultLayout = require("./Default.jsx");
const myStyle = {
  color: "#154360",
  backgroundColor: "#ffffff",
};
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"Edit Page"}>
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
      </DefaultLayout>
    );
  }
}

module.exports = New;
