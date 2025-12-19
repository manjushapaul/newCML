# Email Setup Guide - Gmail SMTP

The contact form is now configured to send emails to `manjushapaul39@gmail.com` using Gmail SMTP.

## Quick Setup (5 minutes)

### 1. Enable 2-Step Verification
- Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
- Under "Signing in to Google", enable **2-Step Verification** if not already enabled
- This is required to generate an App Password

### 2. Generate Gmail App Password
1. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - Or: Security → App passwords (you may need to search for it)
2. Select:
   - **App**: Mail
   - **Device**: Other (Custom name) → Enter "Code Meld Labs"
3. Click **"Generate"**
4. Copy the **16-character password** (spaces don't matter, you can ignore them)

### 3. Add Credentials to Your Project
Open `.env.local` in the root directory and update:

```bash
GMAIL_USER=manjushapaul39@gmail.com
GMAIL_APP_PASSWORD=wipo tobc kaqr vnkw
```

**Important**: 
- Use your **App Password**, NOT your regular Gmail password
- The App Password is a 16-character code (may have spaces, ignore them)

### 4. Restart Your Dev Server
```bash
npm run dev
```

### 5. Test the Form
1. Navigate to the contact section
2. Fill out and submit the form
3. Check `manjushapaul39@gmail.com` for the email

## Production Setup

### Environment Variables on Vercel/Netlify
When deploying, add these environment variables in your hosting platform's settings:

```
GMAIL_USER=manjushapaul39@gmail.com
GMAIL_APP_PASSWORD=your_app_password_here
```

**Security Note**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Troubleshooting

- **"Email service not configured"**: Check that both `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set in `.env.local`
- **"Invalid login"**: Make sure you're using an App Password, not your regular password
- **"2-Step Verification required"**: You must enable 2-Step Verification before generating an App Password
- **Emails not arriving**: Check spam folder, verify App Password is correct
- **Rate limits**: Gmail allows up to 500 emails/day for free accounts

## Security Notes

- The API route validates all inputs
- HTML is escaped to prevent XSS attacks
- Email format is validated before sending
- App Password is server-side only (never exposed to the client)
- App Passwords are more secure than regular passwords

## Why App Password?

Gmail requires App Passwords for third-party applications to access your account securely. This is more secure than using your regular password because:
- App Passwords can be revoked individually
- They don't give full account access
- They're specific to the application
