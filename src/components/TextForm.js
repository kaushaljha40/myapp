import React,{useState} from 'react'
import PropTypes from 'prop-types'




export default function TextForm(props) {
  const [count, setCount] = useState('Enter Here');
  const[email,setEmail]=useState('');

  //count is variable adn setCount is method which update count variable
  //This variable and method could have any name


  const printToCnsole=()=>{
    console.log("button is clicked");
    setCount('Enter Email Here');
    //alert("hiii")
    let newext=email.toUpperCase();
    setEmail(newext);
  }

  const methodOnChange=(event)=>{
    console.log("button is clicked");
   setEmail(event.target.value)

  }
    return (

      <>
        <div>
            <div className="container mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">{props.email} </label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={count} value={email} onChange={methodOnChange}/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.comment}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={printToCnsole}>Submit form</button>
  </div>
  <div className='container my-3'>
  <h3>Your text summary : </h3>
  <p>  text count= {email.count} </p>
  </div>
  
        </div>

        </>
        
    )
}
TextForm.propTypes={email :PropTypes.string.isRequired,
  comment :PropTypes.string.isRequired,
}