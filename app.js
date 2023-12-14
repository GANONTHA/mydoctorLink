// import doctors from "./doctorsList";

const body = document.body;
const header = document.querySelector("header");
const main = document.querySelector("main");

const headerHeight = document.querySelector("header").offsetHeight;

main.style.top = headerHeight + "px";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageXOffset;

  if (currentScroll - lastScroll > 0) {
    header.classList.add("scroll-down");
    header.classList.remove("scroll-up");
  } else {
    header.classList.add("scroll-up");
    header.classList.remove("scroll-down");
  }
  lastScroll = currentScroll;
});

//display doctors list

const doctors = [
  {
    id: 1,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-1.jpg",
  },
  {
    id: 10,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-10.jpg",
  },
  {
    id: 11,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-11.jpg",
  },
  {
    id: 2,
    name: "ali",
    description: "Dentist",
    image: "assets/images/doctor-profile-2.jpg",
  },
  {
    id: 3,
    name: "ali",
    description: "Pediatrict",
    image: "assets/images/doctor-profile-3.jpg",
  },
  {
    id: 4,
    name: "ali",
    description: "Neurologist",
    image: "assets/images/doctor-profile-4.jpg",
  },
  {
    id: 5,
    name: "ali",
    description: "Nurse",
    image: "assets/images/doctor-profile-5.jpg",
  },
  {
    id: 6,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-6.jpg",
  },
  {
    id: 7,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-7.jpg",
  },
  {
    id: 8,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-8.jpg",
  },
  {
    id: 9,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-9.jpg",
  },
  {
    id: 12,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-12.jpg",
  },
  {
    id: 13,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-13.jpg",
  },
  {
    id: 14,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-14.jpg",
  },
  {
    id: 15,
    name: "ali",
    description: "Psychologist",
    image: "assets/images/doctor-profile-15.jpg",
  },
];

const doctorsList = document.querySelector(".doctors-list");

function renderDoctorsList() {
  doctors.forEach((doctor) => {
    doctorsList.innerHTML += `
        <div class="doctor-1">
            <img src="${doctor.image}" alt="" />
            <p>${doctor.description}<p>
        </div>
    `;
  });
}
renderDoctorsList();

// Disable the contact send button if the message is empty

// const textArea = document.querySelector("#text-area");
const textAArea = document.getElementById("first-name");
const sendBtn = document.querySelector(".bttn");

textAArea.value.length <= 0
  ? sendBtn.setAttribute("disabled", "")
  : sendBtn.removeAttribute("disabled");
textAArea.addEventListener("input", () => {
  textAArea.value.length <= 0
    ? sendBtn.setAttribute("disabled", "")
    : sendBtn.removeAttribute("disabled");
});

//Display the events feeds

const events = [
  {
    id: 1,
    title: "Workshop",
    date: "Nov. 23, 2023",
    time: "11:00 AM",
    speaker: "Watkins Brian",
    topic: "Malaria Prevention",
    description:
      "Prevention and avoiding malaria in rural communities. Practice and more to cover",
    place: "Pala",
    feature: "Emergency, Medicine",
    cost: "$300",
    bg: "#373e48",
  },
  {
    id: 2,
    title: "Workshop",
    date: "Dec. 23, 2023",
    time: "10:00 AM",
    speaker: "Hedmon Saka",
    topic: "Paediatric Emergencies",
    description:
      "This Rural Health workshop is one day woarkshop in paediatric emergency scenarios and skills. It will give delegates real-life examples",
    // "Prevention and avoiding malaria in rural communities. Practice and more to cover",
    place: "Moudou",
    feature: "Paediatric,Medicine",
    cost: "$200",
    bg: "#8996A0",
  },
  {
    id: 3,
    title: "Workshop",
    date: "Jan. 5, 2024",
    time: "11:00 AM",
    speaker: "Perth Leno",
    topic: "Rural Emergency Training",
    description:
      "This workshop on Rural Emergency and advanced training is designed to help participants know the primarly actions to take in case of an emergency case.",
    // "Prevention and avoiding malaria in rural communities. Practice and more to cover",
    place: "Kelo",
    feature: "Emergency, Medicine",
    cost: "$500",
    bg: "#82786F",
  },
];
const eventsFeeds = document.querySelector(".events-feeds");

function renderFeeds() {
  events.forEach((ev) => {
    eventsFeeds.innerHTML += `
  
  <div class="events-list flex-display" style='background: ${ev.bg}'>
          <div class="event-header flex-display">
            <div class="date">${ev.date} <br/> ${ev.time}</div>
            <div class="event-title">${ev.title}</div>
          </div>
          <div class="topic-speaker flex-display">
            <div class="topic">${ev.topic}</div>
            <div class="speaker">${ev.speaker}</div>
          </div>
          <div class="event-body flex-display">
            <p class="description">
             ${ev.description}
            </p>
            <p class="place">${ev.place}</p>
            <div class="feature">${ev.feature}</div>
            <div class="cost">${ev.cost}</div>
          </div>
          <div class="event-footer flex-display">
            <button class="btn" style='color:#00bbdc'>Sign up</button>
            <button class="donate btn">Donate</button>
          </div>
        </div>
  `;
  });
}

renderFeeds();
