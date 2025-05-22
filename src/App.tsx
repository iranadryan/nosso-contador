import background from "./assets/bg.png";

import { Counter } from "./components/Counter";

export function App() {
  return (
    <div
      className="flex flex-col items-center h-screen px-10 py-10 bg-repeat-round bg-size-[600px]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-2xl font-bold text-center text-primary-500/70 leading-none z-10">
        Nosso Contador
      </h1>
      <h2 className="text-5xl mb-10 text-center text-primary-500 leading-none font-bold -mt-2">
        Natalia&Iran
      </h2>

      <div className="flex flex-col gap-8">
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
  );
}
