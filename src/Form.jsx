import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        
        // currentName = this.updateName(this.state.name)
    }

    updateName(newName) {
        this.currentName = newName;
    }

    handleChange(event) {
        console.log("handleChange: ", event.target.value )
        this.setState({
            name: event.target.value
            // uname : e.target.elements.uname.value,

        });
        this.updateName(this.state.name);
        console.log("STATE", this.state.name, this.currentName)
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit: ", event.target.value )

        console.log("A name is submited", this.state.name, this.currentName)
        this.setState({
            name: event.target.value
        })
        // document.getElementsByClassName("App-logo").style.height = "10px";
        console.log("STATE", this.state.name, this.currentName)

        document.getElementById("spotter").style.backgroundColor =  this.state.name === "Mitjo" ? "blue" : "green";
        // this.setState({name: event.target.value});


    }

    render() {
        return (
            <dir>
                <h2>Username: {this.state.name}</h2>
                

                <form onSubmit={this.handleSubmit}>
                    <label>Name: </label>

                    {/* <input type="text" value={this.state.name} onChange={this.handleChange} /> */}

                    <input type="text" onChange={this.handleChange} />



                    <input type="submit"/>
                </form>

                <dir id="spotter">Nai-golemia spotter {this.state.name}</dir>
                <dir id="spotter_">Nai-golemia spotter {this.currentName}</dir>
                <img id="leopard" src="https://drive.google.com/uc?export=view&id=131bxOiJBBxKW6RxzJXnkdNrRbY96Ldvb" alt="Leopard" />
            </dir>
        );
    }
}

export default Form