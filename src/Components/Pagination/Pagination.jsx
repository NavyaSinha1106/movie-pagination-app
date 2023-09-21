import "../Pagination/Pagination.css"

const Pagination = ({ setPage }) => {

    const pageNumbers = [];
    const totalPages = 10;

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    const handlePageChange = (page) => {
        setPage(page)
    }

    const Button = pageNumbers.map(page => (
        <button onClick={() => handlePageChange(page)} >{page}</button>
    ))
    return <>
        <div className="PaginationBar">
            <div className="PaginationButton">
                {Button}
            </div>
        </div>
    </>

}

export default Pagination;