document.getElementById('weather-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const location = document.getElementById('location-input').value;
    const apiKey = '4c21acfb777747518f9180714250904';
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Location not found');
        }
        return response.json();
      })
      .then(data => {
        document.getElementById('city-name').textContent = data.location.name + ', ' + data.location.country;
        document.getElementById('temperature').textContent = data.current.temp_c;
        document.getElementById('condition').textContent = data.current.condition.text;
        document.getElementById('weather-result').classList.remove('hidden');
      })
      .catch(error => {
        alert(error.message);
        document.getElementById('weather-result').classList.add('hidden');
      });
  });
  