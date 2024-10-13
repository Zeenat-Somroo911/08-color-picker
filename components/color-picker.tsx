"use client"; // Enables client-side rendering for this component

import { useState, ChangeEvent } from "react";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#000000");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setColor(e.target.value);
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(color);
    alert("Copied Successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-purple-600">
      <Card className="w-full max-w-md mx-auto p-8 shadow-lg rounded-lg bg-white">
        <div className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-800">COLOR PICKER</CardTitle>
          <CardDescription className="text-gray-600">
            Select a color and copy the hex and RGB values.
          </CardDescription>
        </div>
        <div className="grid gap-4">
          <div
            className="w-full h-48 rounded-lg border-4 border-gray-200"
            style={{ backgroundColor: color }}
          />
          <div className="grid gap-2 text-center">
            <div className="text-2xl font-semibold text-gray-800">{color}</div>
            <div className="text-gray-500">
              RGB: {parseInt(color.slice(1, 3), 16)},{" "}
              {parseInt(color.slice(3, 5), 16)},{" "}
              {parseInt(color.slice(5, 7), 16)}
            </div>
            <Button
              onClick={copyToClipboard}
              variant="default"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Copy to Clipboard
            </Button>
          </div>
          <Input
            type="color"
            value={color}
            onChange={handleColorChange}
            className="w-full h-16 p-0 border-0 rounded-md cursor-pointer"
          />
        </div>
      </Card>
      <footer className="mt-8 text-center text-black-900">
        Developed by Zeenat Somroo
      </footer>
    </div>
  );
}
