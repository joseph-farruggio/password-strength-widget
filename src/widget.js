export default () => ({
	// apiKey: '63fd824580873e331856e6de79296e85',
	// location: {
	//     lat: null,
	//     lon: null,
	// },
	// input: '',
	// time: null,
	// weather: null,
	// async convertLocation() {
	//     var zip = (this.input != '') ? this.input : '60604';
	//     const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=${this.apiKey}`);
	//     return response.json();
	// },
	// async getWeather() {
	//     let response = await this.convertLocation();
	//     this.location.lat = response.lat;
	//     this.location.lon = response.lon;
	//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.location.lat}&lon=${this.location.lon}&appid=${this.apiKey}&units=imperial`)
	//         .then(response => {
	//             if (!response.ok) alert(`Something went wrong: ${response.status} - ${response.statusText}`)
	//             return response.json()
	//         })
	//         .then(data => this.weather = data)
	// },
	// init() {
	//     var time = new Date();
	//     this.time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
	//     this.getWeather();
	// }
});
