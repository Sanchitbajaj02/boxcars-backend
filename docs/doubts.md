## Questions

1. What fields are required for the vehicle storing system?
2. What are the fields I need to take to create the authentication system?
3. Are there any authentication screens or should I create on my own?
4. Do I have to deploy both the frontend and backend separately? Can't I use Nextjs server actions and api system for backend since it is a very small project
5. Is there also a need for a catalogue screen and system where users can see all the vehicle data?
6. Is there a need to create a buyer/seller system where different users can visit, purchase and put their vehicle on display

## Answers

Vehicle Fields – Include standard vehicle details such as make, model, year, price, mileage, fuel type, transmission, and images.

Authentication – Keep it simple: name, email, and password will suffice.

Auth Screens – If not included in the Figma, feel free to create minimal login and registration screens.

Architecture – Please use a separate Node.js + Express backend. Even if you are using Next.js for the frontend, do not use Next.js API routes. We are evaluating the backend as a standalone component.

Vehicle Catalogue – You may include a catalogue page to browse all vehicles, ideally with basic filtering options. There is no need to focus on layout or UI—prioritize functionality. (optional but good to have if you have sufficient time)

User Roles – There is no need to implement a buyer/seller system. You can assume a dealership context, where vehicles are displayed by an admin and inquiries are made by users.
