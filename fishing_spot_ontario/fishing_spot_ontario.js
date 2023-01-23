GlobalStorage.getInstance().setCameraTarget(46.30342, -83.787307);
GlobalStorage.getInstance().setCameraZoom(4);
const fishingSpots = [
    {
        name: 'Jordon Creek',
        marker: new Marker('1'),
        species: 'Largemouth Bass',
        latitude: 46.30342,
        longitude: -83.787307,
    },
    {
        name: 'Jordon Creek',
        marker: new Marker('2'),
        species: 'Atlantic Salmon',
        latitude: 44.459619635287766,
        longitude: -79.49802219070834,
    },
    {
        name: 'Jordon Creek',
        marker: new Marker('3'),
        species: 'Brook Trout',
        latitude: 44.328416165218734,
        longitude: -79.27816363856847,
    },
    {
        name: 'Jordon Creek',
        marker: new Marker('4'),
        species: 'Brown Trout',
        latitude: 43.56478806665912,
        longitude: -79.58741522839159,
    },
    {
        name: 'Jordon Creek',
        marker: new Marker('5'),
        species: 'Channel Catfish',
        latitude: 43.27172135332336,
        longitude: -78.99065630115479,
    },
    {
        name: 'Jordon Creek',
        marker: new Marker('6'),
        species: 'Crappie',
        latitude: 43.94695865668029,
        longitude: -78.3552409251901,
    },
];
for (let index = 0; index < fishingSpots.length; index++) {
    const fishingSpot = fishingSpots[index];
    const markerObj = fishingSpot['marker'];
    markerObj.drop({
        latitude: fishingSpot.latitude,
        longitude: fishingSpot.longitude,
    });
    markerObj.setIconView({
        width: 100,
        height: 100,
        url: `https://peakermap.github.io/MapWebViewContent/fishing_spot_ontario/fishing_spot_ontario.html?gdp=${encodeURIComponent(fishingSpot.species)}`,
    });
}
//# sourceMappingURL=fishing_spot_ontario.js.map