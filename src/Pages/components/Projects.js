import React from "react";

import './projects.css'
import Footer from "../../Shared/Footer";
import Header from "../../Shared/Header";

const Projects = () => {
  return (
    <div>
      {/* <Header /> */}
      <ul>
        <li>
          <article class="container-center">
            <h1>Lucky Birthday App</h1>
            <small>25 December,2020</small>
            <p>
              Technology: <span class="clr">Javascript</span>
            </p>
            <p class="para">Is your birthday lucky?Just check it</p>
            <a
              class="link1 primary-link"
              href="https://birthdaylucky.netlify.app/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/BirthdayLucky"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center-og">
            <h1>Smart Phone App</h1>
            <small>17 December,2020</small>
            <p>
              Technology: <span class="clr">Rect.js</span>
            </p>
            <p class="para">
              Do you love smart phones,then here is the smart phone
              recommandation for you.just check it
            </p>
            <a class="link1 primary-link" href="https://eq4p9.csb.app/">
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-SmartPhonelistApp"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center">
            <h1>Vehicle Emoji App</h1>
            <small>17 December,2020</small>
            <p>
              Technology: <span class="clr">React.js</span>
            </p>
            <p class="para">
              I struggle with understanding the emojis. Do you too? If yes, then
              see this library of emojis with meaning
            </p>
            <a class="link1 primary-link" href="https://ys1c1.csb.app/">
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-VehicleEmojiApp"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center-og">
            <h1>Mandalorian Translator App</h1>
            <small>13 December,2020</small>
            <p>
              Technology: <span class="clr">Javascript</span> &{" "}
              <span class="clr">API</span>
            </p>
            <p class="para">
              Convert from English to Starwars Mando'a language. Mando'a was the
              language of the people native to the planet Mandalore.{" "}
            </p>
            <a
              class="link1 primary-link"
              href="https://mandaloriantexttranslator.netlify.app/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-Mandalorian_App"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center">
            <h1>Minions Text Translator App</h1>
            <small>13 December,2020</small>
            <p>
              Technology: <span class="clr">Javascript</span> &{" "}
              <span class="clr">API</span>
            </p>
            <p class="para">
              Are you a fan of minions? Did you know that the gibberish they say
              is an actual language. Use the translator to convert your text
              from English to Minion speak or Banana language.
            </p>
            <a
              class="link1 primary-link"
              href="https://minionstranslatorpractise.netlify.app/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-Minions_App"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center-og">
            <h1>Flutter Quiz App</h1>
            <small>10 December,2020</small>
            <p>
              Technology: <span class="clr">Javascript</span>
            </p>
            <p class="para">
              Do you know Flutter?If not then you should check it out by playing
              quiz as it's future.
            </p>
            <a
              class="link1 primary-link"
              href="https://repl.it/@Gopal004/Flutter-quiz?embed=1#index.js"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-Flutter_Quiz"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center">
            <h1>Friend Quiz App</h1>
            <small>9 December,2020</small>
            <p>
              Technology: <span class="clr">Javascript</span>
            </p>
            <p class="para">
              Do you know how much your best friend know you?Just check it.
            </p>
            <a
              class="link1 primary-link"
              href="https://repl.it/@Gopal004/FriendQuiz?embed=1#index.js"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Neog.camp-Friend_Quiz"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center-og">
            <h1>Tailor Measurement App</h1>
            <small>10 December,2020</small>
            <p>
              Technology: <span class="clr">Flutter</span> &{" "}
              <span class="clr">Firebase</span>
            </p>
            <p class="para">
              It's a CRUD with S, Android app with Flutter as frontend and
              Firebase as backend.
            </p>
            <a
              class="link1 primary-link"
              href="https://www.instagram.com/p/CHfNlhrF7Yd/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/Tailor_Measurement_App"
            >
              Source Code
            </a>
          </article>
        </li>
      </ul>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
