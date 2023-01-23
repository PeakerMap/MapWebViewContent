/**
 * Move map camera to Ontario
 */
GlobalStorage.getInstance().setCameraTarget(46.30342, -83.787307);
/**
 * zoom in the right level
 */
GlobalStorage.getInstance().setCameraZoom(4);
const fishingSpots = [
  {
    name: 'Jordon Creek',
    marker: new Marker('1'),
    species: 'Largemouth Bass', // TODO: when there is a space here, url not working, need to fix later
    latitude: 46.30342, //
    longitude: -83.787307,
  },
  {
    name: 'Jordon Creek',
    marker: new Marker('2'),
    species: 'Atlantic Salmon', // TODO: when there is a space here, url not working, need to fix later
    latitude: 44.459619635287766, //44.45444612760595, -79.49802219070834
    longitude: -79.49802219070834,
  },
  {
    name: 'Jordon Creek',
    marker: new Marker('3'),
    species: 'Brook Trout', // TODO: when there is a space here, url not working, need to fix later
    latitude: 44.328416165218734, //44.328416165218734, -79.27816363856847
    longitude: -79.27816363856847,
  },
  {
    name: 'Jordon Creek',
    marker: new Marker('4'),
    species: 'Brown Trout', // TODO: when there is a space here, url not working, need to fix later
    latitude: 43.56478806665912, //43.56478806665912, -79.58741522839159
    longitude: -79.58741522839159,
  },
  {
    name: 'Jordon Creek',
    marker: new Marker('5'),
    species: 'Channel Catfish', // TODO: when there is a space here, url not working, need to fix later
    latitude: 43.27172135332336, //43.27172135332336, -78.99065630115479
    longitude: -78.99065630115479,
  },
  {
    name: 'Jordon Creek',
    marker: new Marker('6'),
    species: 'Crappie', // TODO: when there is a space here, url not working, need to fix later
    latitude: 43.94695865668029, //43.94695865668029, -78.3552409251901
    longitude: -78.3552409251901,
  },
];

for (let index = 0; index < fishingSpots.length; index++) {
  const fishingSpot = fishingSpots[index];
  const markerObj = fishingSpot['marker'];

  //-24.636556084627806, 135.81478745042122
  markerObj.drop({
    latitude: fishingSpot.latitude,
    longitude: fishingSpot.longitude,
  });

  markerObj.setIconView({
    width: 100,
    height: 100,
    url: `http://localhost:3000/fishing_spot_ontario/fishing_spot_ontario.html?gdp=${encodeURIComponent(
      fishingSpot.species,
    )}`,
  });
}
