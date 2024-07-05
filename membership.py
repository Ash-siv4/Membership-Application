import tkinter as tk
from tkinter import ttk, messagebox, filedialog
from datetime import datetime
import os

class SportsClubApp:
    def __init__(self, root):
        # Set the main window properties
        self.root = root
        self.root.title("Sports Club Membership Application")
        self.root.geometry('450x400')
        self.current_file = None
        self.members = []

        # Configure style for ttk widgets
        self.style = ttk.Style()
        self.style.configure('TFrame', background='light green')
        self.style.configure('TLabel', background='light green')
        self.style.configure('TButton', background='light green')

        # Create tabs
        self.tab_control = ttk.Notebook(root)
        self.tab_control.pack(expand=1, fill='both')

        # Create frames for each tab
        self.file_tab = ttk.Frame(self.tab_control)
        self.records_tab = ttk.Frame(self.tab_control)

        # Add frames to the tab control
        self.tab_control.add(self.file_tab, text='File')
        self.tab_control.add(self.records_tab, text='Records')

        # Initialise file menu and records display area
        self.initialise_file_tab()
        self.initialise_records_tab()

        # Initialise member details entry form
        self.initialise_entry_form()

    def initialise_file_tab(self):
        # Create a menu bar
        self.file_menu = tk.Menu(self.root)
        self.root.config(menu=self.file_menu)

        # Create a file menu
        file_menu = tk.Menu(self.file_menu, tearoff=0)
        self.file_menu.add_cascade(label="File", menu=file_menu)
        file_menu.add_command(label="Open File", command=self.open_file)
        file_menu.add_command(label="Close File", command=self.close_file)
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.exit_application)

        # Create a label and button for file operations
        self.file_label = ttk.Label(self.file_tab, text="File Operations", font=("Arial", 14))
        self.file_label.pack(pady=10)

        self.file_button = ttk.Button(self.file_tab, text="Open File", command=self.open_file)
        self.file_button.pack()

    def initialise_records_tab(self):
        # Create a label and button for records
        self.records_label = ttk.Label(self.records_tab, text="Records", font=("Arial", 14))
        self.records_label.pack(pady=10)

        self.print_button = ttk.Button(self.records_tab, text="Print Records", command=self.print_records)
        self.print_button.pack()

        # Create a text area to display records
        self.records_text = tk.Text(self.records_tab, height=10, width=60)
        self.records_text.pack(pady=10)
        self.records_text.configure(state='disabled')  # Set the text area to read-only

    def initialise_entry_form(self):
        # Create a frame for member details entry form
        self.entry_frame = ttk.Frame(self.root)
        self.tab_control.add(self.entry_frame, text='Member form')

        # Title
        ttk.Label(self.entry_frame, text="Enter Member Details", font=("Arial", 14)).grid(row=0, columnspan=2, pady=10)

        # Labels and Entries
        ttk.Label(self.entry_frame, text="Membership Number:", foreground="black").grid(row=1, column=0, padx=10, pady=5, sticky='e')
        self.mem_num_entry = tk.Entry(self.entry_frame, width=26)
        self.mem_num_entry.grid(row=1, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="First Name:", foreground="black").grid(row=2, column=0, padx=10, pady=5, sticky='e')
        self.first_name_entry = tk.Entry(self.entry_frame, width=26)
        self.first_name_entry.grid(row=2, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Last Name:", foreground="black").grid(row=3, column=0, padx=10, pady=5, sticky='e')
        self.last_name_entry = tk.Entry(self.entry_frame, width=26)
        self.last_name_entry.grid(row=3, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Address:", foreground="black").grid(row=4, column=0, padx=10, pady=5, sticky='e')
        self.address_entry = tk.Entry(self.entry_frame, width=26)
        self.address_entry.grid(row=4, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Postcode:", foreground="black").grid(row=5, column=0, padx=10, pady=5, sticky='e')
        self.postcode_entry = tk.Entry(self.entry_frame, width=26)
        self.postcode_entry.grid(row=5, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Gender (M/F):", foreground="black").grid(row=6, column=0, padx=10, pady=5, sticky='e')
        self.gender_entry = tk.Entry(self.entry_frame, width=26)
        self.gender_entry.grid(row=6, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Join Date (dd/mm/yyyy):", foreground="black").grid(row=7, column=0, padx=10, pady=5, sticky='e')
        self.join_date_entry = tk.Entry(self.entry_frame, width=26)
        self.join_date_entry.grid(row=7, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Type of Membership (F/S/T/B):", foreground="black").grid(row=8, column=0, padx=10, pady=5, sticky='e')
        self.membership_type_entry = tk.Entry(self.entry_frame, width=26)
        self.membership_type_entry.grid(row=8, column=1, padx=10, pady=5)

        ttk.Label(self.entry_frame, text="Subscription Due Month (Jan/Feb/etc.):", foreground="black").grid(row=9, column=0, padx=10, pady=5, sticky='e')
        self.subscription_month_entry = ttk.Combobox(self.entry_frame, width=24, values=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
        self.subscription_month_entry.grid(row=9, column=1, padx=10, pady=5)
        self.subscription_month_entry.set('Enter/select')

        # Submit Button
        submit_button = ttk.Button(self.entry_frame, text="Submit", command=self.add_member)
        submit_button.grid(row=10, columnspan=2, pady=10)

    def add_member(self):
        # Validate inputs
        if not self.is_valid_membership_number():
            return
        if not self.is_valid_gender():
            return
        if not self.is_valid_membership_type():
            return
        if not self.is_valid_join_date():
            return
        if not self.is_valid_subscription_month():
            return

        # Add member details to list
        member_details = {
            "Membership Number": self.mem_num_entry.get(),
            "First Name": self.first_name_entry.get(),
            "Last Name": self.last_name_entry.get(),
            "Address": self.address_entry.get(),
            "Postcode": self.postcode_entry.get(),
            "Gender": self.gender_entry.get().upper(),
            "Join Date": self.join_date_entry.get(),
            "Type of Membership": self.membership_type_entry.get().upper(),
            "Subscription Due Month": self.subscription_month_entry.get().capitalize()
        }
        self.members.append(member_details)

        # Display member details in the text area
        self.display_member_details(member_details)

        # Clear entry fields
        self.clear_entry_fields()

        # Display success message
        messagebox.showinfo("Success", "Member details added successfully.")

    def display_member_details(self, member_details):
        # Temporarily enable the text area
        self.records_text.configure(state='normal')
        # Display member details in the text area
        self.records_text.insert(tk.END, f"Membership Number: {member_details['Membership Number']}\n")
        self.records_text.insert(tk.END, f"First Name: {member_details['First Name']}\n")
        self.records_text.insert(tk.END, f"Last Name: {member_details['Last Name']}\n")
        self.records_text.insert(tk.END, f"Address: {member_details['Address']}\n")
        self.records_text.insert(tk.END, f"Postcode: {member_details['Postcode']}\n")
        self.records_text.insert(tk.END, f"Gender: {member_details['Gender']}\n")
        self.records_text.insert(tk.END, f"Join Date: {member_details['Join Date']}\n")
        self.records_text.insert(tk.END, f"Type of Membership: {member_details['Type of Membership']}\n")
        self.records_text.insert(tk.END, f"Subscription Due Month: {member_details['Subscription Due Month']}\n")
        self.records_text.insert(tk.END, "\n")
        # Set the text area to read-only
        self.records_text.configure(state='disabled')

    def is_valid_membership_number(self):
        mem_number = self.mem_num_entry.get()
        if not mem_number.isdigit():
            self.show_error_message(1, "Membership Number is not numeric")
            return False
        if len(mem_number) != 6:
            self.show_error_message(2, "Membership Number is not 6 digits")
            return False
        # Modulus 11 check (dummy check for example)
        # Replace with actual modulus 11 check logic
        if int(mem_number) % 11 != 0:
            self.show_error_message(3, "Membership Number is not a valid modulus 11 number")
            return False
        return True

    def is_valid_gender(self):
        gender = self.gender_entry.get().upper()
        if gender not in ['M', 'F']:
            self.show_error_message(4, "Gender must be F or M")
            return False
        return True

    def is_valid_membership_type(self):
        membership_type = self.membership_type_entry.get().upper()
        if membership_type not in ['F', 'S', 'T', 'B']:
            self.show_error_message(5, "Membership type must be F, S, T or B")
            return False
        return True

    def is_valid_join_date(self):
        join_date_str = self.join_date_entry.get()
        try:
            datetime.strptime(join_date_str, '%d/%m/%Y')
        except ValueError:
            self.show_error_message(6, "Invalid Join Date. Date format should be dd/mm/yyyy")
            return False
        return True

    def is_valid_subscription_month(self):
        subscription_month = self.subscription_month_entry.get().capitalize()
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        if subscription_month not in months:
            self.show_error_message(9, "Invalid Subscription month")
            return False
        return True

    def clear_entry_fields(self):
        self.mem_num_entry.delete(0, tk.END)
        self.first_name_entry.delete(0, tk.END)
        self.last_name_entry.delete(0, tk.END)
        self.address_entry.delete(0, tk.END)
        self.postcode_entry.delete(0, tk.END)
        self.gender_entry.delete(0, tk.END)
        self.join_date_entry.delete(0, tk.END)
        self.membership_type_entry.delete(0, tk.END)
        self.subscription_month_entry.set('Enter/select')

    def open_file(self):
        # Open a file dialog to select a file
        self.current_file = filedialog.askopenfilename(defaultextension=".txt", filetypes=[("Text files", "*.txt")])
        if self.current_file:
            messagebox.showinfo("File Opened", f"Opened file: {self.current_file}")
        else:
            messagebox.showerror("Error", "Failed to open file")

    def close_file(self):
        self.current_file = None
        messagebox.showinfo("File Closed", "File closed successfully")

    def print_records(self):
        # Save the details in the text area to a new file
        try:
            with open('members.txt', 'w') as f:
                f.write(self.records_text.get("1.0", tk.END))
            messagebox.showinfo("Records Printed", "Records printed to file: members.txt")
        except Exception as e:
            self.show_error_message(8, f"Failed to print records to file: {str(e)}")

    def show_error_message(self, error_code, message):
        # Display error messages in a message box
        error_message = f"{error_code}: {message}"
        messagebox.showerror("Error", error_message)

    def exit_application(self):
        # Confirm before exiting the application
        if messagebox.askokcancel("Exit", "Do you want to exit the application?"):
            self.root.destroy()

    def run(self):
        # Start the Tkinter main loop
        self.root.mainloop()

if __name__ == "__main__":
    # Create the main window and run the application
    root = tk.Tk()
    app = SportsClubApp(root)
    app.run()
