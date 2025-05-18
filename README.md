# 🧒 e-Vrtić – Digital Kindergarten Registration System

**e-Vrtić** is a full-stack web application designed to simplify and digitalize the process of kindergarten registration in Serbia. The system enables parents to explore and register their children in kindergartens across the country, with complete access to institution data sourced from the Serbian Government’s Open Data Portal and eUprava.

---

## 🎯 Core Functionality

### 👨‍👩‍👧 User Registration and Email Verification
- New users can register on the platform by providing their basic credentials.  
- Upon registration, the system automatically sends a verification email with an activation link.  
- Only after verifying their account via the email link, users are allowed to log in to the system.

### 🏫 Kindergarten Data Browser
- Browse kindergarten institutions across all municipalities in Serbia.  
- Data includes:
  - Institution name  
  - Object name (facility name)  
  - Location (address, municipality, city)  
  - Type of institution (public or private)  
  - Contact information  
  - Additional metadata such as staff, capacity, and age groups served  
- Data is synchronized with the official eUprava portal and the Open Data Portal of the Republic of Serbia, ensuring accuracy and transparency.

### 🔍 Advanced Filtering Options
Users can filter the list of kindergartens using multiple criteria:
- Institution name  
- Facility name  
- Municipality  
- Street  
- Type (public/private)  
- Location  
- Other metadata from the open data source  

### 📝 Child Registration Process
- After selecting a specific kindergarten, the user can initiate child registration for enrollment.  
- The child registration form includes:
  - First name  
  - Last name  
  - Unique Master Citizen Number (JMBG) – validated for correct format  
  - Date of birth  
  - Gender  
- Upon successful submission, the user receives a confirmation message indicating that the registration request has been successfully submitted.

### 📬 Contact Support Feature
- Parents can submit inquiries or concerns via a contact form.  
- After submission, the system sends an automatic email confirmation that the message has been received.  
- The admin team is notified and will respond as soon as possible.

### 🛡️ Admin Functionality
The system includes a secure admin panel that provides full CRUD (Create, Read, Update, Delete) operations over all core entities:
- Kindergartens and their metadata  
- User and child data  
- Inquiries and messages  

Admins are responsible for:
- Managing the correctness of displayed kindergarten data  
- Monitoring child registration requests  
- Responding to user inquiries  

---

## ⚙️ Tech Stack and Architecture

### 🔙 Backend: Java Spring Boot
- Spring Boot framework for REST API development  
- Spring Security for:
  - JWT-based authentication  
  - Role-based authorization (Admin / Parent)  
  - Email verification workflows  
- Integration with MySQL database using Spring Data JPA  
- Custom validation for fields such as JMBG and email  
- Email service implementation using SMTP or third-party providers (e.g., Gmail SMTP)

### 🌐 Frontend: React.js
- React.js for dynamic and responsive user interfaces  
- Axios for communication with REST API  
- React Router for routing between authentication, dashboard, registration, and admin modules  
- Form validation using controlled components  
- Custom filtering UI for kindergarten search with real-time filtering

### 🗄️ Database: MySQL
- Relational database schema that includes:
  - `users`  
  - `children`  
  - `kindergartens`  
  - `facilities`  
  - `inquiries`  
- Entity relationships mapped via JPA annotations (`@OneToMany`, `@ManyToOne`, etc.)

---

## 🔐 Security
- JWT tokens used to secure endpoints  
- Email verification enforced before login  
- Role-based access control to restrict access to sensitive routes (e.g., admin dashboard)  
- Validation and sanitization of input to prevent misuse (e.g., invalid JMBG or malicious inputs)

---

## ✅ Summary
**e-Vrtić** streamlines kindergarten registration in Serbia by:
- Empowering parents to explore kindergartens in a transparent way  
- Ensuring secure and verifiable user access  
- Offering seamless child registration functionality  
- Enabling administrators to keep data accurate and up to date  
- Integrating with real government data sources  

This digital system replaces paper-based or outdated workflows with a modern, responsive, and user-friendly solution for both parents and institutions.

---

## 📡 Data Sources
- [[Open Data Portal of the Republic of Serbia](https://data.gov.rs) ](https://opendata.mpn.gov.rs/otvoreni-podaci/predskolsko-obrazovanje.html) 
- eUprava API

---
