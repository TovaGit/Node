# Node.js + MongoDB Computer Store Management Project

## Description
This project implements a server-only application using Node.js with Express and MongoDB. It includes user authentication, product management, category management, and a shopping cart system.

## Project Structure
- **Server**: Express and Node.js server.
- **Database**: MongoDB for data storage.

## Features
1. **User Management**: Registration and login functionality with secure password encryption and JWT for authentication.
2. **Category Management**: CRUD operations for product categories.
3. **Product Management**: CRUD operations for products, with image filename storage.
4. **Shopping Cart**: Linked to users and products, allows adding, removing, and updating product quantities in the cart.
5. **Secure Access**: Middleware for access control, ensuring only authorized users can manage their carts.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed
- Postman (or any API testing tool)

### Installation
1. Clone the repository:
   ```bash
   git clone https://your-repo-url.git
