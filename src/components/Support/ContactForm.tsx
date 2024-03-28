export default function ContactForm() {
  return (
    <div className="w-full bg-secondary rounded-sm p-8">
      <h3 className="text-white text-2xl font-bold mb-4">
        Need Help? Open a Ticket
      </h3>
      <p className="text-textPrimary font-semibold mb-10">
        Our support team will get back to you via email.
      </p>
      <form className="flex flex-col text-white gap-3">
        <label className="font-semibold">Your name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md
                border border-transparent focus:border-lightBlue outline-none mb-5"
        />

        <label className="font-semibold">Your email</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md
                border border-transparent focus:border-lightBlue outline-none mb-5"
        />

        <label className="font-semibold">Your message</label>
        <input
          type="text"
          placeholder="Enter your message"
          className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md
                border border-transparent focus:border-lightBlue outline-none mb-5"
        />

        <div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-lightBlue hover:bg-opacity-95 rounded-sm font-medium py-4 px-10"
          >
            Report
          </button>
        </div>
      </form>
    </div>
  );
}
