export default function About() {
  return (
    <div className=" w-full bg-gradient-to-br from-orange-100 via-white to-orange-200 flex items-center justify-center py-10 px-2">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-700 mb-10 text-center drop-shadow-sm tracking-tight">
          About Us
        </h1>
        <div className="flex justify-center mb-8">
          <span className="inline-block w-24 h-1 rounded-full bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Our Story */}
          <div className="bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 6 3 6s3-3.5 3-6c0-1.657-1.343-3-3-3z" /></svg>
              Our Story
            </h2>
            <p className="text-gray-700 text-lg">
              Founded with a passion for authentic food, Raaga Foods began as a small family business and has grown into a trusted name in traditional food products. We take pride in our heritage recipes and commitment to quality.
            </p>
          </div>
          {/* Our Mission */}
          <div className="bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m4 0h-1v4h-1m-4 0h-1v-4h-1" /></svg>
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg">
              At Raaga Foods, we are committed to delivering authentic, high-quality food products that bring the traditional taste of home to your kitchen.
            </p>
          </div>
          {/* Our Values */}
          <div className="bg-white/90 rounded-2xl shadow-xl border border-orange-100 p-8 md:col-span-2">
            <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              Our Values
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-orange-50/60 shadow">
                <h3 className="font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 2.5 3 6 3 6s3-3.5 3-6c0-1.657-1.343-3-3-3z" /></svg>
                  Quality First
                </h3>
                <p className="text-gray-600">Premium ingredients always</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-orange-50/60 shadow">
                <h3 className="font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h0a4 4 0 014 4v2" /></svg>
                  Traditional Methods
                </h3>
                <p className="text-gray-600">Time-tested processes</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-orange-50/60 shadow">
                <h3 className="font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 2.5 3 6 3 6s3-3.5 3-6z" /></svg>
                  Food Safety
                </h3>
                <p className="text-gray-600">Highest standards</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-orange-50/60 shadow">
                <h3 className="font-semibold text-orange-600 flex items-center justify-center gap-1 mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Customer First
                </h3>
                <p className="text-gray-600">Your satisfaction matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
