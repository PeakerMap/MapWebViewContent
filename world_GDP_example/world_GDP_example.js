const worldGDP = [
    {
        country: 'US',
        marker: new Marker('1'),
        gdp: '18,321',
        latitude: 37.2586611,
        longitude: -104.648,
    },
    {
        country: 'China',
        marker: new Marker('2'),
        gdp: '18,321',
        latitude: 34.87,
        longitude: 103.675,
    },
    {
        country: 'Japan',
        marker: new Marker('3'),
        gdp: '4,300',
        latitude: 36.4571155,
        longitude: 138.708139,
    },
    {
        country: 'Germany',
        marker: new Marker('4'),
        gdp: '4,031',
        latitude: 51.0485,
        longitude: 10.695019,
    },
    {
        country: 'India',
        marker: new Marker('5'),
        gdp: '3,468',
        latitude: 23.15322,
        longitude: 79.8,
    },
    {
        country: 'United Kingdom',
        marker: new Marker('6'),
        gdp: '3,198',
        latitude: 54.836,
        longitude: -2.97931,
    },
    {
        country: 'France',
        marker: new Marker('7'),
        gdp: '2,778',
        latitude: 46.631,
        longitude: 2.55462307,
    },
    {
        country: 'Canada',
        marker: new Marker('8'),
        gdp: '2,200',
        latitude: 57.776,
        longitude: -100.159,
    },
    {
        country: 'Russia',
        marker: new Marker('9'),
        gdp: '2,133',
        latitude: 62.23217,
        longitude: 97.7469,
    },
    {
        country: 'Brazil',
        marker: new Marker('10'),
        gdp: '1,894',
        latitude: -8.249,
        longitude: -53.133,
    },
    {
        country: 'Iran',
        marker: new Marker('11'),
        gdp: '1,973',
        latitude: 32.2335,
        longitude: 54.4013,
    },
    {
        country: 'Italy',
        marker: new Marker('12'),
        gdp: '1,996',
        latitude: 43.045,
        longitude: 12.334,
    },
    {
        country: 'South Korea',
        marker: new Marker('13'),
        gdp: '1,734',
        latitude: 36.454,
        longitude: 127.86,
    },
    {
        country: 'Australia',
        marker: new Marker('14'),
        gdp: '1,724',
        latitude: -24.636556084627806,
        longitude: 135.81478745042122,
    },
];
for (let index = 0; index < worldGDP.length; index++) {
    const country = worldGDP[index];
    const AustraliaMarker = country['marker'];
    AustraliaMarker.drop({
        latitude: country.latitude,
        longitude: country.longitude,
    });
    AustraliaMarker.setIconView({
        width: 100,
        height: 100,
        url: `https://peakermap.github.io/MapWebViewContent/world_GDP_example/world_GDP_example.html?gdp=${country.gdp}`,
    });
}
//# sourceMappingURL=world_GDP_example.js.map