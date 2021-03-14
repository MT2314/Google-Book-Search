import React from 'react'

const Searchbar = ({ handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} style={{ marginLeft:'10%'}}>
            <div className="card-header main-search ml-5">
                <div className="row">
                    <input type="submit" value="Search" className="btn btn-primary search-btn" style={{ display: 'inline-block', width: '8em'}} />
                    <input onChange={handleChange} style={{ height: '3em', width: '60%' }} className="AutoFocus form-control ml-2" placeholder="Search by Author or Book Title..." type="text" />
                </div>
            </div>
        </form>
    )
}

export default Searchbar
