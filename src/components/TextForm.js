import React,{useState} from 'react'

export default function TextForm(props) {


   const [text, setText]=useState("");
   const [changeCase, setChangeCase]=useState(true)
   
   const handleCase=()=>{
   
   if(changeCase){
      let newText=text.toUpperCase()
      setText(newText);
      setChangeCase(false);
      props.showAlert("converted to UpperCase","success");
   }
   else{
      let newText=text.toLowerCase()
      setText(newText);
      setChangeCase(true);
      props.showAlert("converted to LowerCase","success");
   }
   }
 
   const handleClearText=()=>{
        setText("");
        props.showAlert("Text box is cleared","success");
   }



   // const handleUpClick=()=>{
   //    console.log('upercase was clicked'+text);
   //    let newText=text.toUpperCase()
   //    setText(newText);
   // }
   
   // const handleLowClick=()=>{
   //    console.log('lowercase was clicked'+text);
   //    let newText=text.toLowerCase()
   //    setText(newText);
   // }
   const handleCopy=()=>{
        console.log('i am copy');
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied to clipboard","success");
   
   }

   const handleOnChange=(event)=>{
       setText(event.target.value);
       console.log('onchange');
   }


  return (
   <>
    <div  className={`text-${props.mode==='light'?'dark':'light'}`}>
       <h1 > {props.heading} </h1>
       <div className="mb-3">
        <textarea className="form-control" id="myBox" placeholder='Enter Text'  value={text} onChange={handleOnChange} rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleCase}>Convert Case </button>
       <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text </button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button>
       {/* <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert To LowerCase</button> */}

    </div>
     <div className={`container my-3 text-${props.mode==='light'?'dark':'light'} `}>
      <h1>Your text summary</h1>

       <p>{text.split(" ").length} Words and {text.length} characters </p>
       <p> Minutes to read {0.008*text.split(" ").length}</p>

       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in above textbox to preview it here "}</p>

     </div>
    </>
  )
}
