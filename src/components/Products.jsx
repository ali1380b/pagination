import React, {Component} from 'react'
import * as productService from './product'
import Pagination from "./shared/Pagination";

class Products extends Component {
    state = {
        currentPage: 1,
        pageSize: 2,
        items: productService.getProduct(0, 2),
        itemsCount:productService.getProductCount()
    }
    changePage = page => {
        this.setState({currentPage: page})
        const start = (page - 1) * this.state.pageSize;
        const itemsProduct = productService.getProduct(start, start + this.state.pageSize)
        this.setState({items: itemsProduct})
    }

    render() {
        return (
            <>
                <div className='container'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                            <td>name</td>
                            <td>price</td>
                            <td>quantity</td>
                        </tr>
                        </thead>
                        <tbody>

                        {
                            this.state.items.map(p => (
                                <tr>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{p.quantity}</td>
                                </tr>
                            ))
                        }

                        </tbody>
                    </table>
                    <Pagination onChange={(page)=>this.changePage(page)}
                                itemCount={this.state.itemsCount}
                                pageSize={this.state.pageSize}
                                currentPage={this.state.currentPage}/>
                </div>
            </>
        )
    }
}

export default Products;