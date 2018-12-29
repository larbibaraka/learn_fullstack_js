import React from 'react';


const ContestPreview = ({contest}) => (
 
  <div className="ContestPreview">
    <div className="">
      {contest.categoryName}
    </div>
    <div className="">
      {contest.contestName}
    </div>
  </div>

);

export default ContestPreview;