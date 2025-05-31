'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
		<div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
			<div className="text-center">
				<h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have questions about our coffee, tech events, or just want to say hello? We'd love to hear from you!</p>
			</div>

			<div className="grid md:grid-cols-2 gap-8 sm:gap-12">
				{/* Contact Form */}
				<div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-lg shadow-sm">
					{isSubmitted ? (
						<div className="text-center py-6 sm:py-8">
							<div className="text-lg sm:text-xl font-semibold mb-2 text-green-600 dark:text-green-400">Thank you for your message!</div>
							<p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">We'll get back to you as soon as possible.</p>
							<button onClick={() => setIsSubmitted(false)} className="mt-4 text-green-600 dark:text-green-400 hover:underline text-sm sm:text-base">
								Send another message
							</button>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
							<div>
								<label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Name
								</label>
								<input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500`} />
								{errors.name && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
							</div>

							<div>
								<label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500`} />
								{errors.email && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
							</div>

							<div>
								<label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
									Message
								</label>
								<textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`w-full px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md border ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500`} />
								{errors.message && <p className="mt-1 text-xs sm:text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
							</div>

							<button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 sm:py-2.5 px-4 rounded-md transition-colors duration-300 text-sm sm:text-base">
								Send Message
							</button>
						</form>
					)}
				</div>

				{/* Map Section */}
				<div className="bg-white dark:bg-gray-800 p-4 sm:p-8 rounded-lg shadow-sm">
					<h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Visit Us</h2>
					{/* Map Placeholder */}
					<div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 sm:mb-6">
						<div className="h-full flex items-center justify-center text-sm sm:text-base text-gray-400 dark:text-gray-500">Map Coming Soon</div>
					</div>
					{/* Contact Information */}
					<div className="space-y-3 sm:space-y-4">
						<div>
							<h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Address</h3>
							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
								123 Tech Street
								<br />
								Silicon Valley, CA 94025
							</p>
						</div>
						<div>
							<h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Hours</h3>
							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
								Monday - Friday: 7am - 8pm
								<br />
								Saturday - Sunday: 8am - 6pm
							</p>
						</div>
						<div>
							<h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">Contact</h3>
							<p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
								Email: hello@beanandbyte.com
								<br />
								Phone: (555) 123-4567
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
