export function RepayLoan() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Repay Your Loan</h3>
      <form className="space-y-3">
        <input
          type="number"
          placeholder="Amount to Repay"
          className="w-full border p-2 rounded"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Repay Now
        </button>
      </form>
    </div>
  );
}
