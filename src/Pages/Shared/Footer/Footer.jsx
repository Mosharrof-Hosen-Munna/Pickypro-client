import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-purple-700 text-white py-20">
    <div className="container mx-auto">
      <div className="md:flex justify-between">
        <div>
          <h1 className="text-3xl"> Got Question? Call me 24/7 019566*****</h1>
          <p className="text-lg my-4">Kishoreganj, Dhaka , Bangladesh</p>
          <p className="text-xl mb-8">We are using safe Payments Method, Like Paypal, Norton etc..</p>
          <button className="btn btn-outline btn-secondary"> Contact Us</button>
        </div>
        <div>
          <h1 className="text-3xl mb-4 font-semibold">Categories</h1>
          <ul>
            <li className="text-lg my-2">Data Science</li>
            <li className="text-lg my-2">Business</li>
            <li className="text-lg my-2">Art & Design</li>
            <li className="text-lg my-2">Lifestyle</li>
            <li className="text-lg my-2">Marketing</li>
            <li className="text-lg my-2">Finance</li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl mb-4 font-semibold">Quick Links</h1>
          <ul>
            <li className="text-lg my-2">Home</li>
            <li className="text-lg my-2">Courses</li>
            <li className="text-lg my-2">Blog</li>
            <li className="text-lg my-2">FAQ</li>
          </ul>
        </div>
        
      </div>
    </div>
  </footer></div>
  )
}

export default Footer