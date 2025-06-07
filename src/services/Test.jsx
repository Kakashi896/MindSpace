import React from 'react'

const Test = () => {
  return (
    <div>
      <section id="test" className="min-h-screen flex flex-col justify-center items-center bg-white px-6 py-20">
  <h2 className="text-3xl sm:text-4xl font-semibold text-green-800 mb-6">Take a Mental Health Test</h2>
  <p className="text-green-700 text-center max-w-lg mb-6">
    Begin your journey by taking one of our science-backed assessments for anxiety or depression.
  </p>
  <div className="flex gap-6">
    <RouterLink to="/depression-test" className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition">
      Depression Test
    </RouterLink>
    <RouterLink to="/anxiety-test" className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition">
      Anxiety Test
    </RouterLink>
  </div>
</section>

    </div>
  )
}

export default Test
