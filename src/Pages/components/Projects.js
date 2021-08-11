import React from "react";

import './projects.css'

const Projects = () => {
  return (
    <div>
      <ul>
        <li>
          <article class="container-center">
            <h1>everNote Clone</h1>
            <small>1 may, 2021</small>
            <p>
              Technology: <span class="clr">React js, React - quill, Firebase</span>
            </p>
            <p class="para">
            It's a ever note clone for making structured notes.
            It uses react-quill text editor for making notes.
            </p>
            <a
              class="link1 primary-link"
              href="https://gopalbbharadva.github.io/everNote/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/everNote"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center-og">
            <h1>Photo Gallery</h1>
            <small>26 april, 2021</small>
            <p>
              Technology: <span class="clr">React Js, Firebase</span>
            </p>
            <p class="para">
            It's an photo gallery app.
            It is just like Instagram post where you can upload photo and view it .
            </p>
            <a
              class="link1 primary-link"
              href="https://gopalbbharadva.github.io/photoGallery/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/photoGallery"
            >
              Source Code
            </a>
          </article>
        </li>
        <li>
          <article class="container-center">
            <h1>movieDeck</h1>
            <small>18 june, 2021</small>
            <p>
              Technology: <span class="clr">React Js, Firebase</span>
            </p>
            <p class="para">
            It's movie listing app with short description and rating.
            You can also search your favorite movie.
            </p>
            <a
              class="link1 primary-link"
              href="https://gopalbbharadva.github.io/movieDeck/"
            >
              Live Demo
            </a>
            &nbsp;
            <a
              class="link1 secondary-link"
              href="https://github.com/gopalbbharadva/movieDeck"
            >
              Source Code
            </a>
          </article>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
