import React from "react";
import "./styles.scss";

function App() {
  // ******start-selectors
  let weightRange = document.getElementById("weight");
  let heightRange = document.getElementById("height");

  // ******end-selectors

  const firstClick = () => {
    const card = document.getElementsByClassName("card")[0];
    card.style.transform = "rotateY(180deg)";
  };

  const secondClick = () => {
    const card = document.getElementsByClassName("card")[0];
    card.style.transform = "rotateY(0deg)";
  };

  const val = () => {
    let text = document.getElementById("circle");
    let bmiCalc = Math.round(
      (weightRange.value / (heightRange.value * heightRange.value)) * 10000
    );
    document.getElementById("circle").innerHTML = bmiCalc;
    if (bmiCalc <= 18) {
      text.style.color = "blue";
    } else if (bmiCalc > 18 && bmiCalc <= 25) {
      text.style.color = "green";
    } else if (bmiCalc > 25 && bmiCalc <= 30) {
      text.style.color = "orange";
    } else {
      text.style.color = "red";
    }
  };

  const userWeight = () => {
    weightRange = document.getElementById("weight");
    document.getElementById(
      "userWeight"
    ).innerHTML = `Weight : ${weightRange.value} Kg`;
    val();
  };

  const userHeight = () => {
    heightRange = document.getElementById("height");
    document.getElementById(
      "userHeight"
    ).innerHTML = `Height : ${heightRange.value} Cm`;
    // document.getElementById('circle').innerHTML = weightRange.value/(heightRange.value*heightRange.value)
    val();
  };

  return (
    <div>
      <main className=" d-flex justify-content-center align-items-center">
        <section className="card">
          {/* ******start-frontCard */}
          <div className="front">
            <div
              id="header"
              className="d-flex align-items-center justify-content-center"
            >
              <h2>BMI Calculator</h2>
            </div>

            {/* ******start-weightField */}
            <div id="weightField">
              <h6 id="userWeight" className="text-center">
                Weight
              </h6>
              <div className="row1 d-flex justify-content-center mt-4">
                <input
                  type="range"
                  onInput={userWeight}
                  name=""
                  id="weight"
                  min="20"
                  max="270"
                  onChange={(e) => {
                    console.log(weightRange.value);
                  }}
                />
              </div>
            </div>
            {/* ******end-weightField */}

            {/* ******start-heightField */}
            <div id="heightField">
              <h6 id="userHeight" className="text-center">
                Height
              </h6>
              <div className="row1 d-flex justify-content-center mt-4">
                <input
                  type="range"
                  onInput={userHeight}
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                  name=""
                  id="height"
                  min="120"
                  max="210"
                />
              </div>
            </div>
            {/* ******end-heightField */}

            {/* ******start-resultArea */}
            <div id="result">
              <h4 className="text-center">Your BMI is</h4>
              <div
                id="circle"
                className="d-flex justify-content-center align-items-center"
              >
                0
              </div>
            </div>
            {/* ******end-resultArea */}

            <div className="info" onClick={firstClick}>
              i
            </div>
          </div>
          {/* ******end-frontCard */}

          <div className="back p-1 bg-dark text-white">
            <p>
              The body mass index (BMI) is a measure that uses your height and
              weight to work out if your weight is healthy.
            </p>
            <p>
              For most adults, an ideal BMI is in the 18.5 to 24.9 range. For
              children and young people aged 2 to 18, the BMI calculation takes
              into account age and gender as well as height and weight. &nbsp;
              <br />
              If your BMI is:
              <br />
              <mark className="bg-primary">Below 18.5</mark> – you're in the
              underweight range
              <br />
              <mark className="bg-success">Between 18.5 and 24.9</mark> – you're
              in the healthy weight range
              <br />
              <mark className="bg-warning">Between 25 and 29.9</mark> – you're
              in the overweight range
              <br />
              <mark className="bg-danger">Between 30 and 39.9</mark> – you're in
              the obese range
            </p>
            <div className="del" onClick={secondClick}>
              X
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
