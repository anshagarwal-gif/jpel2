# Google Forms Backend-less Setup Guide

## Overview
This guide will help you set up a backend-less form system using Google Forms, Google Sheets, and a Google Sheets Add-on to automatically email CSV attachments to admin recipients.

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form" or use a template
3. Add the following fields **in this exact order**:

   - **Full Name** (Short answer, Required)
   - **Company Name** (Short answer, Required)
   - **Email** (Short answer, Required)
   - **Phone Number** (Short answer, Required)
   - **Country** (Short answer, Required)
   - **State** (Short answer, Required)
   - **City** (Short answer, Required)
   - **Are you or your company already a customer?** (Multiple choice, Required)
     - Options: Yes, No

4. **Important**: Do NOT change the form structure after this step!

## Step 2: Extract Google Form Field IDs

1. Open your Google Form
2. Click the three-dot menu (⋮) → "Get pre-filled link"
3. Fill in dummy data for ALL fields:
   - Full Name: "Test Name"
   - Company Name: "Test Company"
   - Email: "test@example.com"
   - Phone Number: "+91 1234567890"
   - Country: "India"
   - State: "Gujarat"
   - City: "Ahmedabad"
   - Customer: Select "Yes"

4. Click "Get link"
5. Copy the generated URL - it will look like:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe.../viewform?usp=pp_url&entry.123456789=Test+Name&entry.987654321=Test+Company&entry.555666777=test@example.com&entry.111222333=+91+1234567890&entry.444555666=India&entry.777888999=Gujarat&entry.123123123=Ahmedabad&entry.456456456=Yes
   ```

6. Extract the field IDs (the numbers after `entry.`):
   - Full Name: `entry.123456789`
   - Company Name: `entry.987654321`
   - Email: `entry.555666777`
   - Phone Number: `entry.111222333`
   - Country: `entry.444555666`
   - State: `entry.777888999`
   - City: `entry.123123123`
   - Customer: `entry.456456456`

7. Also extract the Form ID from the URL:
   ```
   https://docs.google.com/forms/d/e/1FAIpQLSe_YOUR_FORM_ID_HERE/viewform
   ```

## Step 3: Update React Component

1. Open `jpel2/src/Components/OOSForm.jsx`
2. Replace the placeholder values:

   ```javascript
   // Replace this line:
   const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/formResponse";
   
   // With your actual form ID:
   const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSe_YOUR_ACTUAL_FORM_ID/formResponse";
   ```

3. Replace all `entry.XXXXXXXXX` placeholders with your actual field IDs:

   ```javascript
   // Full Name field
   <input
     type="text"
     name="entry.123456789" // Replace with your actual ID
     placeholder="Enter your full name"
     className="form-input"
     required
     disabled={isSubmitting}
   />
   
   // Company Name field
   <input
     type="text"
     name="entry.987654321" // Replace with your actual ID
     placeholder="Enter your company name"
     className="form-input"
     required
     disabled={isSubmitting}
   />
   
   // Continue for all fields...
   ```

## Step 4: Link Google Form to Google Sheets

1. Open your Google Form
2. Go to the "Responses" tab
3. Click the green Google Sheets icon
4. Choose "Create a new spreadsheet" or "Select existing spreadsheet"
5. Name it "OOS Spare Parts Responses" or similar
6. Click "Create" or "Select"

## Step 5: Install Google Sheets Add-on

1. Open the response Google Sheet
2. Go to **Extensions** → **Add-ons** → **Get add-ons**
3. Search for "Form Notifications" or "Email Notifications for Google Forms"
4. Install the add-on (popular options include):
   - **Form Notifications** by Awesome Table
   - **Email Notifications for Google Forms** by Digital Inspiration
   - **Form Publisher** by Awesome Table

5. Grant all requested permissions

## Step 6: Configure Email Automation

### For Form Notifications Add-on:

1. Open **Extensions** → **Form Notifications** → **Create Rule**
2. Configure the rule:
   - **Trigger**: On form submit
   - **Recipients**: 
     - admin1@jpgroup.com
     - admin2@jpgroup.com
   - **Subject**: New OOS Spare Parts Interest Form Submission
   - **Attach response**: Yes
   - **Attachment format**: CSV
   - **Include headers**: Yes
   - **Email template**: You can customize the email body

3. Save the rule

### For Email Notifications for Google Forms:

1. Open **Extensions** → **Email Notifications for Google Forms** → **Configure**
2. Set up notification:
   - **Email addresses**: admin1@jpgroup.com, admin2@jpgroup.com
   - **Email subject**: New OOS Spare Parts Inquiry
   - **Include form data**: Yes
   - **Attach spreadsheet**: Yes (CSV format)

3. Save configuration

## Step 7: Testing

1. Submit a test form from your website
2. Verify the following:
   - ✅ A new row appears in Google Sheets
   - ✅ Both admin email addresses receive an email
   - ✅ CSV file is attached to the email
   - ✅ CSV contains the submission data with headers

## Step 8: Production Deployment

1. Update your environment variables or configuration
2. Test the form in production environment
3. Monitor the first few submissions to ensure everything works

## Troubleshooting

### Form not submitting:
- Check that all field IDs are correct
- Verify the Google Form ID in the action URL
- Ensure all required fields are filled

### No email notifications:
- Check that the add-on is properly configured
- Verify admin email addresses are correct
- Check spam folders
- Ensure the add-on has proper permissions

### CSV not attached:
- Verify the add-on supports CSV attachments
- Check add-on settings for attachment format
- Some add-ons may require premium features for attachments

## Security Considerations

1. **Form Validation**: Google Forms provides basic validation
2. **Spam Protection**: Consider enabling CAPTCHA in Google Forms settings
3. **Rate Limiting**: Google Forms has built-in rate limiting
4. **Data Privacy**: Ensure compliance with privacy policies

## Maintenance

1. **Monitor Submissions**: Regularly check the Google Sheets for new entries
2. **Add-on Updates**: Keep the Google Sheets add-on updated
3. **Email Delivery**: Monitor email delivery and check for bounces
4. **Form Changes**: If you need to modify the form, update field IDs accordingly

## Alternative Add-ons

If the primary add-on doesn't work, try these alternatives:

1. **Awesome Table's Form Publisher**
2. **Digital Inspiration's Email Notifications**
3. **Form Ranger** (for advanced features)
4. **Autocrat** (for document generation)

## Support

For issues with:
- **Google Forms**: Check Google Workspace Help Center
- **Add-ons**: Contact the specific add-on developer
- **Website Integration**: Check browser console for errors

---

**Note**: This setup eliminates the need for any backend server, API, or database. Everything runs through Google's infrastructure with automatic email notifications and CSV attachments.