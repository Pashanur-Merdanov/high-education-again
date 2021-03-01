const country_list = document.querySelector(".country-list");
const programmes = document.querySelector(".programmes");

let countries = [
  "ABŞ",
  "Almaniya",
  "Avstraliya",
  "Avstriya",
  "BƏƏ",
  "Böyük Britaniya",
  "Çexiya",
  "Çin",
  "Danimarka",
  "Fransa",
  "Hollandiya",
  "İrlandiya",
  "İspaniya",
  "İsveç",
  "İsveçrə",
  "İtaliya",
  "Kanada",
  "Sinqapur",
  "Türkiyə",
  "Yeni Zelandiya",
  "Malayziya",
  "Tailand",
  "Malta",
];

let programmeList = [
  "Academy proqramı",
  "Bakalavr",
  "Bakalavra hazırlıq",
  "Dil kursları",
  "Diplom proqramları",
  "Foundation",
  "MBA",
  "Magistratura",
  "Magistraturaya hazırlıq",
  "Pre - Master",
  "Yay kursları",
];

const renderCountries = () => {
  let i = 0;
  let countriesLength = countries.length;
  for (i; i <= countriesLength - 1; i++) {
    country_list.insertAdjacentHTML(
      "beforeend",
      `<div class="checkbox">
      <input type="checkbox" />
      <label>${countries[i]}</label>
      </div>`
    );
  }
};

const renderProgrammes = () => {
  let i = 0;
  let programmesLength = programmeList.length;
  for (i; i <= programmesLength - 1; i++) {
    programmes.insertAdjacentHTML(
      "beforeend",
      `<div class="checkbox">
        <input type="checkbox" />
        <label>${programmeList[i]}</label>
    </div>`
    );
  }
};
renderCountries();
renderProgrammes();
