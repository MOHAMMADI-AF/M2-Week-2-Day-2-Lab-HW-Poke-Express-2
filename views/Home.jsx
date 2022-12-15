const React = require("react");
const DefaultLayout = require("./Default.jsx");
const imageSize = {
  height: 300,
  width: 300,
};

class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <DefaultLayout title={""}>
        <div align="center">
          <br></br>
          <h1>Welcome to Pokemon Page</h1>
          <h3>
            <br></br>
            <a href="/pokemon/">Go To Index Page</a>
          </h3>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
