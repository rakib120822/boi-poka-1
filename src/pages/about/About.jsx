import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-base-100 py-16 px-4 md:px-20">
      <title>BoiPoka - About</title>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8">About Boi-Poka</h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          Welcome to <span className="font-semibold">Boi-Poka</span> — your
          one-stop online destination for books of all kinds. Whether you're a
          passionate reader, a student hunting for textbooks, or someone looking
          for the next great adventure, Boi-Poka is here to make your reading
          journey easy, enjoyable, and affordable.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
              alt="Books"
              className="rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-gray-700 text-lg">
              We built <span className="font-semibold">Boi-Poka</span> with the
              goal of bringing books closer to every reader. Our platform offers
              a wide variety of genres—from fiction, non-fiction, and academic
              books to rare finds and bestsellers. With a user-friendly
              interface powered by React and styled with Tailwind CSS and
              DaisyUI, finding your next favorite book has never been easier.
            </p>

            <div className="bg-base-200 p-6 rounded-lg shadow-md space-y-4">
              <h2 className="text-2xl font-semibold">
                What makes Boi-Poka unique:
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Curated Collection:</span>{" "}
                  Carefully selected books to ensure quality and variety.
                </li>
                <li>
                  <span className="font-semibold">Seamless Shopping:</span>{" "}
                  Browse, add to cart, and purchase in just a few clicks.
                </li>
                <li>
                  <span className="font-semibold">Secure and Fast:</span> Smooth
                  navigation and safe transactions.
                </li>
                <li>
                  <span className="font-semibold">Community-Oriented:</span>{" "}
                  Discover new favorites through reviews and recommendations.
                </li>
              </ul>
            </div>

            <p className="text-gray-700 text-lg">
              At <span className="font-semibold">Boi-Poka</span>, we believe
              every book has a story, and every reader deserves the perfect
              book. Whether you’re here to learn, explore, or escape into
              another world, Boi-Poka is here to help you turn the page.
            </p>

            <p className="text-center text-lg font-semibold mt-4">
              Happy Reading! <br />— The Boi-Poka Team
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
