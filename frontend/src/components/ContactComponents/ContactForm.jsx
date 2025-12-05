import { useActionState } from "react";
import Button from "../Button";

function contactFormAction(prev, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  let errors = {
    name: null,
    email: null,
    subject: null,
    message: null,
  };

  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  if (!subject) errors.subject = "Subject is required";
  if (!message || message.trim().length < 50)
    errors.message = "Message must be at least 50 characters";

  if (Object.values(errors).some(Boolean)) {
    return { errors, enteredValues: { name, email, subject, message } };
  }

  return { errors: null, success: true };
}

export default function ContactForm() {
  const [formState, formAction, isPending] = useActionState(contactFormAction, {
    errors: null,
  });

  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      {/* Name */}
      <div className="flex flex-col gap-1 w-full">
        {formState.errors?.name && (
          <p className="text-red-500 text-sm">{formState.errors.name}</p>
        )}
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full p-4 border rounded-lg border-[#9F9F9F] text-sm sm:text-base"
          defaultValue={formState.enteredValues?.name}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1 w-full">
        {formState.errors?.email && (
          <p className="text-red-500 text-sm">{formState.errors.email}</p>
        )}
        <label htmlFor="email" className="font-medium">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full p-4 border rounded-lg border-[#9F9F9F] text-sm sm:text-base"
          defaultValue={formState.enteredValues?.email}
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1 w-full">
        {formState.errors?.subject && (
          <p className="text-red-500 text-sm">{formState.errors.subject}</p>
        )}
        <label htmlFor="subject" className="font-medium">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full p-4 border rounded-lg border-[#9F9F9F] text-sm sm:text-base"
          defaultValue={formState.enteredValues?.subject}
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1 w-full">
        {formState.errors?.message && (
          <p className="text-red-500 text-sm">{formState.errors.message}</p>
        )}
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full p-4 border rounded-lg border-[#9F9F9F] min-h-[140px] resize-none text-sm sm:text-base"
          defaultValue={formState.enteredValues?.message}
        />
      </div>

      {/* Submit */}
      <div className="w-full sm:w-auto mt-4">
        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          className={
            isPending
              ? "opacity-50 cursor-not-allowed w-full sm:w-auto"
              : "w-full sm:w-auto"
          }
        >
          {isPending ? "Sending..." : "Submit"}
        </Button>
      </div>

      {/* Success Message */}
      {formState.success && (
        <p className="text-green-600 mt-4 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
