class GlobalStorage {
    constructor() {
        this.markers = [];
    }
    static getInstance() {
        if (!GlobalStorage.instance) {
            GlobalStorage.instance = new GlobalStorage();
        }
        return GlobalStorage.instance;
    }
    addMarker(marker) {
        this.markers.push(marker);
    }
    static getNativeCaller(functionName, id, stringJsonData) {
        if (navigator.userAgent.indexOf('Android') > -1) {
            return pMarker[`${functionName}`](id, stringJsonData);
        }
        else if (navigator.userAgent.indexOf('iPhone') > -1 ||
            navigator.userAgent.indexOf('iPad') > -1) {
            return window.webkit.messageHandlers[`${functionName}`].postMessage(stringJsonData);
        }
    }
    getMarkerById(id) {
        return _.find(this.markers, function (marker) {
            return marker.id === id;
        });
    }
    removeMarkerById(id) {
        this.markers = _.reject(this.markers, function (marker) {
            return marker.id === id;
        });
    }
    triggerEventByMarkerId(id, event, data) {
        let jsonData = {};
        if (data) {
            try {
                jsonData = JSON.parse(data);
            }
            catch (error) {
                console.error('triggerEventByMarkerId error:', error);
            }
        }
        const marker = this.getMarkerById(id);
        if (!marker) {
            console.error(`Marker with id ${id} not found`);
            return;
        }
        marker.trigger(event, jsonData);
    }
    setCameraTarget(latitude, longitude) {
        const coString = JSON.stringify({
            latitude,
            longitude,
        });
        GlobalStorage.getNativeCaller('setCameraTarget', undefined, coString);
    }
    setCameraZoom(zoom) {
        const coString = JSON.stringify({
            zoom,
        });
        GlobalStorage.getNativeCaller('setCameraZoom', undefined, coString);
    }
    setCameraBearing(bearing) {
        const coString = JSON.stringify({
            bearing,
        });
        GlobalStorage.getNativeCaller('setCameraBearing', undefined, coString);
    }
    setCameraViewingAngle() {
        const coString = JSON.stringify({});
        GlobalStorage.getNativeCaller('setCameraViewingAngle', undefined, coString);
    }
}
class Marker {
    constructor(id) {
        this.id = id;
        _.extend(this, Backbone.Events);
        GlobalStorage.getInstance().addMarker(this);
    }
    hideInfoWindow() {
        const coString = JSON.stringify({
            id: this.id,
        });
        GlobalStorage.getNativeCaller('hideInfoWindow', this.id, coString);
    }
    setPosition(latitude, longitude) {
        const coString = JSON.stringify({
            id: this.id,
            latitude,
            longitude,
        });
        GlobalStorage.getNativeCaller('setPosition', this.id, coString);
    }
    setSnippet(snippet) {
        const coString = JSON.stringify({
            id: this.id,
            snippet,
        });
        GlobalStorage.getNativeCaller('setSnippet', this.id, coString);
    }
    setIcon() {
        const coString = JSON.stringify({
            id: this.id,
        });
        GlobalStorage.getNativeCaller('setIcon', this.id, coString);
    }
    setIconView(iconView) {
        const coString = JSON.stringify({
            id: this.id,
            iconView,
        });
        GlobalStorage.getNativeCaller('setIconView', this.id, coString);
    }
    setGroundAnchor() {
        const coString = JSON.stringify({
            id: this.id,
        });
        GlobalStorage.getNativeCaller('setGroundAnchor', this.id, coString);
    }
    setInfoWindowAnchor() {
        const coString = JSON.stringify({
            id: this.id,
        });
        GlobalStorage.getNativeCaller('setInfoWindowAnchor', this.id, coString);
    }
    setDraggable(draggable) {
        const coString = JSON.stringify({
            id: this.id,
            draggable,
        });
        GlobalStorage.getNativeCaller('setDraggable', this.id, coString);
    }
    setOpacity(opacity) {
        const coString = JSON.stringify({
            id: this.id,
            opacity,
        });
        GlobalStorage.getNativeCaller('setOpacity', this.id, coString);
    }
    setTitle(title) {
        const coString = JSON.stringify({
            id: this.id,
            title,
        });
        GlobalStorage.getNativeCaller('setTitle', this.id, coString);
    }
    setTappable(tappable) {
        const coString = JSON.stringify({
            id: this.id,
            tappable,
        });
        GlobalStorage.getNativeCaller('setTappable', this.id, coString);
    }
    setZIndex(zIndex) {
        const coString = JSON.stringify({
            id: this.id,
            zIndex,
        });
        GlobalStorage.getNativeCaller('setZIndex', this.id, coString);
    }
    showInfoWindow() {
        const coString = JSON.stringify({
            id: this.id,
        });
        GlobalStorage.getNativeCaller('showInfoWindow', this.id, coString);
    }
    drop(options) {
        if (!options.latitude || !options.longitude) {
            console.error('Please pass latitude and longitude');
            return;
        }
        const coString = JSON.stringify({
            id: this.id,
            latitude: options.latitude,
            longitude: options.longitude,
        });
        GlobalStorage.getNativeCaller('dropMarker', this.id, coString);
    }
}
//# sourceMappingURL=pmap.js.map