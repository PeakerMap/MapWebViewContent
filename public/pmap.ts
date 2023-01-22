interface MarkerOptions {
  latitude: number;
  longitude: number;
}

/**
 * 
 * 
   let marker = new Marker("1")
    marker.drop({
        latitude:-31.852,
        longitude:151.211
    })

    marker.on("click", function(msg) {
        console.log("Triggered " + msg);
    });
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class GlobalStorage {
  markers: Array<Marker>;
  private static instance: GlobalStorage;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
    this.markers = [];
  }
  public static getInstance(): GlobalStorage {
    if (!GlobalStorage.instance) {
      GlobalStorage.instance = new GlobalStorage();
    }

    return GlobalStorage.instance;
  }
  public addMarker(marker: Marker) {
    this.markers.push(marker);
  }

  static getNativeCaller(
    functionName: string,
    id: string,
    stringJsonData: string,
  ) {
    if (navigator.userAgent.indexOf('Android') > -1) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return pMarker[`${functionName}`](id, stringJsonData);
    } else if (
      navigator.userAgent.indexOf('iPhone') > -1 ||
      navigator.userAgent.indexOf('iPad') > -1
    ) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return window.webkit.messageHandlers[`${functionName}`].postMessage(
        stringJsonData,
      );
    }
  }

  public getMarkerById(id: string): Marker | undefined {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return _.find(this.markers, function (marker) {
      return marker.id === id;
    });
  }
  public removeMarkerById(id: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.markers = _.reject(this.markers, function (marker) {
      return marker.id === id;
    });
  }
  public triggerEventByMarkerId(id: string, event: string, data?: string) {
    let jsonData = {};
    if (data) {
      try {
        jsonData = JSON.parse(data);
      } catch (error) {
        console.error('triggerEventByMarkerId error:', error);
      }
    }

    const marker = this.getMarkerById(id);
    if (!marker) {
      console.error(`Marker with id ${id} not found`);
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    marker.trigger(event, jsonData);
  }

  public setCameraTarget(latitude: number, longitude: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      latitude,
      longitude,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setCameraTarget', undefined, coString);
  }

  setCameraZoom(zoom: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      zoom,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setCameraZoom', undefined, coString);
  }

  setCameraBearing(bearing: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      bearing,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setCameraBearing', undefined, coString);
  }

  setCameraViewingAngle() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({});
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setCameraViewingAngle', undefined, coString);
  }
}

/**
 * Android Marker Class reference: https://developers.google.com/android/reference/com/google/android/gms/maps/model/Marker
 */
class Marker {
  id: string;
  constructor(id: string) {
    this.id = id;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    _.extend(this, Backbone.Events);
    GlobalStorage.getInstance().addMarker(this);
  }

  /**
   * This will hide the info window
   */
  hideInfoWindow() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('hideInfoWindow', this.id, coString);
  }

  /**
   * This will set position of a marker
   * The LatLng value for the marker's position on the map. You can change this value at any time if you want to move the marker.
   */
  setPosition(latitude: number, longitude: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      latitude,
      longitude,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setPosition', this.id, coString);
  }

  /**
   *
   * @param snippet Additional text that's displayed below the title. You can change this value at any time.
   */
  setSnippet(snippet: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      snippet,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setSnippet', this.id, coString);
  }

  /**
   * A bitmap that's displayed for the marker. If the icon is left unset, a default icon is displayed. You can specify an alternative coloring of the default icon using BitmapDescriptorFactory.defaultMarker(float).
   */
  setIcon() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setIcon', this.id, coString);
  }

  /**
   * It will render a webview in naive app. By default, the background of the webview is transparent.
   * You can use htmlString or url to specify the look of the marker
   */
  setIconView(iconView: {
    width?: number;
    height?: number;
    cornerRadius?: number;
    htmlString?: string;
    url?: string;
  }) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      iconView,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setIconView', this.id, coString);
  }

  /**
   * Will decide later
   */
  setGroundAnchor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setGroundAnchor', this.id, coString);
  }

  /**
   * Android reference: https://developers.google.com/android/reference/com/google/android/gms/maps/model/Marker#public-void-setinfowindowanchor-float-anchoru,-float-anchorv
   */
  setInfoWindowAnchor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setInfoWindowAnchor', this.id, coString);
  }

  /**
   *
   * @param draggable If you want to allow the user to drag the marker, set this property to true. You can change this value at any time. The default is false.
   */
  setDraggable(draggable: boolean) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      draggable,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setDraggable', this.id, coString);
  }

  /**
   *
   * @param opacity Sets the alpha (opacity) of the marker. This is a value from 0 to 1, where 0 means the marker is completely transparent and 1 means the marker is completely opaque.
   */
  setOpacity(opacity: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      opacity,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setOpacity', this.id, coString);
  }

  /**
   *
   * @param title A text string that's displayed in an info window when the user taps the marker. You can change this value at any time.
   */
  setTitle(title: string) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      title,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setTitle', this.id, coString);
  }

  setTappable(tappable: boolean) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      tappable,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setTappable', this.id, coString);
  }

  setZIndex(zIndex: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
      zIndex,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('setZIndex', this.id, coString);
  }

  showInfoWindow() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const coString = JSON.stringify({
      id: this.id,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('showInfoWindow', this.id, coString);
  }

  /**
   * When called, this will drop a marker to the map
   * @param options example: {latitude:-31.852,longitude:151.211}
   */
  drop(options: MarkerOptions) {
    if (!options.latitude || !options.longitude) {
      console.error('Please pass latitude and longitude');
      return;
    }
    const coString = JSON.stringify({
      id: this.id,
      latitude: options.latitude,
      longitude: options.longitude,
    });
    // we will need to device how to pass this id
    // could be part of the coString
    GlobalStorage.getNativeCaller('dropMarker', this.id, coString);
  }
}
