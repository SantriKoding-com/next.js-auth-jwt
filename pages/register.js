//layout
import Layout from "../layouts/default";

//import hook react
import { useState } from 'react';

//import Head
import Head from 'next/head';

//import router
import Router from 'next/router';

//import axios
import axios from "axios";

function Register() {
    
    //define state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);

    //function "registerHanlder"
    const registerHandler = async (e) => {
        e.preventDefault();
        
        //initialize formData
        const formData = new FormData();

        //append data to formData
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);

        //send data to server
        await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/register`, formData)
        .then(() => {

            //redirect to logi page
            Router.push('/login')
        })
        .catch((error) => {

            //assign error to state "validation"
            setValidation(error.response.data);
        })
    };

    return(
        <Layout>
            <Head>
                <title>Register Account - SantriKoding.com</title>
            </Head>
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card border-0 rounded shadow-sm">
                            <div className="card-body">
                                <h4 className="fw-bold">HALAMAN REGISTER</h4>
                                <hr/>
                                <form onSubmit={registerHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">NAMA LENGKAP</label>
                                                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Lengkap"/>
                                            </div>
                                            {
                                            validation.name && (
                                                <div className="alert alert-danger">
                                                    {validation.name[0]}
                                                </div>
                                            )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">ALAMAT EMAIL</label>
                                                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
                                            </div>
                                            {
                                                validation.email && (
                                                    <div className="alert alert-danger">
                                                        {validation.email[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">PASSWORD</label>
                                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
                                            </div>
                                            {
                                                validation.password && (
                                                    <div className="alert alert-danger">
                                                        {validation.password[0]}
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label">KONFIRMASI PASSWORD</label>
                                                <input type="password" className="form-control" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} placeholder="Masukkan Konfirmasi Password"/>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">REGISTER</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Register