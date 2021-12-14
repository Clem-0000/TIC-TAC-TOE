import React from "react";


const cellStyle = {

  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer",
};

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color : "white",
    };
  }
  
  render() {
    const value = this.props.value
    const indice = this.props.indice
    const changePlayerValue = this.props.changePlayerValue
    const style={...cellStyle, backgroundColor : this.state.color}
    return (
      <div
        style={style}    
        onMouseOver={() => this.setState({color : "red"})}
        onMouseLeave={() => this.setState({color : "white"})}
        onClick={ () => {changePlayerValue(indice)}}
      >
        {value}
      </div>
    )
  };
}

export default Cell;

//case
