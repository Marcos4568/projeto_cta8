"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [tempDHT, setTempDHT] = useState<number | null>(null);
  const [umidade, setUmidade] = useState<number | null>(null);
  const [tempDS18B20, setTempDS18B20] = useState<number | null>(null);
  const [portaAberta, setPortaAberta] = useState<boolean | null>(null);

  // Simulação ou futura chamada à API
  useEffect(() => {
    const interval = setInterval(() => {
      // Aqui futuramente você vai buscar os dados reais da API
      setTempDHT(22 + Math.random() * 3);       // DHT11
      setUmidade(50 + Math.random() * 10);      // DHT11
      setTempDS18B20(25 + Math.random() * 2);  // DS18B20
      setPortaAberta(Math.random() > 0.5);     // Switch
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Monitoramento</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Sensor DHT11 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Sensor DHT11</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">
            {tempDHT !== null ? `${tempDHT.toFixed(1)}°C` : "--"}
          </p>
          <p className="text-lg text-gray-500 mt-1">
            Umidade: {umidade !== null ? `${umidade.toFixed(1)}%` : "--"}
          </p>
        </div>

        {/* Sensor DS18B20 */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Sensor DS18B20</h2>
          <p className="text-3xl font-bold text-orange-500 mt-2">
            {tempDS18B20 !== null ? `${tempDS18B20.toFixed(1)}°C` : "--"}
          </p>
        </div>

        {/* Switch da porta */}
        <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-700">Porta</h2>
          <p className={`text-3xl font-bold mt-2 ${portaAberta ? "text-green-600" : "text-red-600"}`}>
            {portaAberta === null ? "--" : portaAberta ? "Aberta" : "Fechada"}
          </p>
        </div>
      </div>
    </main>
  );
}
