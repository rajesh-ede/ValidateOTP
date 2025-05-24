🔐 OTP Validation  using React 🚀🚀
This project is a simple OTP (One-Time Password) validation system built using React. It allows users to enter a 4/6-digit OTP sent to them (e.g., via email or SMS) and validates the code on the front end. The application simulates a real-world OTP flow that is commonly used in login or signup processes.

✅ Features
🔢 Input field(s) to enter OTP digits (can be single or separate boxes)

⏳ Countdown timer for OTP expiration (

📝 Simple form submission to verify OTP

❌ Displays error messages for invalid or expired OTP

✅ Shows success message for valid OTP

🧱 Technologies Used
React – Front-end JavaScript library

useState and useEffect – React Hooks for state and lifecycle management

CSS – For styling the OTP input boxes

 React Router – For navigation (e.g., from login page to OTP screen)

💡 How It Works
1 User is prompted to enter a multi-digit OTP code

2 Input is captured and validated on form submission

3 If the OTP matches a hardcoded or backend value (in actual use cases), a success message is shown

4 If the OTP is invalid, the user is asked to try again

🎯 Learning Objectives
This project helped me understand:

> How to create and manage form inputs in React

> Working with multiple input boxes and combining their values

> Implementing basic validation logic in React

> Improving user experience with timers, toasts, or feedback messages

📂 Future Improvements 
. Connect to backend API for real OTP validation

' Auto-focus next input box after each digit

' Disable submit button until OTP is fully entered

. Add resend OTP functionality with countdown timer
