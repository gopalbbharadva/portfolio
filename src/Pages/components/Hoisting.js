import React from "react";
import "./Hoisting.css";

import hoisting from "../../images/hoisting.png";
import sum from "../../images/sum.png";
import hsFirst from "../../images/hsFirst.png";
import hsFirstOp from "../../images/hsFirstOP.png";
import hsSecond from "../../images/hsSecond.png";
import hsSecondOp from "../../images/hsSecondOP.png";
import hsThird from "../../images/hsThird.png";
import hsThirdOP from "../../images/hsThirdOP.png";
import hsFourth from "../../images/hsFourth.png";
import hsFourthOP from "../../images/hsFourthOP.png";

function Hoisting() {
  return (
    <div>
      <header>
        <div class="header container-white">
          <img class="image" src={hoisting} />
          <ul>
            <li>
              <p>
                Hey readers, in this blog we will see about
                <span class="highlight"> hoisting in js</span>. You might be
                wondering that Javascript is not like all other programming
                languages, it is a
                <span class="highlight"> loosely typed language</span>. Forex.
                You can create a variable at any place in your code, you don't
                have to provide a data type for the variable, etc...
              </p>
              <p>
                Before Understanding hoisting in js, we first understand
                <span class="highlight"> how js runs behind the scene</span>.
              </p>
            </li>
            <li>
              <img src={sum} alt="" class="image" />
            </li>
            <li>
              <p>
                Before compiling any javascript function, one
                <span class="highlight"> execution context</span>
                will be created which is called global context. It has 2 parts.
                <span class="highlight">1.Memory allocation phase</span>
                <br />
                <span class="highlight">2.Code execution phase</span>
              </p>
              <p>
                In js, even before compiling a single line of code
                <span class="highlight">
                  functions and variables are initialized with default values
                </span>
                . During compiling the code, actual values of variables and
                functions are assigned to it.
              </p>
            </li>
            <li>
              <img src={hsFirst} class="image" alt="" />
              <img src={hsFirstOp} class="image" alt="" />
            </li>
            <li>
              <p>
                In most common languages like c, java above code will give
                errors like{" "}
                <span class="highlight"> the number is not defined</span>. but
                in javascript number will be assigned with the value
                <span class="highlight"> undefined</span> before execution
                starts, just we discussed in the above theory part.
              </p>
              <p>So by keeping that in mind we start hoisting in js.</p>
            </li>
            <h4 style={{ color: "#6b7280" }}>What is hoisting?</h4>
            <li>
              <p>
                Compiler allocates the memory to variables and functions
                declarations
                <span class="highlight"> before execution of code</span>. In js,
                wherever you declared the variables and functions,
                <span class="highlight">
                  they are moved to the top and it is called declarations are
                  hoisted in javascript
                </span>
                . Variables that are declared with keyword
                <span class="highlight"> var</span> will be hoisted only. not
                const and let variables.
              </p>
            </li>
            <li>
              <img src={hsSecond} class="image" alt="" />
              <img src={hsSecondOp} class="image" alt="" />
            </li>
            <li>
              <p>
                In the above code, the
                <span class="highlight">
                  number is accessed before its declaration
                </span>
                . Still, it gets printed because of hoisting in javascript.
                declaration of number variable is
                <span class="highlight"> moved to top at compile time</span>.
              </p>
              <div class="note">
                <i>
                  Note: Only declarations are hoisted in javascript not
                  initialization
                </i>
                .
              </div>
            </li>
            <li>
              <img src={hsThird} alt="" class="image" />
              <img src={hsThirdOP} alt="" class="image" />
            </li>
            <li>
              <p>
                As mentioned in the note,
                <span class="highlight">
                  initialization is not hoisted in js
                </span>
                , and the output will be undefined.
              </p>
            </li>
            <h4 style={{ color: "#6b7280" }}>Example:</h4>
            <img src={hsFourth} alt="" class="image" />
            <img src={hsFourthOP} alt="" class="image" />
            <li>
              <p>
                A function call in the upper example is before its declaration,
                and still, it not giving any error or undefined because of
                hoisting.
                <span class="highlight">
                  Due to hoisting declaration get number( ) hoisted
                </span>
                .
              </p>
              <div class="note">
                <i>
                  Note: arrow function and assign the function to a variable,
                  both will ends with getNumber is not a function, as you are
                  storing the function into a variable and it will lead to
                  initialization. And initialization is not hoisted in
                  javascript.
                </i>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Hoisting;
