import React from 'react'

const inputClasses = 'w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md'

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Name" className={inputClasses} />
      <input type="email" placeholder="Email" className={inputClasses} />
      <input type="text" placeholder="Subject" className={inputClasses} />
      <textarea placeholder="Create a message here" className={inputClasses}></textarea>
      <button type="submit" className="bg-teal-500 text-white p-3 rounded-md shadow-md">
        SEND MESSAGE
      </button>
    </form>
  )
}

const ContactInfo = () => {
  return (
    <div className="lg:w-1/2 p-6 bg-white dark:bg-zinc-800 shadow-md">
      <h2 className="text-3xl font-bold mb-4">Contact us</h2>
      <p className="mb-6">We're open for any suggestion or just to have a chat</p>
      <div className="mb-6">
        <p>
          <strong>ADDRESS:</strong>
        </p>
        <p>198 West 21th Street, Suite 721 New York NY 10016</p>
      </div>
      <div className="mb-6">
        <p>
          <strong>EMAIL:</strong>
        </p>
        <p>info@yoursite.com</p>
      </div>
      <div className="mb-6">
        <p>
          <strong>PHONE:</strong>
        </p>
        <p>+ 1235 2355 98</p>
      </div>
      <ContactForm />
      <div className="mt-8">
        <h3 className="font-bold mb-2">Follow us here</h3>
        <p>FACEBOOK &nbsp; TWITTER &nbsp; INSTAGRAM &nbsp; DRIBBBLE</p>
      </div>
    </div>
  )
}

const ErrorSection = () => {
  return (
    <div className="lg:w-1/2 p-6 flex items-center justify-center bg-zinc-200 dark:bg-zinc-700">
      <div className="text-center">
        <img
          aria-hidden="true"
          alt="error"
          src="https://placehold.co/50x50"
          className="mx-auto mb-4"
        />
        <p className="text-xl font-bold">Oops! Something went wrong.</p>
        <p>
          This page didn't load Google Maps correctly. See the JavaScript console for technical
          details.
        </p>
      </div>
    </div>
  )
}

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-zinc-100 dark:bg-zinc-900 p-8">
      <ContactInfo />
      <ErrorSection />
    </div>
  )
}

export default ContactPage
