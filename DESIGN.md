# Design Notes

Clinic token-booking app (MERN). Patients book a doctor's token online and pay a ₹10 advance. Clinic staff manage doctors, availability and appointments.

## Stack

- Client: React (Vite), Tailwind, React Router
- Server: Node, Express, MongoDB (Mongoose)
- Payments: Razorpay (test mode)

## Patient flow

- Districts → Departments → Doctors → Doctor details → Book token
- Departments → Districts → Doctors (same doctors list)
- Book Token form: pick district, department and doctor directly

## Models

| Model | Fields |
| --- | --- |
| User | `name`, `mobileNumber` (unique), `passwordHash`, `role` (`patient` / `staff`), `email` (optional) |
| Clinic | `name`, `address`, `district`, `contactNumber` |
| Doctor | `name`, `fullname`, `department`, `clinicId`, `visitingTime`, `visitingDays`, `bookingOpenTime`, `totalTokens`, `offlineTokens`, `avgConsultMinutes`, `contactNumber` |
| Availability | `doctorId`, `date`, `isAvailable` |
| Token | `doctorId`, `tokenDate`, `tokenNumber`, `tokenState`, `patientId`, `tokenExpiryTime` |
| Notification | `userId`, `message`, `read`, `createdAt` |
| Payment | `tokenId`, `userId`, `amount`, `status`, gateway payment id |

`tokenState`: `available`, `locked`, `confirmed`, `cancelled`.

## Decisions and why

- **Token lock with a timer.** Clicking "Book Token" locks the token for 5 minutes while the patient pays ₹10. The server stores `tokenExpiryTime` instead of running a timer. The countdown on screen is only display.
- **One atomic update to lock.** Check and lock happen in a single `findOneAndUpdate`, so two simultaneous requests cannot both win (no race condition). A token can be locked if it is `available`, or `locked` with an expired time.
- **Release on expiry, lock only on click.** An expired lock goes back to `available` with `patientId` and `tokenExpiryTime` set to `null`. Viewing a page never changes a token.
- **Confirmed tokens have no timer.** `tokenExpiryTime` becomes `null` after payment.
- **Booking window.** Only today and tomorrow are open.
- **Doctor unavailable.** Staff marks a date unavailable, so confirmed tokens for it are cancelled, the ₹10 is refunded and the patient is notified (in-app first; SMS and calls later).
- **Offline tokens.** The first `offlineTokens` numbers are reserved and hidden online. Online numbering keeps the real token numbers. The portal shows a note with the doctor's phone number.
- **Availability exceptions.** `visitingDays` is the weekly pattern. An `Availability` record overrides it for one date.
- **Filtering on the server.** The doctors list is filtered by query string (`/api/doctors?district=&department=`), not in the browser.
- **Passwords.** Hashed with bcrypt, stored as `passwordHash`.
- **No Redux.** `useState`, the URL, and Context (for the logged-in user) are enough.

## Calculated, not stored

- Tokens available = total − offline − locked − confirmed
- Approximate time = visiting start + (token number − 1) × `avgConsultMinutes`
- My bookings = tokens where `patientId` is the user and `tokenState` is `confirmed`

## Build order

1. [x] Client pages, routes, layout, doctor list and details, token picker (hardcoded data)
2. [ ] MongoDB connection and models
3. [ ] Token lock endpoint
4. [ ] Auth (bcrypt, JWT, role-protected routes)
5. [ ] Razorpay payment and refunds
6. [ ] Staff pages: add clinic, appointments by date, availability
