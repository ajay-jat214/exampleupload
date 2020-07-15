import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './upload';
import Dropzone from "react-dropzone";


class App extends React.Component{
 constructor(){
  super()
  this.state={
    route:'home',
    fileNamesA:[],
    fileNamesB:[],
    fileNamesC:[],
  }

 }

 onRouteChange=(route)=>{
  console.log('waah');
  this.state.route=route;
  this.forceUpdate();
  console.log(this.state.route)
  
 }
 render(){



 
  const handleDropA = acceptedFiles =>{
  
    this.state.fileNamesA=[...this.state.fileNamesA,acceptedFiles[0].name];
    this.forceUpdate();
    
    }

  const handleDropB = acceptedFiles =>{
  
    this.state.fileNamesB=[...this.state.fileNamesB,acceptedFiles[0].name];
    this.forceUpdate();
    
    }

  const handleDropC = acceptedFiles =>{
  
    this.state.fileNamesC=[...this.state.fileNamesC,acceptedFiles[0].name];
    this.forceUpdate();
    
    }

   return (
         <div className="App  w5 ma4 pa2">

     <div className="App flex flex-column w5 ma4 pa2">
      <button onClick={()=>this.onRouteChange('categorya')}>Category A</button>
      <button onClick={()=>this.onRouteChange('categoryb')}>Category B</button>
      <button onClick={()=>this.onRouteChange('categoryc')}>Category C</button>
     </div>
{
    this.state.route==='categorya'
   ?(  <div>
           <Dropzone 
           onDrop={handleDropA}
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
               {this.state.fileNamesA.map(fileName => (
                 <div className="flex flex-column"><li key={fileName}>{fileName}</li></div>
               ))}
             </ul>
           </div>
          </div>
       )
       :
       (

       this.state.route==='categoryb'
       ?(  <div>
           <Dropzone 
           onDrop={handleDropB}
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
               {this.state.fileNamesB.map(fileName => (
                 <div className="flex flex-column"><li key={fileName}>{fileName}</li></div>
               ))}
             </ul>
           </div>
          </div>
       )
        :
        (  <div>
           <Dropzone 
           onDrop={handleDropC}
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
               {this.state.fileNamesC.map(fileName => (
                 <div className="flex flex-column"><li key={fileName}>{fileName}</li></div>
               ))}
             </ul>
           </div>
          </div>
       ) 
       ) 
}

         </div>
   );
 }
 }
export default App;
