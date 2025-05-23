import { useState } from "react";

export function SaveWithUs() {
  const [savings, setSavings] = useState(0);
  const [amount, setAmount] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setSavings(savings + Number(amount));
    setAmount("");
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Start Saving</h3>
      <form onSubmit={handleSave} className="space-y-3">
        <input
          type="number"
          placeholder="Amount to Save"
          className="w-full border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="bg-yellow-600 text-white px-4 py-2 rounded">
          Save Now
        </button>
      </form>
      <p className="mt-4 text-sm">💰 Total Saved: KES {savings}</p>
    </div>
  );
}
