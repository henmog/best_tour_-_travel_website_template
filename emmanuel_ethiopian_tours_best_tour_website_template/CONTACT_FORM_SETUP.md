# Contact Form Setup Guide

Your website now includes two functional contact forms in the footer that can be connected to third-party form services. Here's how to configure them:

## 📋 Current Form Configuration

### 1. **Main Contact Form**
- **Location**: Footer - Contact Us section
- **Method**: POST 
- **Action**: `https://formspree.io/f/YOUR_UNIQUE_FORM_ID`
- **Fields**: 
  - `name` - Contact's full name
  - `email` - Contact's email address ✅ (correctly named for form processing)
  - `message` - Contact's message

### 2. **Newsletter Signup Form**
- **Location**: Footer - Stay Connected section  
- **Method**: POST
- **Action**: `https://formspree.io/f/YOUR_UNIQUE_FORM_ID`
- **Fields**:
  - `email` - Subscriber's email address ✅ (correctly named for form processing)

## 🔧 Setup Instructions

### Option 1: Formspree (Recommended)

1. **Create Formspree Account**:
   - Go to [formspree.io](https://formspree.io)
   - Sign up for a free account

2. **Create New Form**:
   - Click "New Form"
   - Choose form name (e.g., "Emmanuel Tours Contact")
   - Copy your unique form ID

3. **Update Form Action URLs**:
   Replace `YOUR_UNIQUE_FORM_ID` in both forms with your actual Formspree form ID:
   ```html
   <!-- Before -->
   action="https://formspree.io/f/YOUR_UNIQUE_FORM_ID"
   
   <!-- After -->
   action="https://formspree.io/f/xpzgkqbo"
   ```

4. **Configure Settings** (Optional):
   - Set custom thank you page
   - Configure email notifications
   - Set up spam protection

### Option 2: Netlify Forms

1. **If hosting on Netlify**:
   ```html
   <!-- Replace the action attribute with: -->
   <form name="contact" method="POST" data-netlify="true">
   ```

2. **Add hidden input**:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

### Option 3: Other Services

The forms are compatible with any service that accepts POST requests:

- **Emailjs**: `https://api.emailjs.com/api/v1.0/email/send`
- **Basin**: `https://usebasin.com/f/YOUR_FORM_ID`
- **Form.io**: Your custom endpoint
- **Custom Backend**: Your server endpoint

## 🎯 Form Features

### ✅ **Built-in Functionality**:

- **Validation**: Email format validation
- **Loading States**: Visual feedback during submission
- **Accessibility**: Proper labels and focus management
- **Responsive Design**: Works on all devices
- **Error Handling**: Visual feedback for validation errors

### 🔒 **Security Features**:

- **Spam Protection**: Hidden fields to prevent bot submissions
- **CSRF Protection**: Form tokens (if using custom backend)
- **Input Sanitization**: Client-side validation

### 📧 **Email Configuration**:

- **Subject Lines**: Automatically set
- **Form Identification**: Hidden fields distinguish form types
- **Redirect Handling**: Custom thank you pages

## 🚀 **Testing Your Forms**

1. **Replace the placeholder**: Update `YOUR_UNIQUE_FORM_ID` with your actual form ID
2. **Test submission**: Fill out and submit both forms
3. **Check email delivery**: Verify emails arrive in your inbox
4. **Test validation**: Try submitting invalid emails

## 🎨 **Customization Options**

### **Form Styling**:
The forms use your site's design system:
- Ethiopian color palette
- Consistent typography
- Smooth transitions
- Focus states

### **Field Modifications**:
To add more fields, follow this pattern:
```html
<div>
    <label for="phone" class="sr-only">Phone Number</label>
    <input 
        type="tel" 
        id="phone"
        name="phone" 
        placeholder="Your phone number"
        class="w-full px-3 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-cultural focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-gentle"
    />
</div>
```

## 📊 **Analytics & Tracking**

Consider adding form analytics:
- Google Analytics events
- Form conversion tracking
- A/B testing different form layouts

## 🆘 **Troubleshooting**

### **Common Issues**:

1. **Forms not submitting**:
   - Check form action URL
   - Verify form service is active
   - Check browser console for errors

2. **Emails not received**:
   - Check spam folder
   - Verify email configuration in form service
   - Test with different email addresses

3. **Validation errors**:
   - Ensure all required fields are filled
   - Check email format validity
   - Verify JavaScript is enabled

### **Testing Checklist**:

- [ ] Replace `YOUR_UNIQUE_FORM_ID` with actual form ID
- [ ] Test both contact and newsletter forms
- [ ] Verify email delivery
- [ ] Test on mobile devices
- [ ] Check validation messages
- [ ] Test thank you page redirect

## 📞 **Support**

- **Formspree Documentation**: [https://help.formspree.io/](https://help.formspree.io/)
- **Form Styling**: Check your site's Tailwind configuration
- **JavaScript Issues**: Check browser developer console

---

Your contact forms are now ready to capture leads and connect with potential travelers! 🌟
