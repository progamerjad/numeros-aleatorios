import React from 'react';


class ArenaJogo extends React.Component{

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    jogo iniciado!
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-grup">
                                <label>Número sorteado</label>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-grup">
                                <label> Ultimos Números sorteado</label>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ArenaJogo;