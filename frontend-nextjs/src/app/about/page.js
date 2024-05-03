import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-3xl mb-2 text-gray-900 font-mono">Hey!</h1>
              <div className="leading-relaxed">An exclusive connection to Myshop for more meaningful buying.<br/> Menswear and accessories are crafted for you in numerous colors and refined materials.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
              <p className="leading-relaxed">Sales</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">250+</h2>
              <p className="leading-relaxed">Products</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
              <p className="leading-relaxed">Catgories</p>
            </div>
            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
              <p className="leading-relaxed">Products</p>
            </div> */}
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="about.jpg" alt="stats" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
