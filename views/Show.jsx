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
      <DefaultLayout title={"Edit Page"}>
        <div align="center">
          <h1>Pokemon show page</h1>
          <h3>This is {this.props.pokemon.name}</h3>
          <nav>
            <img style={imageSize} src={pokemon.image}></img>
            <br></br>
            <h3>
              <a href="/pokemon/">Return to index</a>
            </h3>
          </nav>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
