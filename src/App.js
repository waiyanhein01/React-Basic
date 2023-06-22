import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import "./cus/css/cus.css"
// 3. Using Componet
class City extends React.Component {
  render() {
    return (
      // 4. Props
      <li>
        {this.props.name}, {this.props.region}, {this.props.area}
      </li>
    )
  }
}

//1. Create component
class App extends React.Component {

  // 5. State
  state = {
    cities: [
      {id: 1, name: "Yangon", region: "Myanmar", area: 1035},
      {id: 2, name: "Mandalay", region: "Myanmar", area: 1058},
    ]
  }

  // 8. If u want create input element,you will Ref from React
  nameRef = React.createRef();
  regionRef = React.createRef();
  areaRef = React.createRef();

  add = () => {
    let id = this.state.cities.length + 1;
    let name = this.nameRef.current.value;
    let region = this.regionRef.current.value;
    let area = this.areaRef.current.value;

    //6. Change State
    this.setState({
      cities: [
        ...this.state.cities,
        {id, name, region, area}
      ]
    })
  }

  render() {

    // 12.Css in Js
    const styles = {
      bb: {
        textAlign: "center",
        fontSize: 30,
      }
    }

    return (
      // 2. jsx
      <div>
      
      <Navbar>
        {/* 11.Modules Css */}
        <h3>Nav bar</h3>
      </Navbar>

      <Head>
        {/* 11.Modules Css */}
        <h1>Hello React</h1>
        <p>This is my new course Compent Compositon</p>
        <h4>20.6.2023</h4>
      </Head>

      
      <div style={styles.bb}>
      <input type="text" ref={this.nameRef} placeholder="Enter city name..."/>
      <input type="text" ref={this.regionRef} placeholder="Enter region..."/>
      <input type="text" ref={this.areaRef} placeholder="Enter area..."/>

      <button className="Background" onClick={this.add}>Add New City</button>
      <h1 className="Text">Add your favourite city!</h1>
        <ol>
          {this.state.cities.map( c => {
            // 7. Using key does not cause errors 
            return <City key={c.id} name={c.name} region={c.region} area={c.area}/>
          })}
        </ol>
      </div>
      </div>
    )
  }
}

export default App;