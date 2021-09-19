import React,{useState} from 'react';

export default function TextForm(props) {
    const [text,setText] = useState('');

    const upClicked=()=>{
         var newText= text.toUpperCase();
         setText(newText);
         props.alert('Text converted to uppercase!','success');
    }

    const lowClicked=()=>{
        var newText= text.toLowerCase();
        setText(newText);
        props.alert('Text converted to lowercase!','success');
   }

   const titleClicked=()=>{
       var newText=text.trim().split(" ").map((item)=>{
           if(item[0] != null){
           newText = item[0].toUpperCase() + item.slice(1);
           }
           return newText
       });
       setText(newText.join(' '));
       props.alert('Text converted to titlecase!','success');
   }

   const clearText=()=>{
       setText('');
       props.alert('Cleared text!','success');
   }

   const handleCopy=()=>{
       var newText = document.getElementById('text');
       newText.select();
       navigator.clipboard.writeText(newText.value);
       props.alert('Copied to Clipboard!','success');
   }

   const removeExtraSpaces=()=>{
       var newText = text.split(/[ ]+/);
       setText(newText.join(' '));
       props.alert('Extra spaces removed!','success');
   }

    const textChanged=(event)=>{
        if(event.target.value != null){
        setText(event.target.value);
        }
    }
    
    return (
        <>
          <div className="conatiner mx-5 my-3">
                <div className={`mb-3 text-${props.mode==='dark'?'light':'dark'}`}>
                    <h1>Enter the text to analyze</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#43434385':'white',
                color:props.mode==='dark'?'white':'black'}} id="text" rows="5" value={text} onChange={textChanged}></textarea>
                </div>
                <button className="btn btn-success mx-1" onClick={upClicked}>Convert to Uppercase</button>
                <button className="btn btn-success mx-1" onClick={lowClicked}>Convert to Lowercase</button>
                <button className="btn btn-success mx-1" onClick={titleClicked}>Convert to Titlecase</button>
                <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-success mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-1" onClick={clearText}>Clear text</button>
         </div>
         <div className={`conatiner my-3 mx-5 text-${props.mode==='dark'?'light':'dark'}`}>
             <h2>Text Summary</h2>
             <p>{text.trim().split(" ").length} words and {text.trim().length} characters.</p>
             <p>Time to read: {text.trim().split(" ").length * 0.008} minutes</p>

             <h2>Preview</h2>
             <p>{text.length>0?text:"(Enter your text in the textbox above to analyze)"}</p>
         </div>
         
             
        </>
    )
}
