
# Car-dealer-app

## Overview

This project is a simple vehicle selector app built with **Next.js** and **Tailwind CSS**. It allows users to select a vehicle make and model year, and then view a list of vehicle models for the selected make and year.

### Key Features

- Fetches and displays a list of vehicle makes using the NHTSA API.
- Allows users to select a vehicle make and model year.
- Navigates to a result page with a list of vehicle models based on the selected make and year.
- Responsive design built using Tailwind CSS.
- Efficient data fetching with Next.js and React hooks.

## Tech Stack

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Frontend JavaScript library.
- **Tailwind CSS**: Utility-first CSS framework.
- **NHTSA API**: Used to fetch vehicle data.

---

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/Vi7ality/car-dealer-app
cd car-dealer-app
```

### 2. Install Dependencies

Before running the app, install the necessary dependencies:

```bash
npm install
```

### 3. Run the Development Server

To start the development server, use the following command:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Build the Application

To create a production build, use the following command:

```bash
npm run build
```

This will generate optimized static files for production.

### 5. Start the Production Server

After building the application, you can start the production server using:

```bash
npm start
```

### 6. Linting and Formatting

This project uses **ESLint** and **Prettier** for code linting and formatting. You can run linting with:

```bash
npm run lint
```

---

## Application Architecture

### Pages

- **Home Page** (`pages/index.tsx`): Allows users to select a vehicle make and model year.
- **Result Page** (`pages/result/[makeId]/[year].tsx`): Displays a list of vehicle models based on the selected make and year.

### Components

- **Header** (`components/Header.tsx`): A reusable header component styled with Tailwind CSS.
- **VehicleForm** (`components/VehicleForm.tsx`): The form for selecting vehicle make and model year.
- **ResultPage** (`pages/result/[makeId]/[year].tsx`): Displays the vehicle models based on the selected parameters.
- **ContactPage** (`pages/contact/.tsx`): Custom contact page.

---

## API

- Vehicle Makes: [https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json](https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json)
- Vehicle Models: [https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json](https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json)

---




