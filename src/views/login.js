import React from 'react'
import Card from '../components/card'

class Login extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }} >
                        <div className="bs-docs-section border border-primary">
                            <Card tittle="Login">
                                <form>
                                    <div>
                                        <input type="email" className="form-control mb-2" placeholder="Digite seu email" />
                                        <input type="password" className="form-control" placeholder="Senha" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block mt-2">Entrar</button>
                                    <a href="#" className="primary text-center m-2">Esqueceu a senha?</a>
                                    <hr />
                                    <button className="btn btn-success" style={{position: 'relative',left: '180px'}}>Criar nova conta</button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login