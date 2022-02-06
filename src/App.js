import React, {Component} from "react";
import Products from "./components/Products";
import Movies from "./components/Movies";


class App extends Component {
    render() {
        return (
            <>
                <Movies/>
                <Products/>

            </>
        )
    }
}

export default App