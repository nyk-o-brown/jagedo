export function LoanForm() {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-2">Request a Loan</h3>
      <form className="space-y-3">
        <input
          type="number"
          placeholder="Loan Amount"
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Why do you need the loan?"
          className="w-full border p-2 rounded"
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Submit Request
        </button>
      </form>
    </div>
  );
}
