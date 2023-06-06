import React,{useState} from 'react'

export default function TextFrom(props) {

    const handleUpClick = ()=>{
       // console.log("Text Change");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convet to Upper Case!","success")
    }

    const handleLowClick = ()=>{
       // console.log("Text Change");
        let newText1 = text.toLowerCase();
        setText(newText1);
        props.showAlert("Convet to Lower Case!","success")

    }

    const handleClearClick = ()=>{
        // console.log("Text Change");
        let newText1 = "";
        setText(newText1);
        props.showAlert("Clear!","success")
    }

    const handleinversClick = ()=>{
        // console.log("Text Change");
        // eslint-disable-next-line no-undef
        let newText1 = text.split('').reverse().join('');
        setText(newText1);
        props.showAlert("Convet to Inverse!","success")
    }

    const handleOnChange = (event)=>{
       // console.log("Clicked")
        setText(event.target.value);
    }

    const [text,setText] = useState('');

return (

    <>
<div className='container' style={{color:props.mode==='dark' ? 'white': '#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark' ? 'grey': 'white' , color:props.mode==='dark' ? 'white': '#042743'}} id="myBox" rows="3"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert To Uppar Case</button>
    <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert To Lower Case</button>
    <button className='btn btn-primary mx-2' onClick={handleinversClick}>Convert To Reverse</button>
    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>

</div>
<div className="container my-3" style={{color:props.mode==='dark' ? 'white': '#042743'}} >
    <h1>Text Summary</h1>
    <p> {text.split(" ").length} Words And {text.length} Characters </p>
    <p> {0.08*text.split(" ").length} Minutes Read </p>  
    <h2>Preview</h2>
    <p>{text}</p>
</div>
</>
)
}
