updateMongoFromXeroResult = {
    price: 123,
    dueDate: 123,
    sentToContact: true,
    status: 'VOIDED'
}

firstLineItem = {
    "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
    "UnitAmount": "999999999.00",
    "TaxType": "OUTPUT2",
    "TaxAmount": "199999999.80",
    "LineAmount": "999999999.00",
    "AccountCode": "200",
    "Quantity": "1.0000",
    "LineItemID": "1abc93a4-f958-4b53-a0ce-fe8d5b32e37a"
};

firstInvoice = {
    "Contact": {
        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
        "Name": "test"
    },
    "Date": "2016-02-25T00:00:00",
    "DueDate": "2016-02-25T00:00:00",
    "Status": "VOIDED",
    "LineAmountTypes": "Exclusive",
    "LineItems": {
        "LineItem": firstLineItem
    },
    "SubTotal": "999999999.00",
    "TotalTax": "199999999.80",
    "Total": "1199999998.80",
    "UpdatedDateUTC": "2016-02-29T17:56:41.703",
    "CurrencyCode": "GBP",
    "Type": "ACCREC",
    "InvoiceID": "5f9015d9-9907-4f17-8aec-a5a9669b3306",
    "InvoiceNumber": "INV-0002",
    "Reference": "Hire Space",
    "AmountDue": "0.00",
    "AmountPaid": "0.00",
    "AmountCredited": "0.00",
    "CurrencyRate": "1.000000",
    "HasAttachments": "false"
};

recentlyEditedXeroInvoicesResultNone = {
    "Response": {
        "Id": "fa497ae5-69ef-4da4-8c9a-e7ee79c0ff05",
        "Status": "OK",
        "ProviderName": "Hire Space Test",
        "DateTimeUTC": "2016-03-19T12:56:57.2409861Z"
    }
};

recentlyEditedXeroInvoicesResultOne = {
    "Response": {
        "Id": "fa497ae5-69ef-4da4-8c9a-e7ee79c0ff05",
        "Status": "OK",
        "ProviderName": "Hire Space Test",
        "DateTimeUTC": "2016-03-19T12:56:57.2409861Z",
        "Invoices": {
            "Invoice": firstInvoice
        }
    }
};


recentlyEditedXeroInvoicesResultHundred = {
    "Response": {
        "Id": "fa497ae5-69ef-4da4-8c9a-e7ee79c0ff05",
        "Status": "OK",
        "ProviderName": "Hire Space Test",
        "DateTimeUTC": "2016-03-19T12:56:57.2409861Z",
        "Invoices": {
            "Invoice": [
                firstInvoice,
                {
                    "Contact": {
                        "ContactID": "b0cfa240-9b94-459e-bbcf-79dffe300cba",
                        "Name": "Egg London"
                    },
                    "Date": "2018-02-27T00:00:00",
                    "DueDate": "2018-02-28T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 Egg London booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "db5a39a2-9e95-4557-9642-87d0f6303a0c"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:16.977",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "3428a107-f461-44b8-96b0-39c0a1e5a3be",
                    "InvoiceNumber": "INV-0036",
                    "Reference": "Hire Space due in February",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "a89e3208-802f-488e-88fe-52e46681c1ae",
                        "Name": "Herbert Berger at Innholders' Hall"
                    },
                    "Date": "2018-02-27T00:00:00",
                    "DueDate": "2018-02-28T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Bilyana D Borisova -Koteva's \u00a3999,999,999 Herbert Berger at Innholders' Hall booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "b0fb55a2-6cb1-4f62-9280-f73f0aff059c"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:22.623",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "1dae0ff2-7e9a-4370-b690-fe8c39ac1267",
                    "InvoiceNumber": "INV-0035",
                    "Reference": "Hire Space due in February",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2018-02-27T00:00:00",
                    "DueDate": "2018-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "4a2c5159-2e90-4bdf-9ba0-fb682804ced1"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "7e175013-b6e2-4718-a6f9-ea485ed8cc0d"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "fe0bd18b-17d1-458e-8281-1708be47b469"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "9e28e976-5356-44ff-bfa8-f0ed15331bf4"
                            }
                        ]
                    },
                    "SubTotal": "3999999996.00",
                    "TotalTax": "799999999.20",
                    "Total": "4799999995.20",
                    "UpdatedDateUTC": "2016-02-29T17:57:26.54",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "324e7619-49ab-4984-95bf-4c1c7ed885e5",
                    "InvoiceNumber": "INV-0034",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-10-27T00:00:00",
                    "DueDate": "2016-10-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "24829e3b-f67c-4a13-a101-8c17ea22677c"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "be1cac17-7e30-4822-80fe-bf27387b057c"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "aaeaeb84-b629-4dab-9c27-78f0ab6d3108"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "c2a48caf-cfdc-4651-80b8-dbd060a9d522"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "2f67041b-54e2-4949-807f-bf2811ea6338"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "bc071a87-af6d-472a-87b2-96ac8d5a8f8b"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "c10df3f3-6a85-4fdc-bc12-ef0e528ebad1"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "7dfa3e9f-f17e-4e8d-bbbe-cb64c4dbed09"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "6819e7b6-b9b2-466d-a2e8-b438bb51be96"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "09af041f-348d-4541-bec9-ea798156a033"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "0e9245ea-16d8-4997-89d4-6100613f618d"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "8dfe89a8-aaae-46e2-befd-b60e18326ec7"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "ccee8fa3-fe7a-479e-a415-4913b1ef3757"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "bc760256-4c38-4fe0-aaf9-3bfedeb6ab7a"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "3416e660-33a7-4a99-bf04-d9f0884926b7"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "e88b0640-8683-4bb9-8113-1878a889a0ed"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "b65c03fb-c8a3-44e9-b7f2-86f1f7aff8f8"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "948c976f-35ed-4a21-8f09-041db84ef9c4"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "18d64c9e-b5b7-4dc1-b505-2b7452681b87"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "9b1765f0-d75c-4912-a668-fe1c6dd51d20"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "572fd6d2-f22d-475c-a9c0-a6dcee52e0b4"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "7fa3b439-0ed1-4dfb-9d69-b06a6fee49db"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "d8de5dc5-6e36-46b5-8a1b-abe996183d43"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "b9b8368e-9585-445e-9934-2c1daebf3d97"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "1cac2934-61f1-4a0c-8d53-9a3915033c7e"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "dded03dc-c4b7-4eed-ba45-19b83ba48239"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "e2683aa8-721f-47f2-ad6e-a1f5f46f3bab"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "e2cb75e7-e402-474f-bc54-d10e4844c15e"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "87420378-b4f8-4bba-89fe-a711aca74a33"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "25fc7f40-2c79-4f71-b22c-4872c69946f1"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "38fdc2dd-f053-4b70-8708-8ede64f9a40c"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "cb687ac8-dac0-4325-a79f-c961f6589bd5"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "26e6dac6-56c4-4f6f-84a0-88f925f90421"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "4a2a900b-86b0-4d2a-bb93-feeb5c53d5f2"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "56955122-7197-4156-b8bc-e421ca7030f3"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "4d7b17c8-6b48-47bd-b7f7-40dea5d0dd37"
                            }
                        ]
                    },
                    "SubTotal": "35999999964.00",
                    "TotalTax": "7199999992.80",
                    "Total": "43199999956.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:31.233",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "2ef49c6e-c5ee-4aab-96ad-3f3a2efe8fcc",
                    "InvoiceNumber": "INV-0033",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "82576b07-409c-46a1-941b-84fc4a01ffb1"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "3392d727-52ca-4b56-ad8e-b028c409508e"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:35.307",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "c581dc8a-4387-4d33-930b-33564d1629ed",
                    "InvoiceNumber": "INV-0027",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "fbdf273c-2354-4ce2-a6ae-56959a2b1395"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:39.52",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "10aee9ab-4d12-4f0f-82ce-50069914e90e",
                    "InvoiceNumber": "INV-0026",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "7279188b-302c-4f7b-874a-21a0892882c3"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:43.293",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "dba5ecd9-e8e7-4220-b75a-2eb38afc609d",
                    "InvoiceNumber": "INV-0025",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "c15fdb10-8e5c-4799-876f-42a4b5495ddd"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:47.77",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4bcd5cd6-9bbb-4c68-b770-bc7af0492a93",
                    "InvoiceNumber": "INV-0024",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "7402a513-29b8-4bc1-b50e-8c52414d0fee"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:57:51.733",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "9e913361-587c-441a-bf4a-2622d0ff20b6",
                    "InvoiceNumber": "INV-0023",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "2723c439-371b-47c4-9fe6-12bb5d25169b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:58:00.097",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "f278c0fb-f614-4ec1-813f-53f6c7b97170",
                    "InvoiceNumber": "INV-0022",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "bcd12245-d3eb-411d-b7d6-9359e4b88cd6"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:58:03.107",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5aca1bfa-7802-4615-ab13-2392e4a31fc1",
                    "InvoiceNumber": "INV-0021",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "695efeec-ef21-446b-93ac-38f119511c43"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:58:06.647",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "614b459f-a158-41bc-ac1a-e446effd1327",
                    "InvoiceNumber": "INV-0017",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "aacd7fee-7837-4dd6-b126-d9a7800eacb7",
                        "Name": "The Ladbroke Arms"
                    },
                    "Date": "2018-02-27T00:00:00",
                    "DueDate": "2018-02-28T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 The Ladbroke Arms booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "8ebba5e3-afda-4be5-8435-cd4d93c4c4ad"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 The Ladbroke Arms booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "5b8a6da1-572b-432a-bbcd-559e117dbf06"
                            }
                        ]
                    },
                    "SubTotal": "1999999998.00",
                    "TotalTax": "399999999.60",
                    "Total": "2399999997.60",
                    "UpdatedDateUTC": "2016-02-29T17:58:27.037",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "9bb151c1-1162-451b-b518-a5f422068c76",
                    "InvoiceNumber": "INV-0037",
                    "Reference": "Hire Space due in February",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "e8d4877f-3b64-4d73-af25-9f812cb129cf"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:06.443",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "8618acf4-7ee4-421c-bbe5-1781a4da622a",
                    "InvoiceNumber": "INV-0020",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "fbd184e2-2be7-42c0-859e-69bdc6b4f95b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:10.577",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "bf84ee67-c2d2-46a0-9f70-53c16a04d04b",
                    "InvoiceNumber": "INV-0019",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6b0810da-8f6f-4ec6-9f14-d713c48fa396"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:14.197",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "a0978c91-7e97-4516-8aaf-ba08aa61c8fa",
                    "InvoiceNumber": "INV-0018",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "810e0fd8-e685-4999-8619-6bcd0c3f0150"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:18.08",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "d2d733f4-b52a-46a8-8b54-ff2fc9c312a3",
                    "InvoiceNumber": "INV-0012",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "391473de-aa09-4f20-b2a2-7a7de5bc436b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:21.917",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "a76c6f89-2a70-4fc3-b60a-0f276989f495",
                    "InvoiceNumber": "INV-0011",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "8914bc7d-18b0-4c8e-b87b-497180698b16"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:26.473",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "e355cb62-e7ae-471d-af93-e0f0b28ff1b8",
                    "InvoiceNumber": "INV-0010",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "6c9aa60a-cad4-4704-b0da-72e80bf9671a"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T17:59:30.937",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "69137068-3ff7-44f3-aa95-169fe4ae588c",
                    "InvoiceNumber": "INV-0009",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "8f9e1885-184a-4f2c-afd2-2c56aaf0005c"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:08.237",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "b387f065-b709-4a58-bae7-10f909474a4c",
                    "InvoiceNumber": "INV-0016",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-27T00:00:00",
                    "DueDate": "2016-02-27T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "c3e42f2f-5b3e-4a36-9ba9-144de52ff82b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:12.073",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "ea586102-cd3e-49ac-abe3-e8b0922fa3a0",
                    "InvoiceNumber": "INV-0015",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "ca7a7d13-81e0-420c-9510-3963fbc78b12"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:16.55",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "df49cbd2-74c3-4e4d-8da7-a428fa6bae83",
                    "InvoiceNumber": "INV-0014",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "18e166c4-8f5e-4baf-8f82-2915cabb464b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:21.043",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "8c02a194-3771-4a82-9850-8cd51cc28772",
                    "InvoiceNumber": "INV-0013",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "0a8b8171-ccbd-4c9c-aabb-ee2e7457352d"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:25.067",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "c35f5dc7-67f1-4244-a54c-a39f98c51f57",
                    "InvoiceNumber": "INV-0008",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "3e2e0960-af30-4929-a5ec-ee453547369b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:29.483",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "76466588-1b20-4a9b-bbf4-418335ed08f6",
                    "InvoiceNumber": "INV-0007",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "1cf11584-1ab3-4170-9916-cddfb79f7f99"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:33.523",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "01dc30ea-64d6-4fb3-b16c-b148dfb6eeb0",
                    "InvoiceNumber": "INV-0006",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "bbdd6671-fdf8-4dcd-b5a9-54888fd4d32e"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:36.707",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "3bb80f1c-059b-41c1-b227-9ce22c7556dd",
                    "InvoiceNumber": "INV-0005",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Quantity": "1.0000",
                            "LineItemID": "61692a26-f85c-4039-9b5c-ac8642594490"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:39.857",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4032689e-17fd-4fdd-a169-fbc1a3614ee8",
                    "InvoiceNumber": "INV-0004",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-24T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "8f419e65-6006-4151-8268-1ae70939d14e"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "ad8c9a7b-d94b-4566-97f6-f8090e183626"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:43.773",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "aa4b94ee-f06b-428f-a422-47d087fedc00",
                    "InvoiceNumber": "INV-0032",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-24T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "2fd0e750-3118-4b89-9eea-e2bbfb220683"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "fef4047d-1967-4df1-af2f-85a569327de3"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:51.37",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "737cd9dc-7c62-4d19-96d2-1c4e0d687cc1",
                    "InvoiceNumber": "INV-0031",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-24T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "a16f6a1c-66a2-4f02-8b81-84b53c4571fe"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "91f25a7b-58aa-4a77-b226-84b65aafa03a"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T18:00:53.773",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "6bb714a0-b245-4dc0-8656-a9875466b8cf",
                    "InvoiceNumber": "INV-0030",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-24T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "878f5bc4-44ac-4e8e-bdda-6bb5075bc06b"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "b6c7180f-c32f-49f0-b2b6-45f26f4b7a2e"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T18:01:32.757",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "a3ecca7a-ddec-486d-b935-1822ba36b353",
                    "InvoiceNumber": "INV-0029",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-24T00:00:00",
                    "DueDate": "2016-03-24T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "276d9243-1c3a-4fff-9fe1-63c84d5a732c"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a35 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "5.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "1.00",
                                "LineAmount": "5.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "e51c7ca8-f276-4de0-9c7e-de0f38f59538"
                            }
                        ]
                    },
                    "SubTotal": "1000000004.00",
                    "TotalTax": "200000000.80",
                    "Total": "1200000004.80",
                    "UpdatedDateUTC": "2016-02-29T18:01:35.597",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "116874a9-122f-44be-b271-11e37ef4f722",
                    "InvoiceNumber": "INV-0028",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-07T00:00:00",
                    "DueDate": "2016-02-17T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "TEST",
                            "UnitAmount": "500.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "1000.00",
                            "LineAmount": "5000.00",
                            "AccountCode": "200",
                            "Quantity": "10.0000",
                            "LineItemID": "abf5d361-2d1d-47e7-9b92-a49b2eca140c"
                        }
                    },
                    "SubTotal": "5000.00",
                    "TotalTax": "1000.00",
                    "Total": "6000.00",
                    "UpdatedDateUTC": "2016-02-29T18:01:43.413",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "28e754de-c263-4647-b37b-a01c46a6d3b6",
                    "InvoiceNumber": "INV-0001",
                    "Reference": "TEST",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "SentToContact": "true",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2ea1a738-52f2-4370-8853-46b869b5c195",
                        "Name": "test"
                    },
                    "Date": "2016-02-25T00:00:00",
                    "DueDate": "2016-02-25T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva&apos;s &#163;999,999,999 CWSE Whithorn Estate booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": {
                                    "Name": "CityRegion",
                                    "Option": "London",
                                    "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                }
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "0e19c656-f347-4baf-b213-31bfd3149d0b"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-02-29T18:02:06.313",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4b4264fa-2e09-4d3d-a086-6987b0c0a2b9",
                    "InvoiceNumber": "INV-0003",
                    "Reference": "Hire Space",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "25f65727-d88b-4bd8-9e47-53911c3f2178",
                        "Name": "Four Corners"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2018-02-28T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 Four Corners booking for a Dear Karate Class\/Madame on (9th Jun 2015) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-1Z9H)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "2d8cf026-6f0c-4649-a846-76c0de0883a8"
                            },
                            {
                                "Description": "Hire Space commission of 9% on Bilyana D Borisova -Koteva's \u00a3999,999,999 Four Corners booking for a Dear Karate Class\/Madame on (20th Feb 2016) as arranged by Hire Space Venue Expert Janina (Enquiry reference HS-0JW7)",
                                "UnitAmount": "999999999.00",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "199999999.80",
                                "LineAmount": "999999999.00",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Venue Expert",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "d99b194e-c287-43a1-b9cc-e87c7c7b71de"
                            }
                        ]
                    },
                    "SubTotal": "1999999998.00",
                    "TotalTax": "399999999.60",
                    "Total": "2399999997.60",
                    "UpdatedDateUTC": "2016-03-03T10:26:53.063",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "6ded3de2-8542-4593-8250-67268f566b05",
                    "InvoiceNumber": "INV-0039",
                    "Reference": "Hire Space due in February",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "de6ead67-bbe2-4a8b-8917-825dfdf89058",
                        "Name": "Patch Bar"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2018-02-28T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space - Monthly Partner Venue Promotion -  (Patch Bar)",
                            "UnitAmount": "999999999.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "199999999.80",
                            "LineAmount": "999999999.00",
                            "AccountCode": "202",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Partner",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "96c3f88a-6b63-4818-a685-07e4e6529e9e"
                        }
                    },
                    "SubTotal": "999999999.00",
                    "TotalTax": "199999999.80",
                    "Total": "1199999998.80",
                    "UpdatedDateUTC": "2016-03-03T10:26:59.287",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "fb4d3671-87e7-4c65-b113-78deb7d1fef2",
                    "InvoiceNumber": "INV-0038",
                    "Reference": "Hire Space due in February",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "67176540-5345-4d6e-a4f2-ee30d2688bdb",
                        "Name": "The Waldorf Hilton Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a31,433 The Waldorf Hilton Hotel booking for a Wedding enquiry on (7th Nov 2015) as arranged by Hire Space Venue Expert Adele (Enquiry reference undefined)",
                            "UnitAmount": "1433.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "286.66",
                            "LineAmount": "1433.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "d21c1b98-54b6-4710-896a-5f1569f6944b"
                        }
                    },
                    "SubTotal": "1433.30",
                    "TotalTax": "286.66",
                    "Total": "1719.96",
                    "UpdatedDateUTC": "2016-03-03T14:22:23.047",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4f6b1b80-3d35-4361-b2c3-280c8dbc4087",
                    "InvoiceNumber": "INV-0041",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "67176540-5345-4d6e-a4f2-ee30d2688bdb",
                        "Name": "The Waldorf Hilton Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a31,433 The Waldorf Hilton Hotel booking for a Wedding enquiry on (7th Nov 2015) as arranged by Hire Space Venue Expert Adele (Enquiry reference undefined)",
                            "UnitAmount": "1433.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "286.66",
                            "LineAmount": "1433.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "8c3afabd-0c58-49ef-9a27-e640bfc5c38e"
                        }
                    },
                    "SubTotal": "1433.30",
                    "TotalTax": "286.66",
                    "Total": "1719.96",
                    "UpdatedDateUTC": "2016-03-03T14:22:41.86",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "ec896b66-9f78-4be5-9553-ddd1149bf63b",
                    "InvoiceNumber": "INV-0040",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "67176540-5345-4d6e-a4f2-ee30d2688bdb",
                        "Name": "The Waldorf Hilton Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a31,433 The Waldorf Hilton Hotel booking for a Wedding enquiry on (7th Nov 2015) as arranged by Hire Space Venue Expert Adele (Enquiry reference undefined)",
                            "UnitAmount": "1433.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "286.66",
                            "LineAmount": "1433.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "a9d12f68-5db9-4a0c-95a2-b1ddb4c96fa4"
                        }
                    },
                    "SubTotal": "1433.30",
                    "TotalTax": "286.66",
                    "Total": "1719.96",
                    "UpdatedDateUTC": "2016-03-03T16:26:08.247",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "8a30af7a-4c83-4bfc-8791-68493ad0b889",
                    "InvoiceNumber": "INV-0042",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "9503ed2c-0dee-4899-bea2-f3ecd35c44ce",
                        "Name": "Mint Leaf Restaurant"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Sally Davey's (TripAdvisor, Inc.) \u00a350 Mint Leaf Restaurant booking for a Networking on (3rd Nov 2015) via our online platform",
                            "UnitAmount": "50.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "10.00",
                            "LineAmount": "50.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6a126207-85e9-4fb7-956b-90f02b96ea94"
                        }
                    },
                    "SubTotal": "50.00",
                    "TotalTax": "10.00",
                    "Total": "60.00",
                    "UpdatedDateUTC": "2016-03-03T16:32:32.303",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "45716445-fdc0-4520-be59-06d892f18485",
                    "InvoiceNumber": "INV-0063",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "ff87fa43-170a-42d1-b872-5ed2ad318b46",
                        "Name": "The Vinyl Factory Soho"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Gabor Thier's (Mamapapacola) \u00a3575 The Vinyl Factory Soho  booking for a Product Launch on (4th Nov 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "575.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "115.00",
                            "LineAmount": "575.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "eec67161-507b-4fe6-9daf-125b6c6e1576"
                        }
                    },
                    "SubTotal": "575.00",
                    "TotalTax": "115.00",
                    "Total": "690.00",
                    "UpdatedDateUTC": "2016-03-03T16:32:51.447",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "9e1c6f34-2b1d-43c7-8314-3e0f0a1d3331",
                    "InvoiceNumber": "INV-0062",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "e3eafc7f-8679-40db-86d0-c95a32390fb4",
                        "Name": "Rich Mix"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 5% on Carsten Bergerfurth's (Hotmai) \u00a33 Rich Mix booking for a Meeting on (3rd Nov 2015) via our online platform",
                            "UnitAmount": "3.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.70",
                            "LineAmount": "3.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "e44d035b-147b-46c5-b9c4-a628585cad38"
                        }
                    },
                    "SubTotal": "3.50",
                    "TotalTax": "0.70",
                    "Total": "4.20",
                    "UpdatedDateUTC": "2016-03-03T16:33:07.047",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "7627b10e-4063-439f-b243-6b991231a8a5",
                    "InvoiceNumber": "INV-0061",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "5daa1f56-ccd3-45fb-a487-a36ff6bff920",
                        "Name": "Blackfriars House"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Darren Lovell's (Britesparkfilms) \u00a310 Blackfriars House booking for a Other on (24th Sep 2015) via our online platform",
                            "UnitAmount": "10.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.00",
                            "LineAmount": "10.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "4e98981a-8712-4378-a9c9-cb8f29b582eb"
                        }
                    },
                    "SubTotal": "10.00",
                    "TotalTax": "2.00",
                    "Total": "12.00",
                    "UpdatedDateUTC": "2016-03-03T16:33:24.173",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "b88163cf-a311-4da4-82c5-a4feb74180b4",
                    "InvoiceNumber": "INV-0060",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "1581ca08-188b-4b89-bf00-66c49eaf8fa8",
                        "Name": "Lord's Cricket Ground"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Sasha Baldwin 's (Quintessentially London) \u00a3410 Lord's Cricket Ground booking for a Retirement Dinner on (30th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "410.67",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "82.13",
                            "LineAmount": "410.67",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6bb1ca4b-e892-4de1-a682-268c788cfaa6"
                        }
                    },
                    "SubTotal": "410.67",
                    "TotalTax": "82.13",
                    "Total": "492.80",
                    "UpdatedDateUTC": "2016-03-03T16:33:48.807",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "e0f3fd66-16d3-4e24-9327-bd6d5dd00d3c",
                    "InvoiceNumber": "INV-0059",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "bf7f668b-3404-4e15-8a2e-af9e5559de81",
                        "Name": "St James the Less"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a33 St James the Less booking for a Dance Rehearsal on (25th Oct 2015) via our online platform",
                            "UnitAmount": "3.60",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.72",
                            "LineAmount": "3.60",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "d5b61d0e-994c-42b8-a6b3-7c1b433c8a61"
                        }
                    },
                    "SubTotal": "3.60",
                    "TotalTax": "0.72",
                    "Total": "4.32",
                    "UpdatedDateUTC": "2016-03-03T16:34:10.88",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "7b243c93-0a87-4fb7-bc5d-6a357343d8e7",
                    "InvoiceNumber": "INV-0057",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "4f317c26-72c6-4849-8e2f-7b2493783aa5",
                        "Name": "Jenius Social"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Holly Taylor's \u00a381 Jenius Social  booking for a Supper Club on (31st Oct 2015) via our online platform",
                            "UnitAmount": "81.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "16.30",
                            "LineAmount": "81.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "1e1af6a5-6939-48c2-b26b-f522f423f549"
                        }
                    },
                    "SubTotal": "81.50",
                    "TotalTax": "16.30",
                    "Total": "97.80",
                    "UpdatedDateUTC": "2016-03-03T16:34:31.597",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "d6429c1b-00d7-40bf-b472-8b99c7adc8ac",
                    "InvoiceNumber": "INV-0051",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "6cda3f3f-123d-4d3a-9355-14b838dd9396",
                        "Name": "Hoxton Community Garden"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on charlotte whatnell's (King) \u00a3360 Hoxton Community Garden booking for a Summer Party on (7th Aug 2015) via our online platform",
                            "UnitAmount": "360.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "72.00",
                            "LineAmount": "360.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "9f147879-a336-45e5-b0d9-194a4a54422e"
                        }
                    },
                    "SubTotal": "360.00",
                    "TotalTax": "72.00",
                    "Total": "432.00",
                    "UpdatedDateUTC": "2016-03-03T16:34:43.593",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "bbef8923-542a-4e1d-8a3d-deb17de5d192",
                    "InvoiceNumber": "INV-0058",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "4cf17146-8a5e-4cec-b95a-a4f94e130d5d",
                        "Name": "Carousel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 10% on Andrew Buurman's (Buurman) \u00a3878 Carousel booking for a 50th Birthday Party on (25th Sep 2015) via our online platform",
                                "UnitAmount": "878.60",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "175.72",
                                "LineAmount": "878.60",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "ef1eb52f-c5ba-44e2-a226-36496d5ef5d5"
                            },
                            {
                                "Description": "Hire Space commission of 10% on Ned Hulton's (Hotmai) \u00a376 Carousel booking for a IT Network Event on (16th Sep 2015) via our online platform",
                                "UnitAmount": "76.80",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "15.36",
                                "LineAmount": "76.80",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "dbbeb8b1-298e-4584-bf45-8e833351cfcd"
                            }
                        ]
                    },
                    "SubTotal": "955.40",
                    "TotalTax": "191.08",
                    "Total": "1146.48",
                    "UpdatedDateUTC": "2016-03-03T16:35:21.067",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "b42b1f28-6030-4f6e-95f1-b9a67d98ecc4",
                    "InvoiceNumber": "INV-0049",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "6207c53b-09f6-4d2d-b242-fc645263fc60",
                        "Name": "Town Hall Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tess Lipinski  's (Tableau Software) \u00a32,532 Town Hall Hotel  booking for a training on (6th Oct 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "2532.20",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "506.44",
                            "LineAmount": "2532.20",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "82a3bb24-363f-4ae2-861a-52db05e2f6fb"
                        }
                    },
                    "SubTotal": "2532.20",
                    "TotalTax": "506.44",
                    "Total": "3038.64",
                    "UpdatedDateUTC": "2016-03-03T16:35:39.07",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "02edaa89-694e-4baa-ba4d-5996eadd5a60",
                    "InvoiceNumber": "INV-0052",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2a207134-915c-4e8c-a63d-33d9118925f0",
                        "Name": "The Clubhouse London- 50 Grosvenor Hill"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Andrzej Wroblewski's (Btconnect) \u00a312 The Clubhouse London- 50 Grosvenor Hill booking for a Business Meeting on (23rd Apr 2015) via our online platform",
                            "UnitAmount": "12.96",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.59",
                            "LineAmount": "12.96",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "ce8c6184-545f-4c99-b232-dda54db60d41"
                        }
                    },
                    "SubTotal": "12.96",
                    "TotalTax": "2.59",
                    "Total": "15.55",
                    "UpdatedDateUTC": "2016-03-03T16:36:07.35",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "559c6cba-2837-44fe-aed3-ef1c6b755adc",
                    "InvoiceNumber": "INV-0055",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "da7876ab-7802-401c-b273-52acf979e150",
                        "Name": "The Steel Yard"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tim Hinson  's (Timhinson) \u00a3960 The Steel Yard booking for a Indoors Football on (2nd Nov 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "960.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "192.00",
                            "LineAmount": "960.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6f94a3fd-6dcf-40c8-bd85-e821b4ced45c"
                        }
                    },
                    "SubTotal": "960.00",
                    "TotalTax": "192.00",
                    "Total": "1152.00",
                    "UpdatedDateUTC": "2016-03-03T16:36:54.277",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "ccb4382c-d8e7-437a-ba10-5a46df975e76",
                    "InvoiceNumber": "INV-0054",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "a2e80cf9-4b43-4eb0-a7b2-01b91a2b3a1b",
                        "Name": "Rocket City"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Test Jones 's \u00a395 Rocket City booking for a Work Reunion Dinner on (23rd Oct 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "95.80",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "19.16",
                            "LineAmount": "95.80",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "35476182-bc35-4fd4-99df-1b40006820c3"
                        }
                    },
                    "SubTotal": "95.80",
                    "TotalTax": "19.16",
                    "Total": "114.96",
                    "UpdatedDateUTC": "2016-03-03T16:37:09.097",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "46109fc9-b63b-4525-bc19-d03be3527154",
                    "InvoiceNumber": "INV-0050",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "08343de9-bdcc-466f-b265-b7827dad70e1",
                        "Name": "Andaz London Liverpool Street"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Lee Edwards's \u00a3308 Andaz London Liverpool Street booking for a Seminar  on (21st Oct 2015) via our online platform",
                            "UnitAmount": "308.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "61.66",
                            "LineAmount": "308.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "ea1afd83-6759-4853-b045-5cfa9d5c5f15"
                        }
                    },
                    "SubTotal": "308.30",
                    "TotalTax": "61.66",
                    "Total": "369.96",
                    "UpdatedDateUTC": "2016-03-03T16:37:21.687",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "ee3bd93f-c044-4153-962a-451ae3670d6f",
                    "InvoiceNumber": "INV-0053",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "da76750d-991e-4b07-87f2-6035c17efb7d",
                        "Name": "Studio Spaces E2"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tom Carrington Smith's (The Eleven) \u00a3300 Studio Spaces E2 booking for a Networking Event on (21st Oct 2015) via our online platform",
                            "UnitAmount": "300.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.00",
                            "LineAmount": "300.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6c402530-2c9b-4611-8f1d-2d73da4b72fc"
                        }
                    },
                    "SubTotal": "300.00",
                    "TotalTax": "60.00",
                    "Total": "360.00",
                    "UpdatedDateUTC": "2016-03-03T16:37:32.95",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "a077aa9c-7dd0-49a6-83df-48d558deb5d3",
                    "InvoiceNumber": "INV-0047",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "8e3f6e0d-d0b2-420a-84ae-35b10e2180f1",
                        "Name": "The Trafalgar"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Victoria Slowikowska's (Accenture) \u00a3302 The Trafalgar booking for a Practice Community Update on (14th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "302.10",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.42",
                            "LineAmount": "302.10",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "f7389d1c-b387-4753-b94f-b936c5cd1930"
                        }
                    },
                    "SubTotal": "302.10",
                    "TotalTax": "60.42",
                    "Total": "362.52",
                    "UpdatedDateUTC": "2016-03-03T16:38:18.19",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "debcae74-4f97-42b9-8213-24e35517367f",
                    "InvoiceNumber": "INV-0048",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "831c6c13-a424-46a8-90e9-da94cdd5c4fc",
                        "Name": "The Gallery on the Corner"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Nicolas Vojkovic's (Institut Fran\u00e7ais Du Royaume-Uni) \u00a329 The Gallery on the Corner booking for a Exhibition on (30th Oct 2015) via our online platform",
                                "UnitAmount": "29.25",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.85",
                                "LineAmount": "29.25",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "53baa8ca-b91d-4525-ba82-2705e8169f7a"
                            },
                            {
                                "Description": "Hire Space commission of 9% on desiree's \u00a325 The Gallery on the Corner booking for a Fashion Line Launch on (17th Oct 2015) via our online platform",
                                "UnitAmount": "25.65",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.13",
                                "LineAmount": "25.65",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "3914e46e-d63d-4ee8-99a5-838b0a505acd"
                            }
                        ]
                    },
                    "SubTotal": "54.90",
                    "TotalTax": "10.98",
                    "Total": "65.88",
                    "UpdatedDateUTC": "2016-03-03T16:38:38.063",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "1a4e489a-378e-428e-a1dc-596677d65da0",
                    "InvoiceNumber": "INV-0046",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "b8450271-ac60-4028-9419-b24fcc7e2988",
                        "Name": "Bedford Square Meeting Space"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on James Cox's (Remarkable Group - PR, Creative, Digital, Video and Public Affairs Agency) \u00a321 Bedford Square Meeting Space booking for a Meeting on (30th Oct 2015) via our online platform",
                            "UnitAmount": "21.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "4.20",
                            "LineAmount": "21.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "e6e87947-55f3-4d29-a0b6-d6d6130e2a8a"
                        }
                    },
                    "SubTotal": "21.00",
                    "TotalTax": "4.20",
                    "Total": "25.20",
                    "UpdatedDateUTC": "2016-03-03T16:38:50.903",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4cc570ea-38fe-4cbb-86aa-16664595fd8e",
                    "InvoiceNumber": "INV-0045",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "be4d3537-5696-4741-87f4-324b2bac9dc5",
                        "Name": "Troxy"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Dan Perrin  's \u00a3500 Troxy booking for a Club Night on (31st Oct 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "500.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "100.00",
                            "LineAmount": "500.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "720bef85-a761-47bc-bf47-87256ed80544"
                        }
                    },
                    "SubTotal": "500.00",
                    "TotalTax": "100.00",
                    "Total": "600.00",
                    "UpdatedDateUTC": "2016-03-03T16:39:02.353",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5c530c22-ac99-47ed-90ca-c6476e2476c4",
                    "InvoiceNumber": "INV-0044",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "67176540-5345-4d6e-a4f2-ee30d2688bdb",
                        "Name": "The Waldorf Hilton Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a31,433 The Waldorf Hilton Hotel booking for a Wedding enquiry on (7th Nov 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "1433.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "286.66",
                            "LineAmount": "1433.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "5ea8bd61-1303-4b10-a186-98bdd35939b8"
                        }
                    },
                    "SubTotal": "1433.30",
                    "TotalTax": "286.66",
                    "Total": "1719.96",
                    "UpdatedDateUTC": "2016-03-03T16:39:17.377",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "b46d3d4b-7bb3-4016-8579-bb8906cb98db",
                    "InvoiceNumber": "INV-0043",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "f7030741-7d3f-4923-b99b-58c30996c559",
                        "Name": "Candid Arts"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Katrien Schepens's (Brooks Running) \u00a3180 Candid Arts booking for a Blank Canvas on (13th Oct 2015) via our online platform",
                            "UnitAmount": "180.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "36.00",
                            "LineAmount": "180.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "f3390e66-f2e3-4a50-997b-26e458db21f2"
                        }
                    },
                    "SubTotal": "180.00",
                    "TotalTax": "36.00",
                    "Total": "216.00",
                    "UpdatedDateUTC": "2016-03-03T16:39:31.337",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "08617838-7440-4ffb-b8c9-464227bf16bb",
                    "InvoiceNumber": "INV-0056",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "ff87fa43-170a-42d1-b872-5ed2ad318b46",
                        "Name": "The Vinyl Factory Soho"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Gabor Thier's (Mamapapacola) \u00a3575 The Vinyl Factory Soho  booking for a Product Launch on (4th Nov 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "575.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "115.00",
                            "LineAmount": "575.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6e99fe7d-3314-495c-91d9-4b0b370f9227"
                        }
                    },
                    "SubTotal": "575.00",
                    "TotalTax": "115.00",
                    "Total": "690.00",
                    "UpdatedDateUTC": "2016-03-03T16:48:31.867",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "d675d72c-6491-4cab-af53-c97509b8f113",
                    "InvoiceNumber": "INV-0083",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "e3eafc7f-8679-40db-86d0-c95a32390fb4",
                        "Name": "Rich Mix"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 5% on Carsten Bergerfurth's (Hotmai) \u00a33 Rich Mix booking for a Meeting on (3rd Nov 2015) via our online platform",
                            "UnitAmount": "3.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.70",
                            "LineAmount": "3.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "d6ab7dfd-caab-4654-b74b-bd4a63e23a64"
                        }
                    },
                    "SubTotal": "3.50",
                    "TotalTax": "0.70",
                    "Total": "4.20",
                    "UpdatedDateUTC": "2016-03-03T16:48:37.077",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "26dbd968-e265-4794-b556-9a948d20adbd",
                    "InvoiceNumber": "INV-0082",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "5daa1f56-ccd3-45fb-a487-a36ff6bff920",
                        "Name": "Blackfriars House"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Darren Lovell's (Britesparkfilms) \u00a310 Blackfriars House booking for a Other on (24th Sep 2015) via our online platform",
                            "UnitAmount": "10.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.00",
                            "LineAmount": "10.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "35df52c7-9119-421d-8eea-72967abb0886"
                        }
                    },
                    "SubTotal": "10.00",
                    "TotalTax": "2.00",
                    "Total": "12.00",
                    "UpdatedDateUTC": "2016-03-03T16:48:41.897",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "8d9f8593-f8c0-4593-bb77-54b86b83055a",
                    "InvoiceNumber": "INV-0081",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "1581ca08-188b-4b89-bf00-66c49eaf8fa8",
                        "Name": "Lord's Cricket Ground"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Sasha Baldwin 's (Quintessentially London) \u00a3410 Lord's Cricket Ground booking for a Retirement Dinner on (30th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "410.67",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "82.13",
                            "LineAmount": "410.67",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "1bc3d828-9332-4ff2-ae43-7ae41fc80447"
                        }
                    },
                    "SubTotal": "410.67",
                    "TotalTax": "82.13",
                    "Total": "492.80",
                    "UpdatedDateUTC": "2016-03-03T16:48:45.64",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "94d20a1d-afeb-4207-8787-f9fdebbe5083",
                    "InvoiceNumber": "INV-0080",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "6cda3f3f-123d-4d3a-9355-14b838dd9396",
                        "Name": "Hoxton Community Garden"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on charlotte whatnell's (King) \u00a3360 Hoxton Community Garden booking for a Summer Party on (7th Aug 2015) via our online platform",
                            "UnitAmount": "360.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "72.00",
                            "LineAmount": "360.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "400877f9-4f1f-4917-aa14-1cf65e0b5c71"
                        }
                    },
                    "SubTotal": "360.00",
                    "TotalTax": "72.00",
                    "Total": "432.00",
                    "UpdatedDateUTC": "2016-03-03T16:48:49.823",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "58863526-6cf9-4108-aaf5-4d245beb013d",
                    "InvoiceNumber": "INV-0079",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "bf7f668b-3404-4e15-8a2e-af9e5559de81",
                        "Name": "St James the Less"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a33 St James the Less booking for a Dance Rehearsal on (25th Oct 2015) via our online platform",
                            "UnitAmount": "3.60",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.72",
                            "LineAmount": "3.60",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "f80a0dd0-0598-4dcb-897a-38663792ac66"
                        }
                    },
                    "SubTotal": "3.60",
                    "TotalTax": "0.72",
                    "Total": "4.32",
                    "UpdatedDateUTC": "2016-03-03T16:48:54.033",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5ed1cce4-9d39-4d7d-b279-8fe1a1568d44",
                    "InvoiceNumber": "INV-0078",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "f7030741-7d3f-4923-b99b-58c30996c559",
                        "Name": "Candid Arts"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Katrien Schepens's (Brooks Running) \u00a3180 Candid Arts booking for a Blank Canvas on (13th Oct 2015) via our online platform",
                            "UnitAmount": "180.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "36.00",
                            "LineAmount": "180.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "445e24ff-66d2-4ccd-85fe-c383da4ebf57"
                        }
                    },
                    "SubTotal": "180.00",
                    "TotalTax": "36.00",
                    "Total": "216.00",
                    "UpdatedDateUTC": "2016-03-03T16:48:57.39",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "f9e0a78f-48bb-4778-8d54-7cd2a9e9f80f",
                    "InvoiceNumber": "INV-0077",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "da7876ab-7802-401c-b273-52acf979e150",
                        "Name": "The Steel Yard"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tim Hinson  's (Timhinson) \u00a3960 The Steel Yard booking for a Indoors Football on (2nd Nov 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "960.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "192.00",
                            "LineAmount": "960.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "b40cc810-9774-42d0-8abb-0f04d7d757f2"
                        }
                    },
                    "SubTotal": "960.00",
                    "TotalTax": "192.00",
                    "Total": "1152.00",
                    "UpdatedDateUTC": "2016-03-03T16:49:06.047",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "40cd422a-7dbe-4061-a578-e08945848587",
                    "InvoiceNumber": "INV-0075",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "08343de9-bdcc-466f-b265-b7827dad70e1",
                        "Name": "Andaz London Liverpool Street"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Lee Edwards's \u00a3308 Andaz London Liverpool Street booking for a Seminar  on (21st Oct 2015) via our online platform",
                            "UnitAmount": "308.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "61.66",
                            "LineAmount": "308.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "5b0f740d-777f-4175-8936-492d7ebef573"
                        }
                    },
                    "SubTotal": "308.30",
                    "TotalTax": "61.66",
                    "Total": "369.96",
                    "UpdatedDateUTC": "2016-03-03T16:49:08.45",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "29187f73-0a70-4f84-b70e-14ca4e96911e",
                    "InvoiceNumber": "INV-0074",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "6207c53b-09f6-4d2d-b242-fc645263fc60",
                        "Name": "Town Hall Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tess Lipinski  's (Tableau Software) \u00a32,532 Town Hall Hotel  booking for a training on (6th Oct 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "2532.20",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "506.44",
                            "LineAmount": "2532.20",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "7f43ef4b-75dc-4b89-92f9-04359ec9ca14"
                        }
                    },
                    "SubTotal": "2532.20",
                    "TotalTax": "506.44",
                    "Total": "3038.64",
                    "UpdatedDateUTC": "2016-03-03T16:49:11.927",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "ecf8fc1a-98e6-47ab-944b-c06b222f8128",
                    "InvoiceNumber": "INV-0073",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "4f317c26-72c6-4849-8e2f-7b2493783aa5",
                        "Name": "Jenius Social"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Holly Taylor's \u00a381 Jenius Social  booking for a Supper Club on (31st Oct 2015) via our online platform",
                            "UnitAmount": "81.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "16.30",
                            "LineAmount": "81.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "d382f0e9-1db4-4388-a067-2031bcb00724"
                        }
                    },
                    "SubTotal": "81.50",
                    "TotalTax": "16.30",
                    "Total": "97.80",
                    "UpdatedDateUTC": "2016-03-03T16:49:14.923",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "423518bc-ba26-4adb-9132-9d47e4a56515",
                    "InvoiceNumber": "INV-0072",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "a2e80cf9-4b43-4eb0-a7b2-01b91a2b3a1b",
                        "Name": "Rocket City"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Test Jones 's \u00a395 Rocket City booking for a Work Reunion Dinner on (23rd Oct 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "95.80",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "19.16",
                            "LineAmount": "95.80",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "b0d40b1a-9b36-413c-a523-9dc24fa21621"
                        }
                    },
                    "SubTotal": "95.80",
                    "TotalTax": "19.16",
                    "Total": "114.96",
                    "UpdatedDateUTC": "2016-03-03T16:49:18.747",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4986e84b-6df6-42a6-b449-f2d07f914d6d",
                    "InvoiceNumber": "INV-0071",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "4cf17146-8a5e-4cec-b95a-a4f94e130d5d",
                        "Name": "Carousel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 10% on Andrew Buurman's (Buurman) \u00a3878 Carousel booking for a 50th Birthday Party on (25th Sep 2015) via our online platform",
                                "UnitAmount": "878.60",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "175.72",
                                "LineAmount": "878.60",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "6d1bd56b-ed4a-4783-8a54-c9e2a0559237"
                            },
                            {
                                "Description": "Hire Space commission of 10% on Ned Hulton's (Hotmai) \u00a376 Carousel booking for a IT Network Event on (16th Sep 2015) via our online platform",
                                "UnitAmount": "76.80",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "15.36",
                                "LineAmount": "76.80",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "18b9a965-abff-4358-afed-208fb8cf7679"
                            }
                        ]
                    },
                    "SubTotal": "955.40",
                    "TotalTax": "191.08",
                    "Total": "1146.48",
                    "UpdatedDateUTC": "2016-03-03T16:49:22.817",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5c4193f7-7ae5-45c0-a7c2-113109aaab48",
                    "InvoiceNumber": "INV-0070",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "2a207134-915c-4e8c-a63d-33d9118925f0",
                        "Name": "The Clubhouse London- 50 Grosvenor Hill"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Andrzej Wroblewski's (Btconnect) \u00a312 The Clubhouse London- 50 Grosvenor Hill booking for a Business Meeting on (23rd Apr 2015) via our online platform",
                            "UnitAmount": "12.96",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.59",
                            "LineAmount": "12.96",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "055404ce-b719-41c3-93d6-6f9f3d2d3695"
                        }
                    },
                    "SubTotal": "12.96",
                    "TotalTax": "2.59",
                    "Total": "15.55",
                    "UpdatedDateUTC": "2016-03-03T16:49:58.48",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5649e5c8-cc36-4a6b-8878-2457635f5dc8",
                    "InvoiceNumber": "INV-0076",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "8e3f6e0d-d0b2-420a-84ae-35b10e2180f1",
                        "Name": "The Trafalgar"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Victoria Slowikowska's (Accenture) \u00a3302 The Trafalgar booking for a Practice Community Update on (14th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "302.10",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.42",
                            "LineAmount": "302.10",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "1992ef7f-d8dd-42a8-8fc3-cee155914737"
                        }
                    },
                    "SubTotal": "302.10",
                    "TotalTax": "60.42",
                    "Total": "362.52",
                    "UpdatedDateUTC": "2016-03-03T16:50:01.757",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "abdccaac-dfce-4597-aca8-a11790911443",
                    "InvoiceNumber": "INV-0069",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "da76750d-991e-4b07-87f2-6035c17efb7d",
                        "Name": "Studio Spaces E2"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tom Carrington Smith's (The Eleven) \u00a3300 Studio Spaces E2 booking for a Networking Event on (21st Oct 2015) via our online platform",
                            "UnitAmount": "300.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.00",
                            "LineAmount": "300.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "8d9a2628-c729-4b32-a356-bd3178386140"
                        }
                    },
                    "SubTotal": "300.00",
                    "TotalTax": "60.00",
                    "Total": "360.00",
                    "UpdatedDateUTC": "2016-03-03T16:50:04.813",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "90b29e75-1fd3-4b32-adc5-bf7c3ef3b9e5",
                    "InvoiceNumber": "INV-0068",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "831c6c13-a424-46a8-90e9-da94cdd5c4fc",
                        "Name": "The Gallery on the Corner"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Nicolas Vojkovic's (Institut Fran\u00e7ais Du Royaume-Uni) \u00a329 The Gallery on the Corner booking for a Exhibition on (30th Oct 2015) via our online platform",
                                "UnitAmount": "29.25",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.85",
                                "LineAmount": "29.25",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "c6d65be4-0077-43f9-be32-00d5b0b50875"
                            },
                            {
                                "Description": "Hire Space commission of 9% on desiree's \u00a325 The Gallery on the Corner booking for a Fashion Line Launch on (17th Oct 2015) via our online platform",
                                "UnitAmount": "25.65",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.13",
                                "LineAmount": "25.65",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "0f8b27fb-fde0-4088-bb59-7617506fe57f"
                            }
                        ]
                    },
                    "SubTotal": "54.90",
                    "TotalTax": "10.98",
                    "Total": "65.88",
                    "UpdatedDateUTC": "2016-03-03T16:50:08.497",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "8d2d726e-96d7-445e-a558-a326cb8c5bf4",
                    "InvoiceNumber": "INV-0067",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "b8450271-ac60-4028-9419-b24fcc7e2988",
                        "Name": "Bedford Square Meeting Space"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on James Cox's (Remarkable Group - PR, Creative, Digital, Video and Public Affairs Agency) \u00a321 Bedford Square Meeting Space booking for a Meeting on (30th Oct 2015) via our online platform",
                            "UnitAmount": "21.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "4.20",
                            "LineAmount": "21.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "e10d41e5-83aa-4219-a9fe-e04283bb004c"
                        }
                    },
                    "SubTotal": "21.00",
                    "TotalTax": "4.20",
                    "Total": "25.20",
                    "UpdatedDateUTC": "2016-03-03T16:50:32.347",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "dfb9aa7c-1783-4e6f-8e62-98b1c15f0fc7",
                    "InvoiceNumber": "INV-0066",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "be4d3537-5696-4741-87f4-324b2bac9dc5",
                        "Name": "Troxy"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Dan Perrin  's \u00a3500 Troxy booking for a Club Night on (31st Oct 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "500.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "100.00",
                            "LineAmount": "500.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "0bc8b23b-67a0-4aed-9c77-9b44892e8ff8"
                        }
                    },
                    "SubTotal": "500.00",
                    "TotalTax": "100.00",
                    "Total": "600.00",
                    "UpdatedDateUTC": "2016-03-03T16:50:35.203",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "c0ce6ef5-cff5-4f2b-9123-f6e587f0ec6a",
                    "InvoiceNumber": "INV-0065",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "67176540-5345-4d6e-a4f2-ee30d2688bdb",
                        "Name": "The Waldorf Hilton Hotel"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a31,433 The Waldorf Hilton Hotel booking for a Wedding enquiry on (7th Nov 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "1433.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "286.66",
                            "LineAmount": "1433.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "981418c9-5cc8-4cb2-b6df-712ae36a386b"
                        }
                    },
                    "SubTotal": "1433.30",
                    "TotalTax": "286.66",
                    "Total": "1719.96",
                    "UpdatedDateUTC": "2016-03-03T16:50:40.397",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "b1f2c302-46d6-4489-86fe-150079ab1ee3",
                    "InvoiceNumber": "INV-0064",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Sally Davey's (TripAdvisor, Inc.) \u00a350 Mint Leaf Restaurant booking for a Networking on (3rd Nov 2015) via our online platform",
                            "UnitAmount": "50.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "10.00",
                            "LineAmount": "50.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "c102ddc2-ca45-4b85-b537-1f73567ccf41"
                        }
                    },
                    "SubTotal": "50.00",
                    "TotalTax": "10.00",
                    "Total": "60.00",
                    "UpdatedDateUTC": "2016-03-04T10:30:16.047",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "7dd19f1d-e2c9-4c15-b0c0-72bbc8f49223",
                    "InvoiceNumber": "INV-0104",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Gabor Thier's (Mamapapacola) \u00a3575 The Vinyl Factory Soho  booking for a Product Launch on (4th Nov 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "575.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "115.00",
                            "LineAmount": "575.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "81b95d1e-20f7-4349-8a7f-fc911bf8a51a"
                        }
                    },
                    "SubTotal": "575.00",
                    "TotalTax": "115.00",
                    "Total": "690.00",
                    "UpdatedDateUTC": "2016-03-04T10:30:24.143",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "516d2a3f-2497-4f08-90c4-7638455dae71",
                    "InvoiceNumber": "INV-0103",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 5% on Carsten Bergerfurth's (Hotmai) \u00a33 Rich Mix booking for a Meeting on (3rd Nov 2015) via our online platform",
                            "UnitAmount": "3.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.70",
                            "LineAmount": "3.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "943a8ddf-a57b-4e78-95a7-d8b5be84ff36"
                        }
                    },
                    "SubTotal": "3.50",
                    "TotalTax": "0.70",
                    "Total": "4.20",
                    "UpdatedDateUTC": "2016-03-04T10:30:31.07",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "1ed692f2-a294-449a-a2b5-2aa92efa7576",
                    "InvoiceNumber": "INV-0102",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Darren Lovell's (Britesparkfilms) \u00a310 Blackfriars House booking for a Other on (24th Sep 2015) via our online platform",
                            "UnitAmount": "10.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.00",
                            "LineAmount": "10.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "ee13e9d3-542d-41be-8042-20b579faf32c"
                        }
                    },
                    "SubTotal": "10.00",
                    "TotalTax": "2.00",
                    "Total": "12.00",
                    "UpdatedDateUTC": "2016-03-04T10:30:37.823",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "1bc7fbe6-52bd-4ec0-a63e-e44ed0c45387",
                    "InvoiceNumber": "INV-0101",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Sasha Baldwin 's (Quintessentially London) \u00a3410 Lord's Cricket Ground booking for a Retirement Dinner on (30th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "410.67",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "82.13",
                            "LineAmount": "410.67",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "b239b207-130c-465d-9ee7-15432843a59e"
                        }
                    },
                    "SubTotal": "410.67",
                    "TotalTax": "82.13",
                    "Total": "492.80",
                    "UpdatedDateUTC": "2016-03-04T10:30:43.16",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "3dc9cef6-d55c-4449-9f28-ab9ee0919bd6",
                    "InvoiceNumber": "INV-0100",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on charlotte whatnell's (King) \u00a3360 Hoxton Community Garden booking for a Summer Party on (7th Aug 2015) via our online platform",
                            "UnitAmount": "360.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "72.00",
                            "LineAmount": "360.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "21cc94af-8d69-4cb2-b3ea-aff1dde078ca"
                        }
                    },
                    "SubTotal": "360.00",
                    "TotalTax": "72.00",
                    "Total": "432.00",
                    "UpdatedDateUTC": "2016-03-04T10:30:49.337",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "2a826839-996f-4637-b666-9a4350ca4ef6",
                    "InvoiceNumber": "INV-0099",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Kimberley Okene 's (Macquarie Infrastructure Co Trust) \u00a33 St James the Less booking for a Dance Rehearsal on (25th Oct 2015) via our online platform",
                            "UnitAmount": "3.60",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "0.72",
                            "LineAmount": "3.60",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "fa654754-236c-451d-80bb-79017235dad5"
                        }
                    },
                    "SubTotal": "3.60",
                    "TotalTax": "0.72",
                    "Total": "4.32",
                    "UpdatedDateUTC": "2016-03-04T10:30:55.827",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "96c7b225-cb38-490a-b653-f8d9f9766c4e",
                    "InvoiceNumber": "INV-0098",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Katrien Schepens's (Brooks Running) \u00a3180 Candid Arts booking for a Blank Canvas on (13th Oct 2015) via our online platform",
                            "UnitAmount": "180.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "36.00",
                            "LineAmount": "180.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "72cfe7fb-ce6f-4c8a-9bed-36a819d0b205"
                        }
                    },
                    "SubTotal": "180.00",
                    "TotalTax": "36.00",
                    "Total": "216.00",
                    "UpdatedDateUTC": "2016-03-04T10:31:01.583",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "3663d792-11bc-4f71-ae3c-2e2bf180f522",
                    "InvoiceNumber": "INV-0097",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Andrzej Wroblewski's (Btconnect) \u00a312 The Clubhouse London- 50 Grosvenor Hill booking for a Business Meeting on (23rd Apr 2015) via our online platform",
                            "UnitAmount": "12.96",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "2.59",
                            "LineAmount": "12.96",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "8b177e6f-0f10-4c73-9c72-53fa013425c1"
                        }
                    },
                    "SubTotal": "12.96",
                    "TotalTax": "2.59",
                    "Total": "15.55",
                    "UpdatedDateUTC": "2016-03-04T10:31:06.403",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "daa59e5b-897a-41b7-96df-19d0b78bc461",
                    "InvoiceNumber": "INV-0096",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tim Hinson  's (Timhinson) \u00a3960 The Steel Yard booking for a Indoors Football on (2nd Nov 2015) as arranged by Hire Space Venue Expert Adele",
                            "UnitAmount": "960.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "192.00",
                            "LineAmount": "960.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "3f624ab4-088c-4804-aec8-de92bd9d46bf"
                        }
                    },
                    "SubTotal": "960.00",
                    "TotalTax": "192.00",
                    "Total": "1152.00",
                    "UpdatedDateUTC": "2016-03-04T10:31:58.51",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "3673fd99-92bd-4f9c-805d-c374688110fc",
                    "InvoiceNumber": "INV-0095",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Lee Edwards's \u00a3308 Andaz London Liverpool Street booking for a Seminar  on (21st Oct 2015) via our online platform",
                            "UnitAmount": "308.30",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "61.66",
                            "LineAmount": "308.30",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "ea8b74a2-09da-42f2-b3df-2b47c52c6e7c"
                        }
                    },
                    "SubTotal": "308.30",
                    "TotalTax": "61.66",
                    "Total": "369.96",
                    "UpdatedDateUTC": "2016-03-04T10:32:11.007",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "6baf1370-3878-4f0c-9bb5-267c1157245b",
                    "InvoiceNumber": "INV-0094",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Holly Taylor's \u00a381 Jenius Social  booking for a Supper Club on (31st Oct 2015) via our online platform",
                            "UnitAmount": "81.50",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "16.30",
                            "LineAmount": "81.50",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6a5c955f-e6e9-49bc-9bf1-336831f94aac"
                        }
                    },
                    "SubTotal": "81.50",
                    "TotalTax": "16.30",
                    "Total": "97.80",
                    "UpdatedDateUTC": "2016-03-04T10:32:36.123",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "5ed60905-71ff-4011-a861-3ed02d42c830",
                    "InvoiceNumber": "INV-0092",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 9% on Test Jones 's \u00a395 Rocket City booking for a Work Reunion Dinner on (23rd Oct 2015) as arranged by Hire Space Venue Expert Jake",
                            "UnitAmount": "95.80",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "19.16",
                            "LineAmount": "95.80",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "75cca0a6-9498-4542-8a67-45e327cc6065"
                        }
                    },
                    "SubTotal": "95.80",
                    "TotalTax": "19.16",
                    "Total": "114.96",
                    "UpdatedDateUTC": "2016-03-04T10:32:53.393",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "f479a8e5-387e-4884-8f0d-32aef1d48167",
                    "InvoiceNumber": "INV-0091",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 10% on Andrew Buurman's (Buurman) \u00a3878 Carousel booking for a 50th Birthday Party on (25th Sep 2015) via our online platform",
                                "UnitAmount": "878.60",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "175.72",
                                "LineAmount": "878.60",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "364ff400-3962-4428-a645-7dc3374a49db"
                            },
                            {
                                "Description": "Hire Space commission of 10% on Ned Hulton's (Hotmai) \u00a376 Carousel booking for a IT Network Event on (16th Sep 2015) via our online platform",
                                "UnitAmount": "76.80",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "15.36",
                                "LineAmount": "76.80",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "cd37880d-436b-4819-a43c-0ecf8d93fa08"
                            }
                        ]
                    },
                    "SubTotal": "955.40",
                    "TotalTax": "191.08",
                    "Total": "1146.48",
                    "UpdatedDateUTC": "2016-03-04T10:33:01.257",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "900ce421-2c2d-4d9e-8bbf-60ef519f71e0",
                    "InvoiceNumber": "INV-0090",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Victoria Slowikowska's (Accenture) \u00a3302 The Trafalgar booking for a Practice Community Update on (14th Oct 2015) as arranged by Hire Space Venue Expert Ruth",
                            "UnitAmount": "302.10",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.42",
                            "LineAmount": "302.10",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Venue Expert",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "6edc42fc-9b1e-44f7-bc7a-adefab063deb"
                        }
                    },
                    "SubTotal": "302.10",
                    "TotalTax": "60.42",
                    "Total": "362.52",
                    "UpdatedDateUTC": "2016-03-04T10:33:06.06",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "4c9a4699-ba7c-4f03-b1cb-f6c6223578b5",
                    "InvoiceNumber": "INV-0089",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": {
                            "Description": "Hire Space commission of 10% on Tom Carrington Smith's (The Eleven) \u00a3300 Studio Spaces E2 booking for a Networking Event on (21st Oct 2015) via our online platform",
                            "UnitAmount": "300.00",
                            "TaxType": "OUTPUT2",
                            "TaxAmount": "60.00",
                            "LineAmount": "300.00",
                            "AccountCode": "200",
                            "Tracking": {
                                "TrackingCategory": [
                                    {
                                        "Name": "CityRegion",
                                        "Option": "London",
                                        "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                    },
                                    {
                                        "Name": "ExpenseCategory",
                                        "Option": "Fast Track",
                                        "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                    }
                                ]
                            },
                            "Quantity": "1.0000",
                            "LineItemID": "adfb599c-6c9e-4f33-b091-c89196655cb9"
                        }
                    },
                    "SubTotal": "300.00",
                    "TotalTax": "60.00",
                    "Total": "360.00",
                    "UpdatedDateUTC": "2016-03-04T10:33:10.943",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "447b0ac8-5b6a-401d-9f9d-d7857021431e",
                    "InvoiceNumber": "INV-0088",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                },
                {
                    "Contact": {
                        "ContactID": "3d9aead6-03d2-461f-8bcd-c0e2a8f309ac",
                        "Name": "TEst"
                    },
                    "Date": "2016-03-03T00:00:00",
                    "DueDate": "2016-03-31T00:00:00",
                    "Status": "VOIDED",
                    "LineAmountTypes": "Exclusive",
                    "LineItems": {
                        "LineItem": [
                            {
                                "Description": "Hire Space commission of 9% on Nicolas Vojkovic's (Institut Fran\u00e7ais Du Royaume-Uni) \u00a329 The Gallery on the Corner booking for a Exhibition on (30th Oct 2015) via our online platform",
                                "UnitAmount": "29.25",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.85",
                                "LineAmount": "29.25",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "c378eec0-ab0b-4da2-8d97-a3dcaa9ba4cb"
                            },
                            {
                                "Description": "Hire Space commission of 9% on desiree's \u00a325 The Gallery on the Corner booking for a Fashion Line Launch on (17th Oct 2015) via our online platform",
                                "UnitAmount": "25.65",
                                "TaxType": "OUTPUT2",
                                "TaxAmount": "5.13",
                                "LineAmount": "25.65",
                                "AccountCode": "200",
                                "Tracking": {
                                    "TrackingCategory": [
                                        {
                                            "Name": "CityRegion",
                                            "Option": "London",
                                            "TrackingCategoryID": "fe2b6d3b-82ce-44fe-a82a-7d9cc08b8e0d"
                                        },
                                        {
                                            "Name": "ExpenseCategory",
                                            "Option": "Fast Track",
                                            "TrackingCategoryID": "0034381f-d070-486e-9d1e-e3e11c2b7a15"
                                        }
                                    ]
                                },
                                "Quantity": "1.0000",
                                "LineItemID": "0a897742-0307-4f5b-b904-d3437307930a"
                            }
                        ]
                    },
                    "SubTotal": "54.90",
                    "TotalTax": "10.98",
                    "Total": "65.88",
                    "UpdatedDateUTC": "2016-03-04T10:33:14.967",
                    "CurrencyCode": "GBP",
                    "Type": "ACCREC",
                    "InvoiceID": "2be5a714-0c3a-4a33-a879-9e76a896640b",
                    "InvoiceNumber": "INV-0087",
                    "Reference": "Hire Space due in March",
                    "AmountDue": "0.00",
                    "AmountPaid": "0.00",
                    "AmountCredited": "0.00",
                    "CurrencyRate": "1.000000",
                    "HasAttachments": "false"
                }
            ]
        }
    }
};