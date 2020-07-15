import React,{useState} from 'react';
import Dropzone from "react-dropzone";
function Upload(){


  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>{
    setFileNames(acceptedFiles.map(file => [...fileNames,file.name]));
    }


	return(
         <div className="App  w5 ma4 pa2">

     <div className="App flex flex-column w5 ma4 pa2">
      <button onClick={()=>this.onRouteChange('categorya')}>Category A</button>
      <button onClick={()=>this.onRouteChange('categoryb')}>Category B</button>
      <button onClick={()=>this.onRouteChange('categoryc')}>Category C</button>
     </div>
     <div>
      <Dropzone 
      onDrop={handleDrop}
      accept="image/jpeg, image/png"
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <div className="flex flex-column"><li key={fileName}>{fileName}</li></div>
          ))}
        </ul>
      </div>
     </div> 
         </div>

		);
}
export default Upload;