# FE21-CR3-MichaelR

For this CodeReview, the following criteria were graded:
- Create a GitHub Repository named: FE21-CR3-YourName. Push the files into it and send the link through the learning management system (lms). Add a collaborator and make set your repository to private. See an example of a GitHub link below:
https://github.com/JohnDoe/repositoryname.git
- Correct usage of the HTML structure (proper order of HTML elements).
- Correct code structure (aka code indentation) for the HTML and Javascript code.
- Clear separation of CSS, JavaScript and images in distinct folders: css, js, img (access through relative paths).
- Correct CSS layout according to the provided design. There should be a header, a restaurant image (hero image), 4 subsections (starters, main dishes, desserts and beverages) and a footer. Feel free to improve and expand the design. Each dish must display a name, description and price, beverages only need to display their name and price. 
- The page must be responsive, i.e. the proportions should be similar on all screens. Use responsive measurements (no pixels)
- The subsections should be 4 in a row on larger screens, 2 in a row on medium screens and 1 in a row on small/extra small screens. You are free to use either Bootstrap or implement Media Queries/FlexGrid/FlexBox to achieve this. 

- Create the function calculateInvoice in Javascript that returns the invoice for one customer (how much they spent). The parameters of the function should be starterPrice, maindishPrice, dessertPrice and beveragePrice. The function will return the sum of these four parameters.
- Use the prices on your menu to create four variables that you will pass to the function calculateInvoice as arguments. Print the result on the console. 
- Create at least 3 different combinations of different dishes on your menu to calculate the invoice and print it on the console.

**Bonus Points:**
- Create a function studentInvoice that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice. This discount applies to the dishes but NOT the beverages. Print 3 examples of studentInvoice on the console.
- Create a review subpage where the user can view customer reviews of the restaurant. The design should compliment the index page. This page must be accessible from the index page (e.g through the navbar or footer)


