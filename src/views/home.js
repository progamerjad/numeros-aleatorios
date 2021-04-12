import React from 'react';

function Home(){


    return(
             <div className="jumbotron">
                <h1 className="display-3">Bem vindo ao jogo!</h1>
                <p className="lead">
                    regras do jogo!
                    </p>
                <hr className="my-4"/>


                  <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <h6>menor Número</h6>
                    <div className="btn-group" role="group" aria-label="Third group">
                        <input type="text" className="form-control"/>
                    </div>
                    <h6>maior Número</h6>
                    <div className="btn-group" role="group" aria-label="Third group">
                          <input type="text" className="form-control"/>
                    </div>
                    </div>


                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Começar</a>
                </p>
            </div>
    )
}

export default Home