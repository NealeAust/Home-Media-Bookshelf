import React from 'react';


const Library = () => {
return (
<div>
return
</div>
)
}

export default Library;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import '../App.css'
// import { useQuery } from '@apollo/client';
// import { GET_MEDIA } from '../utils/queries'

// const Library = ({
//     mediaId,
//     mediaType,
//     title,
//     description,
//     image,
//     showMediaId = true,
//     showMediaType = true,
//     showTitle = true,
//     showDescription = true,
//     showImage = true,
// }) => {
//     if (!mediaId.length) {
//         return <h3> No Media Yet</h3>
//     }
//     return (
//         <div>
//             {showMediaId && <h3>{mediaId}</h3>}
//             {showMediaType && <h3>{mediaType}</h3>}
//             {showTitle && <h3>{title}</h3>}
//             {showDescription && <h3>{description}</h3>}
//             {showImage && <h3>{image}</h3>}
//             {mediaId &&
//                 mediaId.map((mediaId) => (
//                     <div key={mediaId._id} className="card mb-3">
//                         <h4 className="card-header bg-primary text-light p-2 m-0"</h4>
//      {
//                         showMediaType?(
//       <Link
//       className = "text-light"
//       to = {`/profiles/${thought.thoughtAuthor}`}
//                     >
//                     { thought.thoughtAuthor } < br />
//                     <span style={{ fontSize: '1rem' }}>
//                         had this thought on {thought.createdAt}
//                     </span>
//       </Link>
// </div >

//      </h4 >
   
   
//       )
 
    
// }



// export default Library;