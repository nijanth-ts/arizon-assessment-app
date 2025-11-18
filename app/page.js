export default function Home() {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background-image.jpg')" }}
    >
      {/* Optional Hero Content */}
      <div className="relative flex items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl font-bold md:text-6xl">Welcome to Our Store</h1>
      </div>
    </div>
  );
}
