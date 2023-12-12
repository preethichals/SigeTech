import OurTeam from "./OurTeam"

const features = [

  {
    name: 'What We Offer',
    description:'In addition to crafting state-of-the-art laboratory setups, STEMTEC develops a wide range of cutting-edge products tailored to enrich STEM education. From educational kits and learning tools to specialized equipment and interactive resources, we aim to offer comprehensive solutions that bridge the gap between theory and practical application.', 
  },
    {
    name: 'How We Make a Difference',
    description:'Through a blend of expertise, creativity, and a commitment to excellence, STEMTEC develops products that align with educational objectives and cater to the evolving needs of educational institutions. By integrating the latest technologies, fostering collaborative partnerships, and emphasizing quality, we aim to enhance learning experiences and drive educational innovation.',
   
  },
  
]

export default function page() {
  return (
    <>
    <div className="bg-white pt-14 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="p-8 sm:p-10 lg:flex-auto bg-gray-700">
            <h3 className="text-3xl font-semibold  text-center tracking-wide text-white">
Who We Are            </h3>
            <p className="mt-6 text-base leading-7 text-gray-100 text-center">
STEMTEC is more than an educational solutions provider, we&#39;re also a pioneering force in STEM product
development. Our team of dedicated professionals and experts collaborates tirelessly to design and
manufacture innovative products that enhance the learning journey and laboratory experiences.       </p>
            
            
          </div>
        <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-8 lg:max-w-none container">
          <dl className="grid max-w-2xl grid-cols-1  gap-y-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative p-6">
                <dt className="text-xl font-semibold leading-7 text-gray-900">
                
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
       
          <div className="lg:p-12 sm:p-10 lg:flex-auto bg-gray-700">
            <h3 className="text-3xl mx-4 pt-4 font-semibold  text-center tracking-wide text-white">
Join Us on Our Journey          </h3>
            <p className="mt-4 text-base px-6 pb-4 leading-7 text-gray-100 text-center">
Join us in our mission to transform education and product development in the STEM landscape.
Together, let&#39;s shape the future of learning and innovation, inspiring a generation of learners and
innovators who will propel the world forward with their knowledge and discoveries.   </p>
            
            
          </div>
    </div>
    <OurTeam/>
    </>
  )
}
