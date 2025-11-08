EZ Labs — Home Page & Contact Form (React)

A responsive, single-page React implementation of the EZ Labs Home page (Figma) with a production-ready Contact Us form integrated with the provided API.
Clean UI, form validation, Axios-powered API calls, and a modern responsive navbar.

🔥 Demo / Highlights

Pixel-accurate Home / Hero section built from the Figma spec

Front-end validation (required fields + email format + basic phone check)

Modern responsive navbar that expands from right → left inside the header

Decorative PNG stickers positioned to match the Figma look (top-right & bottom-left)

Loading indicator on form submit and clear success / error messages

Mobile-first, tested across common breakpoints (≥1225px, 1025–1225px, 768–1024px, ≤768px, ≤480px)

Postman collection included for API verification


🛠 Tech Stack

React (Create-React-App compatible)

Axios for API requests

Plain CSS (component-scoped stylesheets)

React Router (react-router-dom) for navigation


Behavior in the app:

Empty form submission is blocked on the client with a validation message.

Invalid email format is blocked on the client.

On success (HTTP 200/201) the form clears and the message “Form Submitted” is shown.

🚀 Quick start (run locally)

Clone the repo

git clone https://github.com/<your-username>/ez-labs-assignment.git
cd ez-labs-assignment


Install dependencies

npm install


Start dev server

npm start


Open http://localhost:3000 (or port CRA shows) — app will live-reload on change.


💡 UI / UX Details & Decisions

Navbar stays visible with logo on the left; menu toggles open inside the header from right→left (not a full-screen sidebar). Works on all breakpoints.

Hero uses a left image with a centered overlay logo and right-side heading elements as provided by the Figma.

Contact form: width is fluid, uses max-width constraints and flex layout — centers the Submit button as in Figma.

Corner stickers: positioned absolutely and scaled with vw/max-width so they remain visually consistent on every device.

Loading state: spinner shown in the submit button while waiting for API response.

Accessibility: form inputs use semantic HTML; button disables while loading to prevent duplicate submits.

✅ Validation implemented

Required fields: name, email, phone, message

Email regex check on client

Basic phone numeric/length check (customize to country format if needed)

Input UI shows success/error message text under the form

📦 Postman (API testing)

A Postman collection is included: postman_collection.json.
To test with Postman:

Open Postman → Import → Upload postman_collection.json

Open the collection → Contact Us - POST → Send

Confirm a successful 200 / 201 response with the response body

Screenshots

<img width="1917" height="1020" alt="Screenshot from 2025-11-09 02-03-28" src="https://github.com/user-attachments/assets/ea3f1bab-3238-4445-88d5-f65f177d31e4" />

<img width="1917" height="1020" alt="Screenshot from 2025-11-09 02-04-11" src="https://github.com/user-attachments/assets/e31a1bb0-f27b-4eea-ac4b-6c3d19de0f79" />
<img width="1917" height="1020" alt="Screenshot from 2025-11-09 02-03-52" src="https://github.com/user-attachments/assets/3f784223-c0ff-41a9-ac2e-e2a5fe9ee141" />


👤 Author

Mohd Abdulla — (your name / GitHub: mrabdulla3)
Contact: use the Contact form in the app 🙂
