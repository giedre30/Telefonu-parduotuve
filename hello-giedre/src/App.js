import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ProductList from '/home/giedre/hello-giedre/src/ProductList/ProductList.js';
import phone from '/home/giedre/hello-giedre/src/phone.jpeg';
import PropTypes from 'prop-types'

class App extends Component {

          static propTypes = {
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired
        };
  
          static defaultProps = {
            id: 0,
            title: 'Undefined',
            description: 'Undefined',
            price: 0,
            image: 'Undefined'
        };
  
          state = {
            productList: [
                {id: '1', title: 'Phone', description: 'new phone', price: 3, image: phone},
                {id: '2', title: 'iPhone', description: 'new phone', price: 6, image: phone},
                {id: '3', title: 'Samsung', description: 'old phone', price: 5, image: phone},
                {id: '4', title: 'Old', description: 'new phone', price: 4, image: phone},
                {id: '5', title: 'Samsung', description: 'new phone', price: 12, image: phone},
                {id: '6', title: 'SE', description: 'new phone', price: 34, image: phone},
                {id: '7', title: 'CAT', description: 'new phone', price: 21, image: phone},
                {id: '8', title: 'Sony', description: 'new phone', price: 12, image: phone}
            ]
        };
  
          render() {
  
              return (
          <div>
                    <ProductList
                        productList={this.state.productList}
                        key={this.state.productList.id}
                        clicked={this.deleteProduct}
                    />
                </div>
            );
        }
    }
  
      export default App;
  
  
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p><button className="btn btn-primary" role="button">mano mygtukas</button></p>
//         <p>pirmi badymai</p>
//       </div>
//     );
//   }
// }

// export default App;

