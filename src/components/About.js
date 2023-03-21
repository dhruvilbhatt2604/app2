import React,{useState} from "react";

export default function About() {

    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    }) 

    const [btntext,setbtntext] = useState("Enable dark mode")

    const toggleStyle = ()=>{
        if(mystyle.color === 'black'){
            setMystyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setbtntext("Enable Light mode")
        }
        else{
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setbtntext("Enable Dark mode");
        }
    }

  return (
    <div className="container" style={mystyle}>
     <h2 className="my-2">About Us</h2>
      <div class="accordion" id="accordionExample" style={mystyle}>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze Your text.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            style={mystyle}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              Textutils gives you a way to analyze your text quickly and efficiently be it a word count or character count or preview
              a word or converting the text to Upper Case or Lower Case.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
             text Utility is a free character counter tool that provides instant character count & word count statistics for a given
             text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
             limit.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            style={mystyle}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              
              This Word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,
              Safari, Opera.It suits to count characters in facebook, blogs, block, address, excel document, pdf documents, essays, etc.

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
