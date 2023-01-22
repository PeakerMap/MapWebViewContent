/**
 * created 2 markers
 * one with id:1, one with id:2
 */
let marker1 = new Marker('1');

/**
 * when you call this, it will drop a marker in the native map
 */
marker1.drop({
  latitude: -31.852,
  longitude: 151.211,
});

marker1.setTitle('This is an title');
marker1.setSnippet('This is an snippet');
marker1.setIconView({
  width: 100,
  height: 100,
  cornerRadius: 50,
  htmlString: '<html><body><h1>Hello, world!</h1></body></html>',
});

/**
 * register event listener for marker 1
 */
marker1.on('click', function (msg) {
  console.log('Triggered 1' + msg);
});

let marker2 = new Marker('2');
marker2.drop({
  latitude: -30.852,
  longitude: 150.211,
});

/**
 * register event listener for marker 2
 */
marker2.on('click', function (msg) {
  console.log('Triggered 2' + msg);
});

/**
 * trigger an event for marker 1. This can be sent from native code with sendJavascriptToJs method
 */
GlobalStorage.getInstance().triggerEventByMarkerId('1', 'click');

GlobalStorage.getInstance().triggerEventByMarkerId('2', 'click');
