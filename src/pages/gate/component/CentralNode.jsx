import gatesBacckground1 from "../../../assets/bgs/gates/gatesBackground1.jpg";

export default function CentralNode() {
  return (
    <div className="relative w-64 rounded-2xl border-2 border-blue-400 bg-black/80 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]">
      <div className="h-full w-full bg-cover bg-center p-0">
        <img
          className="h-full w-full object-cover"
          src={gatesBacckground1}
          alt="Central Node"
        />
      </div>
    </div>
  );
}
