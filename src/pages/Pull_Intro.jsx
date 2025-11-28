import React, { useState } from "react";
import { people } from "../data/intro_data";

export default function Pull_Intro() {

  // track the person 
  const [currentIndex, setCurrentIndex] = useState(0);

  //current person
  const current = people[currentIndex];

  // first and last name
  const fullName = current.name.first + " " + current.name.last;
  const title = fullName + ": Introduction";

  //set up next and prev
  // next person --> 
  function handleNext() {
    let newIndex = currentIndex + 1;

    if (newIndex >= people.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);
  }

  // previous person <--
  function handlePrev() {

    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = people.length - 1;
    }

    setCurrentIndex(newIndex);
  }

  // search function
  function handleSearch() {
    const inputBox = document.getElementById("search-input");
    const text = inputBox.value.toLowerCase();

    if (text === "") {
      return;
    }

    let hit = -1;

    for (let i = 0; i < people.length; i++) {
      const p = people[i];

      const first = p.name.first.toLowerCase();
      const last = p.name.last.toLowerCase();
      const pref = (p.name.preferred || "").toLowerCase();
      const pre = p.prefix.toLowerCase();

      if (first.includes(text) || last.includes(text) || pref.includes(text) || pre.includes(text)) {
        hit = i;
        break;
      }
    }

    if (hit === -1) {
      alert("Nothing found matching '"+ text + "'");
    } else {
      setCurrentIndex(hit);
    }
  }

  function handleSearchKey(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }


  //device
  const platformInfo = current.platform.device + ", " + current.platform.os;

  //image
  const hasImage = current.media && current.media.hasImage === true;
  let imgSrc = "";
  let imgCaption = "";

  if (hasImage) {
    imgSrc = current.media.src;
    imgCaption = current.media.caption;
  }

 //html 
  return (
    <main>
      <h2>Introductions</h2>
      <h2>{title}</h2>

      <section id="intro-controls">
        <button type="button" onClick={handlePrev}>
          Previous
        </button>

        <button type="button" onClick={handleNext}>
          Next
        </button>

        <div>
          <label>
            <b>Search by name or prefix: </b>
          </label>

          <input
            type="text"
            id="search-input"
            placeholder="Ex: bmelling or Brian"
            onKeyUp={handleSearchKey}
          />

          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>

        <p>
          This is person #{currentIndex + 1} of {people.length} — {fullName} (
          {current.prefix})
        </p>
      </section>

      {/* Student Information */}
      <section id="intro-content">
        <figure>
          {hasImage && <img src={imgSrc} alt={fullName} />}
          {hasImage && <figcaption>{imgCaption}</figcaption>}
        </figure>

        <ul>
          <li><b>Personal Background: </b>{current.backgrounds.personal}</li>
          <li><b>Professional Background: </b>{current.backgrounds.professional}</li>
          <li><b>Academic Background: </b>{current.backgrounds.academic}</li>
          <li><b>Background in this Subject: </b>{current.backgrounds.subject}</li>
          <li><b>Primary Computer Platform: </b>{platformInfo}</li>

          <li><b>Courses I'm Taking & Why:</b>
            <ul>
              {current.courses.map((course, index) => (
                <li key={index}>
                  <b>{course.dept} {course.num}</b> - {course.name}:
                  {course.reason}
                </li>
              ))}
            </ul>
          </li>

          <li><b>Funny/Interesting Item: </b>{current.funFact}</li>
        </ul>
      </section>
    </main>
  );
}
