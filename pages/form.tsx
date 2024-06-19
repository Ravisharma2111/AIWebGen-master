import { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../utils/supabaseClient';

export default function FormPage() {
  const [step, setStep] = useState(1); // New state to manage form steps
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState(''); // State for the business description
  const router = useRouter();

  // Function to generate UUID and store it in local storage
  const storeUUID = async (uuid) => {
    localStorage.setItem('userUUID', uuid);
    await supabase
      .from('website_content')
      .insert([{ uuid, name, email }])
      .then(({ error }) => {
        if (error) console.error('There was an error inserting the data', error);
      });
  };

  // Handle first step submission
  const handleFirstStepSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const uuid = uuidv4();
    await storeUUID(uuid); // Store UUID upon first step submission
    setStep(step + 1); // Move to the next step
  };

  // Handle final form submission
  const handleFinalSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const uuid = localStorage.getItem('userUUID');

    // Update the record with 'what_business' data
    await supabase
      .from('website_content')
      .update({ what_business: business })
      .match({ uuid })
      .then(({ error }) => {
        if (error) {
          console.error('There was an error updating the data', error);
        } else {
           router.push(`/${uuid}/edit`);
        }
      });
  };

  // Conditional rendering based on the step
  if (step === 1) {
    return (
      <form onSubmit={handleFirstStepSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleFirstStepSubmit}>Next</button>
        </div>
      </form>
    );
  } else if (step === 2) {
    return (
      <form onSubmit={handleFinalSubmit}>
        <div>
          <p>Let's get started, {name}. What business do you want to start?</p>
          <input
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}