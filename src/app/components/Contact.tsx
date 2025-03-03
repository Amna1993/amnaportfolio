const Contact = () => {
    return (
      <section
        id="contact"
        className="min-h-screen bg-black text-white py-16 px-6 flex justify-center items-center"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl">
          {/* Left Section with Email & Phone */}
          
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="text-lg mb-4">
              <p>
                Email:{" "}
                <a
                  href="mailto:hafizaamnarazzaqawan@gmail.com"
                  className="text-blue-400 hover:text-blue-300"
                >
                  hafizaamnarazzaqawan@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+14376618451" className="text-blue-400 hover:text-blue-300">
                  437-661-8451
                </a>
              </p>
            </div>
          </div>
  
          {/* Right Section with Form */}
          <div className="lg:w-1/2">
            <form
              action="mailto:your-email@example.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border rounded bg-gray-800 text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 mt-2 border rounded bg-gray-800 text-white"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  