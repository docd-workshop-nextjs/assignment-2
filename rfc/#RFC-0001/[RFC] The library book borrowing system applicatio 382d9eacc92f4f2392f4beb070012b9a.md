# [RFC] The library book borrowing system application

| Status | Proposed |
| --- | --- |
| Number | #RFC-0001 |
| Author | Dwi Yulianto |
| Created | 2023-02-23 |

---

# Summary

---

The proposed RFC outlines the development of a modern digital application aimed at managing the borrowing process of books in a library. The application seeks to replace manual methods with a digital solution to streamline the borrowing process and enhance user experience.

# Motivation

---

Unlock the potential of libraries with our innovative digital borrowing system. Say goodbye to manual processes and hello to seamless access to knowledge. Join us in transforming libraries into dynamic centers of learning for all.

# General Design

---

## Key Features

- User Authentication
- Book Catalog Management
- Borrowing Process
- Reservation System

## Technology Stack

### **Next.js**

Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.

- **Pros**
    - Popular Framework
    - React Family
    - Have various rendering (CSR, SSR, SSG)
    - SEO support
    - File based routing
- **Cons**
    - Overengineering
    - Complexity
    - Deployment
    

### **Tailwind CSS**

Tailwind CSS is a utility-first CSS framework that provides a set of pre-designed, low-level utility classes to style your HTML elements.

- **Pros**
    - Very Popular
    - Utility Classess
    - Customization
    - Responsive Design
- **Cons**
    - Too many classes in html
    - Design Consistency
    - File Size

### **Shadcn UI**

Shadcn UI is likely a UI toolkit designed to help developers create modern and visually appealing user interfaces for web applications. 

- **Pros**
    - Efficiency
    - Customization
    - Responsive Design
- **Cons**
    - Limited Flexibility
    - Design Limitations
    

### **Stein / Google Sheets**

Stein is a suite of programs to help you turn any Google Sheet to a database. The core Stein API provides RESTful access to your sheets. The rest of the suite includes helpers to make your work (even!) easier.

### **NextAuth**

NextAuth.js is an open-source authentication library for Next.js, which is a React framework for building web applications. NextAuth.js provides an easy-to-use solution for implementing authentication in Next.js applications, supporting various authentication providers such as OAuth, OpenID Connect, email/password, and more.

## Alternatives

- **Remix**
- **Chakra UI**
- **Supabase**

## UI Design

### **Auth**

**Sign in / Registration**

![Untitled](%5BRFC%5D%20The%20library%20book%20borrowing%20system%20applicatio%20382d9eacc92f4f2392f4beb070012b9a/Untitled.png)

### Table List (Book / User / Transaction)

![Untitled](%5BRFC%5D%20The%20library%20book%20borrowing%20system%20applicatio%20382d9eacc92f4f2392f4beb070012b9a/Untitled%201.png)

### Form Create / Update

![Untitled](%5BRFC%5D%20The%20library%20book%20borrowing%20system%20applicatio%20382d9eacc92f4f2392f4beb070012b9a/Untitled%202.png)

## Deployment

Using Vercel or other options

# Timeline and Milestones

---

### **Week 1: Planning and Design**

- Define project scope, objectives, and requirements.
- Create wireframes or mockups of the user interface.
- Finalize project documentation, including RFC and project plan.

### **Week 2-3: Implementation**

- Set up project structure and development environment.
- Implement authentication and authorization mechanisms.
- Develop core features: book catalog management, borrowing process, reservation system.
- Conduct continuous testing and quality assurance throughout development.

### **Week 4: Testing, Deployment, and Launch**

- Manual testing
- Address any bugs, issues, or feedback identified during testing.
- Prepare deployment scripts and configuration files.
- Deploy the library book borrowing system application to production.
- Monitor application performance and stability.
- Conduct post-deployment testing and validation.

## Milestones

- Milestone 1: Completion of Planning and Design Phase (End of Week 1)
- Milestone 2: Implementation of Core Features (End of Week 3)
- Milestone 3: Completion of Testing, Deployment, and Launch (End of Week 4)

# Discussions

---

The proposed library book borrowing system application represents a significant advancement in modernizing library operations and improving user experience. This section serves as a forum for stakeholders to discuss key aspects of the RFC, provide feedback, raise concerns, and propose enhancements.

### Are there any additional features or functionalities that should be included to better meet the needs of users and library staff? Are there any aspects of the project scope that require clarification or refinement?

### Are there any usability issues or design considerations that need to be addressed? How can the user interface be optimized to enhance user experience and accessibility?