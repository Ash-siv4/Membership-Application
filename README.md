# Membership Application

The Membership Application is a web-based application for managing member details of a sports club. It allows users to enter member information, validate inputs according to specified rules, and store the data locally (simulated using localStorage in a browser environment).

## Features

- **Member Data Entry:** Enter details such as Membership Number, First Name, Last Name, Address, Postcode, Gender, Join Date, Type of Membership, and Subscription Due Month.
- **Data Validation:** Validates input fields based on specific rules:
  - Membership Number: Numeric, 6 digits, valid modulus 11.
  - Gender: Must be 'M' or 'F'.
  - Join Date: Valid date in the format dd/mm/yyyy.
  - Type of Membership: Must be 'F', 'S', 'T', or 'B'.
  - Subscription Due Month: Must be a valid month abbreviation (e.g., Jan, Feb, etc.).
- **File Simulation:** Simulates file operations using localStorage for storing member data. Data is appended to a virtual file named `members.txt`.
- **Print Records:** Displays member records in a formatted table view.

## Usage

1. **Adding Members:**

   - Fill in the member details in the form fields.
   - Click on the "Add Member" button to add the member.
   - Data will be validated before being added to the localStorage.

2. **Printing Records:**

   - Click on the "Print Records" button to display all stored member records.
   - Records are displayed in a table format with headers for each field.

3. **Subscription Month:**
   - Subscription Due Month field allows both dropdown selection and manual input using a predefined list of months.

## Project Background

This project was created as a web-based recreation of a Java-based `membership.exe` application. The goal was to provide a version that can be used on any device with a web browser, without the need for installation or administrative privileges. By leveraging modern web technologies like JavaScript and localStorage, this version ensures compatibility and accessibility across various platforms.

## Installation

There are two versions of this application.

**Version 1** - runs in a web browser and uses localStorage for data storage, simply open `index.html` in your preferred web browser to use the application.

**Version 2** - runs on Python. Simply navigate to the `the_code/python-version` directory and follow the instructions stated in the sub-directory's README. 

## Notes

- This application simulates file operations using localStorage. In a real-world scenario, server-side technologies like Node.js would be used for handling actual file operations.
- Ensure all input fields are correctly filled and validated before adding members to ensure data integrity.

## Author

[Aswene Sivaraj](https://github.com/Ash-siv4)
