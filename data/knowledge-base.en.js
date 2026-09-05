/* ============================================================================
   GlobXpay Knowledge Base — الترجمة الإنجليزية للمحتوى
   ----------------------------------------------------------------------------
   English translations of the knowledge base content.

   ملاحظة للمسؤول: جميع الأرقام والنسب والرسوم وأسماء المنتجات والروابط
   منقولة حرفياً من النسخة العربية دون أي تغيير. عند تعديل المحتوى العربي
   يجب تحديث النص المقابل هنا. أي مقال غير مترجم هنا يُعرض بالعربية تلقائياً.

   Admin note: all figures, percentages, fees, product names and links are
   copied verbatim from the Arabic source. Any article missing here falls
   back to Arabic automatically.
   ============================================================================ */

const CATEGORIES_EN = {
    company:         { title: 'About GlobXpay',        description: 'Company information, services and licensing' },
    accounts:        { title: 'Account Types',          description: 'Available account types and their benefits' },
    accountCreation: { title: 'Opening Accounts',       description: 'Steps to open main and supplementary accounts' },
    cashIn:          { title: 'Cash In',                description: 'All available top-up methods' },
    cashOut:         { title: 'Cash Out',               description: 'All available withdrawal methods' },
    cards:           { title: 'Prepaid Cards',          description: 'Issuing, managing and card limits' },
    transfers:       { title: 'Transfers',              description: 'Internal and external transfers' },
    braceletLink:    { title: 'Linking a Bracelet to a Supplementary Account', description: 'Steps to link a bracelet to a supplementary account' },
    fees:            { title: 'Fees & Limits',          description: 'Fees, commissions and transaction limits' },
    policies:        { title: 'Policies & Compliance',  description: 'Policies, compliance and regulatory procedures' },
    troubleshooting: { title: 'Troubleshooting',        description: 'Solutions to common customer issues' },
    contact:         { title: 'Contact Information',    description: 'How to reach the support team' },
    valetaxGuide:    { title: 'Valetax Guide',          description: 'Guidance specific to the Valetax service' },
    guides:          { title: 'System Guides',          description: 'Step-by-step guides for Portal, Front and Back' },
    media:           { title: 'Images',                 description: 'Ready-to-send images you can copy for customers' },
    forms:           { title: 'Forms & Files',          description: 'Forms and files ready to download' }
};

const ARTICLES_EN = {

/* ------------------------------ About GlobXpay ----------------------------- */
'company.whoWeAre': {
    title: 'Who We Are',
    content: `GLOBXPAY is a private shareholding company licensed by the Central Bank of Jordan. We provide innovative and secure financial solutions through a single easy-to-use app.

Our services are designed to make your financial life simpler, safer and smarter.

🌟 GLOBXPAY — innovative, smart financial services in your hands to build your future with confidence.`
},

'company.whatWeDo': {
    title: 'What We Offer',
    content: `We offer a comprehensive range of financial services:

💰 Savings accounts with daily cashback
📈 Easy and compliant investing (coming soon — investing in the Amman Stock Exchange)
💳 Prepaid cards and smart payment services
🏦 Multiple top-up methods (CliQ, eFAWATEERcom, bank transfer, Visa/MasterCard cards)
💵 Flexible withdrawal methods (ATM, IBAN transfer, Al Saudi Exchange)`
},

'company.coreValues': {
    title: 'Our Core Values',
    content: `Transparency, security, reliability, innovation.`
},

'company.license': {
    title: 'Licensing',
    content: `We operate as a private shareholding company licensed by the Central Bank of Jordan and are not affiliated with any other financial institution.`
},

'company.investment': {
    title: 'Investing (Coming Soon)',
    content: `📈 Easy and compliant investing

Coming soon — invest in the Amman Stock Exchange directly through the GLOBXPAY app, in cooperation with a licensed brokerage firm.

Stay tuned for more details!`
},

'company.appDownload': {
    title: 'Download the App',
    content: `📲 Download the app now and start your financial journey:

• Huawei AppGallery: https://appgallery.huawei.com/app/C112574885
• Google Play: https://play.google.com/store/apps/details?id=com.GlobXpay.google&hl=en
• iOS App Store: https://apps.apple.com/jo/app/globxpay/id6673909418

👉 Important note:
As soon as you download the app and register your details, a main EZ account is opened for you automatically with no minimum balance.`
},

/* ------------------------------ Account Types ------------------------------ */
'accounts.ezAccount': {
    title: 'EZ Account',
    content: `💰 EZ Account — the basic savings account

Save and earn rewarding returns calculated daily and credited to your account monthly:
• Cashback of up to 2% on eligible balances
• Cashback is calculated daily and credited monthly
• No conditions or minimum balance to open
• A minimum of 10 JOD to start earning cashback
• Can be topped up through various channels

👉 Important note:
As soon as you download the app and register your details, a main EZ account is opened for you automatically with no minimum balance.`
},

'accounts.xpandAccount': {
    title: 'Xpand Account',
    content: `💰 Xpand Account — cashback of up to 5%

An account with a higher return than EZ, with additional benefits for long-term saving
(up to 6 accounts can be opened)

Cashback rates:
• 5% on the first 10,000 JOD of the balance
• 4% on the next 10,000 JOD
• 3% on any balance above 20,000 JOD

Conditions:
• A minimum balance of 5 JOD to earn cashback
• The balance must remain equal to or above the first amount deposited into this account
• If the balance drops, the rate returns to 2% (same as the EZ account)`
},

'accounts.boostAccount': {
    title: 'Boost Account',
    content: `💰 Boost Account — long-term savings plans

A long-term savings account (from two to five years) with cashback starting at 6% and reaching up to 15% depending on the commitment period.
(up to 6 accounts can be opened)

Cashback rates by term:
• 4%: for 12 months (one year)
• 6%: for 24 months (two years)
• 8%: for 36 months (3 years)
• 10%: for 48 months (4 years)
• 15%: for 60 months (5 years)

Features:
• Progress tracking and automatic saving options
• A monthly commitment to deposit the required amount

Cashback rules:
• If the customer misses two consecutive payments: no cashback is paid and the balance is moved to the EZ account
• It is considered late once 10 days have passed from the due date
• Cashback is paid at the end of the savings period`
},

/* ---------------------------- Opening Accounts ----------------------------- */
'accountCreation.mainAccount': {
    title: 'Opening the Main Account',
    content: `Steps to open an account on GLOBXPAY:

1- Enter the word "Globx" in the "Enter the company name" search field
2- Tap Create Account, then enter your phone number and choose where the verification code should be sent (SMS or WhatsApp)
3- Enter the verification code you receive
4- Accept the terms and conditions, then continue
5- Create your password and confirm it
6- Photograph your ID from the front and the back
7- Take a selfie so your photo can be compared with your ID
8- Enter your personal information

Once the account is created, it will take 24 hours to be activated, after which you can log in easily!

Important notes:
• For Jordanians: a national ID card is required
• For non-Jordanians: a valid passport and residency card are required
• Palestinian outside Jordan: a passport
• Palestinian inside Jordan: one of two documents is required — a Gaza Strip residents document, or a children-of-Jordanian-mothers document if the mother is Jordanian, or Palestinian community documentation
• All documents must be valid

👉 As soon as you download the app and register your details, a main EZ account is opened for you automatically with no minimum balance.

Welcome, dear customer, as a GlobXpay app user! 😊`
},

'accountCreation.supplementaryAccount': {
    title: 'Opening a Supplementary Account',
    content: `Steps to open a supplementary account for children under 18:

1. Select "My Circle" in the app
2. Enter the required details and the login credentials will be created
3. Wait for activation approval
4. To log in: use the "Supplementary User" option`
},

/* --------------------------- Contact Information --------------------------- */
'contact.channels': {
    title: 'Contact Channels',
    content: `📞 Customer Service

For any inquiry or assistance, contact us via:

• WhatsApp: +962797674322 or 00962797674322
• Email: info@globxpay.com
• Account manager (for companies — if assigned)

🌟 GLOBXPAY — innovative, smart financial services in your hands to build your future with confidence.`
},

/* --------------------------------- Cash In --------------------------------- */
'cashIn.cliq': {
    title: 'Top-up via CliQ',
    content: `🏦 Cash top-up via the CliQ service (almost instant):

Top-up steps:
1. Open the GlobXpay app
2. Go to Payments → then select CliQ Payment Request
3. Choose the account you want to top up
4. Enter the amount, then tap Transfer
5. Choose the CliQ identifier type (Alias or phone number)
6. Enter the alias or phone number, then tap Create Request
7. Open your bank app or e-wallet
8. Go to the payments section under the CliQ option in your banking app
9. Approve the incoming transaction from "GlobXpay"
10. The amount will be credited directly to your GlobXpay account

⏰ Note: payments are processed instantly, but a delay of up to two hours may occur in some cases

❓ If the payment does not appear:
Open your bank app → CliQ → Payments → Pending Requests and approve it manually

💰 Fees: free (for top-up only)`
},

'cashIn.bankDeposit': {
    title: 'Top-up at a Bank Branch',
    content: `Steps for depositing directly at the bank:

1. Visit any Bank al Etihad branch or any other bank
2. Give the teller the escrow account number:

GlobXpay account details:
• Beneficiary: Advanced Technology For Financial Services
• IBAN: 0310176609340701 - JOD
• Bank: Bank al Etihad

3. Specify the amount to be deposited
4. Share your GlobXpay account reference number
5. Obtain the deposit receipt
6. Send the receipt through GlobXpay's approved channels

⏰ Processing time: up to two business days`
},

'cashIn.ibanTransfer': {
    title: 'Top-up via IBAN Transfer',
    content: `🏦 Cash top-up via bank transfer (IBAN):

⏰ Payments usually take up to two business days.

Top-up steps:
1. Visit your bank or use your mobile banking app
2. Issue a bank transfer to the GlobXpay bank account with the following details:

Beneficiary details:
• Beneficiary name: Advanced Technology For Financial Services
• IBAN in Jordanian Dinar (JOD): JO81UBSI1200000310176609315101
• IBAN in US Dollar (USD): JO43UBSI1200000310276609315101
• SWIFT / BIC code: UBSIJOAX
• Bank name: Bank al Etihad
• Reason for deposit: Fund Account

3. ⚠️ Important: your GlobXpay reference number must be added in the additional information field of the bank transfer form
4. Obtain the transfer receipt
5. Send the receipt through a GlobXpay approved channel:
   • Account manager (if assigned / for companies)
   • Email: info@globxpay.com
   • WhatsApp: +962797674322

⏰ Processing time: up to two business days`
},

'cashIn.visaCard': {
    title: 'Top-up via Visa/MasterCard',
    content: `💳 Top-up via Visa / MasterCard cards:


From the app:
1. Open the app
2. Select "Top up your account" then select "Credit cards"
3. Enter your GlobX account reference number
4. Enter the amount
5. Tap "Inquire"
6. Your account details will appear
7. Enter the card details or use Apple Pay
8. Tap Pay to complete the transaction

⚠️ Fees for this method: 4% of the amount`
},

'cashIn.efawateercom': {
    title: 'Top-up via eFAWATEERcom',
    content: `Steps to top up via eFAWATEERcom (through any banking app):

1. Choose the account to be topped up (EZ, Xpand, Cards)
2. Open your bank app
3. Select the "eFAWATEERcom" service or bill payment
4. Select "Finance and financial services" from the list, and the service type "Individual account top-up"
5. Select "GlobXpay"
6. Enter the "reference number" in the designated field
7. Enter the amount
8. Tap "OK" and complete the process
9. You will receive an SMS with the credited amount
10. Open the GlobXpay app and check the balance

⚠️ Note: GlobXpay is not listed with Arab Bank and Islamic International Arab Bank

💰 eFAWATEERcom fees:
• Less than 250 JOD: 0.5 JOD
• 250–500 JOD: 1 JOD
• 500–1000 JOD: 2 JOD
• More than 1000 JOD: 3 JOD`
},

'cashIn.alSaudiExchange': {
    title: 'Top-up via Al Saudi Exchange',
    content: `Steps to fund the account through Al Saudi Exchange:

1. Visit any Al Saudi Exchange branch
2. Give the employee the required information (ID, beneficiary details, amount)
3. After payment, you will receive an invoice with a reference number
4. Open the GlobXpay app
5. Select the "Receive international remittances" option, then select the first option
6. Enter the 8-digit reference number
7. Tap Receive


Note: a commission applies depending on the amount`
},

/* --------------------------------- Cash Out -------------------------------- */
'cashOut.atmCard': {
    title: 'Withdrawal via ATM Card',
    content: `💵 Withdraw from any ATM inside or outside Jordan:

Use the GLOBXPAY card to withdraw from any ATM locally or internationally

To check your card PIN
1. Open the GlobXpay app
2. Go to the "Cards" tab
3. Select the "Cards" option shown in black
4. Tap "Card settings"
5. Select "Show PIN" and the 4-digit PIN will be displayed


• Maximum per single transaction: 250 JOD
• Daily withdrawal: up to 1250 JOD depending on the ATM
• Monthly withdrawal: 15,000 JOD
• Number of daily transactions: 4-5
• Number of monthly transactions: 30

💰 Withdrawal fees:
• Locally (Jordan): 1.00 JOD
• Internationally: 4% of the amount plus currency conversion fees

Please note that the account balance is separate from the card balance; accordingly, if funds are available in the personal account and a withdrawal or purchase is attempted directly with the card, the transaction will not go through. The amount must first be moved to the card to ensure the transaction succeeds.

 Steps to transfer funds from the account to the card:

1- Go to the "Payments" option from the bar at the bottom right of the screen, then tap "Internal Transfer".
2- Select the account and the card: two main fields will appear:
3- The (From) field: please select the personal account that currently holds the amount.
4- The (To) field: please select the card to be topped up or withdrawn from.
5- Confirm the transaction: specify the amount to be moved, then tap the "Transfer" button to complete the process instantly.`
},

'cashOut.ibanCashOut': {
    title: 'Withdrawal via IBAN (transfer to your bank account)',
    content: `💵 Direct transfer to your bank account (IBAN):

Transfer steps:
1. Open the GlobX app
2. Select "Payments"
3. Tap "Transfer to bank"
4. Choose the account to withdraw from
5. Enter the bank IBAN number
6. Enter the full beneficiary name (it must match the GlobX account holder's name)
7. Enter the "amount"
8. Tap "Transfer"

⚠️ Note: transfers are only available to the same customer

💰 IBAN fees:
• 0–3,000 JOD: 1 JOD
• 3,001–5,000: 3 JOD
• 5,001–7,000: 5 JOD
• 7,001–15,000: 7 JOD
• 15,001–100,000: 10 JOD


⏰ Processing time: up to two business days`
},

'cashOut.alSaudiCashOut': {
    title: 'Withdrawal via Al Saudi Exchange',
    content: `💵 Withdrawal through Al Saudi Exchange:

Withdrawal steps:
1. Open the GlobX app
2. Select "Send and receive money transfers"
3. Add "New beneficiary"
4. Select "Send transfers"
5. Enter the required details (amount, currency, beneficiary, etc.)
6. Tap "Complete the transaction"
7. Visit any Al Saudi Exchange branch with your ID and the reference number
8. Tell them you have a transfer through the Al Saudi Exchange network service and you want to receive it`
},

/* ------------------------------ Prepaid Cards ------------------------------ */
'cards.cardTypes': {
    title: 'Card Types',
    content: `💳 Prepaid cards and smart payment services:

1. Virtual Card
   • For online shopping
   • Fee: 5 JOD (valid for 5 years)

2. Physical Card
   • A physical local and international card for withdrawing from any ATM or purchasing via point of sale
   • Fee: 10 JOD (valid for 5 years)

3. Supplementary Cards
   • Additional cards for the family with the ability to set spending limits

4. Wearables — innovative solutions:
   • Payment wristband with chip: 15 JOD
   • Payment wristband without chip: 10 JOD
   • Smart Sticker: 10 JOD
   • Watch clip: 10 JOD
   • Various wearable accessories

⚙️ Full control features from within the app:
• Set a usage limit
• Instant notifications
• Freeze the card
• And much more

📦 Delivery times:
• Amman: up to two business days
• Other governorates: up to 3-4 days
• International shipping: delivery takes 5-7 business days under normal circumstances, but it may reach up to 14 business days outside normal circumstances`
},

'cards.worldCard': {
    title: 'World Card — Benefits',
    content: `World Card benefits (75 JOD):

Travel and leisure:
• Unlimited airport lounge access (DragonPass)
• Two free Careem rides per year
• Discounts on travel and hotels (Cleartrip, IHG, Booking.com)
• VIP shopping privileges (Bicester Village, MyUS)

Entertainment and sport:
• 20% off one delivery order per month
• 25% off the Fiit fitness app
• Gaming discounts (Go Gamers, Midasbuy UC)

Additional services:
• Medical and educational offers (Lingokids)
• Comprehensive travel and purchase insurance (up to $500,000)`
},

'cards.goldCard': {
    title: 'Gold Card — Benefits',
    content: `Gold Card benefits (20 JOD / 30 USD):

• Travel discounts (Cleartrip, IHG, Booking.com)
• Free MyUS membership for two years
• 20% off one delivery order per month
• 25% off the Fiit fitness app
• Gaming offers (Go Gamers, Midasbuy UC)
• Educational discount (Lingokids)
• Basic e-commerce protection`
},

'cards.cardRequestAndLimits': {
    title: 'Requesting a Card & Setting Card Limits',
    content: `Requesting the card:

1. Open the GlobXpay app
2. Go to the "Cards" tab
3. Select "Create Card"
4. Select "Physical Card"
5. Review and accept the terms and conditions
6. Choose the account to deduct the fee from
7. Complete the payment

Setting card limits:

1. Go to "Cards"
2. Select the required card
3. Open "Card Settings"
4. Select "Card Controls"
5. Adjust the limits and tap "Save" on each action — this is important for the changes to be saved`
},

'fees.cardLimits': {
    title: 'Card Transaction Limits',
    content: `ATM withdrawal:
• Maximum per single transaction: 250 JOD
• Daily withdrawal: 1250 JOD
• Monthly withdrawal: 15,000 JOD
• Number of daily transactions: 5
• Number of monthly transactions: 30

Online purchases:
• Daily limit: 5,000 JOD
• Monthly limit: 20,000 JOD
• Number of daily transactions: 10
• Number of monthly transactions: 70

Contactless payment:
• Limit per single transaction: 100 JOD
• Daily transaction limit: 30 transactions`
},

/* -------------------------------- Transfers -------------------------------- */
'transfers.internalTransfer': {
    title: 'Internal Transfer',
    content: `1- Go to the "Payments" option from the bar at the bottom right of the screen, then tap "Internal Transfer".
2- Select the account and the card: two main fields will appear:
3- The (From) field: please select the personal account that currently holds the amount.
4- The (To) field: please select the card to be topped up or withdrawn from.
5- Confirm the transaction: specify the amount to be moved, then tap the "Transfer" button to complete the process instantly.

Fees: free
Daily transaction limit: 100 transactions
Maximum per transaction: 5,000 JOD
Daily limit: 10,000 JOD`
},

'transfers.externalTransfer': {
    title: 'Transfer to Another GlobXpay User',
    content: `Transferring to another GlobXpay user:

1. Go to Payments
2. Select Transfer to GlobXpay User
3. Enter the user's reference number and the amount

Fees: 0.500 JOD
Daily transaction limit: 5 transactions
Maximum per transaction: 5,000 JOD
Daily limit: 5,000 JOD`
},

'braceletLink.linkBracelet': {
    title: 'Linking a Bracelet to a Supplementary Account',
    content: `1. Go to "Cards"
2. Select the required card
3. Open "Card Settings"
4. Select "Link Card"
5. If there is a supplementary account, it will appear
6. If not, select "Add Beneficiary" and follow the instructions`
},


/* ------------------------------ Fees & Limits ------------------------------ */
'fees.cardFees': {
    title: 'Card Fees',
    content: `Standard card fees:
• Virtual card: 5 JOD (valid for 5 years)
• Physical card: 10 JOD (free delivery within Jordan)
• Replacement (damaged/lost): 10 JOD
• Renewal: 10 JOD
• Card + smart sticker: 15 JOD

World Card for business:
• The card: 75 JOD
• Replacement: 75 JOD
• Renewal: 75 JOD

Gold Card (USD):
• The card: 20 JOD / 30 USD
• Replacement/renewal: 20 JOD / 30 USD`
},

'fees.serviceFees': {
    title: 'Service Fees',
    content: `Account service fees:
• Opening an account: free
• ATM balance inquiry: 0.25 JOD
• External transfer (GlobXpay to GlobXpay): 0.500 JOD
• Local ATM withdrawal: 1.00 JOD
• International ATM withdrawal: 4 USD minimum + 3% exchange fee
• Local POS/online purchases: free
• International purchases (less than 20 JOD): 0.25 JOD
• For USD (less than 28 USD): 0.30 USD
• Dormant account: 2 JOD/month`
},

'fees.transactionLimits': {
    title: 'Transaction Limits',
    content: `Daily transaction limits:

CliQ Payment Request (web):
• Number of transactions: 5 per day
• Maximum: 3,000 JOD

CliQ Payment Request (app):
• Number of transactions: 10 per day
• Maximum: 10,000 JOD

Card top-up:
• Number of transactions: 5 per day
• Maximum: 5,000 JOD

External transfer:
• Number of transactions: 5 per day
• Maximum: 5,000 JOD

Internal transfer:
• Number of transactions: 100 per day
• Maximum per transaction: 5,000 JOD
• Daily limit: 10,000 JOD

IBAN transfer:
• Number of transactions: 10 per day
• Maximum per transaction: 100,000 JOD
• Daily limit: 250,000 JOD

eFAWATEERcom:
• Number of transactions: 5 per day
• Maximum: 10,000 JOD`
},

/* -------------------------- Policies & Compliance -------------------------- */
'policies.serviceConditions': {
    title: 'Terms of Service',
    content: `Terms of using the service:

• The customer confirms they are 18 years of age or older
• The information provided must be accurate and up to date
• Cards are personal, non-transferable, and must be used responsibly

* If the customer wants another person to collect the card on their behalf:
  - A legal power of attorney is required
  - The recipient must be a first-degree relative

• All records are electronically certified and binding`
},

'policies.accountPolicies': {
    title: 'Account Policies',
    content: `Account policies:

• Card issuance and renewal fees apply
• Usage is subject to account limits and transaction thresholds
• Customers must use the full balance within the card's validity period
• Transaction dispute window: 120 days
• Dormant accounts (12 months without activity) are subject to fees (2 JOD/month)`
},

'policies.dataProtection': {
    title: 'Data Protection and Legal Compliance',
    content: `Data protection:

• The customer agrees to provide the required personal data
• Data is shared only for processing and verification purposes

Legal compliance:
• Jordanian laws
• Central Bank of Jordan regulations
• International sanctions and national regulations`
},

'policies.reactivation': {
    title: 'Reactivation and Account Closure',
    content: `Account reactivation:
• The customer or their legal representative may reactivate dormant accounts

The company may suspend/cancel accounts in the following cases:
• Violation of the terms and conditions
• The customer appearing on sanctions lists
• Discovery of illegal activities`
},

/* ------------------------------ Troubleshooting ---------------------------- */
'troubleshooting.loginIssues': {
    title: 'Login Issues',
    content: `Error: Invalid Username/Password — user does not exist

Resolution steps:
1. Check whether the customer has an account by searching with the phone number
2. Confirm the correct company name (Globxpay, ATFX, ATT, etc.)
3. Ask the customer to log in again after selecting the correct company
4. If the issue persists, advise resetting the password
5. If it is not resolved, escalate to the technical team

* For new ATFX users:
  Advise using "Login with reference number"

---

Error: Unexpected error / Server Error

Resolution steps:
1. Check whether the customer has an account
2. Confirm the correct company name
3. Ask them to change the network/internet connection and try again
4. Ask them to delete and reinstall the app
5. If it is not resolved, escalate to the technical team`
},

'troubleshooting.accountCreationIssues': {
    title: 'Account Creation Issues',
    content: `Steps to resolve account creation issues:

1. Guide the customer step by step to make sure all information is entered correctly
2. Make sure clear and correct photos of the ID and the selfie are captured
3. Confirm the validity and correctness of the documents
4. If the issue persists, escalate to the operations department

Note:
• For Jordanians: request the national ID card
• For non-Jordanians: request a valid passport and residency card
• All documents must be valid`
},

'troubleshooting.cardWithdrawalIssues': {
    title: 'Card Withdrawal Issues',
    content: `🔧 Card issues — unable to withdraw:

Troubleshooting steps:

1️⃣ Check the limits and history:
   Check the customer's daily/monthly withdrawal limits and transaction history to make sure the permitted number or amount of withdrawals has not been exceeded.

2️⃣ Check the password entry:
   Make sure the customer is entering the correct password.

3️⃣ Check the language settings:
   If the customer is using the app in Arabic, advise them to switch to English and re-check the PIN.

4️⃣ Confirm correct use of the PIN/card:
   Verify that the customer is using the correct PIN for the correct card (especially if they have several cards).

5️⃣ Test the ATM:
   Ask the customer to try a different ATM, preferably from a different bank.

6️⃣ Escalation:
   If the issue persists, collect the last 4 digits of the card and transfer the case to the operations team.`
},

'troubleshooting.cardVisibilityIssues': {
    title: 'Card Not Showing in the App',
    content: `Steps to resolve the card not appearing:

1. Confirm the card was received
   - Verify that the customer has actually received the card

2. Check the app language
   - Ask them to switch the language to English

3. Verify the account
   - Make sure they are logged into the correct account linked to the card

4. Escalation
   - If the issue persists, escalate to the operations team`
},

/* ------------------------------ Valetax Guide ------------------------------ */
'valetaxGuide.createAccount': {
    title: 'How to Create the Account',
    content: `
- Create a Valetax account from their website
- After creating the account, there is an option called "Pay With Globxpay Wallet" on their site
- A link will be sent to you through which you can download the store
- After installing the app, enter the company name "Valetax", then "Log in by reference number"
- Once you enter your information and complete all the remaining steps, your account will be activated within 24 hours`
},

'valetaxGuide.cardCost': {
    title: 'Card Issuance Cost and Required Procedures',
    content: `
For Valetax cards, the cost is now borne by the customer themselves.
Card price + delivery price (from the Sheet) — you will find it in Downloads.

For USD, the card price is 20 USD + delivery fees for whoever wants the card in USD.
The card price is 10 JOD + delivery fees for whoever wants the card in JOD.

Just inform the customer to deposit the card price + delivery fees after you look them up in the sheet, and send an email to Operations with the customer's number, stating that they are a Valetax customer, the type of card they want, and their address. (Send the email only once you have confirmed that the customer has deposited the amount into their account — card price + delivery price.)`
},

/* ------------------------------ System Guides ------------------------------ */
'guides.portal.verifyWithCustomer': {
    title: 'Portal — Verify With Customer',
    content: `1- Go to Account Inquiry
2- Copy the mobile number and paste it into the search box
3- You will find (ID number + date of birth)`
},

'guides.portal.accountTransactions': {
    title: 'Portal — Account Transactions',
    content: `1- Copy the mobile number
2- Go to Account Transaction
3- Paste his/her number into the search box`
},

'guides.portal.cardDetails': {
    title: 'Portal — Card Details',
    content: `1- Copy the mobile number
2- Go to "Cards-Card"
3- Go to "Show Advance Filter"
4- Enter the mobile number in the field`
},

'guides.portal.cliqCashIn': {
    title: 'Portal — Cliq cash-in',
    content: `1- Copy the mobile number
2- Go to the Cliq records
3- Paste it into the search box`
},

'guides.portal.ibanCashOut': {
    title: 'Portal — Iban cash-out',
    content: `1- Copy the full name (you can get their full name through Account Inquiry)
2- Go to Transfer IBANS
3- Paste their full name and then search`
},

'guides.front.cardStatus': {
    title: 'Front — Card Status',
    content: `1- Go to Prepaid
2- Select Card Details
3- From the dropdown list select Last 4 Digits
4- Enter the last 4 digits of the card number`
},

'guides.front.cardLimits': {
    title: 'Front — Card Limits',
    content: `1- Go to Prepaid
2- Select Card Details
3- From the dropdown list select Last 4 Digits
4- Enter the last 4 digits of the card number
5- Click Next
6- Select the card
7- Click Next
8- Click View Limits`
},

'guides.front.resendCardPIN': {
    title: 'Front — Resend Card PIN',
    content: `1- Go to Prepaid
2- Select Card Details
3- From the dropdown list select Last 4 Digits
4- Enter the last 4 digits of the card number
5- Click Next
6- Copy the full card number
7- Go to PIN Reissue (from the Prepaid section)
8- Enter the full card number
9- At the bottom of the screen, under the "Pin Delivery" option, select "Pin SMS"
10- Click Send Request`
},

'guides.front.unblockCardPIN': {
    title: 'Front — Unblock Card PIN',
    content: `1- Go to Prepaid
2- Select Card Details
3- From the dropdown list select Last 4 Digits
4- Enter the last 4 digits of the card number
5- Click Next
6- Select the card
7- Click Next
8- Click PIN Unblock
9- Click the arrow at the top of the box to send the request`
},

'guides.front.activateCard': {
    title: 'Front — Activate Card',
    content: `1- Go to Prepaid
2- Select Card Details
3- From the dropdown list select Last 4 Digits
4- Enter the last 4 digits of the card number
5- Click Next
6- Copy the full card number
7- Go to Card Activation (from the Prepaid section)
8- Enter the full card number
9- Select the card
10- Click Next
11- Click Send Request`
},

'guides.back.checkCardIssues': {
    title: 'Back — Check Card Issues',
    content: `1- Go to "Transaction"
2- Click on "Online Authorization"
3- Click to search using the "binoculars" icon
4- Enter a percent sign (%) followed by the last 4 digits of the card number
5- Click the "binoculars icon"
6- The reason for the issue will appear in red in the "Response" column
7- Click the "pen with notebook" icon for more details`
},

'guides.back.checkCardLimits': {
    title: 'Back — Check Card Limits',
    content: `1. Go to "CARD BUILDER"
2. Click on "Card"
3. In the "card number" field, enter "%" followed by the last 4 digits of the card
4. Click the "binoculars" icon
5. Click the "pen with notebook"
6. Select "Card Limit" to view the card limits`
},

'guides.saudiExchange.deleteRemittance': {
    title: 'Al Saudi Exchange — Deleting a Remittance',
    content: `1- Go to the login screen
2- Make sure the search box contains "Saudi exchange"
3- Go to "Home - User"
4- After logging in, go to the "Send and receive money transfers" option
5- Click "Transfer log", then delete the remittance`
},

'media.braceletColours': {
    title: 'Available Payment Bracelet Colours',
    content: `The payment bracelet colours currently available, from right to left:
• Red
• Beige
• Light blue
• Purple
• Grey
• Black

You can copy the image and send it directly to the customer when they ask about the available colours.`
},

'guides.back.checkCardTransactions': {
    title: 'Back — Check Card Transactions',
    content: `1. Go to "CARD BUILDER"
2. Click on "Card"
3. In the "card number" field, enter "%" followed by the last 4 digits of the card
4. Click the "binoculars" icon
5. Click the "pen with notebook"
6. Select "Accounts"
7. Click the "pen with notebook"
8. Select "Account Activity" to view the card transactions, then click "Show Activity"
   Or select "Pending Account Activity" to check transactions the point-of-sale owner has not settled yet, then click "Show Activity"
   Or select "Amount" to check the available balance in the account
   Or select "Old Activity" for transactions made a long time ago`
}

};

/* أسماء النماذج والملفات (المحتوى نفسه خطوات إجرائية) */
const FORMS_EN = {
    'تنزيل ملف ترخيص الشركة ': 'Company licence file',
    'تنزيل ملف نموذج تغير الرقم': 'Phone number change form',
    'تنزيل ملف Charge Back': 'Chargeback form',
    'تنزيل ملف Globx Agent Networks': 'GlobXpay agent networks',
    'GlobXpay-Aramex Delivery Charges': 'GlobXpay–Aramex delivery charges',
    'أسعار إصدار البطاقات وأسعار التوصيل': 'Card issuance prices & delivery charges',
    'نموذج تعهد Empty': 'Undertaking form (blank)'
};

/* خطوات النماذج بالإنجليزية — مفهرسة باسم الملف (وليس بترتيبه)
   حتى لا تختل المطابقة عند إضافة ملف جديد في منتصف القائمة. */
const FORM_STEPS_EN = {
    'Change number form.pdf': [
        'Verify the customer identity',
        'Ask the customer to fill the Change Phone Number Form',
        'Ask the customer to provide his ID (Front and Back)',
        'Once the customer sends the needed documents, send an email to the compliance team, cc Operations & Customer Support'
    ],
    'Chargeback form.pdf': [
        'Verify the customer identity',
        'Check the transaction that the customer is talking about',
        'Ask the customer to fill the Chargeback form: mention to the customer that the result might take up to 45 days',
        'Once the customer sends the form, send the email to the operations team',
        'Please note that if the customer wishes to submit a dispute form, a fee of 5 JOD or 7 USD applies. The fee is refundable if an error in the transaction is proven and the dispute is valid; if the transaction turns out to be correct with no error, the fee is non-refundable.'
    ],
    'Card Items Price.xlsx': [
        'The file contains card issuance prices for each entity: Globx, Valetax, Trading Road, Gabbi Digital',
        'Each sheet shows the card name in Arabic and English, the price, and the currency (JOD or USD)',
        'The "Card deliveries" sheet contains delivery prices for all countries',
        'Make sure to select the correct sheet for the entity the customer belongs to before quoting a price'
    ],
    'نموذج تعهد Empty.docx': [
        'If the ID is broken at the edge, or the text on the ID is unclear or the numbers are worn out',
        'We provide them with the undertaking form and also ask them to provide supporting documents'
    ]
};
