<script>
var elStatus = document.getElementsByClassName('Lorauna')[0];
var elTemperature = document.getElementsByClassName('Lorauna-Temperatur')[0];
var elAareTemperature = document.getElementsByClassName('Aare-Temperatur')[0];
var elAirTemperature = document.getElementsByClassName('Luft-Temperatur')[0];

fetch('https://lorauna.now.sh/api', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "query": "{ allSaunas { name, current_seats, max_seats, capacity_message, current_temperature } }" })
}).then(
    res => res.json()
).then(
    res => {
        elStatus.firstChild.nodeValue = res.data.allSaunas[0].capacity_message;
        elTemperature.firstChild.nodeValue = (Math.round( res.data.allSaunas[0].current_temperature * 10 ) / 10) + " °";
    }
);

fetch(' https://aareguru.existenz.ch/v2018/current?city=bern').then(
    res => res.json()
).then(
    res => {
        elAareTemperature.firstChild.nodeValue = (Math.round( res.aare.temperature * 10 ) / 10) + " °";
        elAirTemperature.firstChild.nodeValue = (Math.round( res.weather.current.tt * 10 ) / 10) + " °";
    }
);
</script>