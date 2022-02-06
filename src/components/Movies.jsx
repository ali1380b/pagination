import React, {Component} from "react";
import * as movieService from './movie'

import 'bootstrap/dist/css/bootstrap.min.css'
import Pagination from "./shared/Pagination";


class Movies extends Component {
    state = {
        currentPage: 1,
        pageSize: 2,
        items: movieService.getMovies(0, 2),
        itemsCount: movieService.getMoviesCount()
    }
    changePage = page => {
        this.setState({currentPage: page})
        const start = (page - 1) * this.state.pageSize;
        const itemsMovies = movieService.getMovies(start, start + this.state.pageSize)
        this.setState({items: itemsMovies})
    }

    render() {
        return (
            <>
                <div className='container'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                        <tr>
                            <td>id</td>
                            <td>name movie</td>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.items.map(m => (
                                <tr>
                                    <td>{m.id}</td>
                                    <td>{m.name}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <Pagination currentPage={this.state.currentPage}
                                pageSize={this.state.pageSize}
                                itemCount={this.state.itemsCount}
                                onChange={(page) => this.changePage(page)}
                    />
                </div>
            </>
        )
    }
}

export default Movies;