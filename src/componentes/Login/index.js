import React, { Component } from "react"
import users from "../users/users"
import "./index.css"
import { Link } from "react-router-dom"

class Login extends Component {
    constructor() {
        super()
        console.log(users)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            users: users,
            clicked: true
        }
    }
    handleLogin(e) {
        e.preventDefault()
        var existe
        var aux;
        var user = document.getElementById('user').value;
        var pass = document.getElementById('pass').value
        for (let x = 0; x < Object.keys(this.state.users).length; x++) {

            if (user === this.state.users[x].Usuario && pass === this.state.users[x].Clave) {
                existe = true;
                aux = x;
                console.log("todo bn")
                break;
            } else {
                existe = false;
            }
        }

        if (existe) {
            document.getElementById("btn").style.display = "none"
            document.getElementById("btn2").style.display = "inline"
            localStorage.setItem("userData", JSON.stringify(this.state.users[aux]))
            setTimeout(() => {
                document.getElementById('btn1').click()
            }, 2000);



        } else {
            alert("El usuario o la clave que intenta ingresar esta equivocada, por favor vuelva a intentarlo")


        }


    }
    render() {

        return (
            <div className="Login">
                <div id="row" className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 > Ingrese sus Datos</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="user">Usuario:</label>
                                        <input type="text" className="form-control" id="user" aria-describedby="emailHelp" placeholder="Usuario" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Password</label>
                                        <input type="password" className="form-control" id="pass" placeholder="Clave" required />
                                    </div>
                                    <button id="btn"type="submit" className="btn btn-primary">Submit</button>
                                </form>
                                <button id="btn11" className="btn btn-primary"><Link id="btn1" to="/Dashboard">a</Link></button>
                                <button  id="btn2"  class="btn btn-primary" type="button" disabled>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
                

            </div>

        )
    }
}
export default Login