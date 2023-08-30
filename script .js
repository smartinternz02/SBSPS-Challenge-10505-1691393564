document.addEventListener("DOMContentLoaded", function() {
    const chargingForm = document.getElementById("charging-form");
    const submitBtn = document.getElementById("submit-btn");
    const rangeResult = document.getElementById("range-result");

    submitBtn.addEventListener("click", function() {
        const stationName = document.getElementById("station-name").value;
        const billing = document.getElementById("billing").value;
        const chargingType = document.getElementById("charging-type").value;
        const chargingTime = parseFloat(document.getElementById("charging-time").value);

        const chargingData = {
            stationName: stationName,
            billing: billing,
            chargingType: chargingType,
            chargingTime: chargingTime
        };

        // Store charging data in localStorage or a database
        // Example: localStorage.setItem("chargingData", JSON.stringify(chargingData));
        const storedChargingData = JSON.parse(localStorage.getItem("chargingData")) || [];
        storedChargingData.push(chargingData);
        localStorage.setItem("chargingData", JSON.stringify(storedChargingData));

        alert("Charging data submitted successfully!");
    });

    document.getElementById("current-battery").addEventListener("input", function() {
        const currentBattery = parseInt(this.value);
        const destination = document.getElementById("destination").value;

        if (currentBattery >= 0 && currentBattery <= 100) {
            const range = calculateRange(currentBattery);
            rangeResult.textContent = `Your EV can reach ${destination} with ${range}% battery remaining.`;
        } else {
            rangeResult.textContent = "Please enter a valid battery percentage.";
        }
    });

    function calculateRange(currentBattery) {
        // You can customize the range calculation algorithm based on your EV's specifications
        // Example: return currentBattery * 2;
        const milesPerPercentage = 3; // Adjust this value based on your EV's specifications
        const estimatedRange = currentBattery * milesPerPercentage;
        return estimatedRange;
    }
});