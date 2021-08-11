import React from "react";
import './Closures.css';

import closureImage from "../../images/closure.png";
import clFirst from "../../images/clFirst.png";
import clSecond from "../../images/clSecond.png";
import clThird from "../../images/clThird.png";
import clFourth from "../../images/clFourth.png";
import clFifth from "../../images/clFifth.png";

function Closures() {
  return (
    <div>
      <header>
        <div class="container-white">
          <img class="image" src={closureImage} />
          <h3>
            Hello readers, Let's start with one of the beautiful concepts of
            javascript which is closures.
          </h3>
          <h4 style={{ color: "#6b7280" }}>What is closure?</h4>
          <ul>
            <li>
              <p>
                According to
                <a
                  style={{ textDecoration: "none", color: "green" }}
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures"
                >
                  MDN
                </a>
                : A function
                <span class="highlight"> bundled together</span>
                with its lexical scope forms a closure. In simple words, A
                function that uses a value that outside of its context is
                <span class="highlight">closure</span>.
              </p>
            </li>
            <li>
              <p>Let's understand it by a example,</p>
              <img class="image" src={clFirst} alt="" />
              <p>Output: 33</p>
            </li>
            <li>
              <p>
                According to definition, inner( ) is a function that uses a
                variable
                <span class="highlight">number</span> that is not the part of
                its scope. This is the closure in javascipt.
              </p>
            </li>
            <h4 style={{ color: "#6b7280" }}>
              Let's understand closure by returning function
            </h4>
            <h3>Example 1:</h3>
            <img class="image" src={clSecond} alt="" />
            <li>
              <p>
                At line 7 , outer function returns the entire inner ( ) and
                store it in the functionReference variable. After line 7,
                execution of outer function is completed ,
                <span class="highlight">
                  so memory , execution context and call stack
                </span>
                of outer () is empty now.
              </p>
              <p>
                So now come to line 8, it is the function call of inner ( ).
                Guess what will be the output?
              </p>
              <ul>
                <li>
                  <p>
                    <i class="fas fa-arrow-right"></i>
                    <span class="highlight">Will it print undefined?</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-arrow-right"></i>
                    <span class="highlight">Will it show reference error?</span>
                  </p>
                </li>
                <li>
                  <p>
                    <i class="fas fa-arrow-right"></i>
                    <span class="highlight">Or Will it print 33?</span>
                  </p>
                </li>
              </ul>
            </li>
            <h3 style={{ textAlign: "center", color: "#6b7280" }}>Output:</h3>
            <img src={clThird} alt="" class="image" />
            <li>
              <p>
                Execution of outer( ) is completed still number can access
                outside of the outer( ). This is the closure. inner( ) returned
                from outer( ) still remember the
                <span class="highlight">lexical scope of parent function</span>,
                and that's why it remembers the value of number even if it is
                <span class="highlight">outside of its scope.</span>
              </p>
            </li>
            <li>
              <p>
                This is power of closure in js. if we go deep into another
                function still it remember the lexical scope of its
                <span class="highlight">parents's parent function.</span>
              </p>
            </li>
            <h3>Example 2:</h3>
            <img src={clFourth} alt="" class="image" />
            <li>
              <p>
                In the above example, there is the
                <span class="highlight"> nesting of closures</span>. So inner
                function remembers the lexical scope of outer( )'s parent
                function which is demo( ). In line 12 execution of demo( ) is
                completed, and it returns outer( ). In line 13, there is a
                function call of the outer( ), at the end of outer( ) inner( )
                will executes and it will remember both variables even if
                <span class="highlight">
                  they are not in its block context.
                </span>
              </p>
            </li>
          </ul>
          <h3 style={{ textAlign: "center", color: "#6b7280" }}>Output:</h3>
          <img src={clFifth} alt="" class="image" />
        </div>
      </header>
    </div>
  );
}

export default Closures;
