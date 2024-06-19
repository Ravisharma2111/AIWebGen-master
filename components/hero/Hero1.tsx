// In ./components/hero/Hero1.tsx
import React, { useState } from 'react';

type FormField = {
  id: string; 
  type: string;
  placeholder: string;
};

type Hero1Props = {
  leftTitle: string;
  leftSubtitle: string;
  buttonText: string;
  formFields: FormField[];
  formButtonText: string;
};

const Hero1: React.FC<Hero1Props> = ({ leftTitle, leftSubtitle, buttonText, formFields, formButtonText }) => {
  const [formState, setFormState] = useState<{ [key: string]: string }>({});

  // Initialize form state with the ids of the formFields
  React.useEffect(() => {
    const initialState = formFields.reduce((state, field) => {
      state[field.id] = '';
      return state;
    }, {} as { [key: string]: string });
    setFormState(initialState);
  }, [formFields]);

  const handleInputChange = (id: string, value: string) => {
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here with formState
    console.log(formState);
  };

  return (
    <section style={{
      fontFamily: 'Montserrat, sans-serif', 
      backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      padding: '100px 20px',
      zIndex: -99,

    }}> 
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#10121889', // White tint with 40% opacity
      zIndex: -98,
    }}></div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, padding: '20px' }}>
          <h1 style={({ color: 'white', fontSize: '42px', fontWeight: 'bold', marginBottom: '5px' })}>
            {leftTitle}</h1>
          <p style={{ color: 'white', fontSize: '18px', marginBottom: '25px' }}>
            {leftSubtitle}</p>
          <button style={{ backgroundColor: '#007bff', color: 'white', padding: '15px 40px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}>
            {buttonText}
          </button>
        </div>
        <div style={{ flex: 1, padding: '20px' }}>
          <form onSubmit={handleSubmit} style={{ backgroundColor: '#FFFFFF', color: 'white', padding: '40px 10px', borderRadius: '5px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {formFields.map((field) => (
              <input
                key={field.id}
                type={field.type}
                placeholder={field.placeholder}
                value={formState[field.id] || ''}
                onChange={(e) => handleInputChange(field.id, e.target.value)}
                style={{ backgroundColor: '#F1F1F1', padding: '10px', borderRadius: '5px', border: '1px solid white' }}
              />
            ))}
            <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              {formButtonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero1;