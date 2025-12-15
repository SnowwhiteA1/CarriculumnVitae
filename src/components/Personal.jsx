export default function Personal() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-black-500 mb-2 bg-gray-300 px-4 py-2 w-full block">
        Personal Details 
      </h2>

      <p className="flex mb-2">
        <span className="font-semibold w-40">Full Names:</span>
        <span className="ml-4">Tshepiso Perseverance Makuoa</span>
      </p>

      <p className="flex mb-2">
        <span className="font-semibold w-40">Date of Birth:</span>
        <span className="ml-4">2004-03-29</span>
      </p>

      <p className="flex mb-2">
        <span className="font-semibold w-40">Current Location:</span>
        <span className="ml-4">Mbombela (Willing to relocate)</span>
      </p>
    </section>
  );
}
