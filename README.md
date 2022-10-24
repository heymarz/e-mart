# E-Mart API

## Overview

Hello, this is an API of an electronic store with users of buyers and sellers. The website displays various items from all sellers and can be searched and filtered by the buyer. This application will be using a react front end and rails as a backend. You will find instructions below on how I had launched this project.

In order to start our front end with yarn, we have to navigate to the folder called "my-app" by typing the following in another terminal:

     $ cd my-app && yarn start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In order to start our backend with rails, open another terminal and input:

    $ bundle install && npm install
    $ rails 
    $ db:migrate db:seed
    $ rails s

This will run the rails server on port [http://localhost:4000](http://localhost:4000).

## Features List

- Home page

- Log in/out

- Create a new account

- Sends a welcome email with the creatation of a new account

- Create a new sale item

- Update a sale item

- Delete a sale item

- User can search for sale item through the search bar

- User can follow items by clicking on the favorite button

- User can see their own sale item and the items that they are following


## MVP

1. Sign up for an account

2. Log in/out of site

3. Create a new item to sell

4. List a single item on sale and link to the 

5. Modify and delete a review that was posted

6. Search bar 

7. User can see order history

8. User verification email

9. Welcome email to new account holders

## Stretch Goals

10. Chat box


## Models and Relationships

I had set up my models' relationship like this: 

``` Seller -< ForSaleItem >- Buyer ```

``` Buyer -< FavoritedItem ```

``` ForSaleItem >- Category ```


### Deploying

I had deployed my API to Heroku. 

### Resources

https://youtu.be/YOAeBSCkArA

https://firebase.google.com/docs?authuser=0&hl=en

https://medium.com/@lushiyun/using-aliasing-associations-for-intuitive-development-reflections-from-a-rails-project-faea6c66f9af

https://www.freecodecamp.org/news/mailto-link-how-to-make-an-html-email-link-example-code/

https://medium.com/@corypavitt/send-welcome-email-to-users-using-ruby-on-rails-back-end-5a0f9f8f136c

https://hixonrails.com/ruby-on-rails-tutorials/ruby-on-rails-action-mailer-configuration/

https://youtu.be/ngVvDegsAW8

https://shaqqour.medium.com/how-to-create-a-model-with-two-foreign-keys-references-from-the-same-table-in-rails-1d0ebc744544
