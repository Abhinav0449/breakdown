
import Characters from './Characters'
import Loading from './Loading'
import ReactPaginate from 'react-paginate'
import React, { useState } from 'react'

const CharcterCard = ({content,buffer}) => {
    const[pageNumber,setPageNumber]=useState(0)
    const contentPerPage=9
    const pageVisited=pageNumber*contentPerPage
    const ChangePage=({selected})=>{
        setPageNumber(selected)
      }
    const pageCount=Math.ceil(content.length/contentPerPage)
    

    return buffer ? <Loading/>:<section className="sec"><div className="cards">
        {content.slice(pageVisited,pageVisited+contentPerPage).map(item=>(
            <Characters key={item.char_id} item={item}></Characters>
        ))}</div>
        <div className="footer">
         <ReactPaginate
     previousLabel={"Previous"}
     nextLabel={"Next"}
     pageCount={pageCount}
     onPageChange={ChangePage}
     containerClassName={"paginationbtn"}
     previousLinkClassName={"previousbtn"}
     nextLinkClassName={"nextBtn"}

     />
     </div>
    </section>
}

export default CharcterCard

