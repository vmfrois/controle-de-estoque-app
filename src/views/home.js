import React from 'react'

class Home extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ position: 'relative', left: '300px' }} >
                        <div className="bs-docs-section">
                            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                                <div className="container-fluid">
                                    <a href="#">logo</a>
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Home</a> 
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Entrada</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Saida</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Excel</a> 
                                            </li>
                                        </ul>
                                        <form className="d-flex">
                                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home