import React from 'react'

const Faq = () => {
  return (
    <div>
      <section id="faq" className="min-h-screen bg-green-50 px-6 py-20">
  <h2 className="text-3xl sm:text-4xl text-green-800 font-bold mb-8 text-center">Frequently Asked Questions</h2>
  <div className="max-w-2xl mx-auto space-y-6 text-green-700">
    <div>
      <h3 className="font-semibold text-lg">Is Arogyam a substitute for therapy?</h3>
      <p>No, Arogyam is a self-help tool. For clinical advice, consult a licensed therapist.</p>
    </div>
    <div>
      <h3 className="font-semibold text-lg">Are the tests accurate?</h3>
      <p>The tests are based on validated screening tools, but not a diagnosis.</p>
    </div>
    <div>
      <h3 className="font-semibold text-lg">How is my data stored?</h3>
      <p>All user data is securely stored in Firebase and is never shared without consent.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Faq
