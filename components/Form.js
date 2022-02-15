import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mbjwodaq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
        <div>

        </div>
        
        <div>
            <label htmlFor="email">
                Email
            </label><br/>
            <input
                id="email"
                type="email" 
                name="email"
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
        </div>

        <div>
            <label>Message</label><br/>
            <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>

        <button type="submit" className="mt-5 btn-red" disabled={state.submitting}>
            Envoyer
        </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;