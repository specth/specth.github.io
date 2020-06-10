window.addEventListener("load", () => {
    let bmiObj = document.getElementById("bmi");
    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");

    let calculateBmi = () => {
        let height = heightObj.value.replace(",", ".");
        let weight = weightObj.value.replace(",", ".");

        let bmi = weight / (height * height);
        let result = Math.round(bmi * 10) / 10;
        bmiObj.innerHTML = result;

        document.getElementById("weight-low").style.display = "none";
        document.getElementById("weight-normal").style.display = "none";
        document.getElementById("weight-high").style.display = "none";

        if (result < 18.5 && result != 0) {
            document.getElementById("weight-low").style.display = "inline-block";
        } else if (result >= 25) {
            document.getElementById("weight-high").style.display = "inline-block";
        } else if (!Number.isInteger(result)) {
            bmiObj.innerHTML = "Please enter a valid number";
        } else if (result >= 18.5 && result < 25) {
            document.getElementById("weight-normal").style.display = "inline-block";
        }
    };

    let bmiCalculator = document.getElementById("bmi-calculator");

    bmiCalculator.addEventListener("keyup", () => {
        calculateBmi();
    });
    bmiCalculator.addEventListener("change", () => {
        calculateBmi();
    });
});