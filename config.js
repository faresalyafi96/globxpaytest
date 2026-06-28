const config = {
    files: [
        {
            name: 'تنزيل ملف ترخيص الشركة ',
            file: 'globxpaypres.pdf',
            steps: []
        },
        {
            name: 'تنزيل ملف نموذج تغير الرقم',
            file: 'Change number form.pdf',
            steps: [
                'Verify the customer identity',
                'Ask the customer to fill the Change Phone Number Form',
                'Ask the customer to provide his ID (Front and Back)',
                'Once the customer send the needed documents send email to compliance team , cc Operations & Customer support'
            ]
        },
        {
            name: 'تنزيل ملف Charge Back',
            file: 'Chargeback form.pdf',
            steps: [
                'Verify the customer identity',
                'Check the transaction that the customer is talking about',
                'Ask the customer to fill the Charge back form : Mention to the customer that the result might take up to 45 days',
                'Once the customer send the form, send the email to operations team',
                'يرجى العلم أنه في حال رغبة العميل بتقديم نموذج اعتراض، يتم استيفاء رسوم بقيمة 5 JOD أو 7 USD تكون الرسوم مستردة في حال ثبت وجود خطأ بالحركة وكان الاعتراض صحيح، أما إذا تبين أن الحركة سليمة ولا يوجد فيها أي خطأ، فتكون الرسوم غير مستردة'
                     ]
        },
        {
            name: 'تنزيل ملف Globx Agent Networks',
            file: 'GlobXpay Networks.xlsx',
            steps: []
        },
          {
            name: 'GlobXpay-Aramex Delivery Charges',
            file: 'GlobXpay-Aramex Delivery Charges.xlsx',
            steps: []
        },
        {
            name: 'نموذج تعهد Empty',
            file: 'نموذج تعهد Empty.docx',
            steps: ['إذا كانت الهوية طرفعها مكسور او الخط اللي بالهوية مش واضح او ممحي الأرقام فيها',
                'بنزودهم بنموذج التعهد وايضاً نخبرهم بتزويدنا بوثائق معززة '
                
            ]
        },
        
    ]
};
