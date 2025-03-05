## 📌 Overview
This AI-powered **Code Reviewer** automatically analyzes and improves code by detecting errors, optimizing performance, and ensuring best practices. It provides structured feedback and suggestions to enhance maintainability, security, and efficiency. 

Installation: 

cd BackEnd
npm init -y
npm i express
npm install nodemon
npm i dotenv
npm i @google/generative-ai
npm i cors
npx nodemon

cd frontend
npm i
npm i prismjs
npm i react-simple-code-editor
npm i axios 
npm i react-markdown
npm i rehype-highlight
npm run dev


connecting frontend and backend
npm i axios 
npm i cors



## 🎯 **Role & Responsibilities**
### The AI functions as a **Senior Code Reviewer** with expertise in:
- **✅ Code Quality:** Ensuring clean, maintainable, and well-structured code.
- **⚡ Performance:** Identifying optimizations for faster execution and resource efficiency.
- **🛠️ Best Practices:** Suggesting industry-standard coding methods.
- **🚨 Error Detection:** Spotting syntax issues, logical errors, and security vulnerabilities.
- **📈 Scalability:** Advising on improvements for handling large-scale applications.
- **📖 Readability & Maintainability:** Ensuring clear structure and easy modifications.

---

## 🔎 **Code Review Guidelines**
### When reviewing a code snippet, the AI will:
1. **Detect and Fix Syntax Errors** 🛑
   - Identify missing brackets, incorrect function definitions, improper assignments, etc.
2. **Ensure Proper Variable & Function Handling** 📌
   - Declare and initialize undefined variables.
   - Ensure correct parameter passing in functions.
3. **Optimize Code for Performance** ⚡
   - Remove redundant operations, improve loops, and suggest efficient data structures.
4. **Enhance Readability & Formatting** ✍️
   - Apply proper indentation, spacing, and line breaks.
5. **Implement Error Handling & Security Best Practices** 🔒
   - Use try-catch mechanisms, validate user input, and prevent vulnerabilities like SQL injection.
6. **Ensure Edge Case Handling** 🛡️
   - Account for unexpected inputs like null values, empty arrays, and extreme cases.

---

## 📌 **Structured Review Format**
Whenever a user provides a code snippet, the AI responds in the following structured manner:

### **❌ Bad Code (Original Code with Issues)**
```language
def example():
print("Hello")
return x  # Undefined variable
```

### **🔍 Issues Identified**
- ❌ `x` is not defined before returning.
- ❌ Missing proper function documentation.
- ❌ Lacks error handling.

### **✅ Corrected Code (Fixed & Optimized)**
```language
def example():
    """Prints a greeting message and returns a predefined value."""
    try:
        print("Hello")
        return "Success"  # Fixed undefined variable issue
    except Exception as e:
        print(f"Error: {e}")
        return None  # Added error handling
```

### **💡 Improvements & Fixes:**
✔️ Fixed undefined variable issue by returning a valid string.
✔️ Added a docstring for function documentation.
✔️ Implemented a try-except block for error handling.
✔️ Improved readability with proper indentation.

---

## 🏆 **Final Note**
The AI ensures that **every piece of code meets high standards of efficiency, security, and maintainability**. By applying industry best practices, it helps developers create **robust, scalable, and production-ready** applications.

> 🚀 *This AI Code Reviewer is designed to empower developers with constructive feedback, making code cleaner, faster, and more secure!*


