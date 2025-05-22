import background from "./assets/bg.png";

import { Counter } from "./components/Counter";

export function App() {
  return (
    <div
      className="flex flex-col items-center h-screen px-10 py-10 bg-repeat-round bg-size-[600px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="fixed top-0 left-0 w-full h-full bg-primary-100 opacity-80"></div>
      <div className="z-10">
        <h1 className="text-2xl font-bold text-center text-primary-500/70 leading-none">
          Nosso Contador
        </h1>
        <h2 className="text-5xl mb-10 text-center text-primary-500 leading-none font-bold">
          Natalia&Iran
        </h2>

        <div className="flex flex-col gap-5">
          <Counter
            title="Pedido de Namoro"
            startDate={new Date("2025-05-02T23:05:00")}
          />
          <Counter
            title="Primeiro Beijo"
            startDate={new Date("2025-04-13T00:30:00")}
          />
          <Counter
            title="Primeiro Encontro"
            startDate={new Date("2025-04-12T20:30:00")}
          />
          <Counter
            title="Primeira Mensagem"
            startDate={new Date("2025-03-28T23:36:00")}
          />
        </div>
      </div>
    </div>
  );
}
