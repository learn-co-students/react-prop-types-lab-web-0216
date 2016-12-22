const React = require('react');


class Product extends React.Component {
  render() {
    return (
      <div className="Product">
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>       
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
};


Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: React.PropTypes.oneOf([...Array(301).keys()].slice(79, -1)).isRequired
};


require('../test/index-test.js'); // Leave this in!

module.exports = Product;
