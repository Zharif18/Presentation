const events = [
    { name: "Seminar on AI", seats: 10 },
    { name: "Cultural Festival", seats: 20 },
    { name: "Workshop on Python", seats: 15 }
];
const eventList = document.getElementById("eventList");
const eventSelect = document.getElementById("eventSelect");

events.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Seats Available: <span id="seats-${index}">${event.seats}</span></p>
    `;
    eventList.appendChild(card);
    const option = document.createElement("option");
    option.value = index;
    option.textContent = event.name;
    eventSelect.appendChild(option);
});
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const eventIndex = document.getElementById("eventSelect").value;
    if(name === "" || email === "") {
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }
    if(events[eventIndex].seats > 0){
        events[eventIndex].seats -= 1;
        document.getElementById(`seats-${eventIndex}`).textContent = events[eventIndex].seats;
        message.textContent = `Registration successful for ${events[eventIndex].name}`;
        message.style.color = "green";
        form.reset();
    } else {
        message.textContent = "Sorry, no seats available for this event.";
        message.style.color = "red";
    }
});
