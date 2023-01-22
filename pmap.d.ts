interface MarkerOptions {
    latitude: number;
    longitude: number;
}
declare class GlobalStorage {
    markers: Array<Marker>;
    private static instance;
    private constructor();
    static getInstance(): GlobalStorage;
    addMarker(marker: Marker): void;
    static getNativeCaller(functionName: string, id: string, stringJsonData: string): any;
    getMarkerById(id: string): Marker | undefined;
    removeMarkerById(id: string): void;
    triggerEventByMarkerId(id: string, event: string, data?: string): void;
    setCameraTarget(latitude: number, longitude: number): void;
    setCameraZoom(zoom: number): void;
    setCameraBearing(bearing: number): void;
    setCameraViewingAngle(): void;
}
declare class Marker {
    id: string;
    constructor(id: string);
    hideInfoWindow(): void;
    setPosition(latitude: number, longitude: number): void;
    setSnippet(snippet: string): void;
    setIcon(): void;
    setIconView(iconView: {
        width?: number;
        height?: number;
        cornerRadius?: number;
        htmlString?: string;
        url?: string;
    }): void;
    setGroundAnchor(): void;
    setInfoWindowAnchor(): void;
    setDraggable(draggable: boolean): void;
    setOpacity(opacity: number): void;
    setTitle(title: string): void;
    setTappable(tappable: boolean): void;
    setZIndex(zIndex: number): void;
    showInfoWindow(): void;
    drop(options: MarkerOptions): void;
}
