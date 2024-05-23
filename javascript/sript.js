document.getElementById('travel-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const numPeople = parseInt(document.getElementById('num-people').value);
    const days = parseInt(document.getElementById('days').value);
    const accommodation = document.getElementById('accommodation').value;
    const transportation = document.querySelector('input[name="transportation"]:checked').value;
    const insurance = document.getElementById('insurance').checked;

    let accommodationCostPerDay;
    switch (accommodation) {
        case 'hotel':
            accommodationCostPerDay = 100;
            break;
        case 'hostel':
            accommodationCostPerDay = 50;
            break;
        case 'apartment':
            accommodationCostPerDay = 75;
            break;
    }

    let transportationCost;
    switch (transportation) {
        case 'plane':
            transportationCost = 200;
            break;
        case 'train':
            transportationCost = 100;
            break;
        case 'car':
            transportationCost = 50;
            break;
    }

    const insuranceCost = insurance ? 20 : 0;

    const totalCost = (accommodationCostPerDay * days + transportationCost + insuranceCost) * numPeople;

    const resultText = `Загальна вартість вашої поїздки до ${destination} - $${totalCost.toFixed(2)}`;

    document.getElementById('result').textContent = resultText;
});
