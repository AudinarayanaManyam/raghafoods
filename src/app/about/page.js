export default function About() {
  return (
    <div className="py-6 sm:py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">About Raaga Foods</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Our Story</h2>
            <p className="text-gray-700">
              Founded with a passion for authentic food, Raaga Foods began as a small family 
              business and has grown into a trusted name in traditional food products. 
              We take pride in our heritage recipes and commitment to quality.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700">
              At Raaga Foods, we are committed to delivering authentic, high-quality 
              food products that bring the traditional taste of home to your kitchen.
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3">Our Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <div className="text-center p-2 sm:p-4">
                <h3 className="font-semibold text-orange-600">Quality First</h3>
                <p className="text-gray-600">Premium ingredients always</p>
              </div>
              <div className="text-center p-2 sm:p-4">
                <h3 className="font-semibold text-orange-600">Traditional Methods</h3>
                <p className="text-gray-600">Time-tested processes</p>
              </div>
              <div className="text-center p-2 sm:p-4">
                <h3 className="font-semibold text-orange-600">Food Safety</h3>
                <p className="text-gray-600">Highest standards</p>
              </div>
              <div className="text-center p-2 sm:p-4">
                <h3 className="font-semibold text-orange-600">Customer First</h3>
                <p className="text-gray-600">Your satisfaction matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
