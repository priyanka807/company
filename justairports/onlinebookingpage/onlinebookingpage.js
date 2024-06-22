
// <!-- online welcome_section    javascript   start-->
const pick_up = document.getElementById("pick_up");
const drop_off = document.getElementById("drop_off");
const baby_sitting = document.getElementById("baby_sitting");
const baby_sitting_dropdown = document.getElementById(
  "baby_sitting_dropdown"
).value;

let selectedJourneryType = document.querySelector(
  'input[name="journey_type"]:checked'
).value;

let selectedPaymentType = document.querySelector(
  'input[name="payment_type"]:checked'
).value;

const get_estimate = document.getElementById("get_estimate");

const selectAirportStation = document.querySelectorAll(
  ".select_airpot_station"
);
selectAirportStation.forEach((elem) => {
  elem.addEventListener("click", function () {
    document
      .querySelector(".active_select_airpot_station")
      ?.classList.remove("active_select_airpot_station");
    elem.classList.add("active_select_airpot_station");
    if (
      elem.querySelector('input[type="radio"]').value === "to_airport"
    ) {
      selectedJourneryType = elem.querySelector(
        'input[type="radio"]'
      ).value;

      pick_up.style.display = "block";
      drop_off.style.display = "none";
    } else {
      selectedJourneryType = elem.querySelector(
        'input[type="radio"]'
      ).value;

      pick_up.style.display = "none";
      drop_off.style.display = "block";
    }
  });
});

const select_payment_oftion = document.querySelectorAll(
  ".select_payment_oftion"
);
select_payment_oftion.forEach((elem) => {
  elem.addEventListener("click", function () {
    document
      .querySelector(".active_payment_type")
      ?.classList.remove("active_payment_type");
    elem.classList.add("active_payment_type");
    selectedPaymentType = elem.querySelector('input[type="radio"]').value;
  });
});

baby_sitting.addEventListener("change", function () {
  if (baby_sitting.checked) {
    baby_sitting_dropdown.classList.remove("hidden");
  } else {
    baby_sitting_dropdown.classList.add("hidden");
  }
});

document
  .getElementById("airport_payment_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  
    const select_pick_post =
      document.getElementById("select_pick_post").value;

    const select_pick_airport = document.getElementById(
      "select_pick_airport"
    ).value;

    const select_drop_post =
      document.getElementById("select_drop_post").value;
    const select_drop_airport = document.getElementById(
      "select_drop_airport"
    ).value;
    const passengers = document.getElementById("passengers").value;
    const check_in_luggage =
      document.getElementById("check_in_luggage").value;
    const hand_luggage = document.getElementById("hand_luggage").value;
    const no_of_childs = document.getElementById("no_of_childs").value;
    console.log(select_drop_airport, select_drop_post, "select-drop");
    console.log(select_pick_airport, select_pick_post, "select-pick");

   
    document.getElementById("airport-content").innerText =
      selectedJourneryType;
  });

// <!--online welcome_section     javascript   end-->