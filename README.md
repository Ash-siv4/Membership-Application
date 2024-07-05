# Sports Club Membership Application

## Overview

The Sports Club Membership Application is a Python-based GUI application built using Tkinter. It allows users to enter and manage member details for a sports club, including features to open and save member records to a text file, validate input fields, and print member details.

## Features

- **Membership Management**: Enter, validate, and store member details.
- **File Operations**: Open and close text files for storing member details.
- **Record Printing**: Print member records to an open text file.
- **Input Validation**: Validate fields such as membership number, gender, join date, and subscription month.
- **User Interface**: A user-friendly interface with tabs for file operations, record viewing, and member detail entry.

## Requirements

- Python 3.x
- Tkinter library (included in standard Python distribution)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Ash-siv4/Membership-Application.git
   cd Membership-Application
   ```

2. **Run the application**:
   ```bash
   python membership.py
   ```

## Usage

### Application Layout

- **File Tab**:

  - **Open File**: Opens a file dialog to select a text file.
  - **Close File**: Closes the currently open file.
  - **Exit**: Exits the application.

- **Records Tab**:

  - **Print Records**: Prints the member records to the currently open text file.

- **Enter Member Details Tab**:

  - Form fields to enter member details:

    - Membership Number
    - First Name
    - Last Name
    - Address
    - Postcode
    - Gender (M/F)
    - Join Date (dd/mm/yyyy)
    - Type of Membership (F/S/T/B)
    - Subscription Due Month (Jan/Feb/etc.)

  - **Submit Button**: Validates the inputs and adds the member details to the list.

### Input Validation

- **Membership Number**:
  - Must be numeric.
  - Must be 6 digits long.
  - Must pass a modulus 11 check.
- **Gender**:

  - Must be 'M' or 'F' (case insensitive).

- **Join Date**:

  - Must be in the format dd/mm/yyyy.

- **Type of Membership**:

  - Must be 'F', 'S', 'T', or 'B' (case insensitive).

- **Subscription Due Month**:
  - Must be a valid month abbreviation (e.g., Jan, Feb, etc.).

### Error Messages

- **Error Codes and Messages**:
  1. Membership Number is not numeric.
  2. Membership Number is not 6 digits.
  3. Membership Number is not a valid modulus 11 number.
  4. Gender must be F or M.
  5. Membership type must be F, S, T, or B.
  6. Invalid Join Date.
  7. File not open - (i.e., you haven’t opened it yet).
  8. File not opened - (i.e., it can’t be opened).
  9. Subscription month invalid.

### Running the Application

1. Launch the application by running `python membership.py`.
2. Open a file using the **File -> Open File** menu.
3. Enter member details in the **Enter Member Details** tab and click **Submit**.
4. Print the records to the opened file using the **Records -> Print Records** menu.
5. Close the file using **File -> Close File** if necessary.
6. Exit the application using **File -> Exit**.

## Contributing

Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Author

[Aswene Sivaraj](https://github.com/Ash-siv4)
