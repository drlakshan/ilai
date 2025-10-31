I want to develop this entirely using Google services why? Scalability, ease of adding functionality, use of Google drive to save the files and search ability and cloud nature


Other option is to create in other programming languages and get the functionality as and when necessary. 
Say for example I want to create video conferencing, I can send the form, approve it, do the consultation through hangouts , however please note that appointment systems can be easily done in Drupal too and other video platforms become open when you have an independent platform


So the features and road map would be


1. Ability to prescribe
this is the very basic requirement . I just want to make sure I prescribe legibly
Now there are set templates
I am developing the conditional prescribing
UPDATE: I have individual and batch prescribing available as a menu 

2. Collect patient details
May be useful to follow up


3. Send prescriptions via email
some patients like to have prescriptions and their multimedia sent to them. This can be easily achieved that way


4. Have an appointment system for video conferencing
this is in the working especially useful for patients living out of the country. I can send a link to book an appointment and then charge online


5. Surgery pending list 

6. Short messages and whatsapp information

7. Medical certificate issuance
8. Admission note
9. Investigation check list
10. Admission for surgery
11. Post op care sheet
12. Video links
- how to put ear drops
- how to put nose drops
- how to do home balance exercises
- how to ear plug
- akrams education leaflets


UPDATE 20th June 2023
There will be an issue in the future where data rows exceeds 40000 and then even if I duplicate the sheets there will be issues like synchronisation and performance. There are at-least two ways out.

1. develop a system completely on a platform like gnu health
2. create an external database and use google sheets as the front end


I think the second option can be done with the help of an assistant. 

UPDATE 21st June 2023

What I think is this is NOT a fully fledged PMS, was never intended to be, this is a fun project to add value to my practice and create legible prescriptions and also to make sure patients gets an email of prescription (may be an SMS in the future) for easy retrieval. If there will be any functional issues, I can duplicate the entire sheets again and do it again. It will have issues of synchronisations etc but not a big deal. Dr Wasantha Perera has gone through the entire round and now using a simple solution it seems.


UPDATE 22 June 2023

today I started the google business plan. now need to start the migration process with improvements. typing this away at the cafe at Nawam Mawatha enjoying an Americano!

1. Set up the account properly with correct details
2. Set up the google sheet as the database are there any alternatives?
3. Set up the google form to collect details
4. Patient update script 
5. Other scripts to create the prescription, email etc
6. Set up an assets library for sharing
7. make sure the printing happens correctly
8. use it with monthly revisions


2nd JULY

this is a major update! I am using Appsheet to access the data from the phone with all the contact-ability built right in to it! So I am so keen to have the data pristine. 


8th JULY


tables

1. resources
2. prescriptions : what ever is getting created can be stored here linked to the patient ID ( firstName-lastName-DD-MM-YYYY)
3. Patient Database
4. useful documents
	1. medical certificate
	2. admission note
	3. adhoc prescription
5. drugs
6. dosages
7. routes
8. frequency
9. referrals
10. list of investigations
11. templates
12. 



[[11 July 2023 Arogya Feature Thoughts]]

[[Things to do upon return to colombo]]
[[New features Came to my mind on 9th August previous episode summary ]]

01 September

Working on a prescriber sheet. I hope to achieve two things with this.
1. constant authorisation issue will be avoided
2. when updating scripts it can be universally applied

major roadblock noted is that when I use the older method, i can see the last episode in detail including the clinical features and the prescription where I update the status and prescription with couple of key strokes. Prescriber does not have that feature. It may be circumvented in two ways

1. trying to incorporate last episode details in a sheet or on the same page to see on the prescriber
2. create a different workflow where I see the clinic book and assess the details before I use the prescriber

04 September

Updated.
Now, when the clinic book URL is pasted, I can see the demographics, last episode clinical features, last prescription populating the prescription area, list of past episodes and when I do the prescribing it will update the portal sheet and create a dated episode. NICE!

now, I have circumvented the need to reauthorise and can do the update to the prescriber that will be universally applied to all the patients. 

Important consideration
AT NO INSTANCE I SHOULD CONSIDER CHANGING THE CELL LAYOUT ETC BECAUSE IT WILL MESS UP WITH THE SCRIPTS. SO BE CAREFUL.

19th October 2023

I think we need to address a further update

1. font compatibility
2. formatted past episodes
3. ability to send the QR coded URL from a mobile device
4. protect database introduce redundancy, think of version control backup etc
5. update the consultant's column
6. patient forum and snippets of education to be sent
7. plan out additional functionality like patient evaluation forms



#arogya 


[[new functionalities for the next version of Arogya 2023 December ]]