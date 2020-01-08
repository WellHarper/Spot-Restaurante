import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Main extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
      prodV : "", 
      metriV : "",
        produto: [],
        metrica: [],
        empty: " "
        
        
    }

     this.armazenar = this.armazenar.bind(this);
     this.handleChangeMetri = this.handleChangeMetri.bind(this);
     this.handleChangeProd = this.handleChangeProd.bind(this);
}

 Cadastrar () {


  
}






  render() {
      
    return (
       
     <main>
         <div className="actions">

           <button  className="CadPag">Cadastro</button>
           <button className="ListPage">Listar</button>  
             
         </div>
        <section>
           <form className="">
              <div><h3>Ingredientes</h3></div>
              <section>
                <div className="form-group ">
    <label className="Lab" >Produto</label>
                    <input onChange={this.handleChangeProd} type="text" className="inp form-control " id="inp"  placeholder="Produtos"/>
                    
                </div>
                <div className="form-group ">
                    <label>Metrica</label>
                         <select onChange={this.handleChangeMetri} id="met" class="form-control">
                             <option disabled selected>Escolha</option>
                             <option id="" value="Kg">Kg</option>
                             <option id="" value="Ml">Ml</option>
                             
                        </select>
                       
                       {/* <input onChange={(event)=>{this.setState({metricaValor: event.target.value})}}  type="text" className="form-control "  placeholder="Métrica"/> */}
                 </div>
                 <input value="Cadastrar" onClick = {this.armazenar} id="bt"  type="button" className= "botao btn btn-primary"/>
                </section>
                
            </form>
        <section  >
                                       
        </section>

        </section>
           
        </main>
    )
  }

   handleChangeProd(event) {
      this.setState({prodV : event.target.value});
    
      
  }

  handleChangeMetri(event) {
    this.setState({metriV : event.target.value});
  
    
}




  armazenar() {  
    this.setState({metrica : [].concat(this.state.metrica, this.state.metriV)});
    this.setState({produto : [].concat(this.state.produto, this.state.prodV)});
    console.log(this.state);
   
    
    
    
    
  };

  

}