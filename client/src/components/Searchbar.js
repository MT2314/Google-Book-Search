import React from 'react'

const Searchbar = ({ handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="card-header main-search">
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-6 offset-md-2">
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Search by Author or Book Title..." type="text" />
                    </div>
                    <div className="">
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Searchbar
