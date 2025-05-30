"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, MapPin, Navigation } from "lucide-react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet icon issue for Next.js
delete (L.Icon.Default as unknown as { prototype: { _getIconUrl: unknown } })
  .prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Dynamic imports
const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  {
    ssr: false,
  }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  {
    ssr: false,
  }
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
// Remove dynamic import for useMapEvents and import it statically at the top:
import { useMapEvents } from "react-leaflet";

export default function LocationPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    postal_code: "",
    address: "",
    location: "", // NEW: to store lat/lng
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showMap, setShowMap] = useState(false);
  const [markerPos, setMarkerPos] = useState<[number, number] | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setFormData({
        postal_code: parsed.postal_code || "",
        address: parsed.address || "",
        location: parsed.location || "",
      });
    }
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.postal_code.trim())
      newErrors.postal_code = "Post Code is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      const existingData = JSON.parse(localStorage.getItem("formData") || "{}");
      const allData = { ...existingData, ...formData };
      localStorage.setItem("formData", JSON.stringify(allData));
      router.push("/form/review");
    }
  };

  const handleBack = () => router.push("/form/client-info");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const LocationMarker = () => {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        setMarkerPos([lat, lng]);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
          );
          const data = await res.json();

          const locationAddress = data?.display_name || "Unknown address";

          setFormData((prev) => ({
            ...prev,
            location: locationAddress, // ✅ Set only the location field
          }));
        } catch (error) {
          console.error("Reverse geocoding failed", error);
        }
      },
    });

    return markerPos ? <Marker position={markerPos} /> : null;
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Image
            src="/images/logo.png"
            alt="CQD Logo"
            width={120}
            height={60}
            className="mx-auto mb-8"
          />
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <FileText className="text-white" />
                </div>
                <span className="text-sm font-medium text-[#0F2A5C]">
                  Client Info
                </span>
              </div>
              <div className="w-[200px] h-1 bg-blue-900" />
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" />
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Location
                </span>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-white shadow-lg">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Required location
            </h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="postal_code">Post Code</Label>
                <Input
                  id="postal_code"
                  type="text"
                  value={formData.postal_code}
                  onChange={(e) =>
                    handleInputChange("postal_code", e.target.value)
                  }
                  className={
                    errors.postal_code ? "border-red-500 mt-2" : "mt-2"
                  }
                />
                {errors.postal_code && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.postal_code}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={errors.address ? "border-red-500 mt-2" : "mt-2"}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className={errors.location ? "border-red-500 mt-2" : "mt-2"}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                )}
              </div>

              <Button
                variant="outline"
                onClick={() => setShowMap((prev) => !prev)}
                className="w-full py-3 border-gray-300"
              >
                <Navigation className="w-4 h-4 mr-2" />
                {showMap ? "Hide Map" : "Find Your Location"}
              </Button>

              {showMap && (
                <div className="w-full h-[300px] rounded-lg overflow-hidden">
                  <MapContainer
                    center={markerPos || [54.5, -3.5]}
                    zoom={markerPos ? 15 : 6}
                    scrollWheelZoom={true}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <LocationMarker />
                  </MapContainer>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 py-3"
              >
                ← Back
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 py-3 bg-blue-900 hover:bg-blue-800 text-white"
              >
                Next →
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
