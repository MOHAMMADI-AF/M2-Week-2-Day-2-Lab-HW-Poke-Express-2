const React = require("react");
const myStyle = {
  color: "#154360",
  backgroundColor: "#ffffff",
};
const imageSize = {
  height: 40,
  width: 40,
};

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={myStyle}>
        <hr></hr>
        <h1 align="center">Pokemon index page</h1>
        <hr></hr>
        <ul>
          {this.props.pokes.map((pokemon, i) => {
            return (
              <h2>
                <img style={imageSize} src={pokemon.image}></img> Click the link
                to see full image
                <a href={`/pokemon/${pokemon.id}`}> {pokemon.name} </a>
              </h2>
            );
          })}
        </ul>
        <hr></hr>
        <nav>
          <h3 align="center">
            <a href="/pokemon/new">Create a New Pokemon</a>
          </h3>
        </nav>
        <hr></hr>
      </div>
    );
  }
}

module.exports = Index;
