# E-Mart API

## Overview

Hello, this is an API of an electronic store with users of buyers and sellers. The website displays various items from all sellers and can be searched and filtered by the buyer. This application will be using a react front end and rails as a backend. You will find instructions below on how I had launched this project.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to start our backend with rails, run:

### `rails s`

This will run the rails server on port [http://localhost:4000](http://localhost:4000).

## Features List

- Home page

- Log in/out

- Create a new account

- Create a new sale item

- Update a sale item

- Delete a sale item

- User can search for sale item through the search bar

- User can see the purchase of a sale item in order history

- User can create reviews for a sale item

- User can update or delete their review of sale item


## MVP

1. Sign up for an account

2. Log in/out of site

3. Create a new item to sell

4. List a single item on sale and their associated reviews

5. Modify and delete a review that was posted

6. Search bar 

7. User can see order history

8. User verification email

9. Welcome email to new account holders

## Stretch Goals

10. Chat box


## Models and Relationships

I had set up my models' relationship like this: 

``` Seller -< Item >- Buyer ```

``` Buyer -< FavoritedItem ```

``` Item >- Category ```

``` Categories -< subcategories ```

### Deploying

I had deployed my API to AWS. 

### Resources

