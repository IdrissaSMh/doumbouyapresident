import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Coordonnées approximatives de Kipé Dadia, Conakry, Guinée
  const location: [number, number] = [-13.6773, 9.5733];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken || isMapLoaded) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: location,
        zoom: 14,
      });

      // Add marker
      marker.current = new mapboxgl.Marker({ color: '#C53030' })
        .setLngLat(location)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h3 style="margin: 0; font-weight: bold;">Alliance Doumbouya Président</h3><p style="margin: 5px 0 0 0;">Kipé Dadia – C/Ratoma</p>')
        )
        .addTo(map.current);

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      setIsMapLoaded(true);
    } catch (error) {
      console.error('Erreur lors du chargement de la carte:', error);
    }

    return () => {
      marker.current?.remove();
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!isMapLoaded && !mapboxToken) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Configuration de la carte
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Pour afficher la carte interactive, veuillez entrer votre clé API Mapbox.
                Vous pouvez obtenir une clé gratuite sur{' '}
                <a
                  href="https://mapbox.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  mapbox.com
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="pk.eyJ1IjoiZXhhbXBsZS..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={() => {
                  if (mapboxToken.trim()) {
                    setIsMapLoaded(false);
                  }
                }}
              >
                Charger la carte
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default ContactMap;
