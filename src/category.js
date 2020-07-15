import React from 'react';
import Upload from './upload';

function Category(){

	const getUpload=()=>{
		console.log('ahh yeah')
       return <Upload/>
	}
	return(
		<div className="flex flex-column w5 pa2 ma4">
         <button onClick={()=>this.getUpload}>Category A</button>
         <button onClick={()=>this.getUpload}>Category B</button>
         <button onClick={()=>this.getUpload}>Category C</button>
        </div>
		);
}
export default Category;