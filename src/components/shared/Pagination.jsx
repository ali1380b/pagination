import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

class Pagination extends Component {
    state = {
        currentPage: 1,
        pageSize: 10,
        itemCount: 91
    }
    getPageCount = () => {
        const pageCount = Math.ceil(this.props.itemCount / this.props.pageSize)
        return pageCount
    }
    
    getPages = () => {
        const pageCount = this.getPageCount()
        const pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return pages.map(p => (
            <li key={p} className={this.props.currentPage === p ? 'page-item active' : 'page-item'}>
                <a className="page-link" href="#" onClick={() => this.props.onChange(p)}>{p}</a></li>

        ))
    }

    render() {
        return (
            <>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        {
                            this.getPages()
                        }
                    </ul>
                </nav>
            </>
        )
    }
}

export default Pagination;