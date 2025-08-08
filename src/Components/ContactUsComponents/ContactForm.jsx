import { useState } from "react";
import ButtonCta from "../Shared/ButtonCta";
import validate from "email-validator";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (name.trim() === "") {
      setError("Name is empty");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      setError("Name should only contain letters");
      return false;
    }
    if (name.length < 2) {
      setError("Name too short ");
      return false;
    }
    if (!validate.validate(email)) {
      setError("Email not valid");
      return false;
    }

    if (message.length < 20) {
      setError("Not long enough at  least 20 characters ");
      return false;
    }

    setError("");
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      setEmail("");
      setName("");
      setMessage("");
      setError("");
      setSuccess("Message Sent Successfully");
    }
    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6  lg:w-[calc(50%-1rem)] h-auto w-full"
    >
      <div className="flex flex-col gap-3">
        <label
          htmlFor="name"
          className="uppercase font-bold text-sm font text-zinc-500"
        >
          Full Name
        </label>
        <input
          className="border rounded border-zinc-400 px-4 py-2"
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="email"
          className="uppercase font-bold text-sm font text-zinc-500"
        >
          Email address
        </label>
        <input
          type="email"
          className="border rounded border-zinc-400 px-4 py-2"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor=""
          className="uppercase font-bold text-sm font text-zinc-500"
        >
          Message
        </label>
        <textarea
          type="text"
          className="p-4 text-zinc-600 border border-zinc-400 rounded"
          rows={6}
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <ButtonCta
        type="submit"
        className="bg-black text-white px-10 py-1.5"
        disabled={isSubmitting}
        children={`Send Message`}
      >
        {isSubmitting ? "Submitting..." : "Form submitted"}
      </ButtonCta>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-400">{success}</p>}
    </form>
  );
};

export default ContactForm;
